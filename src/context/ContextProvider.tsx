import { createContext, useContext, useState } from "react";

interface AppContextInterface {
   activeMenu: boolean;
   setActiveMenu: React.Dispatch<React.SetStateAction<boolean>>;
}
const StateContext = createContext({} as AppContextInterface);
export default function useStateContext() {
   return useContext(StateContext);
}

const initialState = {
   chat: false,
   cart: false,
   userProfile: false,
   notification: false,
};

interface Props {
   children: React.ReactNode;
}

export const ContextProvider = ({ children }: Props) => {
   const [activeMenu, setActiveMenu] = useState<boolean>(true);

   const value = {
      activeMenu,
      setActiveMenu,
   };
   return (
      <StateContext.Provider value={value}>{children}</StateContext.Provider>
   );
};
