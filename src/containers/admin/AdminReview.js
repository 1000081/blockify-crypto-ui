import { CDBBtn } from "cdbreact";
import { MDBCard, MDBCardBody, MDBCol, MDBRow } from "mdb-react-ui-kit";
import React, { useEffect, useRef, useState } from "react";
import { Form } from "react-bootstrap";
import useBreakpoint from "../../components/Breakpoint";
import { networOptions, actionOptions } from "../coin/tableData";
import { useAuth } from "../contexts/AuthContext";
import { useCoin } from "../contexts/CoinContext";
import "react-datepicker/dist/react-datepicker.css";
import DatePicker from "react-datepicker";
import moment from "moment";

const AdminReview = () => {
  const { addCoin } = useCoin();
  const nameRef = useRef();
  const logoRef = useRef();
  const chainRef = useRef();
  const presaleRef = useRef();
  const descriptionRef = useRef();
  const contAddressRef = useRef();
  const launchDtRef = useRef();
  const marketCapRef = useRef();
  const priceRef = useRef();
  const telegramRef = useRef();
  const twitterRef = useRef();
  const redditRef = useRef();
  const discordRef = useRef();
  const dexTooolsRef = useRef();
  const symbolRef = useRef();
  const websiteRef = useRef();
  const auditRef = useRef();
  const actionRef = useRef();

  const [selectedCoin, setSelectedCoin] = useState({});
  const [error, setError] = useState({});
  const { currentUser } = useAuth();
  const { coin } = useCoin();
  // setSelectedCoin(coin);
  // localStorage.setItem("coin", coin);
  // console.log("selected coin =======>>>" + JSON.stringify(coin));

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(e.target[4].value);
    const populatedCoin = {
      name: nameRef.current.value,
      logo: logoRef.current.value,
      chain: chainRef.current.value,
      presale: presaleRef.current.value,
      description: descriptionRef.current.value,
      contAddress: contAddressRef.current.value,
      launchDt: e.target[4].value,
      marketCap: marketCapRef.current.value,
      price: priceRef.current.value,
      telegram: telegramRef.current.value,
      twitter: twitterRef.current.value,
      reddit: redditRef.current.value,
      discord: discordRef.current.value,
      dexToools: dexTooolsRef.current.value,
      symbol: symbolRef.current.value,
      website: websiteRef.current.value,
      audit: auditRef.current.value,
      addedBy: currentUser.email,
      action: actionRef.current.value,
    };

    // if (passwordRef.current.value !== passwordConfirmRef.current.value) {
    //   return setError("Passwords do not match");
    // }

    try {
      setError("");
      // setLoading(true);
      console.log(
        "validUser ------" + populatedCoin && JSON.stringify(populatedCoin)
      );
      await addCoin(populatedCoin)
        .then((res) => {
          console.log("Add User ------" + JSON.stringify(res));
          // logout();
          return res;
        })
        .catch((err) => {
          console.log("errorUser ------" + JSON.stringify(err));
        });
    } catch {
      // setError("Failed to create an account");
    }
  };

  // setLoading(false);};

  const point = useBreakpoint();

  const handleDatepickerChange = (value) => {
    // setCoin({ ...coin, ["launchDt"]: value });
    // launchDtRef.current = value;
  };

  useEffect(() => {
    if (!coin) {
      setSelectedCoin(localStorage.getItem("coin"));
    } else {
      localStorage.setItem("coin", coin);
      setSelectedCoin(coin);
    }
  }, []);

  return (
    <div className="dashboard d-flex" style={{ align: "center" }}>
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
          <div
            style={{
              height: "calc(100% - 10px)",
              overflowY: "scroll",
              align: "center",
            }}
          >
            <div className="d-flex card-section">
              <div className="detail-cards-container">
                <MDBRow className="row d-flex justify-content-center">
                  <MDBCol sm={point !== "sm" ? "7" : "12"}>
                    <Form onSubmit={handleSubmit}>
                      <MDBCard
                        style={{
                          background: "#343a40",
                        }}
                        className="mt-3 mb-3 text-white"
                      >
                        <MDBCardBody>
                          <div className="mx-1 d-flex justify-content-between align-items-center">
                            <h4 className="font-weight-bold text-white h5 mt-2 mb-2">
                              Coin Information
                            </h4>

                            <Form.Group id="chain">
                              <Form.Label>
                                Action
                                <span
                                  style={{ color: "red", fontSize: 15 }}
                                  className="ml-2"
                                >
                                  (Required)
                                </span>
                              </Form.Label>
                              <Form.Control
                                as="select"
                                required
                                ref={chainRef}
                                value={coin.chain}
                              >
                                <option></option>
                                {actionOptions &&
                                  actionOptions.map((currentOption) => (
                                    <option
                                      value={currentOption.value}
                                      key={currentOption.value}
                                    >
                                      {currentOption.text}
                                    </option>
                                  ))}
                              </Form.Control>
                            </Form.Group>
                          </div>
                          {/* <{error && <Alert variant="danger">{error}</Alert>} */}

                          <Form.Group id="name">
                            <Form.Label>
                              Name
                              {/* <span
                                style={{ color: "red", fontSize: 15 }}
                                className="ml-2"
                              >
                                (Required)
                              </span> */}
                            </Form.Label>
                            <Form.Control
                              type="text"
                              // ref={nameRef}
                              required
                              value={selectedCoin.name}
                              disabled
                            />
                          </Form.Group>
                          <Form.Group id="symbol">
                            <Form.Label>
                              Symbol{" "}
                              {/* <span
                                style={{ color: "red", fontSize: 15 }}
                                className="ml-2"
                              >
                                (Required)
                              </span> */}
                            </Form.Label>
                            <Form.Control
                              type="text"
                              ref={symbolRef}
                              value={coin.symbol}
                              required
                              disabled
                            />
                          </Form.Group>
                          <Form.Group id="description">
                            <Form.Label>
                              Description
                              {/* <span
                                style={{ color: "red", fontSize: 15 }}
                                className="ml-2"
                              >
                                (Required)
                              </span> */}
                            </Form.Label>
                            <Form.Control
                              as="textarea"
                              required
                              rows={10}
                              ref={descriptionRef}
                              value={coin.description}
                              disabled
                            />
                          </Form.Group>
                          <Form.Group id="presale" className="mt-3 mb-3">
                            <Form.Check
                              type="checkbox"
                              ref={presaleRef}
                              label="Project in presale phase?"
                              disabled
                            />
                          </Form.Group>

                          <Form.Group id="launchDt" className="mt-3 mb-3">
                            <Form.Label>
                              Launch Date
                              {/* <span
                                style={{ color: "red", fontSize: 15 }}
                                className="ml-2"
                              >
                                (Required)
                              </span> */}
                            </Form.Label>
                            <Form.Control
                              id="launchDt"
                              type="text"
                              ref={launchDtRef}
                              required
                              value={
                                coin.launchDt &&
                                new Date(coin.launchDt).toLocaleDateString()
                              }
                              disabled
                            />
                          </Form.Group>
                          <Form.Group id="marketCap">
                            <Form.Label>Market Cap in USD</Form.Label>
                            <Form.Control
                              type="text"
                              ref={marketCapRef}
                              value={coin.marketCap}
                              disabled
                            />
                          </Form.Group>
                          <Form.Group id="price">
                            <Form.Label>Price in USD</Form.Label>
                            <Form.Control
                              type="text"
                              ref={priceRef}
                              value={coin.price}
                              disabled
                            />
                          </Form.Group>
                        </MDBCardBody>
                      </MDBCard>

                      <MDBCard
                        style={{
                          background: "#343a40",
                        }}
                        className="mt-3 mb-3 text-white"
                      >
                        <MDBCardBody>
                          {/* <MDBCardHeader
                              style={{ fontWeight: "bold" }}
                              className="ml-0"
                            >
                              Contract address
                            </MDBCardHeader> */}
                          <div className="mx-1 d-flex justify-content-between align-items-center">
                            <h4 className="font-weight-bold text-white h5 mt-2 mb-2">
                              Contract address
                            </h4>
                          </div>
                          <Form.Group id="chain">
                            <Form.Label>
                              Network/Chain
                              {/* <span
                                style={{ color: "red", fontSize: 15 }}
                                className="ml-2"
                              >
                                (Required)
                              </span> */}
                            </Form.Label>
                            <Form.Control
                              as="select"
                              required
                              ref={chainRef}
                              value={coin.chain}
                              disabled
                            >
                              <option></option>
                              {networOptions &&
                                networOptions.map((currentOption) => (
                                  <option
                                    value={currentOption.value}
                                    key={currentOption.value}
                                  >
                                    {currentOption.text}
                                  </option>
                                ))}
                            </Form.Control>
                          </Form.Group>
                          <Form.Group id="contAddress">
                            <Form.Label>
                              Contract Address
                              {/* <span
                                style={{ color: "red", fontSize: 15 }}
                                className="ml-2"
                              >
                                (Required)
                              </span> */}
                            </Form.Label>
                            <Form.Control
                              type="text"
                              ref={contAddressRef}
                              required
                              value={coin.contAddress}
                              disabled
                            />
                          </Form.Group>
                        </MDBCardBody>
                      </MDBCard>

                      <MDBCard
                        style={{
                          background: "#343a40",
                        }}
                        className="mt-3 mb-3 text-white"
                      >
                        <MDBCardBody>
                          {/* <MDBCardHeader
                              style={{ fontWeight: "bold" }}
                              className="ml-0"
                            >
                              Links
                            </MDBCardHeader> */}
                          <div className="mx-1 d-flex justify-content-between align-items-center">
                            <h4 className="font-weight-bold text-white h5 mt-2 mb-2">
                              Links
                            </h4>
                          </div>
                          <Form.Group id="website">
                            <Form.Label>Website</Form.Label>
                            <Form.Control
                              type="text"
                              ref={websiteRef}
                              value={coin.website}
                              disabled
                            />
                          </Form.Group>
                          <Form.Group id="audit">
                            <Form.Label>Audit</Form.Label>
                            <Form.Control
                              type="text"
                              ref={auditRef}
                              value={coin.audit}
                              disabled
                            />
                          </Form.Group>
                          <Form.Group id="telegram">
                            <Form.Label>
                              Telegram{" "}
                              {/* <span
                                style={{ color: "red", fontSize: 15 }}
                                className="ml-2"
                              >
                                (Required)
                              </span> */}
                            </Form.Label>
                            <Form.Control
                              type="text"
                              ref={telegramRef}
                              required
                              value={coin.telegram}
                              disabled
                            />
                          </Form.Group>
                          <Form.Group id="twitter">
                            <Form.Label>Twitter</Form.Label>
                            <Form.Control
                              type="text"
                              ref={twitterRef}
                              value={coin.twitter}
                              disabled
                            />
                          </Form.Group>
                          <Form.Group id="discord">
                            <Form.Label>Discord</Form.Label>
                            <Form.Control
                              type="text"
                              ref={discordRef}
                              value={coin.telegram}
                              disabled
                            />
                          </Form.Group>
                          <Form.Group id="reddit">
                            <Form.Label>Reddit</Form.Label>
                            <Form.Control
                              type="text"
                              ref={redditRef}
                              value={coin.reddit}
                              disabled
                            />
                          </Form.Group>
                          <Form.Group id="logo">
                            <Form.Label>
                              Logo URL{" "}
                              {/* <span
                                style={{ color: "red", fontSize: 15 }}
                                className="ml-2"
                              >
                                (Required)
                              </span> */}
                            </Form.Label>
                            <Form.Control
                              type="text"
                              ref={logoRef}
                              required
                              value={coin.logoRef}
                              disabled
                            />
                          </Form.Group>
                          <Form.Group id="dexToools">
                            <Form.Label>Dextools link</Form.Label>
                            <Form.Control
                              type="text"
                              ref={dexTooolsRef}
                              value={coin.dexToools}
                              disabled
                            />
                          </Form.Group>
                          <CDBBtn
                            color="black"
                            outline
                            className="btn-block my-3 mx-0"
                            type="submit"
                            style={{
                              fontWeight: "bold",
                              fontColor: "black",
                              borderColor: "white",
                              borderWidth: 1,
                              borderStyle: "solid",
                            }}
                          >
                            Submit
                          </CDBBtn>
                        </MDBCardBody>
                      </MDBCard>
                    </Form>
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

export default AdminReview;
