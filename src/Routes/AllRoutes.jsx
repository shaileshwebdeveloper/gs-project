import React from "react";
import { Route, Routes } from "react-router-dom";
import { Home } from "./Home";
import { Login } from "./Login";
import { Movies } from "./Movies";
import { Signup } from "./Signup";
import { CompanyInfo } from "./CompanyInfo";
import { PrivateRoute } from "../Components/PrivateRoute";

export const AllRoutes = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route
          path="/movies"
          element={
            <PrivateRoute>
              <Movies />
            </PrivateRoute>
          }
        />
        <Route
          path="/companyinfo"
          element={
            <PrivateRoute>
              <CompanyInfo />
            </PrivateRoute>
          }
        />
      </Routes>
    </div>
  );
};
