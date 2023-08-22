import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { Auth0Provider } from "@auth0/auth0-react";


const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Auth0Provider
    domain="dev-wijod4knwiv6s7yf.us.auth0.com"
    clientId="aU3obHiwLuXvoH5pmYCVwDkacJhdo1Vr"
    redirectUri={window.location.origin}
  >
    <App />
  </Auth0Provider>
);
