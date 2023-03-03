import React, {
  useContext,
  createContext,
  useState,
  ReactElement,
} from "react";
import ReactDOM from "react-dom";

export const AliveScopeContext = createContext<any>({});

// 需要缓存的children会缓存在AliveScope组件中，所以它不能被卸载
export const AliveScope = (props: any) => {
  // nodes用来存储keepalive组件中的id与其children
  const [nodes, setNodes] = useState<any>({});
  // 此children是AliveScope的children
  const { children } = props;

  const getPortalElement = (id: any, children: ReactElement) => {
    if (!nodes[id]) {
      // 传送children到element
      const element = document.createElement("div");
      element.style.width = "100%";
      element.style.height = "100%";
      // 存储KeepAlive中的id与children对应关系，用于在AliveScope中渲染
      setNodes((prevNodes: any) => ({
        ...prevNodes,
        [id]: { children, element },
      }));
      // 返还给KeepAlive渲染好的子组件
      return element;
    }
    return nodes[id].element;
  };

  return (
    <AliveScopeContext.Provider value={{ getPortalElement }}>
      {children}
      {/* 这里React对KeepAlive组件的children进行渲染 ，渲染完成后会被appendChild移动至其真实需要渲染的位置*/}
      {Object.entries<any>(nodes).map(([id, { children, element }]) => (
        <React.Fragment key={id}>
          {ReactDOM.createPortal(children, element)}
        </React.Fragment>
      ))}
    </AliveScopeContext.Provider>
  );
};
