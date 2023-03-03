import React, { memo, useContext } from "react";
import type { FC, ReactNode } from "react";
import { NavWraper } from "./style";
import logo from "@/assets/img/favicon.svg";
import Condition from "@/contexts/condition";

interface IProps {
  children?: ReactNode;
}
const debugUrl = require("../../../assets/img/debug.png");
const githubUrl = require("../../../assets/img/github.png");
const sunUrl = require("../../../assets/img/sun.png");
const Nav: FC<IProps> = () => {
  const { mode, setMode, debug, setDebug } = useContext(Condition);
  return (
    <NavWraper>
      <div className="nav-left">
        <img className="logo" src={logo} alt="logo" />
        <div>
          React
          <br />
          StarPort
        </div>
      </div>
      <div className="nav-right">
        <button
          className="item"
          onClick={() => {
            setDebug(!debug);
          }}
          style={debug ? { backgroundColor: mode ? "#241a1a" : "#fff5f5" } : {}}
        >
          <img src={debugUrl} alt="" />
        </button>
        <button className="item">
          <img src={githubUrl} alt="" />
        </button>
        <button
          className="item"
          onClick={() => {
            setMode(1 - mode);
          }}
        >
          <img src={sunUrl} alt="" />
        </button>
      </div>
    </NavWraper>
  );
};

export default memo(Nav);
