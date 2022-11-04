import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { registerLicense } from "@syncfusion/ej2-base";

// Registering Syncfusion license key
registerLicense(process.env.REACT_APP_SYNCFUSION_KEY as string);

const root = ReactDOM.createRoot(
   document.getElementById("root") as HTMLElement
);
root.render(
   <React.StrictMode>
      <App />
   </React.StrictMode>
);
