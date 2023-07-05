import { createContext,  useState } from "react";
import {  useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

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
    toast.info("Logged Out")
  };

  //Signup

  const handleSignUp = async (firstName, lastName, email, username, password) => {
    try {
      const res = await fetch("/api/auth/signup", {
        method: "POST",
        body: JSON.stringify({ firstName, lastName, email, username, password }),
      });

      if (res.status === 200 || res.status === 201) {
        const { createdUser, encodedToken } = await res.json();
        localStorage.setItem(
          "signup",
          JSON.stringify({ token: encodedToken, user: createdUser })
        );
        setCurrentUser(createdUser);
        setToken(encodedToken);
        toast.success("Signed Up")
      }
    } catch (error) {
      console.log(error.message);
    }
  }; 


  return (
    <AuthContext.Provider
      value={{
        token,
        currentUser,
        setCurrentUser,
        handleLogin,
        handleLogout,
        handleSignUp
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
