import { Box, Container, Grid, Typography } from "@mui/material";
import React from "react";
import googleplay from "../../assets/images/GooglePlay.png";
import appstore from "../../assets/images/AppStore.png";
import heroimg from "../../assets/images/Hero.png";
const About = () => {
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
          <Grid
            size={{ lg: 6, md: 6, sm: 12, xs: 12 }}
            data-aos="fade-right"
            sx={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: {
                lg: "flex-start",
                md: "flex-start",
                sm: "center",
                xs: "center",
              },
            }}
          >
            <Box sx={{ marginBottom: "20px" }}>
              <Typography variant="h1">
                About <span style={{ color: "#F16214" }}>Us</span>
              </Typography>
            </Box>
            <Box>
              <Typography
                variant="caption"
                sx={{ textAlign: "justify", display: "block" }}
              >
                Welcome to "Apnu Food" – your ultimate destination for
                mouthwatering meals delivered right to your doorstep. Our
                user-friendly website and mobile app make ordering a breeze,
                ensuring convenience and satisfaction with every bite. With an
                extensive selection of restaurants and cuisines to choose from,
                we cater to every craving and preference. Whether you're craving
                comfort food or exploring new flavours, we're here to make your
                dining experience enjoyable and hassle-free. Join us on a
                culinary journey filled with flavour, convenience, and delight.
              </Typography>
            </Box>
            <Box
              sx={{
                marginTop: "20px",
                gap: 2,
                display: "flex",
                flexDirection: {
                  lg: "row",
                  md: "row",
                  sm: "row",
                  xs: "column",
                },
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Box
                component="img"
                src={googleplay}
                alt="play store"
                width={175}
                sx={{
                  marginRight: "15px",
                }}
              />
              <Box
                component="img"
                src={appstore}
                alt="app store"
                width={175}
                sx={{
                  marginRight: "15px",
                }}
              />
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

export default About;
