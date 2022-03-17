import React, { useEffect, useState } from "react";
import {
  MDBTabs,
  MDBTabsItem,
  MDBTabsLink,
  MDBTabsContent,
  MDBTabsPane,
} from "mdb-react-ui-kit";

import useBreakpoint from "../../components/Breakpoint";
import "./Home.css";
import CoinTable from "../../components/CoinTable";
import { useCoin } from "../contexts/CoinContext";
import { filteredList } from "../../util/Stringutil";
import * as types from "../../Constants";
import CoinSearch from "../../components/CoinSearch";

import emaijs from "emailjs-com";

export const Home = () => {
  const { coins } = useCoin();
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

  // useEffect(() => {
  //   const templateParam = {
  //     fromName: "Blockify",
  //     toName: "Srini",
  //     message: "Test",
  //   };

  //   emaijs
  //     .send(
  //       "service_xk0xp0z",
  //       "template_6qy0n08",
  //       templateParam,
  //       "AOGTvVt2qixzf5_Qd"
  //     )
  //     .then((res) => {
  //       console.log(res && JSON.stringify(res));
  //     })
  //     .catch((err) => {
  //       console.log(err && JSON.stringify(err));
  //     });
  // }, []);

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
          color: "#3F729B",
          backgroundColor: "#616161",
        }}
      >
        <div style={{ height: "100%" }}>
          <div
            style={{
              height: "calc(100% - 64px)",
              overflowY: "scroll",
              color: "#3F729B",
            }}
          >
            <div className="d-flex card-section w-100 ">
              <div
                className="cards-container"
                style={point !== "sm" ? { width: "80%" } : { width: "100%" }}
              >
                <div
                  className="card w-100 d-flex flex-column wide d-flex flex-column"
                  style={{ background: "#343a40" }}
                >
                  <div className="d-flex flex-column p-0 h-100">
                    <div
                      className="mx-1 d-flex justify-content-between align-items-center"
                      style={{
                        background: "black",
                        height: "50px",
                      }}
                    >
                      <h4 className="font-weight-bold text-white h5 mt-2 ml-2">
                        Promoted
                      </h4>
                    </div>
                    <CoinTable
                      values={filteredList(coins, types.COIN_TYPE_PROMOTED)}
                      point={point}
                    />
                    <p className="c-p text-white font-weight-bold text-right mt-auto mr-3">
                      See More
                      <i className="fas fa-arrow-right ml-1"></i>
                    </p>
                  </div>
                </div>
                <div style={{ height: "50px", width: "100%" }}></div>
                <div className="card-bg w-100 d-flex flex-column wide d-flex flex-column">
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
                        <div
                          className="card w-100 d-flex flex-column wide d-flex flex-column"
                          style={{ background: "#343a40" }}
                        >
                          <div className="d-flex flex-column p-0 h-100">
                            <div
                              className="mx-1 d-flex justify-content-between align-items-center"
                              style={{
                                background: "black",
                                height: "50px",
                              }}
                            >
                              <h4 className="font-weight-bold text-white h5 mt-2 ml-2">
                                Promoted
                              </h4>
                            </div>
                            <CoinTable
                              // values={filteredList(coins, types.COIN_TYPE_NEW)}
                              values={filteredList(
                                coins,
                                types.COIN_TYPE_PROMOTED
                              )}
                              point={point}
                            />
                            <p className="c-p text-white font-weight-bold text-right mt-auto mr-3">
                              See More
                              <i className="fas fa-arrow-right ml-1"></i>
                            </p>
                          </div>
                        </div>
                      </MDBTabsPane>

                      <MDBTabsPane show={fillActive === "altTab"}>
                        <div
                          className="card w-100 d-flex flex-column wide d-flex flex-column"
                          style={{ background: "#343a40" }}
                        >
                          <div className="d-flex flex-column p-0 h-100">
                            <div
                              className="mx-1 d-flex justify-content-between align-items-center"
                              style={{
                                background: "black",
                                height: "50px",
                              }}
                            >
                              <h4 className="font-weight-bold text-white h5 mt-2 ml-2">
                                Promoted
                              </h4>
                            </div>
                            <CoinTable
                              // values={filteredList(coins, types.COIN_TYPE_NEW)}
                              values={filteredList(
                                coins,
                                types.COIN_TYPE_PROMOTED
                              )}
                              point={point}
                            />
                            <p className="c-p text-white font-weight-bold text-right mt-auto mr-3">
                              See More
                              <i className="fas fa-arrow-right ml-1"></i>
                            </p>
                          </div>
                        </div>
                      </MDBTabsPane>

                      <MDBTabsPane show={fillActive === "normalTab"}>
                        <div
                          className="card w-100 d-flex flex-column wide d-flex flex-column"
                          style={{ background: "#343a40" }}
                        >
                          <div className="d-flex flex-column p-0 h-100">
                            <div
                              className="mx-1 d-flex justify-content-between align-items-center"
                              style={{
                                background: "black",
                                height: "50px",
                              }}
                            >
                              <h4 className="font-weight-bold text-white h5 mt-2 ml-2">
                                Promoted
                              </h4>
                            </div>
                            <CoinTable
                              // values={filteredList(coins, types.COIN_TYPE_NEW)}
                              values={filteredList(
                                coins,
                                types.COIN_TYPE_PROMOTED
                              )}
                              point={point}
                            />
                            <p className="c-p text-white font-weight-bold text-right mt-auto mr-3">
                              See More
                              <i className="fas fa-arrow-right ml-1"></i>
                            </p>
                          </div>
                        </div>
                      </MDBTabsPane>

                      <MDBTabsPane show={fillActive === "presaleTab"}>
                        <div
                          className="card w-100 d-flex flex-column wide d-flex flex-column"
                          style={{ background: "#343a40" }}
                        >
                          <div className="d-flex flex-column p-0 h-100">
                            <div
                              className="mx-1 d-flex justify-content-between align-items-center"
                              style={{
                                background: "black",
                                height: "50px",
                              }}
                            >
                              <h4 className="font-weight-bold text-white h5 mt-2 ml-2">
                                Promoted
                              </h4>
                            </div>
                            <CoinTable
                              // values={filteredList(coins, types.COIN_TYPE_NEW)}
                              values={filteredList(
                                coins,
                                types.COIN_TYPE_PROMOTED
                              )}
                              point={point}
                            />
                            <p className="c-p text-white font-weight-bold text-right mt-auto mr-3">
                              See More
                              <i className="fas fa-arrow-right ml-1"></i>
                            </p>
                          </div>
                        </div>
                      </MDBTabsPane>

                      {/* <MDBTabsPane show={fillActive === "altTab"}>
                        <div className="mx-1 mt-0 d-flex justify-content-between align-items-center p-1">
                          <h4 className="font-weight-bold text-dark h5">
                            All Time Best
                          </h4>
                          <div className="col-md-4 p-1 bg-grey rounded-circle">
                            <CoinSearch
                              // coins={filteredList(coins, types.COIN_TYPE_NEW)}
                              values={filteredList(
                                coins,
                                types.COIN_TYPE_PROMOTED
                              )}
                            />
                          </div>
                        </div>
                        <CoinTable
                          // values={filteredList(coins, types.COIN_TYPE_ATB)}
                          values={filteredList(coins, types.COIN_TYPE_PROMOTED)}
                        />
                        <p className="c-p text-dark font-weight-bold text-right mt-auto mr-3">
                          See More
                          <i className="fas fa-arrow-right ml-1"></i>
                        </p>
                      </MDBTabsPane>
                      <MDBTabsPane show={fillActive === "normalTab"}>
                        <div className="mx-1 mt-0 d-flex justify-content-between align-items-center">
                          <h4 className="font-weight-bold text-dark h5">
                            Normal
                          </h4>
                          <div className="col-md-4 p-1 bg-grey rounded-circle">
                            <CoinSearch
                              // coins={filteredList(coins, types.COIN_TYPE_NEW)}
                              values={filteredList(
                                coins,
                                types.COIN_TYPE_PROMOTED
                              )}
                            />
                          </div>
                        </div>

                        <CoinTable
                          // values={filteredList(coins, types.COIN_TYPE_NORMAL)}
                          values={filteredList(coins, types.COIN_TYPE_PROMOTED)}
                        />
                        <p className="c-p text-dark font-weight-bold text-right mt-auto mr-3">
                          See More
                          <i className="fas fa-arrow-right ml-1"></i>
                        </p>
                      </MDBTabsPane>
                      <MDBTabsPane show={fillActive === "presaleTab"}>
                        <div className="mx-1 mt-0 d-flex justify-content-between align-items-center">
                          <h4 className="font-weight-bold text-dark h5">
                            Presale
                          </h4>
                          <div className="col-md-4 p-1 bg-grey rounded-circle">
                            <CoinSearch
                              // coins={filteredList(coins, types.COIN_TYPE_NEW)}
                              values={filteredList(
                                coins,
                                types.COIN_TYPE_PROMOTED
                              )}
                            />
                          </div>
                        </div>
                        <CoinTable
                          // values={filteredList(coins, types.COIN_TYPE_PRE_SALE)}
                          values={filteredList(coins, types.COIN_TYPE_PROMOTED)}
                        />
                        <p className="c-p text-dark font-weight-bold text-right mt-auto mr-3">
                          See More
                          <i className="fas fa-arrow-right ml-1"></i>
                        </p>
                      </MDBTabsPane> */}
                    </MDBTabsContent>
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
