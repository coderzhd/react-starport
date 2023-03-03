import React, { useRef, useEffect, useContext } from "react";

import { AliveScopeContext } from "./AliveScope";

const KeepAlive = (props: any) => {
  const { id, children } = props;
  const { getPortalElement } = useContext(AliveScopeContext);
  const keepAliveRef = useRef<HTMLDivElement>(null);
  const appendPortalElement = () => {
    console.log(getPortalElement);
    // 通过getPortalElement函数将KeepAlive中的(id, children)信息传递给父组件AliveScope进行渲染
    // AliveScope返回给子组件已经渲染好的子组件的element
    // 根据id获取到缓存的element，通过appendChild添加到div中
    const portalElement = getPortalElement(id, children);
    keepAliveRef.current!.appendChild(portalElement);
  };
  useEffect(() => {
    appendPortalElement();
  }, []);

  return <div style={{ width: "100%", height: "100%" }} ref={keepAliveRef} />;
};

export default KeepAlive;
