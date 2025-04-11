import React from "react";
import Button from "@mui/material/Button";
import { NavLink } from "react-router-dom";

const SignupBtn = ({ onClick, to, label = "Signup", type = "button" }) => {
  const button = (
    <Button
      variant="contained"
      color="secondary"
      sx={{ color: "#fff !important", fontSize: "12px", padding: "10px 20px" }}
      onClick={onClick}
      type={type}
    >
      {label}
    </Button>
  );

  return to ? <NavLink to={to}>{button}</NavLink> : button;
};

export default SignupBtn;
