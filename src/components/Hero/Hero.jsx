import React from "react";
import Grid from "@mui/material/Grid";
import Container from "@mui/material/Container";
import heroimg from "../../assets/images/Hero.png";
import { Typography, Box } from "@mui/material";
import googleplay from "../../assets/images/GooglePlay.png";
import appstore from "../../assets/images/AppStore.png";
const Hero = () => {
  return (
    <div>
      <Container maxWidth="lg">
        <Box sx={{ flexGrow: 1 }}>
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
              <Box
                sx={{
                  position: "relative",
                  display: "inline-block",
                  "&::before": {
                    content: "''",
                    position: "absolute",
                    borderBottom: "1px solid #F8DDCD",
                    left: 0,
                    width: "54px",
                    height: "1px",
                    top: "8px",
                  },
                }}
              >
                <Typography variant="button" sx={{ pl: 8 }}>
                  OVER 1000 USERS
                </Typography>
              </Box>
              <Box sx={{ marginBottom: "20px" }}>
                <Typography variant="h1">Simple Way To</Typography>
                <Typography variant="h1">
                  Order Your <span style={{ color: "#F16214" }}>Foods</span>
                </Typography>
              </Box>
              <Typography variant="caption">
                Enjoy a hassle-free food ordering experience with just a few
                clicks. Browse, choose, and savour your favourite meals
                effortlessly.
              </Typography>
              <Box sx={{ marginTop: "20px" }}>
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
        </Box>
      </Container>
    </div>
  );
};

export default Hero;
