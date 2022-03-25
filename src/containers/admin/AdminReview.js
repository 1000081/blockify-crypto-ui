import { CDBBtn } from "cdbreact";
import { MDBCard, MDBCardBody, MDBCol, MDBRow } from "mdb-react-ui-kit";
import React, { useEffect, useRef, useState } from "react";
import { Form } from "react-bootstrap";
import useBreakpoint from "../../components/Breakpoint";
import { networOptions, actionOptions } from "../coin/tableData";
import { useAuth } from "../contexts/AuthContext";
import { useCoin } from "../contexts/CoinContext";
import "react-datepicker/dist/react-datepicker.css";
import CoinModal from "../../components/CoinModal";

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
  const { coin, editCoin } = useCoin();
  const [open, setOpen] = useState(false);
  const [modelHead, setModelHead] = useState("");
  const [modelBody, setModelBody] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(e.target[4].value);
    // const populatedCoin = {
    //   name: nameRef.current.value,
    //   logo: logoRef.current.value,
    //   chain: chainRef.current.value,
    //   presale: presaleRef.current.value,
    //   description: descriptionRef.current.value,
    //   contAddress: contAddressRef.current.value,
    //   launchDt: e.target[4].value,
    //   marketCap: marketCapRef.current.value,
    //   price: priceRef.current.value,
    //   telegram: telegramRef.current.value,
    //   twitter: twitterRef.current.value,
    //   reddit: redditRef.current.value,
    //   discord: discordRef.current.value,
    //   dexToools: dexTooolsRef.current.value,
    //   symbol: symbolRef.current.value,
    //   website: websiteRef.current.value,
    //   audit: auditRef.current.value,
    //   addedBy: currentUser.email,
    //   action: actionRef.current.value,
    // };

    // if (passwordRef.current.value !== passwordConfirmRef.current.value) {
    //   return setError("Passwords do not match");
    // }

    try {
      let editPayload = {};

      if (actionRef.current.value === "A") {
        editPayload = {
          _id: selectedCoin._id,
          isNewCoin: "Y",
          isListed: "N",
        };
      } else if (actionRef.current.value === "R") {
        editPayload = {
          _id: selectedCoin._id,
          isRejectedCoin: "Y",
          isListed: "N",
        };
      } else if (actionRef.current.value === "P") {
        editPayload = {
          _id: selectedCoin._id,
          isPromoted: "Y",
          isListed: "N",
        };
      } else if (actionRef.current.value === "NOR") {
        editPayload = {
          _id: selectedCoin._id,
          isNormal: "Y",
          isListed: "N",
        };
      } else if (actionRef.current.value === "ATB") {
        editPayload = {
          _id: selectedCoin._id,
          isATB: "Y",
          isListed: "N",
        };
      }

      setError("");
      // setLoading(true);
      console.log(
        "validUser ------" + editPayload && JSON.stringify(editPayload)
      );
      editCoin(editPayload)
        .then((res) => {
          console.log("Add User ------" + JSON.stringify(res));
          // logout();
          setOpen(true);
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

  useEffect(() => {
    if (coin && coin.name !== "") {
      localStorage.setItem("coin", JSON.stringify(coin));
      setSelectedCoin(coin);
    } else {
      const coin = localStorage.getItem("coin");
      setSelectedCoin(coin && JSON.parse(coin));
    }
  }, []);

  const disableStyle = {
    background: "#cfd8dc",
    fontWeight: "bold",
  };

  const onCloseModal = () => {
    setOpen(false);
    // if (currentUser) {
    //   history.push("/");
    // }
  };

  return (
    <div className="dashboard d-flex" style={{ align: "center" }}>
      <CoinModal
        open={open}
        onCloseModal={onCloseModal}
        head={"Coin Approval"}
        body={"Coin updated successfully."}
      />
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

                            <Form.Group id="action">
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
                                ref={actionRef}
                                size="md"
                                style={{
                                  fontWeight: "bold",
                                }}
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
                              style={disableStyle}
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
                              value={selectedCoin.symbol}
                              required
                              disabled
                              style={disableStyle}
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
                              value={selectedCoin.description}
                              disabled
                              style={disableStyle}
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
                                selectedCoin.launchDt &&
                                new Date(
                                  selectedCoin.launchDt
                                ).toLocaleDateString()
                              }
                              disabled
                              style={disableStyle}
                            />
                          </Form.Group>
                          <Form.Group id="marketCap">
                            <Form.Label>Market Cap in USD</Form.Label>
                            <Form.Control
                              type="text"
                              ref={marketCapRef}
                              value={selectedCoin.marketCap}
                              disabled
                              style={disableStyle}
                            />
                          </Form.Group>
                          <Form.Group id="price">
                            <Form.Label>Price in USD</Form.Label>
                            <Form.Control
                              type="text"
                              ref={priceRef}
                              value={selectedCoin.price}
                              disabled
                              style={disableStyle}
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
                              value={selectedCoin.chain}
                              disabled
                              style={disableStyle}
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
                              value={selectedCoin.contAddress}
                              disabled
                              style={disableStyle}
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
                              value={selectedCoin.website}
                              disabled
                              style={disableStyle}
                            />
                          </Form.Group>
                          <Form.Group id="audit">
                            <Form.Label>Audit</Form.Label>
                            <Form.Control
                              type="text"
                              ref={auditRef}
                              value={selectedCoin.audit}
                              disabled
                              style={disableStyle}
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
                              value={selectedCoin.telegram}
                              disabled
                              style={disableStyle}
                            />
                          </Form.Group>
                          <Form.Group id="twitter">
                            <Form.Label>Twitter</Form.Label>
                            <Form.Control
                              type="text"
                              ref={twitterRef}
                              value={selectedCoin.twitter}
                              disabled
                              style={disableStyle}
                            />
                          </Form.Group>
                          <Form.Group id="discord">
                            <Form.Label>Discord</Form.Label>
                            <Form.Control
                              type="text"
                              ref={discordRef}
                              value={selectedCoin.telegram}
                              disabled
                              style={disableStyle}
                            />
                          </Form.Group>
                          <Form.Group id="reddit">
                            <Form.Label>Reddit</Form.Label>
                            <Form.Control
                              type="text"
                              ref={redditRef}
                              value={selectedCoin.reddit}
                              disabled
                              style={disableStyle}
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
                              value={selectedCoin.logoRef}
                              disabled
                              style={disableStyle}
                            />
                          </Form.Group>
                          <Form.Group id="dexToools">
                            <Form.Label>Dextools link</Form.Label>
                            <Form.Control
                              type="text"
                              ref={dexTooolsRef}
                              value={selectedCoin.dexToools}
                              disabled
                              style={disableStyle}
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
