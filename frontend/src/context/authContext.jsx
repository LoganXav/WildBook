import { createContext, useEffect, useState } from "react";
import { makeRequest } from "../makeRequest";

export const AuthContext = createContext();

export const AuthContextProvider = ({ children }) => {

  const [currentUser, setCurrentUser] = useState(
    JSON.parse(localStorage.getItem("user")) || null
  );
  const [sub, setSub] = useState("")
  const signin = async ({ username2, password2 }) => {
    const res = await makeRequest.post("/auth/signin", {
      name: username2,
      password: password2,
    }, { withCredentials: true });
    setCurrentUser(res.data.data);
  };
  const signup = async ({ email, username, password }) => {
    const res = await makeRequest.post("/auth/signup", {
      email: email,
      name: username,
      password: password,
    }, { withCredentials: true });
    setCurrentUser(res.data.data);
  };
  const logout = async () => {
    const res = await makeRequest.post("/auth/logout", { withCredentials: true });
    setCurrentUser(null);
  };
  const userPlan = async () => {
    const res = await makeRequest.get("/auth/sub", { withCredentials: true });
    setSub(res.data);
    console.log(sub)
  };

  useEffect(() => {
    localStorage.setItem("user", JSON.stringify(currentUser));
  }, [currentUser]);

  return (
    <AuthContext.Provider value={{ currentUser, signin, signup, logout, sub, userPlan }}>
      {children}
    </AuthContext.Provider>
  );
};
