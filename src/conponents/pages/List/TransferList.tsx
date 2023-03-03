import React, { memo, useState } from "react";
import type { FC, ReactNode } from "react";
import { TransferListWraper } from "./style";
import FlowProxy from "@/conponents/startport/FlowProxy";
import { NavLink } from "react-router-dom";

interface IProps {
  children?: ReactNode;
}
// 注：不能使用style-component进行页面内的动画跳转，会有问题
const TransferList: FC<IProps> = () => {
  const [listA, setListA] = useState(["1", "2", "3", "7", "8", "9"]);
  const [listB, setListB] = useState(["4", "5", "6", "10", "11", "12"]);
  return (
    <TransferListWraper>
      <div className="btn-container">
        <button className="btn">
          <NavLink to="/" className={`text-light-50 text-xl`}>
            Back
          </NavLink>
        </button>
      </div>
      <div className={`flex m-0 m-auto w-1/2 justify-between`}>
        <div className={`w-2/5`}>
          <div className={`text-center m-4`}>
            <span className={`text-2xl spanWraper`}>List A</span>
          </div>

          {listA.map((item) => (
            <FlowProxy
              onClick={() => {
                setListA(listA.filter((i) => i !== item));
                let list: React.SetStateAction<string[]> = [];
                for (
                  let i = 0;
                  i < Math.floor(Math.random() * listB.length);
                  i++
                ) {
                  list.push(listB[i]);
                }
                list.push(item);
                for (let i = list.length - 1; i < listB.length; i++) {
                  list.push(listB[i]);
                }
                setListB(list);
              }}
              // 这里使用style-component或者style就会报错就会报错
              className={`rounded-4xl overflow-hidden h-12rem`}
              key={item}
              port={item}
            />
          ))}
        </div>
        <div className={`w-2/5`}>
          <div className={`text-center m-4`}>
            <span className={`text-2xl spanWraper`}>List B</span>
          </div>
          {listB.map((item) => (
            <FlowProxy
              onClick={() => {
                setListB(listB.filter((i) => i !== item));
                let list: React.SetStateAction<string[]> = [];
                for (
                  let i = 0;
                  i < Math.floor(Math.random() * listA.length);
                  i++
                ) {
                  list.push(listA[i]);
                }
                list.push(item);
                for (let i = list.length - 1; i < listA.length; i++) {
                  list.push(listA[i]);
                }
                setListA(list);
              }}
              key={item}
              port={item}
              className={`h-14rem`}
            />
          ))}
        </div>
      </div>
    </TransferListWraper>
  );
};

export default memo(TransferList);
