import { createContext, useContext, useState } from "react";
import { useNavigate } from "react-router-dom";

export const AuthContext = createContext();

export const AuthHandler = ({ children }) => {
  const localStorageToken = JSON.parse(localStorage.getItem("login"));

  const [token, setToken] = useState(localStorageToken?.token);

  const [currentUser, setCurrentUser] = useState(localStorageToken?.user);

  const navigate = useNavigate();

  const handleLogin = async (username, password) => {
    try {
      const response = await fetch("/api/auth/login", {
        method: "POST",
        body: JSON.stringify({ username, password }),
      });

      const { foundUser, encodedToken } = await response.json();

      localStorage.setItem(
        "login",
        JSON.stringify({ token: encodedToken, user: foundUser })
      );

      setToken(encodedToken);
      setCurrentUser(foundUser);
    } catch (error) {
      console.log(Error.message);
    }
  };

  const handleLogout = () => {
    localStorage.removeItem("login");
    setToken(null);
    setCurrentUser(null);

    navigate("/login");
  };

  console.log(token, currentUser);

  return (
    <AuthContext.Provider
      value={{
        token,
        currentUser,
        setCurrentUser,
        handleLogin,
        handleLogout,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
