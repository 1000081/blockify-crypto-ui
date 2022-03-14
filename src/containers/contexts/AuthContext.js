import React, { useContext, useState, useEffect } from "react";
import SocialMediaAuth from "../../config/SocialMediaAuth";
// import { auth } from "../firebase";
import {
  getAuth,
  signInWithPopup,
  GoogleAuthProvider,
  FacebookAuthProvider,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  sendPasswordResetEmail,
  onAuthStateChanged,
  sendEmailVerification,
} from "firebase/auth";

const AuthContext = React.createContext();

const auth = getAuth();

export function useAuth() {
  return useContext(AuthContext);
}

export function AuthProvider({ children }) {
  const [currentUser, setCurrentUser] = useState();
  const [loading, setLoading] = useState(true);

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
    return signInWithEmailAndPassword(auth, email, password);
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

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      setCurrentUser(user);
      setLoading(false);
    });

    return unsubscribe;
  }, []);

  const value = {
    currentUser,
    login,
    signup,
    logout,
    resetPassword,
    updateEmail,
    updatePassword,
    handleSocialLogin,
  };

  return (
    <AuthContext.Provider value={value}>
      {!loading && children}
    </AuthContext.Provider>
  );
}
