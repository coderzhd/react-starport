import React, { memo, useContext, useEffect, useRef, useState } from "react";
import type { FC } from "react";
import { createPortal } from "react-dom";
import { FlowContainerWraper } from "./FlowContainerStyle";
import { StarportContext } from "./StartPort";
import KeepAlive from "../KeepAlive/KeepAlive";
import { useLocation } from "react-router-dom";

let timer = {} as any;
const FlowContainer: FC<any> = (props: any) => {
  const location = useLocation();
  const { metaData, proxyElArr, setLandedMap } = useContext(StarportContext);

  const divRef = useRef<HTMLDivElement>(null);
  // 初始化为false
  const [landed, setLanded] = useState(false);
  useEffect(() => {
    // 注册setLanded函数
    setLandedMap((pre: any) => ({ ...pre, [props.port]: setLanded }));
  }, []);

  const update = async () => {
    // FlowContainer开始占据Proxy的位置，此时刚开始起飞
    setLanded(false);
    if (divRef.current) {
      const style = divRef.current.style;
      const rect = proxyElArr[props.port]?.current?.getBoundingClientRect?.();
      if (rect) {
        const scrollTop =
          document.body.scrollTop || document.documentElement.scrollTop;
        const scrollLeft =
          document.body.scrollLeft || document.documentElement.scrollLeft;
        style.top = rect?.top + scrollTop + "px";
        style.left = rect?.left + scrollLeft + "px";
        style.opacity = "1";
        style.transform = "none";
        console.log(rect?.top);
        console.log(scrollTop);
      } else {
        // 完全透明
        style.opacity = "0";
        // 子组件落地后FlowContainer会覆盖住子组件，因此需要使flowcontainer的pointerEvents不会干扰到子组件。
        style.transform = "none";
        style.pointerEvents = "none";
      }
    }
    // 重新执行container时要先清除之前设置的Timeout，以免上次的Timeout继续执行导致混乱。
    clearTimeout(timer[props.port]);
    timer[props.port] = setTimeout(() => {
      // setLanded是异步的，打印出的值是上次渲染后的,将会导致landed渲染完后依然是false
      setLanded(true);
    }, 900);
  };

  useEffect(() => {
    update();
    // eslint-disable-next-line react-hooks/exhaustive-deps
    // location.pathname用来路由改变时重新进行update
  }, [location.pathname, metaData]);

  return (
    <FlowContainerWraper
      {...metaData[props.port]}
      style={{ ...metaData[props.port]?.style, margin: 0 }}
      ref={divRef}
    >
      {/* 在落地之后再执行createPortal，先判断是否已经落地 */}
      {metaData[props.port] &&
        (landed && proxyElArr[props.port]?.current ? (
          createPortal(
            <KeepAlive id={props.port}>{props.slot}</KeepAlive>,
            proxyElArr[props.port]?.current
          )
        ) : (
          <KeepAlive id={props.port}>{props.slot}</KeepAlive>
        ))}
      {/* {props.slot} */}
      {/* <TheImage /> */}
    </FlowContainerWraper>
  );
};

export default memo(FlowContainer);
