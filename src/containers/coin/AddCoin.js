import React, { useState, useContext, useRef } from "react";
import "./Home.css";
import { CDBBtn, CDBInput } from "cdbreact";
import "react-datepicker/dist/react-datepicker.css";
import { CoinContext } from "../contexts/CoinContext";
import useBreakpoint from "../../components/Breakpoint";

const AddCoin = () => {
  const { addCoin } = useContext(CoinContext);
  const inputRef = useRef();

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
      inputRef.current.setFocus();
      errors.push("name");
    }
    if (coin.symbol === "") {
      errors.push("symbol");
    }
    if (coin.description === "") {
      errors.push("description");
    }

    if (coin.chain === "") {
      inputRef.current.setFocus();
      errors.push("chain");
    }

    if (coin.contAddress === "") {
      errors.push("contAddress");
    }

    if (coin.logo === "") {
      errors.push("logo");
    }

    if (coin.telegram === "") {
      errors.push("telegram");
    }

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

  const point = useBreakpoint();

  return (
    <div className="dashboard d-flex">
      <div
        style={{
          flex: "1 1 auto",
          display: "flex",
          flexFlow: "column",
          height: "100vh",
          overflowY: "hidden",
        }}
      >
        <div style={{ height: "100%" }}>
          <div style={{ height: "calc(100% - 64px)", overflowY: "scroll" }}>
            <div className="d-flex card-section">
              <div
                className="add-cards-container"
                style={point !== "sm" ? { width: "60%" } : { width: "100%" }}
              >
                <div className="col-md-12 card-bg w-100 d-flex flex-column wide border d-flex flex-column">
                  <div className="mx-0 mt-3 d-flex justify-content-between">
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
                        id="name"
                        name="name"
                        onChange={handleInputChange}
                        className={
                          hasError("name")
                            ? "form-control is-invalid"
                            : "form-control"
                        }
                        ref={inputRef}
                      >
                        <span
                          className={
                            hasError("name") ? "inline-errormsg" : "hidden"
                          }
                        >
                          * Required
                        </span>
                      </CDBInput>
                    </div>
                  </div>
                  <div className="form-row mb-n4">
                    <div className="col">
                      <CDBInput
                        label="Symbol (Required)"
                        type="text"
                        value={coin.symbol}
                        id="symbol"
                        name="symbol"
                        onChange={handleInputChange}
                        className={
                          hasError("symbol")
                            ? "form-control is-invalid"
                            : "form-control"
                        }
                      >
                        <span
                          className={
                            hasError("symbol") ? "inline-errormsg" : "hidden"
                          }
                        >
                          * Required
                        </span>
                      </CDBInput>
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
                        className={
                          hasError("description")
                            ? "form-control is-invalid"
                            : "form-control"
                        }
                      >
                        <span
                          className={
                            hasError("description")
                              ? "inline-errormsg"
                              : "hidden"
                          }
                        >
                          * Required
                        </span>
                      </CDBInput>
                    </div>
                  </div>

                  <div className="form-row mb-n4">
                    <div className="col d-flex flex-wrap justify-content-center align-items-center">
                      <CDBInput
                        label="Project in presale phase?"
                        type="checkbox"
                      />
                    </div>
                  </div>

                  <div className="form-row mb-n4">
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
                  </div>
                  <div className="form-row mb-n4">
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
                  <div className="mx-0 mt-3 d-flex justify-content-between align-items-center">
                    <h4 className="font-weight-bold text-dark h5">
                      Contract address
                    </h4>
                  </div>
                  <div className="form-row mb-n4">
                    <div className="col">
                      <CDBInput
                        label="Network/Chain (Required)"
                        type="text"
                        value={coin.chain}
                        id="chain"
                        name="chain"
                        onChange={handleInputChange}
                        className={
                          hasError("chain")
                            ? "form-control is-invalid"
                            : "form-control"
                        }
                        // ref={hasError("name") ? inputRef : ""}
                      >
                        <span
                          className={
                            hasError("chain") ? "inline-errormsg" : "hidden"
                          }
                        >
                          * Required
                        </span>
                      </CDBInput>
                    </div>
                  </div>
                  <div className="form-row mb-n4">
                    <div className="col">
                      <CDBInput
                        label="Contract Address (Required)"
                        type="text"
                        value={coin.contAddress}
                        id="contAddress"
                        name="contAddress"
                        onChange={handleInputChange}
                        className={
                          hasError("contAddress")
                            ? "form-control is-invalid"
                            : "form-control"
                        }
                      >
                        <span
                          className={
                            hasError("contAddress")
                              ? "inline-errormsg"
                              : "hidden"
                          }
                        >
                          * Required
                        </span>
                      </CDBInput>
                    </div>
                  </div>
                  <div className="mx-4 mt-3 d-flex justify-content-between align-items-center">
                    <h4 className="font-weight-bold text-dark h5">&nbsp;</h4>
                  </div>
                </div>
                <div className="col-md-12 card-bg w-100 d-flex flex-column wide border d-flex flex-column">
                  <div className="mx-0 mt-3 d-flex justify-content-between align-items-center">
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
                  </div>
                  <div className="form-row mb-n4">
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
                        className={
                          hasError("telegram")
                            ? "form-control is-invalid"
                            : "form-control"
                        }
                      >
                        <span
                          className={
                            hasError("telegram") ? "inline-errormsg" : "hidden"
                          }
                        >
                          * Required
                        </span>
                      </CDBInput>
                    </div>
                  </div>
                  <div className="form-row mb-n4">
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
                  </div>
                  <div className="form-row mb-n4">
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
                        label="Logo URL (Required)"
                        type="text"
                        value={coin.logo}
                        id="logo"
                        name="logo"
                        onChange={handleInputChange}
                        className={
                          hasError("logo")
                            ? "form-control is-invalid"
                            : "form-control"
                        }
                      >
                        <span
                          className={
                            hasError("logo") ? "inline-errormsg" : "hidden"
                          }
                        >
                          * Required
                        </span>
                      </CDBInput>
                    </div>
                  </div>
                  <div className="mx-4 mt-3 d-flex justify-content-between align-items-center">
                    <h4 className="font-weight-bold text-dark h5">&nbsp;</h4>
                  </div>
                </div>
                <div className="col-md-12 card-bg w-100 d-flex flex-column wide border d-flex flex-column">
                  <div className="mx-0 mt-3 d-flex justify-content-between align-items-center">
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
                  </div>
                  <div className="form-row mb-n4">
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
            {/* <Footer /> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddCoin;
