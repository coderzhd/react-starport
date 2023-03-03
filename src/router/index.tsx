import Home from "@/conponents/pages/Home/Home";
import TransferList from "@/conponents/pages/List/TransferList";
import React from "react";
import { RouteObject } from "react-router-dom";

const routes: RouteObject[] = [
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/foo",
    element: <TransferList />,
  },
];

export default routes;
