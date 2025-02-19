import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { BrowserRouter } from "react-router-dom";
import AdminContextPorvider from "./context/AdminContext.jsx";
import ProContext from "./context/ProContext.jsx";
import AppContextPorvider  from "./context/AppContext.jsx";

createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <AdminContextPorvider>
      <ProContext>
        <AppContextPorvider>
          <App />
        </AppContextPorvider>
      </ProContext>
    </AdminContextPorvider>
  </BrowserRouter>
);
