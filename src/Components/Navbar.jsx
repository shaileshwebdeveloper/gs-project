import React, { useContext, useEffect } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../Context/AuthContext";

export const Navbar = () => {
  const { state, handleLogout } = useContext(AuthContext);

  useEffect(() => {}, [state]);

  const baseStyle = {
    color: "white",
    textDecoration: "none",
  };

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "space-around",
        fontSize: "30px",
        textDecoration: "none",
        margin: "20px",
        color: "black",
        backgroundColor: "black",
      }}
    >
      <Link to="/" style={baseStyle}>
        HOME
      </Link>
      <Link to="/signup" style={baseStyle}>
        SIGNUP
      </Link>
      <Link to="/login" style={baseStyle} onClick={handleLogout}>
        {" "}
        {state.isAuth ? "LOGOUT" : "LOGIN"}{" "}
      </Link>
      <Link to="/movies" style={baseStyle}>
        MOVIES
      </Link>
      <Link to="/companyinfo" style={baseStyle}>
        COMPANY INFO
      </Link>
    </div>
  );
};
