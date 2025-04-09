import { Box, Container, Typography } from "@mui/material";
import React from "react";
import illustrate from "../../assets/images/illustration2.png";
import AccordionComponent from "./AccordionComponent";
const Questions = () => {
  return (
    <div>
      <Container maxWidth="lg" className="margin-top">
        <Box
          sx={{
            position: "relative",
            width: { lg: "600px", md: "600px", sm: "400px", xs: "350px" },
            mx: "auto",
            mb: 6,
          }}
          data-aos="zoom-in"
        >
          <Box
            component="img"
            src={illustrate}
            alt="illustration"
            sx={{
              position: "absolute",
              height: { xs: 60, sm: 80, md: 90 },
              right: { lg: 45, md: 45, sm: 0, xs: 0 },
              bottom: { lg: 0, md: 0, sm: 2, xs: 15 },
            }}
          />
          <Typography
            variant="h2"
            className="questiontext"
            sx={{
              pb: 4,
              fontSize: {
                lg: "39px !important",
                md: "39px !important",
                sm: "30px !important",
                xs: "28px !important",
              },
            }}
          >
            Frequently Asked
          </Typography>
          <Typography
            variant="h2"
            className="questiontext"
            color="#F16214 !important"
            sx={{
              fontSize: {
                lg: "39px !important",
                md: "39px !important",
                sm: "30px !important",
                xs: "30px !important",
              },
            }}
          >
            Questions
          </Typography>
        </Box>

        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            // borderBottom: "1px solid #dee2e6",
            cursor: "pointer",
          }}
        >
          <AccordionComponent />
        </Box>
      </Container>
    </div>
  );
};

export default Questions;
