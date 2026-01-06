import {
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signOut,
} from "firebase/auth";
import { AuthContext } from "../Context/AuthContext";
import { auth } from "../Firebase/firebase.init";
import { useEffect, useState } from "react";

const AuthProvider = ({ children }) => {
  const [loading, setLoading] = useState(true);
  const [user, setUser] = useState(null);

  const createUser = (email, password) => {
    setLoading(true);
    return createUserWithEmailAndPassword(auth, email, password);
  };

  const loginUser = (email, password) => {
    setLoading(true);
    return signInWithEmailAndPassword(auth, email, password);
  };

  useEffect(() => {
    const unSubscribe = onAuthStateChanged(auth, (currentUser) => {
      console.log(currentUser, "user ");
      setUser(currentUser);
      setLoading(false);
    });
    return () => unSubscribe();
  }, []);

  const logOut = () => {
    return signOut(auth);
  };

  const userInfo = {
    logOut,
    setLoading,
    createUser,
    loginUser,
    user,
    loading,
  };

  return <AuthContext value={userInfo}>{children}</AuthContext>;
};

export default AuthProvider;
