import React from "react";
import Button from "@mui/material/Button";
import { NavLink } from "react-router-dom";
const LoginBtn = () => {
  return (
    <div>
        <NavLink to="/login">
      <Button variant="text" sx={{marginRight:"20px"}}>Login</Button>
        </NavLink>
    </div>
  );
};

export default LoginBtn;
