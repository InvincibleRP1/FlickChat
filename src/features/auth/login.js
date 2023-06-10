import { useContext, useState, useEffect } from "react";
import { AuthContext } from "../../contexts/authContext";

import "../auth/auth.css";
import { useLocation, useNavigate } from "react-router-dom";

export const LoginPage = () => {
  const [formData, setFormData] = useState({
    username: "",
    password: "",
  });

  const { handleLogin, token } = useContext(AuthContext);

  const navigate = useNavigate();
  const location = useLocation();

  const loggingIn = () => {
    setFormData({
      username: "moviebuffrahul",
      password: "heythere234",
    });
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
        <label htmlFor="">
          <input
            type="text"
            onChange={(e) =>
              setFormData({ ...formData, username: e.target.value })
            }
            value={formData.username}
          />
          Enter Username
        </label>

        <label htmlFor="">
          <input
            type="password"
            name=""
            id=""
            onChange={(e) =>
              setFormData({ ...formData, password: e.target.value })
            }
            value={formData.password}
          />
          Enter Password
        </label>

        <button className="auth-action-btn" onClick={loggingIn}>
          Login
        </button>
      </div>
    </>
  );
};
