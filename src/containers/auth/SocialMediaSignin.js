import { CDBBtn } from "cdbreact";
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
