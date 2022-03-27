import React from "react";
import { MDBFooter, MDBContainer, MDBCol, MDBRow } from "mdb-react-ui-kit";
import { useHistory } from "react-router-dom";
import { CDBBtn } from "cdbreact";

const Footer = () => {
  const history = useHistory();
  const handleEditButton = () => {
    history.push("/editCoin");
  };

  // const handleSocialLogin = (url) => {
  //   history.push(url);
  // };

  return (
    <MDBFooter bgColor="dark" className="text-center text-white text-lg-left">
      <MDBContainer className="p-4 pb-0 w-100">
        <form action="">
          <MDBRow className="d-flex justify-content-center">
            <MDBCol size="auto" className="mb-4 mb-md-0" center>
              <CDBBtn
                className="m-3"
                color="black"
                outline
                circle
                style={{
                  fontWeight: "bold",
                  fontColor: "white",
                  borderColor: "white",
                  borderWidth: 1,
                  borderStyle: "solid",
                }}
                onClick={handleEditButton}
              >
                Edit Coin
              </CDBBtn>
              <CDBBtn
                color="black"
                className="m-0"
                outline
                // onClick={handleSocialLogin("www.facebook.com")}
              >
                <i className="fab fa-facebook-square fa-3x"></i>
              </CDBBtn>
              <CDBBtn
                color="black"
                className="m-0"
                outline
                // onClick={handleSocialLogin("www.google.com")}
              >
                <i className="fab fa-google-plus-square fa-3x"></i>
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
