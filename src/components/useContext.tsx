import { createContext } from "react";

const ContextData = createContext({
  data: null,
  setData: (newData: any) => {}, 
});

export default ContextData;
