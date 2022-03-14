import React from "react";
import { MDBFooter, MDBContainer, MDBCol, MDBRow } from "mdb-react-ui-kit";
import { useHistory } from "react-router-dom";
import { CDBBtn } from "cdbreact";
import { SocialMediaIconsReact } from "social-media-icons-react";

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
              <CDBBtn color="black" className="m-0">
                Edit Coin
              </CDBBtn>

              <CDBBtn
                color="black"
                className="m-0"
                outline
                // onClick={handleOnLoginClick(facebookProvider)}
              >
                <SocialMediaIconsReact
                  borderColor="white"
                  borderWidth="1"
                  borderStyle="solid"
                  icon="googleplus"
                  iconColor="rgba(255,255,255,1)"
                  backgroundColor="rgba(11,11,15,1)"
                  iconSize="5"
                  roundness="25%"
                  // url="/"
                  size="43"
                />
              </CDBBtn>
              <CDBBtn
                color="black"
                className="m-0"
                outline
                // onClick={handleOnLoginClick(facebookProvider)}
              >
                <SocialMediaIconsReact
                  borderColor="white"
                  borderWidth="1"
                  borderStyle="solid"
                  icon="facebook"
                  iconColor="rgba(255,255,255,1)"
                  backgroundColor="rgba(11,11,15,1)"
                  iconSize="5"
                  roundness="25%"
                  // url="/"
                  size="43"
                />
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
