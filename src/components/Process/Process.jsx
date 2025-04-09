import { Box, Container, Typography } from "@mui/material";
import React from "react";
import steps from "../../assets/Steps";
const Process = () => {
  return (
    <div>
      <Container maxWidth="lg" className="margin-top">
        {/* Title  */}
        <Box sx={{ padding: "0px 30px" }} gap={3} data-aos="zoom-in">
          <Typography variant="button">How it work</Typography>
          <Typography variant="h2">We Love Great Process</Typography>
          <Typography variant="caption">
            We’re passionate about delivering delicious meals through a seamless
            process. From our kitchen to your doorstep, enjoy every bite
            effortlessly.
          </Typography>
        </Box>

        <Box
          sx={{
            mx: "20px",
            marginTop: "60px",
            display: "flex",
            flexDirection: { lg: "row", md: "row", sm: "column", xs: "column" },
            justifyContent: "center",
            alignItems: "center",
            position: "relative",
          }}
        >
          <Box
            component="span"
            className="processborder"
            sx={{
              position: "absolute",
              width: "65%",
              mx: "auto",
              top: 40,
              border: "1px dashed #f8ddcd",
              zIndex: 0,
            }}
          />
          {steps.map((items) => (
            <Box
              key={items.id}
              sx={{
                zIndex: 1,
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "space-around",
                backgroundColor: "transparent",
                borderRadius: 4,
                padding: 2,
                transition: "box-shadow 0.3s ease, background-color 0.3s ease",
                "&:hover": {
                  backgroundColor: "#fff",
                  boxShadow: "0 6px 16px rgba(0, 0, 0, 0.15)",
                },
              }}
              data-aos="fade-down"
              data-aos-easing="linear"
              data-aos-duration="1500"
            >
              <Box
                sx={{
                  backgroundColor: "#F16214",
                  height: 50,
                  width: 50,
                  borderRadius: "50%",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  position: "relative",
                  mb: 7,
                }}
              >
                <Typography variant="h4" className="processno">
                  {items.id}
                </Typography>
              </Box>

              <Typography
                variant="h4"
                sx={{
                  textAlign: "center",
                  height: 50,
                  marginBottom: "20px !important",
                }}
              >
                {items.label}
              </Typography>
              <Typography variant="body2" className="processtext">
                {items.detail}
              </Typography>
            </Box>
          ))}
        </Box>
      </Container>
    </div>
  );
};

export default Process;
