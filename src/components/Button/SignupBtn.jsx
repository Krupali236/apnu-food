import React from "react";
import Button from "@mui/material/Button";
import { NavLink } from "react-router-dom";
const SignupBtn = () => {
  return (
    <div>
        <NavLink to="/signup">
      <Button
        variant="contained"
        color="secondary"
        sx={{ color: "#fff !important", fontSize: "12px" ,padding:"10px 20px"}}
      >
        Signup
      </Button>
        </NavLink>
    </div>
  );
};

export default SignupBtn;
