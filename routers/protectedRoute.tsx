import { AuthContext } from "@/src/context/AuthProvider";
import React, { useContext } from "react";

const ProtectedRoute: React.FC<{ children: JSX.Element }> = ({ children }) => {
  const { token } = useContext(AuthContext);

  const isValidUser = () => {
    if (!token) {
      return true;
    } else {
      return false;
    }
  };
  //Redirecting to login page when current router is auth route
  return isValidUser() ? children : <div>Redirecting to login page</div>;
};

export default React.memo(ProtectedRoute);
