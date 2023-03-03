import { createSlice } from "@reduxjs/toolkit";

interface IState {
  metaData: any;
  proxyElArr: any;
}

const initialState: IState = {
  metaData: {},
  proxyElArr: {},
};

const startPortSlice = createSlice({
  name: "startport",
  initialState,
  reducers: {
    changeMetaDataAction(state, { payload }) {
      state.metaData = payload;
    },
    changeProxyElArrAction(state, { payload }) {
      const newItem = payload;
      state.proxyElArr = newItem;
    },
  },
});

export const { changeMetaDataAction, changeProxyElArrAction } =
  startPortSlice.actions;

export default startPortSlice.reducer;
