import { configureStore } from "@reduxjs/toolkit";
import {
  TypedUseSelectorHook,
  useSelector,
  useDispatch,
  shallowEqual,
} from "react-redux";

import startPortReducer from "./startport";

const store = configureStore({
  reducer: {
    startport: startPortReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});

// 对useSeletor进行类型约束，使得传入useSelector的state能够自动判断类型

// 获取store.getState函数的类型
type GetStateFnType = typeof store.getState;
// 获取store.getState函数的返回值的类型，即为state的类型
export type IRootState = ReturnType<GetStateFnType>;

// 使用react-redux的TypedUseSelectorHook<state的类型>对useAppSeletor进行类型约束，
// useAppSeletor与useSelector功能一致，但是会自动获取state的类型，方便进行编码提示和错误检测
export const useAppSeletor: TypedUseSelectorHook<IRootState> = useSelector;

type DispatchType = typeof store.dispatch;
export const useAppDispatch: () => DispatchType = useDispatch;

export const shallowEqualApp = shallowEqual;

export default store;
