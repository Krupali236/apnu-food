import { Container, Box, Grid, Typography } from "@mui/material";
import React from "react";
import mobileimg from "../../assets/images/download.png";
import illustrate from "../../assets/images/Illustration.png";
import DownloadBtn from "../Button/DownloadBtn";
const Download = () => {
  return (
    <div>
      <Container maxWidth="lg">
        <Box sx={{ flexGrow: 1, padding: 2 }}>
          <Grid
            container
            spacing={2}
            sx={{
              height: { lg: "730px", md: "730px", sm: "100%", xs: "100%" },
              display: "flex",
              alignItems: "center",
              textAlign: "left",
              borderBottom: "1px solid #dee2e6",
              overflow: "hidden",
            }}
          >
            <Grid size={{ lg: 6, md: 6, sm: 12, xs: 12 }} data-aos="fade-right">
              <Box
                sx={{
                  position: "relative",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <Box
                  component="img"
                  src={mobileimg}
                  alt="mobile img"
                  sx={{
                    width: "100%",
                    // maxWidth: "450px",
                    height: "auto",
                  }}
                />
                <Box
                  component="img"
                  src={illustrate}
                  alt="illustrate"
                  sx={{
                    position: "absolute",
                    top: { xs: 50, sm: 120, md: 100 },
                    right: { xs: 0, sm: 70, md: 20 },
                  }}
                />
              </Box>
            </Grid>
            <Grid size={{ lg: 6, md: 6, sm: 12, xs: 12 }} data-aos="fade-left">
              <Box mb={4}>
                <Typography variant="h2">
                  Food Is An Important Part Of A Balanced Diet.
                </Typography>
              </Box>
              <Box mb={4}>
                <Box component="ul">
                  <Box component="li">
                    <Typography variant="body2" className="processtext">
                      Premium quality food is made with ingredients that are
                      packedwith essential vitamins, minerals.
                    </Typography>
                  </Box>
                  <Box component="li">
                    <Typography variant="body2" className="processtext">
                      These foods promote overall wellness by support healthy
                      digestion and boosting immunity
                    </Typography>
                  </Box>
                </Box>                
              </Box>
              <DownloadBtn />
            </Grid>
          </Grid>
        </Box>
      </Container>
    </div>
  );
};

export default Download;
