import React, { useRef, useState } from "react";
import { Form, Button, Card, Alert } from "react-bootstrap";
import { useAuth } from "../contexts/AuthContext";
import { Link } from "react-router-dom";
import { CDBBtn, CDBCard, CDBCardBody, CDBContainer } from "cdbreact";

const ForgotPassword = () => {
  const emailRef = useRef();
  const { resetPassword } = useAuth();
  const [error, setError] = useState("");
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);

  async function handleSubmit(e) {
    e.preventDefault();

    try {
      setMessage("");
      setError("");
      setLoading(true);
      await resetPassword(emailRef.current.value);
      setMessage("Check your inbox for further instructions");
    } catch {
      setError("Failed to reset password");
    }

    setLoading(false);
  }

  return (
    <>
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
              <p className="h5 mt-2 py-4 font-weight-bold">Password Reset</p>
            </div>
            <CDBCardBody className="mx-4">
              {error && <Alert variant="danger">{error}</Alert>}
              {message && <Alert variant="success">{message}</Alert>}
              <Form onSubmit={handleSubmit}>
                <Form.Group id="email">
                  <Form.Label className="mb-0">Email</Form.Label>
                  <Form.Control
                    type="email"
                    ref={emailRef}
                    required
                    className="mb-4"
                  />
                </Form.Group>
                <CDBBtn
                  color="dark"
                  outline
                  className="btn-block my-3 mx-0"
                  disabled={loading}
                  type="submit"
                >
                  Reset Password
                </CDBBtn>
                {/* <Button disabled={loading} className="w-100" type="submit">
                  Reset Password
                </Button> */}
              </Form>
              <div className="w-100 text-center mt-3">
                <Link to="/login">Login</Link>
              </div>

              <div className="w-100 text-center mt-2">
                Need an account? <Link to="/signup">Sign Up</Link>
              </div>
            </CDBCardBody>
          </CDBCard>
        </CDBContainer>
      </div>
    </>
  );
};

export default ForgotPassword;
