import { CDBCard, CDBCardBody, CDBBtn, CDBLink, CDBContainer } from "cdbreact";
import SocialSignin from "./SocialMediaSignin";
import React, { useRef, useState } from "react";
import { Form, Alert } from "react-bootstrap";
import { useAuth } from "../contexts/AuthContext";
import { useHistory } from "react-router-dom";

const Login = () => {
  const emailRef = useRef();
  const passwordRef = useRef();
  const { login, logout } = useAuth();
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const history = useHistory();

  function handleSubmit(e) {
    e.preventDefault();
    try {
      setError("");
      setLoading(true);
      login(emailRef.current.value, passwordRef.current.value)
        .then((response) => {
          if (response.user.emailVerified) {
            history.push("/");
          } else {
            logout();
            setError("Please finish email verification.");
          }
        })
        .catch((error) => {
          if (error.code === "auth/user-not-found") {
            setError("User not found");
          } else if (error.code === "auth/wrong-password") {
            setError("Invalid credential");
          } else {
            setError("Failed to log in");
          }
        });
    } catch (e) {
      console.log("error-----+e-" + e);
      setError("Failed to log in");
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
      <CDBContainer style={{ width: "30rem" }}>
        <CDBCard style={{ width: "30rem" }}>
          <div
            style={{ background: "black" }}
            className="text-center text-white"
          >
            <p className="h5 mt-2 py-4 font-weight-bold">Sign in</p>
          </div>
          <CDBCardBody className="mx-4">
            {error && <Alert variant="danger">{error}</Alert>}
            <Form onSubmit={handleSubmit}>
              <Form.Group id="email">
                <Form.Label>Email</Form.Label>
                <Form.Control type="email" ref={emailRef} required />
              </Form.Group>
              <Form.Group id="password">
                <Form.Label>Password</Form.Label>
                <Form.Control type="password" ref={passwordRef} required />
              </Form.Group>
              <div className="mt-5 d-flex flex-wrap justify-content-center align-items-center">
                <p className="m-0">Remember me</p>
                <CDBLink to="/forgotPassword">Forgot Password ?</CDBLink>
              </div>
              <CDBBtn
                color="dark"
                outline
                className="btn-block my-3 mx-0"
                disabled={loading}
                type="submit"
              >
                Sign in
              </CDBBtn>
            </Form>
            <p className="text-center">
              Not a member?{" "}
              <CDBLink className="d-inline p-0" to="/signup">
                Register
              </CDBLink>
            </p>
            <p className="text-center"> or sign in with</p>
            <SocialSignin />
          </CDBCardBody>
        </CDBCard>
      </CDBContainer>
    </div>
    // </div>
  );
};
export default Login;
