import { SocialMediaIconsReact } from "social-media-icons-react";
import {
  CDBInput,
  CDBCard,
  CDBCardBody,
  CDBBtn,
  CDBLink,
  CDBContainer,
} from "cdbreact";
const SocialSignin = () => {
  return (
    <>
      <div className="row my-3 d-flex justify-content-center">
        <CDBBtn color="black" className="m-0" outline>
          <SocialMediaIconsReact
            borderColor="rgba(0,0,0,0.25)"
            borderWidth="1"
            borderStyle="solid"
            icon="facebook"
            iconColor="rgba(255,255,255,1)"
            backgroundColor="rgba(11,11,15,1)"
            iconSize="5"
            roundness="25%"
            url="/"
            size="43"
          />
        </CDBBtn>
        <CDBBtn color="white" className="m-0" outline>
          <i className="fab fa-google"></i>
        </CDBBtn>
        <CDBBtn color="white" className="m-0" outline>
          <SocialMediaIconsReact
            borderColor="rgba(0,0,0,0.25)"
            borderWidth="1"
            borderStyle="solid"
            icon="linkedin"
            iconColor="rgba(255,255,255,1)"
            backgroundColor="rgba(11,11,15,1)"
            iconSize="5"
            roundness="25%"
            url="/"
            size="43"
          />
        </CDBBtn>
        <CDBBtn color="white" className="m-0" outline>
          <SocialMediaIconsReact
            borderColor="rgba(0,0,0,0.25)"
            borderWidth="1"
            borderStyle="solid"
            icon="twitter"
            iconColor="rgba(255,255,255,1)"
            backgroundColor="rgba(11,11,15,1)"
            iconSize="5"
            roundness="25%"
            url="/"
            size="43"
          />
        </CDBBtn>
      </div>
    </>
  );
};

export default SocialSignin;
