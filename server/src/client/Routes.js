import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import UsersList from "./components/UsersList";

export default () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/users" element={<UsersList />} />
    </Routes>
  );
};
