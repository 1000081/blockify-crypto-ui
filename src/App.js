import React from "react";
import Routes from "./Routes";
import "./App.css";
import CoinContextProvider from "./containers/contexts/CoinContext";
import "@fortawesome/fontawesome-free/css/all.min.css";
import "bootstrap-css-only/css/bootstrap.min.css";
import "mdbreact/dist/css/mdb.css";

function App() {
  return (
    <div>
      <CoinContextProvider>
        <Routes />
      </CoinContextProvider>
    </div>
  );
}

export default App;
