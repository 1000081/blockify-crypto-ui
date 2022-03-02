import React, { useState, useEffect } from "react";
import "./Home.css";
import CoinNavbar from "../../components/CoinNavbar";
import { CDBBtn, CDBInput } from "cdbreact";
import "react-datepicker/dist/react-datepicker.css";

const AddCoin = () => {
  const windowWidth = window.innerWidth;
  console.log("InnerWidth===============>>" + windowWidth);

  const [windWidth, setWinWidth] = useState({});

  useEffect(() => {
    styleWidth();
  });

  const styleWidth = () => {
    if (windowWidth > 620) {
      setWinWidth({
        height: "100%",
        width: "50%",
        bgColor: "#90A4AE",
      });
    } else {
      setWinWidth({ height: "100%", width: "100%" });
    }
  };

  return (
    <div className="dashboard justify-content-center">
      <div style={windWidth} className="">
        <div
          style={{
            height: "calc(100% - 64px)",
            overflowY: "scroll",
          }}
        >
          {/* <div className="d-flex card-section"> */}
          <div className="cards-container">
            <div className="col-md-12 card-bg w-100 d-flex flex-column wide border d-flex flex-column">
              <div className="mx-4 mt-3 d-flex justify-content-between align-items-center">
                <h4 className="font-weight-bold text-dark h5">
                  Coin information
                </h4>
              </div>
              <div className="form-row mb-n4">
                <div className="col">
                  <CDBInput label="Name" type="text" />
                </div>
              </div>
              <div className="form-row mb-n4">
                <div className="col">
                  <CDBInput label="Symbol" type="text" />
                </div>
              </div>
              <div className="form-row mb-n4">
                <div className="col">
                  <CDBInput
                    label="Description"
                    type="textarea"
                    rows={5}
                    cols={10}
                  />
                </div>
              </div>

              <div className="form-row mb-n4">
                <div></div>
                <div className="col d-flex flex-wrap justify-content-center align-items-center">
                  <CDBInput label="Presale" type="checkbox" />
                </div>
                <div></div>
              </div>
              <div className="form-row mb-n4">
                <div className="col">
                  <CDBInput label="Launch Date" type="text" />
                </div>
              </div>

              <div className="form-row mb-n4">
                <div className="col">
                  <CDBInput label="Market Cap in USD" type="text" />
                </div>
              </div>
              <div className="form-row mb-n4">
                <div className="col">
                  <CDBInput label="Price in USD" type="text" />
                </div>
              </div>

              <div className="mx-4 mt-3 d-flex justify-content-between align-items-center">
                <h4 className="font-weight-bold text-dark h5">&nbsp;</h4>
              </div>
            </div>
            <div className="col-md-12 card-bg w-100 d-flex flex-column wide border d-flex flex-column">
              <div className="mx-4 mt-3 d-flex justify-content-between align-items-center">
                <h4 className="font-weight-bold text-dark h5">
                  Contract address
                </h4>
              </div>

              <div className="form-row mb-n4">
                <div className="col">
                  <CDBInput label="Chain" type="text" />
                </div>
              </div>
              <div className="form-row mb-n4">
                <div className="col">
                  <CDBInput label="Address" type="text" />
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
                  <CDBInput label="Website" type="text" />
                </div>
              </div>
              <div className="form-row mb-n4">
                <div className="col">
                  <CDBInput label="Audit" type="text" />
                </div>
              </div>

              <div className="form-row mb-n4">
                <div className="col">
                  <CDBInput label="Telegram" type="text" />
                </div>
              </div>
              <div className="form-row mb-n4">
                <div className="col">
                  <CDBInput label="Twitter" type="text" />
                </div>
              </div>

              <div className="form-row mb-n4">
                <div className="col">
                  <CDBInput label="Discord" type="text" />
                </div>
              </div>
              <div className="form-row mb-n4">
                <div className="col">
                  <CDBInput label="Reddit" type="text" />
                </div>
              </div>

              <div className="form-row mb-n4">
                <div className="col">
                  <CDBInput label="Logo" type="text" />
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
                  <CDBInput label="Other chains" type="text" />
                </div>
              </div>
              <div className="form-row mb-n4">
                <div className="col">
                  <CDBInput label="Dextools link" type="text" />
                </div>
              </div>

              <div className="form-row mb-n4">
                <div className="col">
                  <CDBInput label="Swap link" type="text" />
                </div>
              </div>
              <CDBBtn
                color="dark"
                className="btn-block my-3 mx-0 d-flex justify-content-center align-items-center"
              >
                Add Coin
              </CDBBtn>
            </div>
          </div>
        </div>
      </div>
    </div>
    // </div>
  );
};

export default AddCoin;
