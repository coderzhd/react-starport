import React, { useState } from "react";
import { useRoutes } from "react-router-dom";
import { ThemeProvider } from "styled-components";

import Nav from "./conponents/cpns/Nav";
import TheImage from "./conponents/cpns/TheImage/TheImage";
import FlowContainer from "./conponents/startport/FlowContainer";
import StartPort from "./conponents/startport/StartPort";
import routes from "./router/index";
import theme from "./assets/css/theme";
import Condition from "@/contexts/condition";
import "./virtual:windi.css";

const imgs = [
  "https://images.unsplash.com/photo-1618125214135-83ced9805c7b?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=512&ixid=MnwxfDB8MXxyYW5kb218MHw5NDczNDU2Nnx8fHx8fHwxNjQ4OTMyNDcw&ixlib=rb-1.2.1&q=80&w=512",
  "https://images.unsplash.com/photo-1620315808304-66597517f188?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=512&ixid=MnwxfDB8MXxyYW5kb218MHw5NDczNDU2Nnx8fHx8fHwxNjQ4OTMyNTE4&ixlib=rb-1.2.1&q=80&w=512",
  "https://images.unsplash.com/photo-1615247644823-a5f0d3b5f795?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=512&ixid=MnwxfDB8MXxyYW5kb218MHw5NDczNDU2Nnx8fHx8fHwxNjQ4OTMyNTMy&ixlib=rb-1.2.1&q=80&w=512",
  "https://images.unsplash.com/photo-1547499681-28dece7dba00?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=512&ixid=MnwxfDB8MXxyYW5kb218MHw5NDczNDU2Nnx8fHx8fHwxNjQ4OTkwMjQx&ixlib=rb-1.2.1&q=80&w=512",
  "https://images.unsplash.com/photo-1620460700571-320445215efb?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=512&ixid=MnwxfDB8MXxyYW5kb218MHw5NDczNDU2Nnx8fHx8fHwxNjQ4OTkwMjQz&ixlib=rb-1.2.1&q=80&w=512",
  "https://images.unsplash.com/photo-1618035881605-dfe8d7eb387b?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=512&ixid=MnwxfDB8MXxyYW5kb218MHw5NDczNDU2Nnx8fHx8fHwxNjQ4OTMyNDk4&ixlib=rb-1.2.1&q=80&w=512",
  "https://images.unsplash.com/photo-1502189562704-87e622a34c85?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=512&ixid=MnwxfDB8MXxyYW5kb218MHw5NDczNDU2Nnx8fHx8fHwxNjQ4OTkwMjM5&ixlib=rb-1.2.1&q=80&w=512",
  "https://images.unsplash.com/photo-1621554808274-950d68a7038f?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=512&ixid=MnwxfDB8MXxyYW5kb218MHw5NDczNDU2Nnx8fHx8fHwxNjQ4OTkwMjgx&ixlib=rb-1.2.1&q=80&w=512",
  "https://images.unsplash.com/photo-1589558928675-a09badc3a9fd?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=512&ixid=MnwxfDB8MXxyYW5kb218MHw5NDczNDU2Nnx8fHx8fHwxNjQ4OTkwNTAy&ixlib=rb-1.2.1&q=80&w=512",
  "https://images.unsplash.com/photo-1511104286249-cade2ff54588?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=512&ixid=MnwxfDB8MXxyYW5kb218MHw5NDczNDU2Nnx8fHx8fHwxNjQ4OTkwNTAw&ixlib=rb-1.2.1&q=80&w=512",
  "https://images.unsplash.com/photo-1621161411321-19a54f5f1a1c?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=512&ixid=MnwxfDB8MXxyYW5kb218MHw5NDczNDU2Nnx8fHx8fHwxNjQ4OTkwNTA0&ixlib=rb-1.2.1&q=80&w=512",
  "https://images.unsplash.com/photo-1619075120156-f5729c752edf?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=512&ixid=MnwxfDB8MXxyYW5kb218MHw5NDczNDU2Nnx8fHx8fHwxNjQ5MDAyMTI4&ixlib=rb-1.2.1&q=80&w=512",
];

function App() {
  enum ThemeMode {
    Light,
    Dark,
  }
  const [size, setSize] = useState(false);
  const [mode, setMode] = useState<ThemeMode>(ThemeMode.Light);
  const [debug, setDebug] = useState(false);
  const ConditionContext = {
    size,
    setSize,
    mode,
    setMode,
    debug,
    setDebug,
  };
  return (
    <Condition.Provider value={ConditionContext}>
      <ThemeProvider theme={theme[mode]}>
        <StartPort>
          <div>
            <Nav />
            <div className="App">{useRoutes(routes)}</div>
          </div>

          {imgs.map((img, index) => {
            return (
              <FlowContainer
                key={index}
                slot={<TheImage src={img} />}
                port={index + 1 + ""}
              />
            );
          })}
        </StartPort>
      </ThemeProvider>
    </Condition.Provider>
  );
}

export default App;
