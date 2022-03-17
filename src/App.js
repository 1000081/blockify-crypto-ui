import React from "react";
import Routes from "./Routes";
import "./App.css";
import { CoinContextProvider } from "./containers/contexts/CoinContext";
import "@fortawesome/fontawesome-free/css/all.min.css";
import "bootstrap-css-only/css/bootstrap.min.css";
import "mdbreact/dist/css/mdb.css";

import { AuthProvider } from "./containers/contexts/AuthContext";

function App() {
  return (
    <div>
      <AuthProvider>
        <CoinContextProvider>
          <Routes />
        </CoinContextProvider>
      </AuthProvider>
    </div>
  );
}

export default App;
