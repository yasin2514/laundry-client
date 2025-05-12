import { StrictMode } from "react";
import "./index.css";
import { router } from "./Routes/Routes.jsx";
import * as ReactDOM from "react-dom/client";
import { RouterProvider } from "react-router-dom";

ReactDOM.createRoot(document.getElementById("root")).render(
    <RouterProvider router={router} />
  // <React.StrictMode>
  // </React.StrictMode>
);
