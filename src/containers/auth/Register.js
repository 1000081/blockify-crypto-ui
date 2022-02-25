import React from "react";
import {
  CDBInput,
  //   CDBCheckbox,
  CDBCard,
  CDBCardBody,
  //   CDBIcon,
  CDBBtn,
  CDBLink,
  CDBContainer,
} from "cdbreact";
import SocialSignin from "./SocialMediaSignin";

const Register = () => {
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
          <CDBCardBody className="mx-4 center">
            <div className="form-row mb-n4">
              <div className="col">
                <CDBInput label="First name" type="text" />
              </div>
              <div className="col">
                <CDBInput label="Last name" type="text" />
              </div>
            </div>
            <CDBInput label="E-mail" type="email" />
            <p className="text-muted text-center small mt-n4">
              At least 8 characters and 1 digit
            </p>
            <CDBInput label="Password" type="password" />
            <CDBBtn color="dark" outline className="btn-block my-3 mx-0">
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
          </CDBCardBody>
        </CDBCard>
      </CDBContainer>
    </div>
  );
};
export default Register;
