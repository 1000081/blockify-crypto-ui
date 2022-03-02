import React from "react";
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
// import { SocialMediaIconsReact } from "social-media-icons-react";

const CoinDetails = () => {
  const coin = {
    coinType: "P",
    _id: "620497d7b7cfe7e9a8f22def",
    name: "Name01",
    logo: "https://storage.googleapis.com/coinsniper-assets/images/TmQy2NtCzqHLYRNuSUKRMN69maicHcC9SGA9P1PZ.png",
    chain: "BSC",
    presale: "on",
    description:
      "The Highest Returning Rewards Coin that Earns You Up To 15% Per Month. Just For Owning It\n" +
      "MetaGold Rewards is a new coin that provides a passive income stream to it’s holders\n" +
      "AN EASIER WAY TO REACH FINANCIAL FREEDOM…\n" +
      "You earn passive income because of the fees on every transaction.\n" +
      "These are: 14% on buys (11% rewards + 3% Liquidity Pool) and 19% on every sell (16% rewards + 3% Liquidity Pool). This means every time you check your wallet, you’re going to see more rewards in USDT.\n" +
      "Because of the Binance Smart Chain system, you can rely on your USDT coins being delivered to you daily.\n" +
      "MetaGold gives you the opportunity to achieve financial freedom, whatever that means to you: sitting on the beach or doing whatever it is you want! Especially as an early investor!\n",
    contAddress: "0x5a119762B09Ed0bcB3b16075159AE43A62651383",
    launchDt: "2001-06-01T05:00:00.000Z",
    marketCap: "5959284.00",
    price: "0.000000026825",
    telegram: "qwee@telegeram",
    twitter: "21313@twitter",
    reddit: "23@reditt",
    discord: "@discord",
    otherChains: "23123/23213/213123/12313/123",
    dexToools: "123123Dextools",
    swap: "swap1234",
    vote: 23,
    symbol: "BTC",
    listedDt: "2022-02-09T04:43:00.000Z",
    __v: 0,
  };

  const leftSecAlign = {
    marginLeft: 0,
    marginRight: 25,
    fontSize: "1.0em",
    fontWeight: "bold",
  };

  const rightSecAlign = { marginLeft: "auto", marginRight: 0 };

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
        <Navbar />
        <div style={{ height: "100%" }}>
          <div style={{ height: "calc(100% - 64px)", overflowY: "scroll" }}>
            <div className="d-flex card-section">
              <div className="detail-cards-container">
                <div className="card-bg w-100 border d-flex flex-column">
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
                      </div>
                    </div>
                    <div className="table-rem">&nbsp;</div>
                    <div className="table-rem">
                      <CDBTable borderless responsive>
                        <CDBTableHeader color="light">
                          <tr>
                            <th>Status:</th>
                            <th>Votes</th>
                            <th>Votes Today</th>
                            <th>Network</th>
                          </tr>
                        </CDBTableHeader>
                        <CDBTableBody>
                          <tr>
                            <td>listed</td>
                            <td>{coin.vote}</td>
                            <td>{coin.vote}</td>
                            <td>{coin.chain}</td>
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
                    <div style={rightSecAlign}>$ 21,354,104</div>
                  </div>
                  <div className="d-flex">
                    <div style={leftSecAlign}>Price (USD)</div>
                    <div style={rightSecAlign}>$ 0.0000000213541040</div>
                  </div>
                  <div className="d-flex">
                    <div style={leftSecAlign}>Price (BNB) </div>
                    <div style={rightSecAlign}>0.000000000055 BNB</div>
                  </div>
                  <div className="d-flex">
                    <div style={leftSecAlign}>Added</div>
                    <div style={rightSecAlign}>August 8th 2021</div>
                  </div>
                  <div className="d-flex">
                    <div style={leftSecAlign}>Launch</div>
                    <div style={rightSecAlign}>September 23rd 2021</div>
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
                      <CDBBtn color="white" className="m-0" outline>
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
                    </div>
                  </div>
                  <div className="d-flex">
                    <div
                      style={{
                        marginLeft: 0,
                        marginRight: 3,
                        textAlign: "center",
                      }}
                    >
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
                    <div className="mt-5 d-flex align-items-center justify-content-between">
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
            <footer className="footer">
              <div className="d-flex align-items-center">
                <CDBLink to="/" className="text-dark footer-link">
                  <img alt="logo" src="/img/pages/logo.png" width="25px" />
                  <span className="ml-4 lead mb-0 font-weight-bold">
                    Devwares
                  </span>
                </CDBLink>
                <span
                  className="footer-rem"
                  style={{
                    fontSize: "3em",
                    margin: "-2rem 0px -1.5rem 1rem",
                    color: "#C4C4C4",
                  }}
                >
                  &#8226;
                </span>
                <small className="ml-2 mt-1">
                  &copy; Devwares, 2020. All rights reserved.
                </small>
              </div>
              <div className="footer-rem">
                <CDBBtn
                  flat
                  color="dark"
                  className="py-1 px-2 bg-dark border-0"
                >
                  <i className="fab fa-facebook-f"></i>
                </CDBBtn>
                <CDBBtn
                  flat
                  color="dark"
                  className="mx-3 py-1 px-2 bg-dark border-0"
                >
                  <i className="fab fa-twitter"></i>
                </CDBBtn>
                <CDBBtn
                  flat
                  color="dark"
                  className="py-1 px-2 bg-dark border-0"
                >
                  <i className="fab fa-instagram"></i>
                </CDBBtn>
              </div>
            </footer>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CoinDetails;
