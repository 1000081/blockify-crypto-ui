import React, { useState } from "react";
import {
  MDBTabs,
  MDBTabsItem,
  MDBTabsLink,
  MDBTabsContent,
  MDBTabsPane,
} from "mdb-react-ui-kit";
import { Bar } from "react-chartjs-2";

import "./Home.css";
import { coinTable } from "./tableData";
import Navbar from "../../Navbar";
import CoinTable from "../../components/CoinTable";
import TopCarousel from "../../components/TopCarousel";
import Footer from "../../components/Footer";
import CoinSidebar from "./../../components/CoinSidebar";

export const Home = () => {
  const data = {
    chart1: {
      labels: ["Eating", "Drinking", "Sleeping"],
      datasets: [
        {
          label: "My First dataset",
          backgroundColor: ["#F2C94C", "#2F80ED", "#9B51E0"],
          borderWidth: 0,
          data: [9, 22, 7],
        },
      ],
    },
    chart2: {
      labels: [
        "Eating",
        "Drinking",
        "Sleeping",
        "Designing",
        "Coding",
        "Cycling",
        "Running",
      ],
      datasets: [
        {
          label: "My First dataset",
          backgroundColor: "rgba(255, 153, 51, 0.8)",
          borderColor: "rgb(102, 51, 0)",
          data: [65, 59, 75, 81, 56, 55, 40],
        },
        {
          label: "My Second dataset",
          backgroundColor: "#2F80ED",
          borderColor: "rgb(0, 41, 102)",
          data: [38, 48, 60, 79, 96, 47, 80],
        },
      ],
    },
  };
  const options = {
    responsive: true,
    maintainAspectRatio: false,
    legend: { display: false },
    scales: {
      xAxes: [
        {
          ticks: {
            display: false,
          },
        },
      ],
      yAxes: [
        {
          gridLines: {
            display: false,
          },
          ticks: {
            display: false,
          },
        },
      ],
    },
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
      <div>
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
        <Navbar />
        <div style={{ height: "100%" }}>
          <div style={{ height: "calc(100% - 64px)", overflowY: "scroll" }}>
            <div className="d-flex card-section">
              <div className="cards-container">
                {/* <div
                  className="card-bg w-100 d-flex flex-column border d-flex flex-column"
                  style={{ gridRow: "span 2" }}
                > */}
                {/* <div className="p-4 d-flex flex-column h-100">
                    <div className="d-flex align-items-center justify-content-between">
                      <h4 className="m-0 h5 font-weight-bold text-dark">
                        Total Orders
                      </h4>
                      <div className="px-2 py-1 bg-grey rounded-circle">
                        <i className="fas fa-shopping-bag"></i>
                      </div>
                    </div>
                    <div className="mt-5 d-flex align-items-center justify-content-between">
                      <div>
                        <h4 className="m-0 h1 font-weight-bold text-dark">
                          452
                        </h4>
                        <p className="text-success small">
                          <i className="fas fa-angle-up p-0"></i> 18.52%
                        </p>
                      </div>
                      <div className="text-right d-flex flex-column justify-content-between">
                        <div className="d-flex align-items-center justify-content-between text-primary">
                          <span
                            style={{
                              fontSize: "3em",
                              margin: "-2rem 0px -1.5rem 0px",
                            }}
                          >
                            &#8226;
                          </span>
                          <span className="small">August</span>
                        </div>
                        <div className="d-flex align-items-center justify-content-between text-warning">
                          <span
                            style={{
                              fontSize: "3em",
                              margin: "-2rem 0px -1.5rem 0px",
                            }}
                          >
                            &#8226;
                          </span>
                          <span className="small ml-2">September</span>
                        </div>
                      </div>
                    </div>
                    <div className="p-0 mt-auto">
                      <Bar height={250} data={data.chart2} options={options} />
                    </div>
                    <p className="c-p text-dark font-weight-bold text-right mt-3 mb-0">
                      More Details
                      <i className="fas fa-arrow-right ml-1"></i>
                    </p>
                  </div> */}
                {/* <TopCarousel />
                  <TopCarousel />
                  <TopCarousel /> */}
                {/* </div> */}

                {/* <div className="card-bg w-100 d-flex flex-column wide border d-flex flex-column">
                  <div className="d-flex flex-column p-0 h-100">
                    <div className="mx-4 mt-3 d-flex justify-content-between align-items-center">
                      <TopCarousel />
                    </div>
                  </div>
                </div> */}

                <div className="card-bg w-100 d-flex flex-column wide border d-flex flex-column">
                  <div className="d-flex flex-column p-0 h-100">
                    <div className="mx-4 mt-3 d-flex justify-content-between align-items-center">
                      <h4 className="font-weight-bold text-dark h5">
                        Promoted
                      </h4>
                      <div className="p-1 bg-grey rounded-circle">
                        <i className="fas fa-sticky-note"></i>
                      </div>
                    </div>
                    <CoinTable values={coinTable} />
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
                        >
                          New
                        </MDBTabsLink>
                      </MDBTabsItem>
                      <MDBTabsItem>
                        <MDBTabsLink
                          onClick={() => handleFillClick("altTab")}
                          active={fillActive === "altTab"}
                        >
                          All Time Best
                        </MDBTabsLink>
                      </MDBTabsItem>
                      <MDBTabsItem>
                        <MDBTabsLink
                          onClick={() => handleFillClick("normalTab")}
                          active={fillActive === "normalTab"}
                        >
                          Normal
                        </MDBTabsLink>
                      </MDBTabsItem>
                      <MDBTabsItem>
                        <MDBTabsLink
                          onClick={() => handleFillClick("presaleTab")}
                          active={fillActive === "presaleTab"}
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
                        <CoinTable values={coinTable} />
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
                        <CoinTable values={coinTable} />
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
                        <CoinTable values={coinTable} />
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
                        <CoinTable values={coinTable} />
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
