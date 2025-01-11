import React from "react";
import { Route } from "react-router-dom";
import Profile from "../UserPanel/User/Profile";

const UserRoutes = () => {
  return (
      <Route path="/user_panel/profile" element={<Profile />} />
  );
};

export default UserRoutes;
