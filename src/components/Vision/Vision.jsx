import { Box, Container, Grid, Typography } from "@mui/material";
import React from "react";
import visionimg from "../../assets/images/vision.jpg";

const Vision = () => {
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
            flexDirection:{lg:"row", md:"row",sm:"column-reverse", xs:"column-reverse"},
          }}
        >
          <Grid
            size={{ lg: 6, md: 6, sm: 12, xs: 12 }}
            sx={{ display: "flex" }}
            data-aos="fade-right"
          >
            <Box
              component="img"
              src={visionimg}
              alt="vision img"
              sx={{
                mx: "auto",
                width: { lg: "100%", md: "80%", sm: "70%", xs: "85%" },
                height: "auto",
                maxHeight: { xs: 450, sm: 550, md: 600, lg: 650 },
              }}
            />
          </Grid>

          <Grid size={{ lg: 6, md: 6, sm: 12, xs: 12 }} data-aos="fade-left">
            <Box sx={{ marginBottom: "20px" }}>
              <Typography variant="h4" fontWeight={700}>Our Vision</Typography>
            </Box>
            <Box>
              <Typography
                variant="caption"
                sx={{ textAlign: "justify", display: "block" }}
              >
                We envision a world where ordering food is effortless and
                enjoyable for everyone. Through constant innovation and seamless
                technology, we aspire to be the leading destination for online
                food ordering, empowering both customers and restaurants to
                thrive in the digital age.
              </Typography>
            </Box>
          </Grid>
        </Grid>
      </Container>
    </div>
  );
};

export default Vision;
