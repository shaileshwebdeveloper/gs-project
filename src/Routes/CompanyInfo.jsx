import React from "react";

export const CompanyInfo = () => {
  return (
    <div
      style={{
        boxShadow: "rgba(0, 0, 0, 0.35) 0px 5px 15px",
        width: "400px",
        margin: "auto",
        padding: "20px",
        marginTop: "20px",
      }}
    >
      <p>
        <span style={{ fontWeight: 800 }}>Company :</span> Geeksynergy
        Technologies Pvt Ltd
      </p>
      <p>
        <span style={{ fontWeight: 800 }}>Address :</span> Sanjayanagar,
        Bengaluru - 56
      </p>
      <p>
        <span style={{ fontWeight: 800 }}>Phone :</span> XXXXXXXXXX09
      </p>
      <p>
        <span style={{ fontWeight: 800 }}>Email:</span> XXXXXXXXXXX@gmail.com
      </p>
    </div>
  );
};
