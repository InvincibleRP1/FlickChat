import { AuthContext } from "../../contexts/authContext";
import { useContext } from "react";
import { Navigate, useLocation } from "react-router-dom";
import { toast } from "react-toastify";

export function PrivateRoute({ children }) {
    const { token } = useContext(AuthContext);
  
    const location = useLocation();
    
    // return token ? children : <Navigate to="/signin" state={{ from: location?.pathname }} />;
  
    if(token) {
      return children;
    }
  
    else {
      toast.warning("Please Sign In!");
      return (
        <Navigate to="/login" state={{ from: location?.pathname }} />
      )
    }
  }