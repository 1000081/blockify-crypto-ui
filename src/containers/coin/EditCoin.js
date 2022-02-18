import React, { useState } from "react";
import {
  MDBTabs,
  MDBTabsItem,
  MDBTabsLink,
  MDBTabsContent,
  MDBTabsPane,
} from "mdb-react-ui-kit";
// import { Bar } from "react-chartjs-2";

import "./Home.css";
import { coinTable } from "./tableData";
import Navbar from "../../Navbar";
import CoinTable from "../../components/CoinTable";
// import TopCarousel from "../../components/TopCarousel";
import Footer from "../../components/Footer";
import CoinSidebar from "../../components/CoinSidebar";
import CoinNavbar from "../../components/CoinNavbar";
import { CDBBtn, CDBInput, CDBLink } from "cdbreact";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

const EditCoin = () => {
  const [fillActive, setFillActive] = useState("newTab");
  const handleFillClick = (value) => {
    if (value === fillActive) {
      return;
    }
    setFillActive(value);
  };
  const [startDate, setStartDate] = useState(new Date());
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
                      <CDBInput label="Name" type="text" />
                    </div>
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
                    <div className="col">
                      <CDBInput label="Presale" type="checkbox" />
                    </div>
                    <div className="col">
                      <CDBInput label="Launch Date" type="text" />
                    </div>
                  </div>
                  <div className="form-row mb-n4">
                    <div className="col">
                      <CDBInput label="Market Cap in USD" type="text" />
                    </div>
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
                      Contract addresses
                    </h4>
                  </div>
                  <div className="form-row mb-n4">
                    <div className="col">
                      <CDBInput label="Chain" type="text" />
                    </div>
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
                    <div className="col">
                      <CDBInput label="Audit" type="text" />
                    </div>
                  </div>
                  <div className="form-row mb-n4">
                    <div className="col">
                      <CDBInput label="Telegram" type="text" />
                    </div>
                    <div className="col">
                      <CDBInput label="Twitter" type="text" />
                    </div>
                  </div>
                  <div className="form-row mb-n4">
                    <div className="col">
                      <CDBInput label="Discord" type="text" />
                    </div>
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
                    <div className="col">
                      <CDBInput label="Dextools link" type="text" />
                    </div>
                  </div>
                  <div className="form-row mb-n4">
                    <div className="col">
                      <CDBInput label="Swap link" type="text" />
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
                      <CDBInput label="Contact Email" type="text" />
                    </div>
                    <div className="col">
                      <CDBInput label="Contact Telegram" type="text" />
                    </div>
                  </div>
                  <div className="mx-4 mt-3 d-flex justify-content-between align-items-center">
                    <h4 className="font-weight-bold text-dark h5">&nbsp;</h4>
                  </div>
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

export default EditCoin;
