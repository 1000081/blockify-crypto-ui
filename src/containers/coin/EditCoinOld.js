import React, { useState, useRef } from "react";
import "./Home.css";
import { CDBBtn, CDBInput, CDBSelect } from "cdbreact";
import "react-datepicker/dist/react-datepicker.css";
import { useCoin } from "../contexts/CoinContext";
import useBreakpoint from "../../components/Breakpoint";
import { networOptions } from "./tableData";
import "react-datepicker/dist/react-datepicker.css";
import DatePicker from "react-datepicker";
import { coinTable } from "./tableData";
import { ReactSearchAutocomplete } from "react-search-autocomplete";
import { stringToDate } from "../../util/Stringutil";
const EditCoinOld = () => {
  const { editCoin, coins } = useCoin();
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
    const { name, value, checked, selectedIndex } = event.target;

    console.log("Name----------------" + name);
    console.log("value----------------" + value);
    console.log("checked----------------" + checked);
    // console.log("selected----------------" + networOptions[selectedIndex].value);

    if (name === "presale") {
      if (checked) {
        setCoin({ ...coin, [name]: "T" });
      } else {
        setCoin({ ...coin, [name]: "F" });
      }
    } else if (name === "chain") {
      setCoin({ ...coin, [name]: networOptions[selectedIndex].value });
    } else {
      setCoin({ ...coin, [name]: value });
    }
  };

  const handleSubmitButtonClick = () => {
    var errors = [];

    if (coin.name === "") {
      // inputRef.current.setFocus();
      errors.push("name");
    }
    if (coin.symbol === "") {
      // inputRef.current.setFocus();
      errors.push("symbol");
    }
    if (coin.description === "") {
      // inputRef.current.setFocus();
      errors.push("description");
    }

    if (coin.chain === "") {
      // inputRef.current.setFocus();
      errors.push("chain");
    }

    if (coin.contAddress === "") {
      // inputRef.current.setFocus();
      errors.push("contAddress");
    }

    if (coin.logo === "") {
      // inputRef.current.setFocus();
      errors.push("logo");
    }

    if (coin.telegram === "") {
      // inputRef.current.setFocus();
      errors.push("telegram");
    }

    if (coin.launchDt === "") {
      // inputRef.current.setFocus();
      errors.push("launchDt");
    }

    setErrors(errors);

    if (errors.length > 0) {
      return false;
    } else {
      editCoin(coin);
    }
  };

  const hasError = (key) => {
    return errors.indexOf(key) !== -1;
  };

  const point = useBreakpoint();

  const today = new Date();

  const handleDatepickerChange = (value) => {
    setCoin({ ...coin, ["launchDt"]: value });
  };

  const handleOnSearch = (string, results) => {
    console.log(string, results);
  };

  const handleOnHover = (result) => {
    console.log(result);
  };

  const handleOnSelect = (item) => {
    console.log("selected item--------------" + JSON.stringify(item));
    console.log("Coin before set--------------" + JSON.stringify(coin));
    setCoin(item);
    console.log("Coin after set--------------" + JSON.stringify(coin));
  };

  const handleOnFocus = () => {
    console.log("Focused");
  };

  const handleOnClear = () => {
    console.log("Cleared");
  };

  console.log(coinTable.data);

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
                  <div className="form-row mb-n4">
                    <div className="col">
                      <p className="text-center m-3 font-weight-bold">
                        Select Coin to edit
                      </p>
                      <ReactSearchAutocomplete
                        items={coins}
                        onSearch={handleOnSearch}
                        onHover={handleOnHover}
                        onSelect={handleOnSelect}
                        onFocus={handleOnFocus}
                        onClear={handleOnClear}
                        // styling={{ zIndex: 2 }} // To display it on top of the search box below
                        fuseOptions={{ keys: ["name", "chain"] }}
                        autoFocus
                        styling={
                          ({
                            keys: ["name", "chain"],
                            backgroundColor: "#032d46",
                            height: "40px",
                            iconColor: "#0dcaf0",
                            color: "white",
                            border: "2px solid #0dcaf0",
                            boxShadow: "rgba(32, 33, 36, 0.28) 0px 1px 6px 0px",
                          },
                          { zIndex: 2 })
                        }
                      />
                    </div>
                  </div>
                  <div className="mx-4 mt-3 d-flex justify-content-between align-items-center">
                    <h4 className="font-weight-bold text-dark h5">&nbsp;</h4>
                  </div>
                </div>

                <div className="col-md-12 card-bg w-100 d-flex flex-column wide border d-flex flex-column">
                  <div className="mx-0 mt-3 d-flex justify-content-between">
                    <h4 className="font-weight-bold text-dark h5">
                      Coin information
                    </h4>
                  </div>
                  <div className="form-row mb-n4">
                    <div className="col">
                      <CDBInput
                        label="Name (*)"
                        type="text"
                        value={coin.name}
                        id="name"
                        name="name"
                        onChange={handleInputChange}
                        ref={inputRef}
                      >
                        <span
                          className={hasError("name") ? "text-error" : "hidden"}
                        >
                          * Required
                        </span>
                      </CDBInput>
                    </div>
                  </div>
                  <div className="form-row mb-n4">
                    <div className="col">
                      <CDBInput
                        label="Symbol (*)"
                        type="text"
                        value={coin.symbol}
                        id="symbol"
                        name="symbol"
                        onChange={handleInputChange}
                        // className={
                        //   hasError("symbol")
                        //     ? "form-control is-invalid"
                        //     : "form-control"
                        // }
                      >
                        <span
                          className={
                            hasError("symbol") ? "text-error" : "hidden"
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
                        label="Description (*)"
                        type="textarea"
                        rows={5}
                        cols={10}
                        value={coin.description}
                        id="description"
                        name="description"
                        onChange={handleInputChange}
                        // className={
                        //   hasError("description")
                        //     ? "form-control is-invalid"
                        //     : "form-control"
                        // }
                      >
                        <span
                          className={
                            hasError("description") ? "text-error" : "hidden"
                          }
                        >
                          * Required
                        </span>
                      </CDBInput>
                    </div>
                  </div>
                  <br />
                  <div className="form-row mb-n4">
                    <div className="col d-flex flex-wrap justify-content-center align-items-center">
                      <CDBInput
                        label="Project in presale phase?"
                        type="checkbox"
                        name="presale"
                        onChange={handleInputChange}
                      />
                    </div>
                  </div>
                  <br />
                  <br></br>
                  <div className="form-row mb-n4">
                    <div className="col">
                      <p className="text-center m-0">Launch Date (*)</p>
                      <DatePicker
                        // selected={stringToDate(coin.launchD)}
                        onChange={handleDatepickerChange}
                        id="launchDt"
                        name="launchDt"
                        className="form-control"
                        label="Launch Date (*)"
                        minDate={today}
                        customInput={
                          <input type="text" id="launchDt" placeholder="" />
                        }
                      >
                        <span
                          className={
                            hasError("launchDt") ? "text-error" : "hidden"
                          }
                        >
                          * Required
                        </span>
                      </DatePicker>
                    </div>
                  </div>
                  <br></br>
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
                      <p className="text-center m-0">Network/Chain (*)</p>
                      <CDBSelect
                        id="chain"
                        name="chain"
                        options={networOptions}
                        selected={coin.chain}
                        onChange={handleInputChange}
                        // className={
                        //   hasError("chain")
                        //     ? "form-control is-invalid"
                        //     : "form-control"
                        // }
                      >
                        <span
                          className={
                            hasError("chain") ? "text-error" : "hidden"
                          }
                        >
                          * Required
                        </span>
                      </CDBSelect>
                    </div>
                  </div>
                  <br></br>
                  <div className="form-row mb-n4">
                    <div className="col">
                      <CDBInput
                        label="Contract Address (*)"
                        type="text"
                        value={coin.contAddress}
                        id="contAddress"
                        name="contAddress"
                        onChange={handleInputChange}
                        // className={
                        //   hasError("contAddress")
                        //     ? "form-control is-invalid"
                        //     : "form-control"
                        // }
                      >
                        <span
                          className={
                            hasError("contAddress") ? "text-error" : "hidden"
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
                        label="Telegram (*)"
                        type="text"
                        value={coin.telegram}
                        id="telegram"
                        name="telegram"
                        onChange={handleInputChange}
                        // className={
                        //   hasError("telegram")
                        //     ? "form-control is-invalid"
                        //     : "form-control"
                        // }
                      >
                        <span
                          className={
                            hasError("telegram") ? "text-error" : "hidden"
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
                        // className={
                        //   hasError("logo")
                        //     ? "form-control is-invalid"
                        //     : "form-control"
                        // }
                      >
                        <span
                          className={hasError("logo") ? "text-error" : "hidden"}
                        >
                          * Required
                        </span>
                      </CDBInput>
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
                    <CDBBtn
                      type="submit"
                      color="dark"
                      className="btn-block my-3 mx-0 d-flex justify-content-center align-items-center"
                      onClick={() => handleSubmitButtonClick()}
                    >
                      Edit Coin
                    </CDBBtn>
                  </div>
                  <div className="mx-4 mt-3 d-flex justify-content-between align-items-center">
                    <h4 className="font-weight-bold text-dark h5">&nbsp;</h4>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EditCoinOld;
