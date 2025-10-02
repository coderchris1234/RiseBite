import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { BrowserRouter } from "react-router-dom";
import { AuthProvider } from "./Context/AuthContext.jsx";
import { AddtocartProvider } from "./Context/Addtocart.jsx"; // adjust path

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
    <AuthProvider>
      <AddtocartProvider>
        <App />
      </AddtocartProvider>
    </AuthProvider>
    </BrowserRouter>
  </StrictMode>
);
