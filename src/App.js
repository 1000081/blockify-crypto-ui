import React from "react";
import Routes from "./Routes";
import "./App.css";
import CoinContextProvider from "./containers/contexts/CoinContext";

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
