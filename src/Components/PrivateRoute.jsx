import { useContext } from "react";
import { Navigate } from "react-router-dom";
import { AuthContext } from "../Context/AuthContext";

export const PrivateRoute = ({ children }) => {
  // logic to check if a user is auth
  const { state } = useContext(AuthContext);

  console.log("state", state);

  if (!state.isAuth) {
    return <Navigate to="/login" />;
  }

  return children;
};
