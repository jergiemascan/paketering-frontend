import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="nav">
      <Link to="/signin">Sign in</Link>
      <Link to="/register">Register</Link>
    </div>
  );
};

export default Navbar;
