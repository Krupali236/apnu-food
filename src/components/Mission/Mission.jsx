import { Box, Container, Grid, Typography } from "@mui/material";
import React from "react";
import missionimg from "../../assets/images/mission.png";
const Mission = () => {
  return (
    <div>
      <Container maxWidth="lg">
        <Grid
          container
          gap={2}
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
              <Typography variant="h4" fontWeight={700}>Our Mission</Typography>
            </Box>
            <Box>
              <Typography
                variant="caption"
                sx={{ textAlign: "justify", display: "block" }}
              >
                Bringing culinary delights to your doorstep, we aim to simplify
                and enhance your dining experience through our user-friendly
                platform. With a commitment to convenience and quality, we
                connect food lovers with their favourite restaurants, making
                every mealtime memorable.
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
              src={missionimg}
              alt="mission img"
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

export default Mission;
