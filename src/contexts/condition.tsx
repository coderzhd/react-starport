import { createContext, Dispatch, SetStateAction } from "react";
import { EnumType } from "typescript";

interface ConditionContextProps {
  size: boolean;
  setSize: Dispatch<SetStateAction<boolean>>;
  mode: any;
  setMode: Dispatch<SetStateAction<any>>;
  debug: boolean;
  setDebug: Dispatch<SetStateAction<boolean>>;
}

export default createContext({} as ConditionContextProps);
