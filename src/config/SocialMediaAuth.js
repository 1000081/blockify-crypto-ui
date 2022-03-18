import {
  getAuth,
  signInWithPopup,
  GoogleAuthProvider,
  FacebookAuthProvider,
} from "firebase/auth";

import { useHistory } from "react-router-dom";

const SocialMediaAuth = (authType) => {
  const auth = getAuth();
  const history = useHistory();

  console.log("authType==" + authType);

  console.log("authType==" + JSON.stringify(authType));

  return async () => {
    let provider = "";
    if (authType === "googleProvider") {
      provider = new GoogleAuthProvider();
      provider.addScope("https://www.googleapis.com/auth/contacts.readonly");
    } else if (authType === "facebookProvider") {
      provider = new FacebookAuthProvider();
      provider.setCustomParameters({
        display: "popup",
      });
    }

    signInWithPopup(auth, provider)
      .then((result) => {
        // This gives you a Google Access Token. You can use it to access the Google API.
        const credential =
          authType === "googleProvider"
            ? GoogleAuthProvider.credentialFromResult(result)
            : FacebookAuthProvider.credentialFromResult(result);
        const token = credential.accessToken;
        // The signed-in user info.
        const user = result.user;
        // ...

        console.log("response user ==" + JSON.stringify(result));

        history.push("/");

        return result;
      })
      .catch((error) => {
        // Handle Errors here.
        const errorCode = error.code;
        const errorMessage = error.message;
        // The email of the user's account used.
        const email = error.email;
        // The AuthCredential type that was used.
        const credential = GoogleAuthProvider.credentialFromError(error);
        // ...
      });
  };
};

export default SocialMediaAuth;
