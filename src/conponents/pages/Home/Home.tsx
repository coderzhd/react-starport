import React, { memo, useContext, useState } from "react";
import type { FC, ReactNode } from "react";
import { Link, NavLink } from "react-router-dom";
import FlowProxy from "../../startport/FlowProxy";
import { HomeContainerWraper } from "./style";
import Condition from "@/contexts/condition";

interface IProps {
  children?: ReactNode;
}

const Home: FC<IProps> = () => {
  const { size, setSize } = useContext(Condition);
  return (
    <HomeContainerWraper>
      <div className="logo">
        <img src={require("@/assets/img/logo.png")} alt="" />
      </div>
      <div className="scribe">
        <p>Shared component across routes with animations</p>
      </div>
      <div className="btn-container">
        <button className="btn">
          <NavLink to="/foo" className={`text-light-50 text-xl`}>
            Transfer List
          </NavLink>
        </button>
        <button
          className="btn"
          onClick={() => {
            setSize(!size);
          }}
        >
          <span className={`text-light-50 text-xl`}>Toggle Size</span>
        </button>
      </div>
      <div className="content">
        {["1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12"].map(
          (item) => (
            <FlowProxy
              key={item}
              port={item}
              className={
                size ? "item w-15rem h-10rem m-2" : "item w-15rem h-12rem"
              }
            />
          )
        )}
      </div>
    </HomeContainerWraper>
  );
};

export default memo(Home);
