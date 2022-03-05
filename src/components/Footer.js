import React from "react";
import { MDBFooter, MDBContainer, MDBCol, MDBRow } from "mdb-react-ui-kit";
import { useHistory } from "react-router-dom";
import { CDBBtn } from "cdbreact";

const Footer = () => {
  const history = useHistory();
  const handleEditButton = () => {
    history.push("/editCoin");
  };

  return (
    <MDBFooter bgColor="dark" className="text-center text-white text-lg-left">
      <MDBContainer className="p-4 pb-0">
        <form action="">
          <MDBRow className="d-flex justify-content-center">
            <MDBCol size="auto" className="mb-4 mb-md-0">
              <CDBBtn
                flat
                color="dark"
                className="py-1 px-2 bg-dark border-0"
                onClick={handleEditButton}
              >
                <span className="mx-2 mt-3">Edit Coin</span>
                <i className="fas fa-edit fa-2x"></i>
              </CDBBtn>
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
