import { Box, Container, Grid, Typography } from "@mui/material";
import React from "react";
import mobilegrp from "../../assets/images/Group.png";
import applestore from "../../assets/images/applestore.png";
import googleplay from "../../../public/google play.png";
import bg from "../../../public/bg1.png";
const Order = () => {
  return (
    <div>
      <Container maxWidth="lg" className="margin-top">
        <Grid
          container
          sx={{
            padding: {
              lg: "80px 50px",
              md: "50px 30px",
              sm: "40px 20px",
              xs: "20px",
            },
            // backgroundColor: "#444444",
            backgroundImage: `url(${bg})`,
            borderRadius: " 50px 0px 50px 0px",
            height: { lg: "345px", md: "345px", sm: "100%", xs: "100%" },
            position: "relative",
            marginTop: 35,
            overflow: {
              xs: "hidden",
              sm: "hidden",
              md: "visible",
              lg: "visible",
            },
          }}
          data-aos="fade-up"
          data-aos-anchor-placement="center-center"
        >
          <Grid size={{ lg: 5, md: 5, sm: 12, xs: 12 }}>
            <Box
              sx={{
                maxWidth: 300,
                display: "flex",
                flexDirection: "column",
                alignItems: "flex-start",
                justifyContent: "center",
              }}
            >
              <Typography variant="h3" textAlign="left">
                Simple Way To Order Your Foods
              </Typography>
              <Box mt={5} sx={{ cursor: "pointer", display: "flex", gap: 2 }}>
                <Box
                  component="img"
                  src={googleplay}
                  alt="googleplay"
                  sx={{ maxWidth: 160, height: "auto" }}
                />
                <Box
                  component="img"
                  src={applestore}
                  alt="apple store"
                  sx={{ maxWidth: 160, height: "auto" }}
                />
              </Box>
            </Box>
          </Grid>
          <Grid size={{ lg: 6, md: 6, sm: 12, xs: 12 }}>
            <Box
              top={{ lg: -200, md: -150, sm: 0, xs: 0 }}
              right={0}
              sx={{
                position: {
                  lg: "absolute",
                  md: "absolute",
                  sm: "relative",
                  xs: "relative",
                },
                display: { lg: "block", md: "flex", sm: "block", xs: "block" },
                justifyContent: "flex-end",
                alignItems: "center",
              }}
            >
              <Box
                component="img"
                src={mobilegrp}
                alt="mobile group"
                sx={{ width: { lg: "100%", md: "90%", sm: "90%", xs: "90%" } }}
              />
            </Box>
          </Grid>
        </Grid>
      </Container>
    </div>
  );
};

export default Order;
