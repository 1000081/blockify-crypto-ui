import React from "react";
import { Header } from "./../Navbar.style";
import { CDBNavbar, CDBInput } from "cdbreact";

const CoinNavbar = () => {
  return (
    <Header style={{ background: "#333", color: "#fff" }}>
      <CDBNavbar dark expand="md" scrolling className="justify-content-start">
        <CDBInput
          type="search"
          size="md"
          hint="Search"
          className="mb-n4 mt-n3 input-nav"
        />
        <div className="ml-auto">
          <a
            href="/"
            className="text-decoration-none  mx-4"
            style={{ color: "inherit" }}
          >
            <span className="table-rem">Home</span>&nbsp;
            <i className="fas fa-house-damage"></i>
          </a>
          &nbsp;
          <a
            href="/login"
            className="text-decoration-none  mx-4"
            style={{ color: "inherit" }}
          >
            <span className="table-rem">Login</span>&nbsp;
            <i className="fas fa-sign-in-alt"></i>
          </a>
          &nbsp;
          <a
            href="/addCoin"
            className="text-decoration-none  mx-4"
            style={{ color: "inherit" }}
          >
            <span className="table-rem">Add Coin</span>&nbsp;
            <i className="fas fa-plus-square"></i>
          </a>
          <i className="fas fa-bell mx-4"></i>
          <i className="fas fa-comment-alt mx-4"></i>
          <img
            alt="panelImage"
            src="img/pane/pane4.png"
            style={{ width: "3rem", height: "3rem" }}
          />
        </div>
      </CDBNavbar>
    </Header>
  );
};

export default CoinNavbar;
