import React, { useContext, useState, useEffect } from "react";
import {
  getAuth,
  onAuthStateChanged,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  sendPasswordResetEmail,
  updateEmail,
  updatePassword,
} from "firebase/auth";
import { app } from "../firebase";

// TO DO: Reauth user if they change email and password at the same time

const AuthContext = React.createContext();

export function useAuth() {
  return useContext(AuthContext);
}

export default function AuthProvider({ children }) {
  const auth = getAuth(app);
  const [currentUser, setCurrentUser] = useState();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      setCurrentUser(user);
      setLoading(false);
    });

    return unsubscribe;
  }, [auth]);

  function signup(email, password) {
    return createUserWithEmailAndPassword(auth, email, password);
  }

  function login(email, password) {
    return signInWithEmailAndPassword(auth, email, password);
  }

  function logout(email, password) {
    return signOut(auth, email, password);
  }

  function resetPassword(email) {
    return sendPasswordResetEmail(auth, email);
  }

  function changeEmail(email) {
    return updateEmail(auth.currentUser, email);
  }

  function changePassword(password) {
    return updatePassword(auth.currentUser, password);
  }

  // function reauth() {
  //   const cred = app.auth.EmailAuthProvider.credential(
  //     currentUser.email,
  //     currentUser.password
  //   );
  //   return reauthenticateWithCredential(currentUser, cred);
  // }

  const value = {
    currentUser,
    signup,
    login,
    logout,
    resetPassword,
    changeEmail,
    changePassword,
    // reauth,
  };
  return (
    <AuthContext.Provider value={value}>
      {!loading && children}
    </AuthContext.Provider>
  );
}
