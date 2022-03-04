import React from "react";
import {
  MDBFooter,
  MDBContainer,
  MDBCol,
  MDBRow,
  MDBBtn,
  MDBIcon,
} from "mdb-react-ui-kit";

import { CDBBtn } from "cdbreact";

const Footer = () => {
  return (
    <MDBFooter bgColor="dark" className="text-center text-white text-lg-left">
      <MDBContainer className="p-4 pb-0">
        <form action="">
          <MDBRow className="d-flex justify-content-center">
            <MDBCol size="auto" className="mb-4 mb-md-0">
              <a
                href="/editCoin"
                className="text-decoration-none  mx-4"
                style={{ color: "inherit", marginRight: "10px" }}
              >
                <span
                  className="table-rem element-to-hide"
                  style={{ marginRight: "0.5rem" }}
                >
                  Edit Coin
                </span>

                <i className="fas fa-sign-in-alt fa-2x"></i>
              </a>
              <CDBBtn flat color="dark" className="py-1 px-2 bg-dark border-0">
                <i className="fab fa-instagram fa-2x"></i>
              </CDBBtn>
              <CDBBtn flat color="dark" className="py-1 px-2 bg-dark border-0">
                <i className="fab fa-facebook-f  fa-2x"></i>
              </CDBBtn>
              <CDBBtn flat color="dark" className="py-1 px-2 bg-dark border-0">
                <i className="fab fa-twitter  fa-2x"></i>
              </CDBBtn>
            </MDBCol>
          </MDBRow>
        </form>
      </MDBContainer>

      <div
        className="text-center p-3"
        style={{ backgroundColor: "rgba(0, 0, 0, 0.2)" }}
      >
        &copy; {new Date().getFullYear()} Copyright :{" "}
        <a className="text-white" href="https://mdbootstrap.com/">
          coinlisting.com
        </a>
      </div>
    </MDBFooter>
  );
};

export default Footer;
