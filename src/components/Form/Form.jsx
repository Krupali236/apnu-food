import { Container, Typography, Box, Grid, Button } from "@mui/material";
import React, { useRef, useState } from "react";
import TextField from "@mui/material/TextField";
const Form = () => {
  const [values, setValues] = useState({});
  const [errors, setErrors] = useState({});

  // Refs for input fields
  const nameRef = useRef();
  const emailRef = useRef();
  const numberRef = useRef();
  const messageRef = useRef();

  // Regex patterns
  const patterns = {
    name: /^[A-Za-z]+$/,
    email: /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i,
    number: /^[0-9]{10}$/,
    message: /^.{4,40}$/,
  };

  const handleInputValues = (e) => {
    const { name, value } = e.target;
    setValues((prev) => ({
      ...prev,
      [name]: value,
    }));
    console.log(values, "values");
  };

  //   Empty Check Only
  const handleBlur = (e) => {
    const { name, value } = e.target;
    if (value.trim() === "") {
      setErrors((prev) => ({
        ...prev,
        [name]: `${name[0].toUpperCase() + name.slice(1)} is required`,
      }));
    } else {
      setErrors((prev) => {
        const updated = { ...prev };
        delete updated[name];
        return updated;
      });
    }
  };

  // Validate full form on submit with regex
  const handleSendBtn = () => {
    const newErrors = {};

    const requiredFields = ["name", "email", "number", "message"];

    requiredFields.forEach((field) => {
      const value = values[field] || "";
      if (value.trim() === "") {
        newErrors[field] = `${
          field[0].toUpperCase() + field.slice(1)
        } is required`;
      } else {
        if (field === "name" && !patterns.name.test(value)) {
          newErrors.name = "Please enter a valid name";
        }
        if (field === "email" && !patterns.email.test(value)) {
          newErrors.email = "Please enter a valid email address";
        }
        if (field === "number" && !patterns.number.test(value)) {
          newErrors.number = "Phone number must be 10 digits";
        }
        if (field === "message" && !patterns.message.test(value)) {
          newErrors.message = "Message must be between 4 and 40 characters";
        }
      }
    });

    setErrors(newErrors);

    // Focus the first error field
    if (Object.keys(newErrors).length > 0) {
      if (newErrors.name) nameRef.current.focus();
      else if (newErrors.email) emailRef.current.focus();
      else if (newErrors.number) numberRef.current.focus();
      else if (newErrors.message) messageRef.current.focus();
      return;
    }

    // If no errors
    if (Object.keys(newErrors).length === 0) {
      alert("Message sent successfully!");
      setValues({
        name: "",
        email: "",
        number: "",
        message: "",
      });
    }
  };

  return (
    <div>
      <Container maxWidth="lg">
        <Typography
          variant="h4"
          fontWeight={500}
          data-aos="zoom-in"
          data-aos-duration="3000"
        >
          We'd love to hear from you!
        </Typography>
        <Box maxWidth={600} mx="auto" my={6}>
          <Grid container spacing={3} maxWidth="90%">
            <Grid size={12} data-aos="fade-up" data-aos-duration="3000">
              <TextField
                id="filled-basic"
                name="name"
                inputRef={nameRef}
                value={values?.name || ""}
                onChange={handleInputValues}
                onBlur={handleBlur}
                label="Name"
                variant="filled"
                error={!!errors.name}
                helperText={errors.name}
                fullWidth
              />
            </Grid>
            <Grid
              size={{ lg: 6, md: 6, sm: 12, xs: 12 }}
              data-aos="fade-up"
              data-aos-duration="3000"
            >
              <TextField
                id="filled-basic"
                name="email"
                inputRef={emailRef}
                value={values?.email || ""}
                onChange={handleInputValues}
                onBlur={handleBlur}
                label="Email"
                variant="filled"
                fullWidth
                error={!!errors.email}
                helperText={errors.email}
              />
            </Grid>
            <Grid
              size={{ lg: 6, md: 6, sm: 12, xs: 12 }}
              data-aos="fade-up"
              data-aos-duration="3000"
            >
              <TextField
                id="filled-basic"
                name="number"
                inputRef={numberRef}
                value={values?.number || ""}
                onChange={handleInputValues}
                onBlur={handleBlur}
                label="Phone Number"
                variant="filled"
                fullWidth
                error={!!errors.number}
                helperText={errors.number}
              />
            </Grid>
            <Grid size={12} data-aos="fade-up" data-aos-duration="3000">
              <TextField
                id="filled-multiline-static"
                name="message"
                inputRef={messageRef}
                value={values?.message || ""}
                onChange={handleInputValues}
                onBlur={handleBlur}
                label="Message"
                multiline
                rows={12}
                variant="filled"
                fullWidth
                error={!!errors.message}
                helperText={errors.message}
              />
            </Grid>
            <Grid
              size={12}
              sx={{ display: "flex", justifyContent: "flex-end" }}
              data-aos="fade-up"
              data-aos-duration="3000"
            >
              <Button
                variant="contained"
                color="secondary"
                sx={{
                  border: "2px solid #000",
                  borderStyle: "outset",
                  color: "white !important",
                  borderRadius: "25px",
                  padding: "7px 35px",
                  fontWeight: 400,
                }}
                onClick={handleSendBtn}
              >
                Send Message
              </Button>
            </Grid>
          </Grid>
        </Box>
      </Container>
    </div>
  );
};

export default Form;
