import {
  getAuth,
  signInWithPopup,
  GoogleAuthProvider,
  FacebookAuthProvider,
} from "firebase/auth";

const SocialMediaAuth = (authType) => {
  const auth = getAuth();

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

  // function signup(email, password) {
  //   return auth.createUserWithEmailAndPassword(email, password)
  // }

  // function login(email, password) {
  //   return auth.signInWithEmailAndPassword(email, password)
  // }

  // function logout() {
  //   return auth.signOut()
  // }

  // function resetPassword(email) {
  //   return auth.sendPasswordResetEmail(email)
  // }

  // function updateEmail(email) {
  //   return currentUser.updateEmail(email)
  // }

  // function updatePassword(password) {
  //   return currentUser.updatePassword(password)
  // }
};

export default SocialMediaAuth;
