import React, { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../Context/AuthContext";

export const Login = () => {
  const [users, setUsers] = useState([]);

  const auth = useContext(AuthContext);

  const [formState, setFormState] = useState({
    email: "",
    password: "",
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormState({ ...formState, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const checkUser = users.filter((item) => {
      if (
        item.email === formState.email &&
        item.password === formState.password
      ) {
        return true;
      } else {
        return false;
      }
    });

    if (checkUser.length > 0) {
      alert("LOGIN SUCCESSFUL");
      auth.handleLogin();
      navigate("/movies");
    } else {
      alert("Invalid User, Please Signup");
    }
  };

  useEffect(() => {
    const items = JSON.parse(localStorage.getItem("users"));
    if (items) {
      setUsers(items);
    }
  }, []);

  return (
    <div
      style={{
        width: "500px",
        boxShadow: "rgba(0, 0, 0, 0.35) 0px 5px 15px",
        margin: "auto",
        padding: "20px",
      }}
    >
      <form onSubmit={handleSubmit}>
        <label style={{ fontWeight: "bold", padding: "20px" }}> EMAIL </label>
        <br />
        <input
          style={{ marginBottom: "20px" }}
          type="email"
          name="email"
          value={formState.email}
          onChange={handleChange}
          placeholder="Please Enter Your Email"
          required
        />
        <br />

        <label style={{ fontWeight: "bold", padding: "20px" }}>
          {" "}
          PASSWORD{" "}
        </label>
        <br />
        <input
          style={{ marginBottom: "20px" }}
          type="password"
          name="password"
          value={formState.password}
          onChange={handleChange}
          placeholder="Please Enter Your Password"
          required
        />
        <br />
        <input type="submit" name="" id="" />
      </form>
    </div>
  );
};
