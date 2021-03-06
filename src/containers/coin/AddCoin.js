import React, { useState, useRef } from "react";
import "./Home.css";
import { CDBBtn } from "cdbreact";
import "react-datepicker/dist/react-datepicker.css";
import { useCoin } from "../contexts/CoinContext";
import { useAuth } from "../contexts/AuthContext";
import useBreakpoint from "../../components/Breakpoint";
import { networOptions } from "./tableData";
import "react-datepicker/dist/react-datepicker.css";
import DatePicker from "react-datepicker";
import { useHistory } from "react-router-dom";
import { MDBCard, MDBCardBody, MDBCol, MDBRow } from "mdb-react-ui-kit";
import { Button, Form, Modal, ModalBody } from "react-bootstrap";
import CoinModal from "../../components/CoinModal";

const AddCoin = () => {
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

  const [coin, setCoin] = useState({});
  const [error, setError] = useState({});
  const { currentUser } = useAuth();

  const [open, setOpen] = useState(false);
  const [modelHead, setModelHead] = useState("");
  const [modelBody, setModelBody] = useState("");

  const history = useHistory();

  const handleSubmit = (e) => {
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
      addedBy: currentUser ? currentUser.email : "",
    };

    // if (passwordRef.current.value !== passwordConfirmRef.current.value) {
    //   return setError("Passwords do not match");
    // }

    setError("");
    // setLoading(true);
    // console.log(
    //   "validUser ------" + populatedCoin && JSON.stringify(populatedCoin)
    // );
    if (currentUser && currentUser.emailVerified) {
      addCoin(populatedCoin);
      setModelHead("Review");
      setModelBody(
        "Your coin is in review process, will receive email once coin is reviewed."
      );
      setOpen(true);
      // setLoading(false);};
    } else {
      setModelHead("Login");
      setModelBody("Please log in to Add Coin.");
      setOpen(true);
    }
  };

  const point = useBreakpoint();

  const handleDatepickerChange = (value) => {
    setCoin({ ...coin, ["launchDt"]: value });
    // launchDtRef.current = value;
  };

  const onCloseModal = () => {
    setOpen(false);
    if (currentUser) {
      history.push("/");
    }
  };

  return (
    <>
      <CoinModal
        open={open}
        onCloseModal={onCloseModal}
        head={modelHead}
        body={modelBody}
      />

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
                            </div>
                            {/* <{error && <Alert variant="danger">{error}</Alert>} */}

                            <Form.Group id="name">
                              <Form.Label>
                                Name
                                <span
                                  style={{ color: "red", fontSize: 15 }}
                                  className="ml-2"
                                >
                                  (Required)
                                </span>
                              </Form.Label>
                              <Form.Control
                                type="text"
                                ref={nameRef}
                                required
                              />
                            </Form.Group>
                            <Form.Group id="symbol">
                              <Form.Label>
                                Symbol{" "}
                                <span
                                  style={{ color: "red", fontSize: 15 }}
                                  className="ml-2"
                                >
                                  (Required)
                                </span>
                              </Form.Label>
                              <Form.Control
                                type="text"
                                ref={symbolRef}
                                required
                              />
                            </Form.Group>
                            <Form.Group id="description">
                              <Form.Label>
                                Description
                                <span
                                  style={{ color: "red", fontSize: 15 }}
                                  className="ml-2"
                                >
                                  (Required)
                                </span>
                              </Form.Label>
                              <Form.Control
                                as="textarea"
                                required
                                rows={10}
                                ref={descriptionRef}
                              />
                            </Form.Group>
                            <Form.Group id="presale" className="mt-3 mb-3">
                              <Form.Check
                                type="checkbox"
                                ref={presaleRef}
                                label="Project in presale phase?"
                              />
                            </Form.Group>

                            <Form.Group id="launchDt" className="mt-3 mb-3">
                              <Form.Label>
                                Launch Date
                                <span
                                  style={{ color: "red", fontSize: 15 }}
                                  className="ml-2"
                                >
                                  (Required)
                                </span>
                              </Form.Label>
                              <DatePicker
                                selected={coin.launchDt}
                                onChange={handleDatepickerChange}
                                id="launchDt"
                                name="launchDt"
                                className="form-control"
                                label="Launch Date"
                                required
                                ref={launchDtRef}
                                // minDate={today}
                                customInput={
                                  <Form.Control
                                    id="launchDt"
                                    type="text"
                                    ref={launchDtRef}
                                    required
                                  />
                                }
                              />
                            </Form.Group>
                            <Form.Group id="marketCap">
                              <Form.Label>Market Cap in USD</Form.Label>
                              <Form.Control type="text" ref={marketCapRef} />
                            </Form.Group>
                            <Form.Group id="price">
                              <Form.Label>Price in USD</Form.Label>
                              <Form.Control type="text" ref={priceRef} />
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
                                <span
                                  style={{ color: "red", fontSize: 15 }}
                                  className="ml-2"
                                >
                                  (Required)
                                </span>
                              </Form.Label>
                              <Form.Control as="select" required ref={chainRef}>
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
                                <span
                                  style={{ color: "red", fontSize: 15 }}
                                  className="ml-2"
                                >
                                  (Required)
                                </span>
                              </Form.Label>
                              <Form.Control
                                type="text"
                                ref={contAddressRef}
                                required
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
                              <Form.Control type="text" ref={websiteRef} />
                            </Form.Group>
                            <Form.Group id="audit">
                              <Form.Label>Audit</Form.Label>
                              <Form.Control type="text" ref={auditRef} />
                            </Form.Group>
                            <Form.Group id="telegram">
                              <Form.Label>
                                Telegram{" "}
                                <span
                                  style={{ color: "red", fontSize: 15 }}
                                  className="ml-2"
                                >
                                  (Required)
                                </span>
                              </Form.Label>
                              <Form.Control
                                type="text"
                                ref={telegramRef}
                                required
                              />
                            </Form.Group>
                            <Form.Group id="twitter">
                              <Form.Label>Twitter</Form.Label>
                              <Form.Control type="text" ref={twitterRef} />
                            </Form.Group>
                            <Form.Group id="discord">
                              <Form.Label>Discord</Form.Label>
                              <Form.Control type="text" ref={discordRef} />
                            </Form.Group>
                            <Form.Group id="reddit">
                              <Form.Label>Reddit</Form.Label>
                              <Form.Control type="text" ref={redditRef} />
                            </Form.Group>
                            <Form.Group id="logo">
                              <Form.Label>
                                Logo URL{" "}
                                <span
                                  style={{ color: "red", fontSize: 15 }}
                                  className="ml-2"
                                >
                                  (Required)
                                </span>
                              </Form.Label>
                              <Form.Control
                                type="text"
                                ref={logoRef}
                                required
                              />
                            </Form.Group>
                            <Form.Group id="dexToools">
                              <Form.Label>Dextools link</Form.Label>
                              <Form.Control type="text" ref={dexTooolsRef} />
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
                              Add Coin
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
    </>
  );
};

export default AddCoin;
