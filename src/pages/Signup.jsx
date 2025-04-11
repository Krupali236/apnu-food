import React, { useRef } from "react";
import InputFields from "../components/InputFields/InputFields";
import SignupBtn from "../components/Button/SignupBtn";
import { Box, Container } from "@mui/material";

const Signup = () => {
  const inputRef = useRef();

  const handleSignupBtn = () => {
    inputRef.current?.submit(); // this triggers the validation and submit
  };

  const onSubmit = (values) => {
    console.log("Signup Values: ", values);
    alert("Signup Successful!");
  };

  return (
    <div>
      <Container maxWidth="md" data-aos="fade-up" data-aos-duration="2000">
        <Box>
          <InputFields
            ref={inputRef}
            fieldsToShow={["name", "email", "number", "password"]}
            onSubmit={onSubmit}
            submitLabel="Signup"
          />
        </Box>
        <Box sx={{ width: "78%", display: "flex", justifyContent: "flex-end" }}>
          <SignupBtn label="Signup" type="button" onClick={handleSignupBtn} />
        </Box>
      </Container>
    </div>
  );
};

export default Signup;
