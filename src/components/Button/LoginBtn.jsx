import React from "react";
import Button from "@mui/material/Button";
import { NavLink } from "react-router-dom";
const LoginBtn = ({ onClick, to, label = "login", type = "button" }) => {
  const button = (
    <Button
      variant="text"
      sx={{
        color: "#676767 !important",
        fontWeight: 500,
        marginRight: "20px",
        "&:hover": { color: "#F16214 !important" },
      }}
      onClick={onClick}
      type={type}
    >
      {label}
    </Button>
  );
  return to ? <NavLink to={to}>{button}</NavLink> : button;
};

export default LoginBtn;
