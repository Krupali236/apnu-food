import React from "react";
import Button from "@mui/material/Button";
import { NavLink } from "react-router-dom";
const LoginBtn = ({ onClick, to, label = "login", type = "button" }) => {
  const button = (
    <Button
      variant="text"
      sx={{ marginRight: "20px" }}
      onClick={onClick}
      type={type}
    >
      {label}
    </Button>
  );
  return to ? <NavLink to={to}>{button}</NavLink> : button;
};

export default LoginBtn;
