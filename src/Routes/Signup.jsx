import React, { useEffect, useState } from "react";

export const Signup = () => {
  const [data, setData] = useState(
    JSON.parse(localStorage.getItem("users")) || [],
  );

  const [formState, setFormState] = useState({
    name: "",
    email: "",
    password: "",
    phone: "",
    profession: "Developer",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormState({ ...formState, [name]: value });
  };

  // console.log("FormState", formState);

  const handleSubmit = (e) => {
    e.preventDefault();

    const checkUser = data.filter((item) => {
      if (item.email === formState.email && item.phone === formState.phone) {
        return true;
      } else {
        return false;
      }
    });

    if (checkUser.length > 0) {
      alert("USER ALREADY EXIST");
    } else {
      setData([...data, formState]);
      alert("SIGNUP SUCCESSFUL");
    }
  };

  useEffect(() => {
    localStorage.setItem("users", JSON.stringify(data));
  }, [data]);

  console.log("data", data);

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
        <label style={{ fontWeight: "bold", padding: "20px" }}>NAME</label>
        <br />
        <input
          type="text"
          name="name"
          value={formState.name}
          onChange={handleChange}
          placeholder="Please Type Your Name"
          required
          style={{ marginBottom: "20px" }}
        />
        <br />
        <label
          style={{ fontWeight: "bold", marginTop: "20px", padding: "20px" }}
        >
          EMAIL
        </label>
        <br />
        <input
          style={{ marginBottom: "20px" }}
          type="email"
          name="email"
          value={formState.email}
          onChange={handleChange}
          placeholder="Please Type Your Email"
          required
        />
        <br />
        <label
          style={{ fontWeight: "bold", marginTop: "20px", padding: "20px" }}
        >
          PASSWORD
        </label>
        <br />
        <input
          type="password"
          name="password"
          onChange={handleChange}
          placeholder="Please Enter Your Password"
          required
          style={{ marginBottom: "20px" }}
        />
        <br />
        <label style={{ fontWeight: "bold" }}>PHONE NUMBER</label>
        <br />
        <input
          type="number"
          name="phone"
          onChange={handleChange}
          placeholder="Please Enter Your Phone Number"
          required
          style={{ marginBottom: "20px" }}
        />
        <br />
        <label style={{ fontWeight: "bold", padding: "20px" }}>
          PROFESSION
        </label>
        <br />
        <select
          name="profession"
          value={formState.profession}
          onChange={handleChange}
          required
        >
          <option value="developer">Developer</option>
          <option value="hr">HR</option>
          <option value="analyst">Analyst</option>
        </select>
        <br />
        <input type="submit" style={{ marginTop: "20px" }} />
      </form>
    </div>
  );
};
