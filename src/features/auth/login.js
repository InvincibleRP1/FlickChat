import { useContext, useState, useEffect } from "react";
import { AuthContext } from "../../contexts/authContext";
import { NavLink } from "react-router-dom";
import { toast } from "react-toastify";

import "../auth/auth.css";
import { useLocation, useNavigate } from "react-router-dom";
import { TopNavigation } from "../../components/navbar/navbar";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye, faEyeSlash } from "@fortawesome/free-solid-svg-icons";

export const LoginPage = () => {
  const [formData, setFormData] = useState({
    username: "",
    password: "",
  });

  const { handleLogin, token } = useContext(AuthContext);

  const [showPassword, setShowPassword] = useState(false);

  const navigate = useNavigate();
  const location = useLocation();

  const guestloggingIn = () => {
    setFormData((formVal) => ({
      ...formVal,
      username: "moviebuffrahul",
      password: "heythere234",
    })
    
    );

    toast.success("Login Successful!");
  };

  const loggingIn = () => {
    if(formData?.username !== "" && formData?.password !== "")
    {
      handleLogin(formData.username, formData.password);
      toast.success("Login Successful!");
    }
    
  }

  const passwordToggle = () => {
    setShowPassword((prevVal) => !prevVal);
  };

  useEffect(() => {
    if (token) {
      navigate(location?.state?.from?.pathname || "/");
    }
  }, [token]);

  useEffect(() => {
    handleLogin(formData.username, formData.password);
  }, [formData.username, formData.password]);

  return (
    <>
      <div className="login-area">
        <TopNavigation />
        <div className="login-container">
          <h3>Login</h3>
          <div className="input-area">
            <input
              type="text"
              onChange={(e) =>
                setFormData({ ...formData, username: e.target.value })
              }
              value={formData.username}
              placeholder="Enter Username"
              className="login-input-field"
            />

            <input
              type={showPassword ? "text" : "password"}
              name=""
              id=""
              onChange={(e) =>
                setFormData({ ...formData, password: e.target.value })
              }
              value={formData.password}
              placeholder="Enter Password"
              className="login-input-field"
            />

            {showPassword ? (
              <FontAwesomeIcon
                icon={faEyeSlash}
                className="password-visibility-toggle"
                onClick={passwordToggle}
              />
            ) : (
              <FontAwesomeIcon
                icon={faEye}
                className="password-visibility-toggle"
                onClick={passwordToggle}
              />
            )}
          </div>

          <div className="signin-buttons">
            <button className="auth-action-btn"
            onClick={loggingIn}
            >Log In</button>
            <button className="auth-action-btn" onClick={guestloggingIn}>
              Login with test credentials
            </button>
          </div>

          <NavLink className="account-navigate" to="/signup">
          Create new account
        </NavLink>
        </div>
      </div>
    </>
  );
};
