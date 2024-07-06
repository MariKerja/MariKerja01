import React, { useContext } from "react";
import { Navigate } from "react-router-dom";
import { UserContext } from "../../context/UserContext";

const ProtectedRoute = ({ children }) => {
  const { isSignedIn } = useContext(UserContext);

  if (isSignedIn() === false) {
    // Redirect to login page if not signed in,
    // replace={ true } is to replace the current entry in the history
    // stack so that the user won't be able to go back to the previous page
    return <Navigate to="/auth/login" replace={true} />;
  }

  return children;
};

export default ProtectedRoute;
