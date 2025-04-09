import { Box, Container, Grid, Typography } from "@mui/material";
import React from "react";
import bg from "../../assets/images/image.png";
import ClientsFeedback from "./ClientsFeedback";
import Dishes from "./Dishes";
const Feedback = () => {
  return (
    <div>
      <Container
        className="margin-top"
        disableGutters
        maxWidth={false}
        sx={{
          background: `url(${bg})`,
          backgroundPosition: "top left",
          backgroundRepeat: "no-repeat",
          backgroundSize: "300px",
        }}
      >
        <Container maxWidth="lg">
          <Box data-aos="zoom-in">
            <Typography variant="button">Testimonials</Typography>
            <Typography variant="h2">Our Happy Client Says</Typography>
          </Box>
          <Grid container sx={{ margin: "50px 0px" }}>
            <Grid
              size={{ lg: 6, md: 6, sm: 12, xs: 12 }}
              sx={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <ClientsFeedback />
            </Grid>
            <Grid size={{ lg: 6, md: 6, sm: 12, xs: 12 }}>
              <Dishes />
            </Grid>
          </Grid>
        </Container>
      </Container>
    </div>
  );
};

export default Feedback;
