import React, { useRef } from "react";
import InputFields from "../components/InputFields/InputFields";
import LoginBtn from "../components/Button/LoginBtn";
import SignupBtn from "../components/Button/SignupBtn";
import { Container, Box } from "@mui/material";

const Login = () => {
  const inputRef = useRef();
  const handleLoginBtn = () => {
    inputRef.current?.submit();
  };
  const onSubmit = (values) => {
    console.log("Login Values: ", values);
    alert("Login Successful!");
  };
  return (
    <div>
      <Container maxWidth="md" data-aos="fade-up" data-aos-duration="2000">
        <Box>
          <InputFields
            ref={inputRef}
            fieldsToShow={["email", "password"]}
            onSubmit={onSubmit}
            submitLabel="Login"
          />
        </Box>
        <Box sx={{ width: "78%", display: "flex", justifyContent: "flex-end" }}>
          <SignupBtn label="Login" type="button" onClick={handleLoginBtn} />
        </Box>
      </Container>
    </div>
  );
};

export default Login;
