import { SocialMediaIconsReact } from "social-media-icons-react";
import { CDBBtn } from "cdbreact";
import SocialMediaAuth from "../../config/SocialMediaAuth";
import { facebookProvider, googleProvider } from "../../config/AuthMethods";
import firebaseConfig from "../../config/FirebaseConfig";
import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import { loginSocialMedia } from "../../config/SocialMediaAuth";
import { useAuth } from "../contexts/AuthContext";

const SocialSignin = () => {
  const { handleSocialLogin } = useAuth();

  return (
    <>
      <div className="row my-3 d-flex justify-content-center">
        <CDBBtn
          color="black"
          className="m-0"
          outline
          onClick={handleSocialLogin("facebookProvider")}
        >
          <i className="fab fa-facebook-square fa-3x"></i>
        </CDBBtn>
        <CDBBtn
          color="white"
          className="m-0"
          outline
          onClick={handleSocialLogin("googleProvider")}
        >
          <i className="fab fa-google-plus-square fa-3x"></i>
        </CDBBtn>
      </div>
    </>
  );
};

export default SocialSignin;
