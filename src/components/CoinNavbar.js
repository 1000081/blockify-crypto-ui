import React, { useState } from "react";
import { Header } from "./../Navbar.style";
import { CDBNavbar } from "cdbreact";
import { useAuth } from "../containers/contexts/AuthContext";
import { useHistory } from "react-router-dom";
import CoinModal from "./CoinModal";

const CoinNavbar = () => {
  const { currentUser, logout } = useAuth();
  const history = useHistory();
  const [open, setOpen] = useState(false);

  const onCloseModal = () => {
    setOpen(false);
    console.log("call parent method");
  };

  const handleLogout = () => {
    logout();
  };

  const handleAddCoin = () => {
    if (currentUser) {
      history.push("/addCoin");
    } else {
      setOpen(true);
    }
  };

  return (
    <>
      <CoinModal
        open={open}
        onCloseModal={onCloseModal}
        head={"Login"}
        body={"Please login to Add Coin."}
      />
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
            <button
              type="button"
              color="light"
              className="btn btn-dark"
              onClick={() => history.push("/")}
            >
              <span
                className="table-rem element-to-hide"
                style={{ marginRight: "0.5rem" }}
              >
                Home
              </span>
              <i className="fas fa-house-damage fa-1x"></i>
            </button>

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
              <button
                type="button"
                color="light"
                className="btn btn-dark"
                onClick={() => history.push("/login")}
              >
                <span
                  className="table-rem element-to-hide"
                  style={{ marginRight: "0.5rem" }}
                >
                  Login
                </span>
                <i className="fas fa-sign-in-alt fa-1x"></i>
              </button>
            )}
            <button
              type="button"
              color="light"
              className="btn btn-dark"
              onClick={handleAddCoin}
            >
              <span
                className="table-rem element-to-hide"
                style={{ marginRight: "0.5rem" }}
              >
                Add Coin
              </span>
              <i className="fas fa-plus-square fa-1x"></i>
            </button>
            <button
              type="button"
              color="light"
              className="btn btn-dark mr-3"
              onClick={() => history.push("/admin")}
            >
              <span
                className="table-rem element-to-hide"
                style={{ marginRight: "0.5rem" }}
              >
                Admin
              </span>
              <i className="fas fa-tools"></i>
            </button>
            <input type="text" className="table-rem" />
            <i className="fas fa-search mx-4 table-rem  fa-1x"></i>
          </div>
        </CDBNavbar>
      </Header>
    </>
  );
};

export default CoinNavbar;
