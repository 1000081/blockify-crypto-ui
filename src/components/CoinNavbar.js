import React from "react";
import { Header } from "./../Navbar.style";
import { CDBNavbar } from "cdbreact";
import { useAuth } from "../containers/contexts/AuthContext";

const CoinNavbar = () => {
  const { currentUser, logout } = useAuth();

  const handleLogout = () => {
    logout();
  };

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
          <a
            href="/"
            className="text-decoration-none  mx-4"
            style={{
              color: "inherit",
              fontWeight: "bold",
            }}
          >
            <span
              style={{
                color: "#BDBDBD",
                fontWeight: "bold",
              }}
            >
              𝕮𝖗𝖞𝖕𝖙𝖔
            </span>
            <span>𝖑𝖎𝖘𝖙𝖎𝖓𝖌</span>
          </a>
        </div>
        <div className="ml-auto">
          <a
            href="/"
            className="text-decoration-none  mx-4"
            style={{ color: "inherit" }}
          >
            <span
              className="table-rem element-to-hide"
              style={{ marginRight: "0.5rem" }}
            >
              Home
            </span>
            &nbsp;
            <i className="fas fa-house-damage fa-1x"></i>
          </a>

          {currentUser ? (
            <button
              type="button"
              color="light"
              className="btn btn-dark"
              onClick={handleLogout}
            >
              <span
                className="table-rem element-to-hide"
                style={{ marginRight: "0.5rem" }}
              >
                Logout
              </span>
              <i className="fas fa-sign-out-alt"></i>
            </button>
          ) : (
            <a
              href="/login"
              className="text-decoration-none  mx-4"
              style={{ color: "inherit" }}
            >
              <span
                className="table-rem element-to-hide"
                style={{ marginRight: "0.5rem" }}
              >
                Login
              </span>
              &nbsp;
              <i className="fas fa-sign-in-alt fa-1x"></i>
            </a>
          )}
          <a
            href="/addCoin"
            className="text-decoration-none  mx-4"
            style={{ color: "inherit" }}
          >
            <span
              className="table-rem element-to-hide"
              style={{ marginRight: "0.5rem" }}
            >
              Add Coin
            </span>
            &nbsp;
            <i className="fas fa-plus-square fa-1x"></i>
          </a>
          <a
            href="/admin"
            className="text-decoration-none  mx-4"
            style={{ color: "inherit" }}
          >
            <span
              className="table-rem element-to-hide"
              style={{ marginRight: "0.5rem" }}
            >
              Admin
            </span>
            &nbsp;
            <i className="fas fa-tools"></i>
          </a>
          <input type="text" className="table-rem" />
          <i className="fas fa-search mx-4 table-rem  fa-1x"></i>
        </div>
      </CDBNavbar>
    </Header>
  );
};

export default CoinNavbar;
