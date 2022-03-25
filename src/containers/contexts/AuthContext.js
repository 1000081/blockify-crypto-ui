import React, { useContext, useState, useEffect } from "react";
import SocialMediaAuth from "../../config/SocialMediaAuth";
import { auth } from "../../config/FirebaseConfig";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  sendPasswordResetEmail,
  onAuthStateChanged,
  sendEmailVerification,
} from "firebase/auth";

import ApiService from "../../api/ApiService";

const AuthContext = React.createContext();

export function useAuth() {
  return useContext(AuthContext);
}

export function AuthProvider({ children }) {
  const [currentUser, setCurrentUser] = useState();
  const [loading, setLoading] = useState(true);
  const [cryptoUser, setCryptoUser] = useState({});

  function signup(email, password) {
    return createUserWithEmailAndPassword(auth, email, password);
  }

  async function login(email, password) {
    return signInWithEmailAndPassword(auth, email, password);
  }

  function logout() {
    localStorage.removeItem("cryptoUser");
    return signOut(auth);
  }

  function resetPassword(email) {
    return sendPasswordResetEmail(auth, email);
  }

  function updateEmail(email) {
    return currentUser.updateEmail(email);
  }

  function updatePassword(password) {
    return currentUser.updatePassword(password);
  }

  function handleSocialLogin(authType) {
    return SocialMediaAuth(authType);
  }

  const addCryptoUser = (user) => {
    ApiService.save("users", user)
      .then((response) => {
        console.log("-----addCryptoUser" + response.data);
      })
      .catch((e) => {
        console.log(e);
      });
  };

  const findCryptoUserByEmail = (email) => {
    ApiService.findAll("/users?email=" + email)
      .then((response) => {
        setCryptoUser(response.data);
        console.log(
          "AuthContext-----findCryptoUserByEmail" +
            JSON.stringify(response.data)
        );
        localStorage.setItem("cryptoUser", JSON.stringify(response.data));
        return response.data;
      })
      .catch((e) => {
        console.log(e);
      });
  };

  const editCryptoUser = (user) => {
    ApiService.update("users", user._id, user)
      .then((response) => {
        console.log(
          "editCryptoUser-----response" + JSON.stringify(response.data)
        );
      })
      .catch((e) => {
        console.log(e);
      });
  };

  const voteCryptoUser = (user) => {
    ApiService.update("users/vote", user._id, user)
      .then((response) => {
        console.log(
          "editCryptoUser-----response" + JSON.stringify(response.data)
        );
      })
      .catch((e) => {
        console.log(e);
      });
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      // console.log("Auth Details " + JSON.stringify(user));
      setCurrentUser(user);
      setLoading(false);
      console.log("======Before findCryptoUserByEmail Call============");
      if (user) {
        findCryptoUserByEmail(user.email);
        localStorage.setItem("TOKEN", user && user.stsTokenManager.accessToken);
      }
      console.log("======After findCryptoUserByEmail Call============");
    });
    return unsubscribe;
  }, []);

  const value = {
    currentUser,
    cryptoUser,
    login,
    signup,
    logout,
    resetPassword,
    updateEmail,
    updatePassword,
    handleSocialLogin,
    addCryptoUser,
    findCryptoUserByEmail,
    editCryptoUser,
    voteCryptoUser,
    sendEmailVerification,
    setCryptoUser,
  };

  return (
    <AuthContext.Provider value={value}>
      {!loading && children}
    </AuthContext.Provider>
  );
}
