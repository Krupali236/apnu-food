import { Box, Container, Grid, Typography } from "@mui/material";
import React from "react";
import heroimg from "../../assets/images/Hero.png";

const Contact = () => {
  return (
    <div>
      <Container maxWidth="lg">
        <Grid
          container
          spacing={2}
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            textAlign: "left",
          }}
        >
          <Grid size={{ lg: 6, md: 6, sm: 12, xs: 12 }} data-aos="fade-right">
            <Box sx={{ marginBottom: "20px" }}>
              <Typography variant="h1">
                Contact <span style={{ color: "#F16214" }}>Us</span>
              </Typography>
            </Box>
            <Box>
              <Typography
                variant="caption"
                sx={{ textAlign: "justify", display: "block" }}
              >
                Reach out to us effortlessly for any inquiries or assistance.
                We're here to provide prompt and personalized support for your
                convenience.
              </Typography>
            </Box>           
          </Grid>
          <Grid
            size={{ lg: 6, md: 6, sm: 12, xs: 12 }}
            sx={{ display: "flex" }}
            data-aos="fade-left"
          >
            <Box
              component="img"
              src={heroimg}
              alt="hero img"
              sx={{
                mx: "auto",
                width: { lg: "100%", md: "80%", sm: "70%", xs: "85%" },
                height: "auto",
                maxHeight: { xs: 450, sm: 550, md: 600, lg: 650 },
              }}
            />
          </Grid>
        </Grid>
      </Container>
    </div>
  );
};

export default Contact;
