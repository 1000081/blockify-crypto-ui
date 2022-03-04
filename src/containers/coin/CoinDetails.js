import React, { useContext, useState } from "react";
import {
  CDBBtn,
  CDBTable,
  CDBTableHeader,
  CDBTableBody,
  CDBLink,
} from "cdbreact";
import Sidebar from "../../components/CoinSidebar";
import Navbar from "../../components/CoinNavbar";
import "../coin/Home.css";
import CopyToClipboard from "react-copy-to-clipboard";
import { CoinContext } from "../contexts/CoinContext";
// import { SocialMediaIconsReact } from "social-media-icons-react";

const CoinDetails = () => {
  const { coin } = useContext(CoinContext);

  const [copied, setCopied] = useState(false);

  const leftSecAlign = {
    marginLeft: 0,
    marginRight: 25,
    fontSize: "1.0em",
    fontWeight: "bold",
  };

  const headerBadgeStyle = { width: "100px", color: "white" };

  const rightSecAlign = { marginLeft: "auto", marginRight: 0 };

  return (
    <div className="dashboard d-flex">
      {/* <div className="table-rem">
        <Sidebar />
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
        <div style={{ height: "100%" }}>
          <div style={{ height: "calc(100% - 64px)", overflowY: "scroll" }}>
            <div className="d-flex card-section">
              <div className="detail-cards-container">
                <div className="card-bg w-80 border d-flex flex-column h-60">
                  <div className="p-4 d-flex flex-column h-100">
                    <div
                      className="d-flex mt-4"
                      style={{ overflowY: "scroll" }}
                    >
                      <img
                        alt="panelImage"
                        src={coin.logo}
                        className="detail-pane-image"
                        size="md"
                      />
                      <div>
                        <h4 className="mb-10" style={{ fontWeight: "600" }}>
                          {coin.name} <i className="fas fa-star"></i>
                        </h4>
                        <p className="m-10" style={{ fontSize: "1.10em" }}>
                          {coin.chain} &nbsp; Contract Address:{" "}
                          {coin.contAddress}
                        </p>
                        <div>
                          <CopyToClipboard
                            text={coin && coin.contAddres}
                            onCopy={() => setCopied({ copied: true })}
                          >
                            <button>
                              <i class="fas fa-copy"></i>
                            </button>
                          </CopyToClipboard>

                          {copied ? (
                            <span style={{ color: "red" }}>Copied.</span>
                          ) : null}
                        </div>
                      </div>
                    </div>
                    <div className="table-rem">&nbsp;</div>
                    <div className="table-rem">
                      <CDBTable borderless responsive>
                        <CDBTableHeader color="light">
                          <tr>
                            <th>Status</th>
                            <th>Votes</th>
                            <th>Votes Today</th>
                            <th>Network</th>
                          </tr>
                        </CDBTableHeader>
                        <CDBTableBody>
                          <tr>
                            <td>
                              <h4>
                                <span
                                  className="badge rounded-pill bg-success"
                                  style={headerBadgeStyle}
                                >
                                  listed
                                </span>
                              </h4>
                            </td>
                            <td>
                              <h4>
                                <span
                                  className="badge rounded-pill bg-secondary h4"
                                  style={headerBadgeStyle}
                                >
                                  {coin.vote}
                                </span>
                              </h4>
                            </td>
                            <td>
                              <h4>
                                <span
                                  className="badge rounded-pill bg-secondary"
                                  style={headerBadgeStyle}
                                >
                                  {coin.vote}
                                </span>
                              </h4>
                            </td>
                            <td>
                              <h4>
                                <span
                                  className="badge rounded-pill bg-secondary"
                                  style={headerBadgeStyle}
                                >
                                  {coin.chain}
                                </span>
                              </h4>
                            </td>
                          </tr>
                        </CDBTableBody>
                      </CDBTable>
                    </div>
                  </div>
                </div>
                <div
                  className="card-bg w-110 border d-flex flex-column p-4"
                  style={{ gridRow: "span 20" }}
                >
                  <div className="d-flex">
                    <h5 className="h5 font-weight-bold text-dark">
                      Popularity
                    </h5>
                  </div>
                  <div className="d-flex">
                    <div style={leftSecAlign}>Watchlists:</div>
                    <div style={rightSecAlign}>500 on whishlists</div>
                  </div>
                  <div className="d-flex">&nbsp;</div>
                  <div className="d-flex">
                    <h5 className="h5 font-weight-bold text-dark">
                      Token Info
                    </h5>
                  </div>
                  <div className="d-flex">
                    <div style={leftSecAlign}>Marketcap</div>
                    <div style={rightSecAlign}>$ {coin.marketCap}</div>
                  </div>
                  <div className="d-flex">
                    <div style={leftSecAlign}>Price (USD)</div>
                    <div style={rightSecAlign}>$ {coin.price}</div>
                  </div>
                  <div className="d-flex">
                    <div style={leftSecAlign}>Price (BNB) </div>
                    <div style={rightSecAlign}>{coin.price} BNB</div>
                  </div>
                  <div className="d-flex">
                    <div style={leftSecAlign}>Added</div>
                    <div style={rightSecAlign}>{coin.listedDt}</div>
                  </div>
                  <div className="d-flex">
                    <div style={leftSecAlign}>Launch</div>
                    <div style={rightSecAlign}>{coin.launchDt}</div>
                  </div>
                  <div className="d-flex">&nbsp;</div>
                  <div className="d-flex">
                    <h5 className="h5 font-weight-bold text-dark">
                      Social Links
                    </h5>
                  </div>
                  <div className="d-flex">
                    <div
                      style={{
                        marginLeft: 0,
                        marginRight: 3,
                      }}
                    >
                      <CDBBtn
                        color="white"
                        className="m-0"
                        outline
                        active={coin.website}
                      >
                        <i className="fas fa-globe-africa fa-2x"></i>
                      </CDBBtn>
                      <CDBBtn color="white" className="m-0" outline>
                        <i className="fab fa-telegram-plane fa-2x"></i>
                      </CDBBtn>
                      <CDBBtn color="white" className="m-0" outline>
                        <i className="fab fa-twitter fa-2x"></i>
                      </CDBBtn>
                      <CDBBtn color="white" className="m-0" outline>
                        <i className="fab fa-discord fa-2x"></i>
                      </CDBBtn>
                      <CDBBtn color="white" className="m-0" outline>
                        <i className="fab fa-reddit fa-2x"></i>
                      </CDBBtn>
                    </div>
                  </div>
                </div>
                <div
                  className="card-bg w-80 d-flex flex-column border d-flex flex-column"
                  style={{ gridRow: "span 2" }}
                >
                  <div className="p-4 d-flex flex-column h-100">
                    <div
                      className="mt-5 d-flex align-items-center justify-content-between"
                      style={{ whiteSpace: "pre-wrap" }}
                    >
                      {coin.description}
                    </div>
                    <div className="mt-5 d-flex align-items-center justify-content-between">
                      <h5 className="mb-10" style={{ fontWeight: "600" }}>
                        Vote for {coin.name}
                      </h5>
                    </div>
                    <div className="mt-12 d-flex align-items-center justify-content-between">
                      Vote for {coin.name} to increase its rank!
                    </div>

                    <div className="mt-1 d-flex">
                      <CDBBtn
                        style={{
                          background: "black",
                          textTransform: "uppercase",
                          width: "-webkit-fill-available",
                        }}
                        className="text-center text-white  w-80"
                        action="/"
                      >
                        please login to vote
                      </CDBBtn>
                    </div>
                    <div className="mt-1 d-flex align-items-center justify-content-between">
                      You can vote once every 24 hour
                    </div>
                  </div>
                </div>
                <div className="card-bg w-100 d-flex flex-column wide border d-flex flex-column">
                  <div className="d-flex flex-column p-0 h-100"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CoinDetails;
