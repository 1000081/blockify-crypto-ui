import React, { useEffect, useState } from "react";
import { CDBBtn, CDBTable, CDBTableHeader, CDBTableBody } from "cdbreact";
import "../coin/Home.css";
import CopyToClipboard from "react-copy-to-clipboard";
import { useCoin } from "../contexts/CoinContext";
import { useParams } from "react-router-dom";
import useBreakpoint from "../../components/Breakpoint";
import {
  MDBBtn,
  MDBCard,
  MDBCardBody,
  MDBCardHeader,
  MDBCardText,
  MDBCardTitle,
  MDBCol,
  MDBRow,
} from "mdb-react-ui-kit";

const CoinDetails = () => {
  const { coin, retrieveCoinByName } = useCoin();
  const [copied, setCopied] = useState(false);
  const { coinName } = useParams();

  const leftSecAlign = {
    marginLeft: 0,
    marginRight: 25,
    fontSize: "1.0em",
    fontWeight: "bold",
  };

  const headerBadgeStyle = { width: "100px", color: "white" };
  const rightSecAlign = { marginLeft: "auto", marginRight: 0 };

  const point = useBreakpoint();

  useEffect(() => {
    (async () => {
      await retrieveCoinByName(coinName);
    })(coin);
  }, []);

  return (
    <div className="dashboard d-flex">
      <div
        style={{
          flex: "1 1 auto",
          display: "flex",
          flexFlow: "column",
          height: "100vh",
          overflowY: "hidden",
          backgroundColor: "#616161",
        }}
      >
        <div style={{ height: "100%" }}>
          <div style={{ height: "calc(100% - 64px)", overflowY: "scroll" }}>
            <div className="d-flex card-section">
              <div className="detail-cards-container">
                <MDBRow className="justify-content-center">
                  <MDBCol sm={point !== "sm" ? "7" : "12"}>
                    <MDBCard
                      style={{ background: "#343a40" }}
                      className="mt-3 mb-3 text-white"
                    >
                      <MDBCardBody>
                        <div className="p-0 d-flex flex-column h-100 w-100">
                          <div
                            className="d-flex mt-0"
                            style={{ overflowY: "scroll" }}
                          >
                            <img
                              alt="panelImage"
                              src={coin && coin.logo}
                              className="detail-pane-image"
                              size="md"
                            />
                            <div>
                              <h4
                                className="mb-10"
                                style={{ fontWeight: "600" }}
                              >
                                {coin && coin.name}{" "}
                                <i className="fas fa-star"></i>
                              </h4>
                              <p
                                className="m-10"
                                style={{ fontSize: "1.10em" }}
                              >
                                {coin && coin.chain} &nbsp; Contract Address:{" "}
                                {coin && coin.contAddress}
                              </p>
                              <div>
                                <CopyToClipboard
                                  text={coin && coin.contAddress}
                                  onCopy={() => setCopied({ copied: true })}
                                >
                                  <button>
                                    <i className="fas fa-copy"></i>
                                  </button>
                                </CopyToClipboard>

                                {copied ? (
                                  <span
                                    style={{ color: "red" }}
                                    className="m-2"
                                  >
                                    Copied.
                                  </span>
                                ) : null}
                              </div>
                            </div>
                          </div>
                          <div className="table-rem">&nbsp;</div>
                          <div className="table-rem">
                            <CDBTable borderless responsive>
                              <CDBTableHeader
                                style={{
                                  backgroundColor: "#757575",
                                }}
                              >
                                <tr className="text-white">
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
                                        className="badge rounded-pill bg-success justify-content-center"
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
                                        {coin && coin.vote}
                                      </span>
                                    </h4>
                                  </td>
                                  <td>
                                    <h4>
                                      <span
                                        className="badge rounded-pill bg-secondary"
                                        style={headerBadgeStyle}
                                      >
                                        {coin && coin.vote}
                                      </span>
                                    </h4>
                                  </td>
                                  <td>
                                    <h4>
                                      <span
                                        className="badge rounded-pill bg-secondary"
                                        style={headerBadgeStyle}
                                      >
                                        {coin && coin.chain}
                                      </span>
                                    </h4>
                                  </td>
                                </tr>
                              </CDBTableBody>
                            </CDBTable>
                          </div>
                        </div>
                        {/* <MDBBtn href="#">Go somewhere</MDBBtn> */}
                      </MDBCardBody>
                    </MDBCard>

                    <MDBCard
                      style={{ background: "#343a40" }}
                      className="mt-3 mb-3 text-white"
                    >
                      <MDBCardBody>
                        <div className="p-4 d-flex flex-column h-100">
                          <div
                            className="mt-0 d-flex align-items-center justify-content-between"
                            style={{ whiteSpace: "pre-wrap" }}
                          >
                            {coin && coin.description}
                          </div>
                          <div className="mt-5 d-flex align-items-center justify-content-between">
                            <h5 className="mb-10" style={{ fontWeight: "600" }}>
                              Vote for {coin && coin.name}
                            </h5>
                          </div>
                          <div className="mt-12 d-flex align-items-center justify-content-between">
                            Vote for {coin && coin.name} to increase its rank!
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
                      </MDBCardBody>
                    </MDBCard>
                  </MDBCol>
                  <MDBCol sm="3">
                    <MDBCard
                      style={{ background: "#343a40" }}
                      className="mt-3 mb-3 text-white"
                    >
                      <MDBCardBody>
                        <div className="d-flex">
                          <h5 className="h5 font-weight-bold text-light">
                            Popularity
                          </h5>
                        </div>
                        <div className="d-flex">
                          <div style={leftSecAlign}>Watchlists:</div>
                          <div style={rightSecAlign}>500 on whishlists</div>
                        </div>
                        <div className="d-flex">&nbsp;</div>
                        <div className="d-flex">
                          <h5 className="h5 font-weight-bold text-light">
                            Token Info
                          </h5>
                        </div>
                        <div className="d-flex">
                          <div style={leftSecAlign}>Marketcap</div>
                          <div style={rightSecAlign}>
                            $ {coin && coin.marketCap}
                          </div>
                        </div>
                        <div className="d-flex">
                          <div style={leftSecAlign}>Price (USD)</div>
                          <div style={rightSecAlign}>
                            $ {coin && coin.price}
                          </div>
                        </div>
                        <div className="d-flex">
                          <div style={leftSecAlign}>Price (BNB) </div>
                          <div style={rightSecAlign}>
                            {coin && coin.price} BNB
                          </div>
                        </div>
                        <div className="d-flex">
                          <div style={leftSecAlign}>Added</div>
                          <div style={rightSecAlign}>
                            {coin && coin.listedDt}
                          </div>
                        </div>
                        <div className="d-flex">
                          <div style={leftSecAlign}>Launch</div>
                          <div style={rightSecAlign}>
                            {coin && coin.launchDt}
                          </div>
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
                              color="dark"
                              className="m-0"
                              outline
                              active={coin && coin.website}
                              borderColor="white"
                            >
                              <i className="fas fa-globe-africa fa-2x"></i>
                            </CDBBtn>
                            <CDBBtn color="dark" className="m-0" outline>
                              <i className="fab fa-telegram-plane fa-2x"></i>
                            </CDBBtn>
                            {/* <CDBBtn color="white" className="m-0" outline>
                              <i className="fab fa-twitter fa-2x"></i>
                            </CDBBtn> */}
                            <CDBBtn color="white" className="m-0" outline>
                              <i className="fab fa-discord fa-2x"></i>
                            </CDBBtn>
                            <CDBBtn color="white" className="m-0" outline>
                              <i className="fab fa-reddit fa-2x"></i>
                            </CDBBtn>
                          </div>
                        </div>
                        {/* </div> */}
                      </MDBCardBody>
                    </MDBCard>
                    <MDBCard
                      style={{
                        maxHeight: "250px",
                        minHeight: "250px",
                        background: "#343a40",
                      }}
                      className="mt-3 mb-3 text-white"
                    >
                      <MDBCardBody>
                        <MDBCardTitle>&nbsp;</MDBCardTitle>
                        <MDBCardText>ADS</MDBCardText>
                        {/* <MDBBtn href="#">Go somewhere</MDBBtn> */}
                      </MDBCardBody>
                    </MDBCard>
                    <MDBCard
                      style={{
                        maxHeight: "250px",
                        minHeight: "250px",
                        background: "#343a40",
                      }}
                      className="mt-3 mb-3 text-white"
                    >
                      <MDBCardBody>
                        <MDBCardTitle>&nbsp;</MDBCardTitle>
                        <MDBCardText>Ads</MDBCardText>
                        {/* <MDBBtn href="#">Go somewhere</MDBBtn> */}
                      </MDBCardBody>
                    </MDBCard>
                  </MDBCol>
                </MDBRow>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CoinDetails;
