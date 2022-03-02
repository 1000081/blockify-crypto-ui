import React, { Fragment } from "react";
import { BrowserRouter, Route } from "react-router-dom";
import { Tables } from "./pages/Tables";
import { Hero404 } from "./pages/Hero404";
import { Profile } from "./pages/Profile";
import { Home } from "./containers/coin/Home";
import Login from "./containers/auth/Login";
import Register from "./containers/auth/Register";
import AddCoin from "./containers/coin/AddCoin";
import EditCoin from "./containers/coin/EditCoin";
import CoinDetails from "./containers/coin/CoinDetails";
import CoinNavbar from "./components/CoinNavbar";
import Footer from "./components/Footer";

const Routes = () => {
  return (
    <Fragment>
      <BrowserRouter>
        <CoinNavbar />
        <Route exact path="/" render={() => <Home />} />
        <Route path="/tables" component={Tables} />
        <Route path="/hero404" component={Hero404} />
        <Route path="/profile" component={Profile} />
        <Route path="/login" component={Login} />
        <Route path="/signup" component={Register} />
        <Route path="/addCoin" component={AddCoin} />
        <Route path="/editCoin" component={EditCoin} />
        <Route path="/coinDetails" component={CoinDetails} />
        <Footer />
      </BrowserRouter>
    </Fragment>
  );
};

export default Routes;
