import { createContext, useContext, useState } from "react";

interface AppContextInterface {
   activeMenu: boolean;
   setActiveMenu: React.Dispatch<React.SetStateAction<boolean>>;
   isClicked: isClickedModel;
   setIsClicked: React.Dispatch<React.SetStateAction<isClickedModel>>;
   handleClick: (clicked: string) => void;
   screenSize: number | undefined;
   setScreenSize: React.Dispatch<React.SetStateAction<number | undefined>>;
   initialState: isClickedModel;
   currentMode: string;
   setMode: (e: any) => void;
   currentColor: string;
   setColor: (e: any) => void;
   themeSettings: boolean;
   setThemeSettings: React.Dispatch<React.SetStateAction<boolean>>;
}
const StateContext = createContext({} as AppContextInterface);
export function useStateContext() {
   return useContext(StateContext);
}

const initialState: isClickedModel = {
   chat: false,
   cart: false,
   userProfile: false,
   notification: false,
};

interface isClickedModel {
   chat: boolean;
   cart: boolean;
   userProfile: boolean;
   notification: boolean;
}

interface Props {
   children: React.ReactNode;
}

export const ContextProvider = ({ children }: Props) => {
   const [activeMenu, setActiveMenu] = useState<boolean>(true);
   const [isClicked, setIsClicked] = useState<isClickedModel>(initialState);
   const [screenSize, setScreenSize] = useState<number | undefined>(undefined);
   const [currentMode, setCurrentMode] = useState<string>("Light");
   const [currentColor, setCurrentColor] = useState<string>("#03C9D7");
   const [themeSettings, setThemeSettings] = useState<boolean>(false);

   const setMode = (e: any) => {
      setCurrentMode(e.target.value);
      localStorage.setItem("themeMode", e.target.value);
      setThemeSettings(false);
   };
   const setColor = (color: string) => {
      setCurrentColor(color);
      localStorage.setItem("themeColor", color);
      setThemeSettings(false);
   };

   const handleClick = (clicked: string) => {
      setIsClicked({ ...initialState, [clicked]: true });
   };

   const value: AppContextInterface = {
      activeMenu,
      setActiveMenu,
      isClicked,
      setIsClicked,
      handleClick,
      screenSize,
      setScreenSize,
      initialState,
      currentMode,
      setMode,
      currentColor,
      setColor,
      themeSettings,
      setThemeSettings,
   };
   return (
      <StateContext.Provider value={value}>{children}</StateContext.Provider>
   );
};
