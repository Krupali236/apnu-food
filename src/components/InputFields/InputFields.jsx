import { Container, Typography, Box, Grid } from "@mui/material";
import React, {
  useRef,
  useState,
  forwardRef,
  useImperativeHandle,
} from "react";
import TextField from "@mui/material/TextField";
import InputAdornment from "@mui/material/InputAdornment";
import IconButton from "@mui/material/IconButton";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";

const InputFields = forwardRef(
  (
    {
      fieldsToShow = ["name", "email", "number", "message", "password"],
      onSubmit,
      submitLabel = "Submit",
    },
    ref
  ) => {
    const [values, setValues] = useState({});
    const [errors, setErrors] = useState({});
    const [showPassword, setShowPassword] = useState(false);

    const togglePasswordVisibility = () => {
      setShowPassword((prev) => !prev);
    };

    const refs = fieldsToShow.reduce((acc, field) => {
      acc[field] = useRef();
      return acc;
    }, {});

    const patterns = {
      name: /^[A-Za-z]+$/,
      email: /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i,
      number: /^[0-9]{10}$/,
      password: /^.{4,40}$/,
    };

    const handleInputValues = (e) => {
      const { name, value } = e.target;
      setValues((prev) => ({
        ...prev,
        [name]: value,
      }));

      if (patterns[name] && patterns[name].test(value)) {
        setErrors((prev) => {
          const updated = { ...prev };
          delete updated[name];
          return updated;
        });
      }
    };

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

    const validateAndSubmit = () => {
      const newErrors = {};
      const updatedValues = { ...values };

      fieldsToShow.forEach((field) => {
        const value = values[field] || "";
        if (value.trim() === "") {
          newErrors[field] = `${
            field[0].toUpperCase() + field.slice(1)
          } is required`;
        } else if (patterns[field] && !patterns[field].test(value)) {
          newErrors[field] = `Invalid ${field}`;
        }
      });

      setErrors(newErrors);

      if (Object.keys(newErrors).length > 0) {
        const firstErrorField = Object.keys(newErrors)[0];
        refs[firstErrorField]?.current?.focus();
        return;
      }
      onSubmit(updatedValues);
      setValues({});
      // if (Object.keys(newErrors).length == 0) {
      //   onSubmit(values);
      //   setValues({});
      // }
    };

    // Expose the submit function to parent
    useImperativeHandle(ref, () => ({
      submit: validateAndSubmit,
    }));

    const renderField = (field) => (
      <Grid
        // size={field === "name" || field === "password" ? 12 : 6}
        size={12}
        key={field}
        data-aos="fade-up"
        data-aos-duration="1000"
      >
        <TextField
          name={field}
          inputRef={refs[field]}
          type={
            field === "password" ? (showPassword ? "text" : "password") : "text"
          }
          value={values[field] || ""}
          onChange={handleInputValues}
          onBlur={handleBlur}
          label={field[0].toUpperCase() + field.slice(1)}
          variant="filled"
          fullWidth
          error={!!errors[field]}
          helperText={errors[field]}
          InputProps={
            field === "password"
              ? {
                  endAdornment: (
                    <InputAdornment position="end" sx={{ margin: 2 }}>
                      <IconButton onClick={togglePasswordVisibility} edge="end">
                        {showPassword ? <Visibility /> : <VisibilityOff />}
                      </IconButton>
                    </InputAdornment>
                  ),
                }
              : undefined
          }
        />
      </Grid>
    );

    return (
      <div>
        <Box maxWidth={600} mx="auto" my={2}>
          <Grid
            container
            spacing={2}
            maxWidth="90%"
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Typography
              variant="h4"
              fontWeight={500}
              data-aos="zoom-in"
              data-aos-duration="2000"
              textAlign="center"
            >
              {submitLabel === "Login"
                ? "Welcome Back"
                : "Fill the details for signup"}
            </Typography>
            {fieldsToShow.map(renderField)}
          </Grid>
        </Box>
      </div>
    );
  }
);

export default InputFields;
