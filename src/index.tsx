import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { registerLicense } from "@syncfusion/ej2-base";
import { ContextProvider } from "./context/ContextProvider";

// Registering Syncfusion license key
registerLicense(process.env.REACT_APP_SYNCFUSION_KEY!);

const root = ReactDOM.createRoot(
   document.getElementById("root") as HTMLElement
);
root.render(
   <React.StrictMode>
      <ContextProvider>
         <App />
      </ContextProvider>
   </React.StrictMode>
);
