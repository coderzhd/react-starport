import React, { memo, useContext, useEffect, useLayoutEffect } from "react";
import type { FC } from "react";
import { StarportContext } from "./StartPort";
import theme from "@/assets/css/theme";
import Condition from "@/contexts/condition";

const FlowProxy: FC<any> = (props: any) => {
  const { mode, debug } = useContext(Condition);
  // const { metaData } = useAppSeletor((state) => ({
  //   metaData: state.startport.metaData
  // }))

  const ref = React.useRef<HTMLDivElement>(null);
  // 将用户传入的style等属性暂存在metadata中，将整个ref传给proxyElArr
  const { setMetaData, setProxyElArr, landedMap } = useContext(StarportContext);
  const update = () => {
    // 方法返回一个DOMRect 对象，其提供了元素的大小及其相对于视口的位置。
    const { width, height } = ref.current?.getBoundingClientRect() as any;
    const style = {
      height,
      width,
    };
    setMetaData((pre: any) => ({
      ...pre,
      // 将所有属性交给metaData
      [props.port]: {
        ...props,
        style,
      },
    }));
  };
  useEffect(() => {
    // 每次props发生变化时，重新起飞
    landedMap[props.port] && landedMap[props.port](false);
    update();
    // window.addEventListener("resize", update);
    setProxyElArr((pre: any) => ({ ...pre, [props.port]: ref }));
    return () => {
      // 路由改变后将卸载proxy，组件应重新起飞，也就是挂载到FlowContainer上
      // 1、为什么在这里设置landed为false?
      // 答：useEffect中的返回函数，是组件被卸载时将被执行。proxy被卸载的时候正好是子组件起飞的时候。
      // 2、为什么不在FlowContainer中的useEffect()中设置landed=false?
      // 答：useEffect()的执行是在渲染操作之后，会使得第一次渲染时landed为true,使得createPortal被执行，从而产生跳变
      // 更详细解释：useEffect 的回调函数是【异步宏任务】，在下一轮事件循环才会执行，
      // 根据 JS 线程与 GUI 渲染线程互斥原则，在 JS 中页面的渲染线程需要当前事件循环的宏任务与微任务都执行完，
      // 才会执行渲染线程，渲染页面后，退出渲染线程，控制权交给 JS 线程，再执行下一轮事件循环。
      // 因此会产生二次渲染的问题
      setProxyElArr((pre: any) => ({ ...pre, [props.port]: null }));
      // window.removeEventListener("resize", update);
    };
  }, [props]);

  // 解决页面闪烁问题
  useLayoutEffect(() => {
    return () => {
      landedMap[props.port] && landedMap[props.port](false);
      // 为什么不把setProxyElArr((pre: any) => ({ ...pre, [props.port]: null }));放在这里？
      // 会覆盖之前设置过的setProxyElArr
    };
  });
  return (
    <div
      style={{
        backgroundColor: debug ? theme[mode].color.proxyColor : "",
      }}
      ref={ref}
      {...props}
    ></div>
  );
};

export default memo(FlowProxy);
