import React, { useState, useContext } from "react";
import {
  MDBTabs,
  MDBTabsItem,
  MDBTabsLink,
  MDBTabsContent,
  MDBTabsPane,
} from "mdb-react-ui-kit";

import "./Home.css";
import CoinTable from "../../components/CoinTable";
import Footer from "../../components/Footer";
import CoinSidebar from "./../../components/CoinSidebar";
import CoinNavbar from "../../components/CoinNavbar";
import { CoinContext } from "../contexts/CoinContext";

export const Home = () => {
  const { coins } = useContext(CoinContext);
  const tabSelected = {
    fontWeight: "bold",
    color: "black",
    bgcolor: "elegant-color-dark",
  };

  const [fillActive, setFillActive] = useState("newTab");

  const handleFillClick = (value) => {
    if (value === fillActive) {
      return;
    }
    setFillActive(value);
  };

  return (
    <div className="dashboard d-flex">
      {/* <div className="table-rem">
        <CoinSidebar />
      </div> */}
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
                <div className="card-bg w-100 d-flex flex-column wide border d-flex flex-column">
                  <div className="d-flex flex-column p-0 h-100">
                    <div className="mx-4 mt-3 d-flex justify-content-between align-items-center">
                      <h4 className="font-weight-bold text-dark h5">
                        Promoted
                      </h4>
                      <div className="p-1 bg-grey rounded-circle">
                        {/* <ReactSearchBox
                          placeholder="Placeholder"
                          value="Doe"
                          data={data}
                          callback={(record) => console.log(record)}
                        /> */}
                        <input
                          type="search"
                          className="form-control rounded"
                          placeholder="Search"
                          aria-label="Search"
                          aria-describedby="search-addon"
                        />
                        <span
                          className="input-group-text border-0"
                          id="search-addon"
                        >
                          <i className="fas fa-search"></i>
                        </span>
                      </div>
                    </div>
                    <CoinTable values={coins} />
                    <p className="c-p text-dark font-weight-bold text-right mt-auto mr-3">
                      See More
                      <i className="fas fa-arrow-right ml-1"></i>
                    </p>
                  </div>
                </div>
                {/* <div className="card-bg w-100 d-flex flex-column wide border d-flex flex-column">
                  <div className="d-flex flex-column p-0 h-100">
                    <div className="mx-4 mt-3 d-flex justify-content-between align-items-center">
                      ADS
                    </div>
                  </div>
                </div> */}
                <div className="card-bg w-100 d-flex flex-column wide border d-flex flex-column">
                  <div className="d-flex flex-column p-0 h-100">
                    <MDBTabs className="mb-3">
                      <MDBTabsItem>
                        <MDBTabsLink
                          onClick={() => handleFillClick("newTab")}
                          active={fillActive === "newTab"}
                          style={fillActive === "newTab" ? tabSelected : {}}
                        >
                          New
                        </MDBTabsLink>
                      </MDBTabsItem>
                      <MDBTabsItem>
                        <MDBTabsLink
                          onClick={() => handleFillClick("altTab")}
                          active={fillActive === "altTab"}
                          style={fillActive === "altTab" ? tabSelected : {}}
                        >
                          All Time Best
                        </MDBTabsLink>
                      </MDBTabsItem>
                      <MDBTabsItem>
                        <MDBTabsLink
                          onClick={() => handleFillClick("normalTab")}
                          active={fillActive === "normalTab"}
                          style={fillActive === "normalTab" ? tabSelected : {}}
                        >
                          Normal
                        </MDBTabsLink>
                      </MDBTabsItem>
                      <MDBTabsItem>
                        <MDBTabsLink
                          onClick={() => handleFillClick("presaleTab")}
                          active={fillActive === "presaleTab"}
                          style={fillActive === "presaleTab" ? tabSelected : {}}
                        >
                          Presale
                        </MDBTabsLink>
                      </MDBTabsItem>
                    </MDBTabs>

                    <MDBTabsContent>
                      <MDBTabsPane show={fillActive === "newTab"}>
                        <div className="mx-4 mt-3 d-flex justify-content-between align-items-center">
                          <h4 className="font-weight-bold text-dark h5">New</h4>
                          <div className="p-1 bg-grey rounded-circle">
                            <i className="fas fa-sticky-note"></i>
                          </div>
                        </div>
                        <CoinTable values={coins} />
                        <p className="c-p text-dark font-weight-bold text-right mt-auto mr-3">
                          See More
                          <i className="fas fa-arrow-right ml-1"></i>
                        </p>
                      </MDBTabsPane>
                      <MDBTabsPane show={fillActive === "altTab"}>
                        <div className="mx-4 mt-3 d-flex justify-content-between align-items-center">
                          <h4 className="font-weight-bold text-dark h5">
                            All Time Best
                          </h4>
                          <div className="p-1 bg-grey rounded-circle">
                            <i className="fas fa-sticky-note"></i>
                          </div>
                        </div>
                        <CoinTable values={coins} />
                        <p className="c-p text-dark font-weight-bold text-right mt-auto mr-3">
                          See More
                          <i className="fas fa-arrow-right ml-1"></i>
                        </p>
                      </MDBTabsPane>
                      <MDBTabsPane show={fillActive === "normalTab"}>
                        <div className="mx-4 mt-3 d-flex justify-content-between align-items-center">
                          <h4 className="font-weight-bold text-dark h5">
                            Normal
                          </h4>
                          <div className="p-1 bg-grey rounded-circle">
                            <i className="fas fa-sticky-note"></i>
                          </div>
                        </div>
                        <CoinTable values={coins} />
                        <p className="c-p text-dark font-weight-bold text-right mt-auto mr-3">
                          See More
                          <i className="fas fa-arrow-right ml-1"></i>
                        </p>
                      </MDBTabsPane>
                      <MDBTabsPane show={fillActive === "presaleTab"}>
                        <div className="mx-4 mt-3 d-flex justify-content-between align-items-center">
                          <h4 className="font-weight-bold text-dark h5">
                            Presale
                          </h4>
                          <div className="p-1 bg-grey rounded-circle">
                            <i className="fas fa-sticky-note"></i>
                          </div>
                        </div>
                        <CoinTable values={coins} />
                        <p className="c-p text-dark font-weight-bold text-right mt-auto mr-3">
                          See More
                          <i className="fas fa-arrow-right ml-1"></i>
                        </p>
                      </MDBTabsPane>
                    </MDBTabsContent>
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
