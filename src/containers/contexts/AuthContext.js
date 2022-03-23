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

import { useHistory } from "react-router-dom";
import ApiService from "../../api/ApiService";

const AuthContext = React.createContext();

// const auth = firebaseConfig.auth;

export function useAuth() {
  return useContext(AuthContext);
}

export function AuthProvider({ children }) {
  const [currentUser, setCurrentUser] = useState();
  const [loading, setLoading] = useState(true);
  const [cryptoUser, setCryptoUser] = useState();

  function signup(email, password) {
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        sendEmailVerification(userCredential.user);
        signOut(auth);
        alert("Email sent");
      })
      .catch(alert);
  }

  function login(email, password) {
    const response = signInWithEmailAndPassword(auth, email, password);

    if (!findCryptoUserByEmail(email)) {
      addCryptoUser({ email: email });
    }

    console.log("response====================>" + response);

    useHistory.push("/");
  }

  function logout() {
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

  const findCryptoUserByEmail = async (email) => {
    await ApiService.findAll("/users?email=" + email)
      .then((response) => {
        setCryptoUser(response.data);
        if (!response.data.email) {
          addCryptoUser({ email: response.data.email });
        }
        console.log(
          "findCryptoUserByEmail-----response" + JSON.stringify(response.data)
        );
        return response.data;
      })
      .catch((e) => {
        console.log(e);
      });

    return cryptoUser;
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
      console.log("Auth Details " + JSON.stringify(user));
      setCurrentUser(user);
      setLoading(false);
      if (user) {
        findCryptoUserByEmail(user.email);
        localStorage.setItem("TOKEN", user && user.stsTokenManager.accessToken);
      }
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
  };

  return (
    <AuthContext.Provider value={value}>
      {!loading && children}
    </AuthContext.Provider>
  );
}
