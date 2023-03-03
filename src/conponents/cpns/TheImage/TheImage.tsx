import React, { memo, useState } from "react";
import type { FC, ReactNode } from "react";
import { TheImageWraper } from "./style";

interface IProps {
  children?: ReactNode;
  style?: any;
  src?: string;
}
const TheImage: FC<IProps> = (props) => {
  const [count, setCount] = useState(0);

  return (
    <TheImageWraper>
      <img className={"img"} src={props.src} />
      <span
        className="absolute bottom-0 left-1/2 text-white cursor-pointer text-xl"
        onClick={(e) => {
          e.stopPropagation();
          setCount(count + 1);
        }}
      >
        {count}
      </span>
    </TheImageWraper>
  );
};

export default memo(TheImage);
