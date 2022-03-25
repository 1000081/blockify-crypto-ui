import React, { useRef, useState } from "react";
import { CDBCard, CDBCardBody, CDBBtn, CDBLink, CDBContainer } from "cdbreact";
import SocialSignin from "./SocialMediaSignin";
import { useAuth } from "../contexts/AuthContext";

import { Form, Alert } from "react-bootstrap";
import { useHistory } from "react-router-dom";

const Register = () => {
  const { signup, logout, sendEmailVerification, addCryptoUser } = useAuth();

  const emailRef = useRef();
  const passwordRef = useRef();
  const passwordConfirmRef = useRef();

  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const history = useHistory();

  async function handleSubmit(e) {
    e.preventDefault();
    if (passwordRef.current.value !== passwordConfirmRef.current.value) {
      return setError("Passwords do not match");
    }
    try {
      setError("");
      setLoading(true);
      await signup(emailRef.current.value, passwordRef.current.value)
        .then((userCredential) => {
          addCryptoUser({ email: userCredential.user.email });
          sendEmailVerification(userCredential.user);
          setError(
            "Please confirm the email verification process before login."
          );
          logout();
          //history.push("/login");
        })
        .catch((error) => {
          if (error.code === "auth/email-already-in-use") {
            setError("Email already registered, Please login");
          } else {
            setError("Failed to create an account");
          }
        });
    } catch {
      setError("Failed to create an account");
    }

    setLoading(false);
  }

  return (
    <div
      style={{
        flex: "1 1 auto",
        display: "flex",
        flexFlow: "column",
        height: "100vh",
        overflowY: "hidden",
      }}
    >
      <CDBContainer
        style={{ width: "30rem", align: "center", overflow: "auto" }}
      >
        <CDBCard>
          <div
            className="text-center text-white"
            style={{ background: "black", align: "center" }}
          >
            <p className="h5 mt-2 py-4 font-weight-bold"> Sign up </p>
          </div>
          {error && <Alert variant="danger">{error}</Alert>}
          <CDBCardBody className="mx-4 center">
            <Form onSubmit={handleSubmit}>
              <div className="form-row mb-n4">
                {/* <div className="col">
                <CDBInput
                  label="First name"
                  type="text"
                  onChange={handleInputChange}
                />
              </div>
              <div className="col">
                <CDBInput
                  label="Last name"
                  type="text"
                  onChange={handleInputChange}
                />
              </div> */}
              </div>
              {/* <CDBInput
                label="E-mail"
                type="email"
                name="email"
                onChange={handleInputChange}
              />
              <p
                className={
                  hasError("email")
                    ? "text-error mt-0 mb-0"
                    : "hidden  mt-0 mb-0"
                }
              >
                * Required
              </p>*/}
              <br></br>
              <Form.Group id="email">
                <Form.Label style={{ fontSize: 20 }}>Email</Form.Label>
                <Form.Control
                  type="email"
                  ref={emailRef}
                  required
                  className="input-md"
                />
              </Form.Group>
              <br></br>

              <Form.Group id="password">
                <Form.Label>Password</Form.Label>
                <Form.Control type="password" ref={passwordRef} required />
              </Form.Group>
              <p className="text-muted text-center small mt-0 mb-4">
                At least 8 characters and 1 digit
              </p>

              <Form.Group id="password-confirm">
                <Form.Label>Password Confirmation</Form.Label>
                <Form.Control
                  type="password"
                  ref={passwordConfirmRef}
                  required
                />
              </Form.Group>

              <CDBBtn
                color="dark"
                outline
                className="btn-block my-3 mx-0"
                type="submit"
                disabled={loading}
                // onClick={() => handleSubmitButtonClick()}
              >
                Sign up
              </CDBBtn>
              <p className="text-center"> or sign up with</p>
              <div className="row mb-3 d-flex justify-content-center">
                <SocialSignin />
              </div>
              <p className="text-center m-0">
                Already have an account?{" "}
                <CDBLink className="d-inline p-0" to="/login">
                  Sign In
                </CDBLink>
              </p>
              <hr />
              <p className="text-center">
                By clicking <em>Sign up</em> you agree to our{" "}
                <CDBLink className="d-inline p-0" to="#">
                  terms of service
                </CDBLink>
              </p>
            </Form>
          </CDBCardBody>
        </CDBCard>
      </CDBContainer>
    </div>
    // <>
    //   <div
    //     style={{
    //       flex: "1 1 auto",
    //       display: "flex",
    //       flexFlow: "column",
    //       height: "100vh",
    //       overflowY: "hidden",
    //     }}
    //   >
    //     <CDBContainer
    //       style={{ width: "30rem", align: "center", overflow: "auto" }}
    //     >
    //       <Card>
    //         <Card.Body>
    //           <h2 className="text-center mb-4">Sign Up</h2>
    //           {error && <Alert variant="danger">{error}</Alert>}
    //           <Form onSubmit={handleSubmit}>
    //             <Form.Group id="email">
    //               <Form.Label>Email</Form.Label>
    //               <Form.Control type="email" ref={emailRef} required />
    //             </Form.Group>
    //             <Form.Group id="password">
    //               <Form.Label>Password</Form.Label>
    //               <Form.Control type="password" ref={passwordRef} required />
    //             </Form.Group>
    //             <Form.Group id="password-confirm">
    //               <Form.Label>Password Confirmation</Form.Label>
    //               <Form.Control
    //                 type="password"
    //                 ref={passwordConfirmRef}
    //                 required
    //               />
    //             </Form.Group>
    //             <Button disabled={loading} className="w-100" type="submit">
    //               Sign Up
    //             </Button>
    //           </Form>
    //         </Card.Body>
    //       </Card>
    //       <div className="w-100 text-center mt-2">
    //         Already have an account? <Link to="/login">Log In</Link>
    //       </div>
    //     </CDBContainer>
    //   </div>
    // </>
  );
};
export default Register;
