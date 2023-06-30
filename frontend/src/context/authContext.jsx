import { createContext, useEffect, useState } from "react";
import { makeRequest } from "../makeRequest";

export const AuthContext = createContext();

export const AuthContextProvider = ({ children }) => {

  const [currentUser, setCurrentUser] = useState(
    JSON.parse(localStorage.getItem("user")) || null
  );
  const signin = async ({ username2, password2 }) => {
    const res = await makeRequest.post("/auth/signin", {
      name: username2,
      password: password2,
    });
    console.log(res)
    setCurrentUser(res.data.data);
  };
  const signup = async ({ email, username, password }) => {
    const res = await makeRequest.post("/auth/signup", {
      email: email,
      name: username,
      password: password,
    });
    setCurrentUser(res.data.data);
  };
  const logout = async () => {
    const res = await makeRequest.post("/auth/logout");
    setCurrentUser(null);
  };

  useEffect(() => {
    localStorage.setItem("user", JSON.stringify(currentUser));
  }, [currentUser]);

  return (
    <AuthContext.Provider value={{ currentUser, signin, signup, logout }}>
      {children}
    </AuthContext.Provider>
  );
};
