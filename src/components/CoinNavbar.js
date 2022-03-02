import React from "react";
import { Header } from "./../Navbar.style";
import { CDBNavbar, CDBInput } from "cdbreact";
import "./../containers/coin/Home.css";

const CoinNavbar = () => {
  return (
    <Header style={{ background: "#333", color: "#fff" }}>
      <CDBNavbar dark expand="md" scrolling className="justify-content-start">
        <div
          style={{
            background: "#333",
            color: "#fff",
            fontWeight: "bold",
            fontSize: 30,
          }}
        >
          ᴄᴏɪɴʟɪsᴛɪɴɢs
        </div>
        <div className="ml-auto">
          <a
            href="/"
            className="text-decoration-none  mx-6"
            style={{ color: "inherit" }}
          >
            <span className="table-rem element-to-hide">Home</span>&nbsp;
            <i className="fas fa-house-damage"></i>
          </a>
          <a
            href="/login"
            className="text-decoration-none  mx-4"
            style={{ color: "inherit" }}
          >
            <span className="table-rem element-to-hide">Login</span>&nbsp;
            <i className="fas fa-sign-in-alt"></i>
          </a>
          <a
            href="/addCoin"
            className="text-decoration-none  mx-4"
            style={{ color: "inherit" }}
          >
            <span className="table-rem element-to-hide">Add Coin</span>&nbsp;
            <i className="fas fa-plus-square"></i>
          </a>
          <input type="text" className="table-rem" />
          <i className="fas fa-search mx-4 table-rem"></i>
        </div>
      </CDBNavbar>
    </Header>
  );
};

export default CoinNavbar;
