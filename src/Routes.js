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
import AdminHome from "./containers/admin/AdminHome";
import ForgotPassword from "./containers/auth/ForgotPassword";
import AdminReview from "./containers/admin/AdminReview";

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
        <Route path="/coinDetails/:coinName" component={CoinDetails} />
        <Route path="/forgotPassword" component={ForgotPassword} />

        <Route path="/admin" component={AdminHome} />
        <Route path="/review" component={AdminReview} />

        <Footer />
      </BrowserRouter>
    </Fragment>
  );
};

export default Routes;
