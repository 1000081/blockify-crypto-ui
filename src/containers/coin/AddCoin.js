import React, { useState, useContext } from "react";
import "./Home.css";
import Footer from "../../components/Footer";
import CoinSidebar from "../../components/CoinSidebar";
import CoinNavbar from "../../components/CoinNavbar";
import { CDBBtn, CDBInput } from "cdbreact";
import "react-datepicker/dist/react-datepicker.css";
import { CoinContext } from "../contexts/CoinContext";
import "./../../../node_modules/bootstrap-css-only/css/bootstrap-grid.min.css";

const AddCoin = () => {
  const { addCoin } = useContext(CoinContext);

  const initialCoin = {
    _id: "",
    name: "",
    logo: "",
    chain: "",
    presale: "",
    description: "",
    contAddress: "",
    launchDt: "",
    marketCap: "",
    price: "",
    telegram: "",
    twitter: "",
    reddit: "",
    discord: "",
    otherChains: "",
    dexToools: "",
    swap: "",
    vote: 0,
    symbol: "",
    website: "",
    audit: "",
    email: "",
    contTelegram: "",
  };

  const [coin, setCoin] = useState(initialCoin);

  const [errors, setErrors] = useState([]);

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setCoin({ ...coin, [name]: value });
  };

  const handleSubmitButtonClick = () => {
    var errors = [];

    if (coin.name === "") {
      errors.push("name");
    }

    // //email
    // const expression = /\S+@\S+/;
    // var validEmail = expression.test(String(this.state.email).toLowerCase());

    // if (!validEmail) {
    //   errors.push("email");
    // }

    setErrors(errors);

    if (errors.length > 0) {
      return false;
    } else {
      addCoin(coin);
    }
  };

  const hasError = (key) => {
    return errors.indexOf(key) !== -1;
  };

  return (
    <div className="dashboard d-flex">
      <div className="table-rem">
        <CoinSidebar />
      </div>
      <div
        style={{
          flex: "1 1 auto",
          display: "flex",
          flexFlow: "column",
          height: "100vh",
          overflowY: "hidden",
        }}
      >
        <CoinNavbar />
        <div style={{ height: "100%" }}>
          <div style={{ height: "calc(100% - 64px)", overflowY: "scroll" }}>
            <div className="d-flex card-section">
              <div className="cards-container">
                <div className="col-md-12 card-bg w-100 d-flex flex-column wide border d-flex flex-column">
                  <div className="mx-4 mt-3 d-flex justify-content-between align-items-center">
                    <h4 className="font-weight-bold text-dark h5">
                      Coin information
                    </h4>
                  </div>
                  <div className="form-row mb-n4">
                    <div className="col">
                      <CDBInput
                        label="Name (Required)"
                        type="text"
                        value={coin.name}
                        validate={true}
                        id="name"
                        name="name"
                        onChange={handleInputChange}
                        className={
                          hasError("name")
                            ? "form-control is-invalid"
                            : "form-control"
                        }
                      />
                      <div
                        className={
                          hasError("name") ? "inline-errormsg" : "hidden"
                        }
                      >
                        Please enter a value
                      </div>
                    </div>
                    <div className="col">
                      <CDBInput
                        label="Symbol (Required)"
                        type="text"
                        value={coin.symbol}
                        validate={true}
                        id="symbol"
                        name="symbol"
                        onChange={handleInputChange}
                      />
                    </div>
                  </div>
                  <div className="form-row mb-n4">
                    <div className="col">
                      <CDBInput
                        label="Description (Required)"
                        type="textarea"
                        rows={5}
                        cols={10}
                        value={coin.description}
                        id="description"
                        name="description"
                        onChange={handleInputChange}
                      />
                    </div>
                  </div>
                  <div className="form-row mb-n4">
                    <div className="col d-flex flex-wrap justify-content-center align-items-center">
                      <CDBInput label="Presale" type="checkbox" />
                    </div>
                    <div className="col">
                      <CDBInput
                        label="Launch Date (Required)"
                        type="text"
                        value={coin.launchDt}
                        id="launchDt"
                        name="launchDt"
                        onChange={handleInputChange}
                      />
                    </div>
                  </div>
                  <div className="form-row mb-n4">
                    <div className="col">
                      <CDBInput
                        label="Market Cap in USD"
                        type="text"
                        value={coin.marketCap}
                        id="marketCap"
                        name="marketCap"
                        onChange={handleInputChange}
                      />
                    </div>
                    <div className="col">
                      <CDBInput
                        label="Price in USD"
                        type="text"
                        value={coin.price}
                        id="price"
                        name="price"
                        onChange={handleInputChange}
                      />
                    </div>
                  </div>
                  <div className="mx-4 mt-3 d-flex justify-content-between align-items-center">
                    <h4 className="font-weight-bold text-dark h5">&nbsp;</h4>
                  </div>
                </div>
                <div className="col-md-12 card-bg w-100 d-flex flex-column wide border d-flex flex-column">
                  <div className="mx-4 mt-3 d-flex justify-content-between align-items-center">
                    <h4 className="font-weight-bold text-dark h5">
                      Contract addresses
                    </h4>
                  </div>
                  <div className="form-row mb-n4">
                    <div className="col">
                      <CDBInput
                        label="Chain (Required)"
                        type="text"
                        value={coin.chain}
                        id="chain"
                        name="chain"
                        onChange={handleInputChange}
                      />
                    </div>
                    <div className="col">
                      <CDBInput
                        label="Contract Address (Required)"
                        type="text"
                        value={coin.contAddress}
                        id="contAddress"
                        name="contAddress"
                        onChange={handleInputChange}
                      />
                    </div>
                  </div>
                  <div className="mx-4 mt-3 d-flex justify-content-between align-items-center">
                    <h4 className="font-weight-bold text-dark h5">&nbsp;</h4>
                  </div>
                </div>
                <div className="col-md-12 card-bg w-100 d-flex flex-column wide border d-flex flex-column">
                  <div className="mx-4 mt-3 d-flex justify-content-between align-items-center">
                    <h4 className="font-weight-bold text-dark h5">Links</h4>
                  </div>
                  <div className="form-row mb-n4">
                    <div className="col">
                      <CDBInput
                        label="Website"
                        type="text"
                        value={coin.website}
                        id="website"
                        name="website"
                        onChange={handleInputChange}
                      />
                    </div>
                    <div className="col">
                      <CDBInput
                        label="Audit"
                        type="text"
                        value={coin.audit}
                        id="audit"
                        name="audit"
                        onChange={handleInputChange}
                      />
                    </div>
                  </div>
                  <div className="form-row mb-n4">
                    <div className="col">
                      <CDBInput
                        label="Telegram (Required)"
                        type="text"
                        value={coin.telegram}
                        id="telegram"
                        name="telegram"
                        onChange={handleInputChange}
                      />
                    </div>
                    <div className="col">
                      <CDBInput
                        label="Twitter"
                        type="text"
                        value={coin.twitter}
                        id="twitter"
                        name="twitter"
                        onChange={handleInputChange}
                      />
                    </div>
                  </div>
                  <div className="form-row mb-n4">
                    <div className="col">
                      <CDBInput
                        label="Discord"
                        type="text"
                        value={coin.discord}
                        id="discord"
                        name="discord"
                        onChange={handleInputChange}
                      />
                    </div>
                    <div className="col">
                      <CDBInput
                        label="Reddit"
                        type="text"
                        value={coin.reddit}
                        id="reddit"
                        name="reddit"
                        onChange={handleInputChange}
                      />
                    </div>
                  </div>
                  <div className="form-row mb-n4">
                    <div className="col">
                      <CDBInput
                        label="Logo (Required)"
                        type="text"
                        value={coin.logo}
                        id="logo"
                        name="logo"
                        onChange={handleInputChange}
                      />
                    </div>
                  </div>
                  <div className="mx-4 mt-3 d-flex justify-content-between align-items-center">
                    <h4 className="font-weight-bold text-dark h5">&nbsp;</h4>
                  </div>
                </div>
                <div className="col-md-12 card-bg w-100 d-flex flex-column wide border d-flex flex-column">
                  <div className="mx-4 mt-3 d-flex justify-content-between align-items-center">
                    <h4 className="font-weight-bold text-dark h5">
                      Additional Information
                    </h4>
                  </div>
                  <div className="form-row mb-n4">
                    <div className="col">
                      <CDBInput
                        label="Other chains"
                        type="text"
                        value={coin.otherChains}
                        id="otherChains"
                        name="otherChains"
                        onChange={handleInputChange}
                      />
                    </div>
                    <div className="col">
                      <CDBInput
                        label="Dextools link"
                        type="text"
                        value={coin.dexToools}
                        id="dexToools"
                        name="dexToools"
                        onChange={handleInputChange}
                      />
                    </div>
                  </div>
                  <div className="form-row mb-n4">
                    <div className="col">
                      <CDBInput
                        label="Swap link"
                        type="text"
                        value={coin.swap}
                        id="swap"
                        name="swap"
                        onChange={handleInputChange}
                      />
                    </div>
                  </div>
                  <div className="mx-4 mt-3 d-flex justify-content-between align-items-center">
                    <h4 className="font-weight-bold text-dark h5">&nbsp;</h4>
                  </div>
                </div>
                <div className="col-md-12 card-bg w-100 d-flex flex-column wide border d-flex flex-column">
                  <div className="mx-4 mt-3 d-flex justify-content-between align-items-center">
                    <h4 className="font-weight-bold text-dark h5">
                      Contact Information
                    </h4>
                  </div>
                  <div className="form-row mb-n4">
                    <div className="col">
                      <CDBInput
                        label="Contact Email"
                        type="text"
                        value={coin.email}
                        id="email"
                        name="email"
                        onChange={handleInputChange}
                      />
                    </div>
                    <div className="col">
                      <CDBInput
                        label="Contact Telegram"
                        type="text"
                        value={coin.contTelegram}
                        id="contTelegram"
                        name="contTelegram"
                        onChange={handleInputChange}
                      />
                    </div>
                  </div>
                  <div className="mx-4 mt-3 d-flex justify-content-between align-items-center">
                    <h4 className="font-weight-bold text-dark h5">&nbsp;</h4>
                  </div>
                  <CDBBtn
                    type="submit"
                    color="dark"
                    className="btn-block my-3 mx-0 d-flex justify-content-center align-items-center"
                    onClick={() => handleSubmitButtonClick()}
                  >
                    Add Coin
                  </CDBBtn>
                </div>
              </div>
            </div>
            <Footer />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddCoin;
