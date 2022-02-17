import React from "react";
import {
  CDBInput,
  CDBCard,
  CDBCardBody,
  CDBBtn,
  CDBLink,
  CDBContainer,
} from "cdbreact";
// import { SocialMediaIconsReact } from "social-media-icons-react";
import SocialSignin from "./SocialMediaSignin";

const Login = () => {
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
            <CDBInput label="Email" type="email" />
            <CDBInput label="Password" type="password" />
            <div className="mt-5 d-flex flex-wrap justify-content-center align-items-center">
              <p className="m-0">Remember me</p>
              <CDBLink to="#">Forgot Password ?</CDBLink>
            </div>
            <CDBBtn color="dark" outline className="btn-block my-3 mx-0">
              Sign in
            </CDBBtn>
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
