import "../auth/auth.css";
import { useContext, useState, useEffect } from "react";
import { AuthContext } from "../../contexts/authContext";
import { NavLink } from "react-router-dom";
import { useLocation, useNavigate } from "react-router-dom";
import { TopNavigation } from "../../components/navbar/navbar";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye, faEyeSlash } from "@fortawesome/free-solid-svg-icons";

export const SignUpPage = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    username: "",
    password: "",
    confirmedPassword: "",
  });

  const { handleSignUp, token } = useContext(AuthContext);

  const [showPassword, setShowPassword] = useState(false);

  const navigate = useNavigate();
  const location = useLocation();

  const passwordToggle = () => {
    setShowPassword((prevVal) => !prevVal);
  };

  useEffect(() => {
    if (token) {
      navigate(location?.state?.from?.pathname || "/");
    }
  }, [token]);

  const handlingSignUp = () => {
    const {
      firstName,
      lastName,
      email,
      username,
      password,
      confirmedPassword,
    } = formData;

    if (
      firstName !== "" &&
      lastName !== "" &&
      email !== "" &&
      username !== "" &&
      password !== "" &&
      confirmedPassword !== ""
    ) {
      {
        if (password === confirmedPassword && email.includes("@")) {
          handleSignUp(
            firstName,
            lastName,
            email,
            username,
            password,
            confirmedPassword
          );
        } else if (!email.includes("@")) {
          console.log("Invalid Email!");
        } else if (password !== confirmedPassword) {
          console.log("Passwords don't match!");
        }
      }
    } else {
      console.log("Fields cannot be empty!");
    }
  };

  return (
    <>
      <div className="login-area">
        <TopNavigation />
        <div className="login-container">
          <h3>Sign Up</h3>
          <div className="input-area">
            <input
              type="text"
              onChange={(e) =>
                setFormData({ ...formData, firstName: e.target.value })
              }
              value={formData.firstName}
              placeholder="Enter Firstname"
              className="login-input-field"
            />

            <input
              type="text"
              onChange={(e) =>
                setFormData({ ...formData, lastName: e.target.value })
              }
              value={formData.lastName}
              placeholder="Enter Lastname"
              className="login-input-field"
            />

            <input
              type="email"
              onChange={(e) =>
                setFormData({ ...formData, email: e.target.value })
              }
              value={formData.email}
              placeholder="Enter email"
              className="login-input-field"
            />

            <input
              type="text"
              onChange={(e) =>
                setFormData({ ...formData, username: e.target.value })
              }
              value={formData.username}
              placeholder="Enter username"
              className="login-input-field"
            />

            <input
              type={showPassword ? "text" : "password"}
              placeholder="Enter your password"
              className="login-input-field"
              onChange={(e) =>
                setFormData({ ...formData, password: e.target.value })
              }
            />

            {showPassword ? (
              <FontAwesomeIcon
                className="password-hide-toggle"
                icon={faEyeSlash}
                onClick={() => setShowPassword((val) => !val)}
              />
            ) : (
              <FontAwesomeIcon
                className="password-hide-toggle"
                icon={faEye}
                onClick={() => setShowPassword((val) => !val)}
              />
            )}

            <input
              type={showPassword ? "text" : "password"}
              placeholder=" Confirm password"
              className="login-input-field"
              onChange={(e) =>
                setFormData({
                  ...formData,
                  confirmedPassword: e.target.value,
                })
              }
            />

            {showPassword ? (
              <FontAwesomeIcon
                className="password-hide-toggle-confirm"
                icon={faEyeSlash}
                onClick={() => setShowPassword((val) => !val)}
              />
            ) : (
              <FontAwesomeIcon
                className="password-hide-toggle-confirm"
                icon={faEye}
                onClick={() => setShowPassword((val) => !val)}
              />
            )}
          </div>

          <div className="signin-buttons">
            <button className="auth-action-btn"
            onClick={handlingSignUp}
            >Sign Up</button>
          </div>

          <NavLink className="account-navigate" to="/login">
            Already have an account? Log In
          </NavLink>
        </div>
      </div>
    </>
  );
};
