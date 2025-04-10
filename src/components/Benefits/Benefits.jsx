import React from "react";
import Advantages from "../../assets/Advantages";
import vector1 from "../../assets/images/Vector 4.png";
import vector2 from "../../assets/images/Vector 6.png";
import vector3 from "../../assets/images/Vector 7.png";
import vector4 from "../../assets/images/Vector 8.png";

import { Container, Typography, Box, Grid } from "@mui/material";
const Benefits = () => {
  return (
    <div>
      {/* <Container
        maxWidth="100%"
        sx={{ backgroundColor: "#FFFAF8", paddingBottom: "15px" }}
      >
        <Container maxWidth="lg">
          <Box
            sx={{
              display: "flex",
              flexDirection: {
                lg: "row",
                md: "row",
                sm: "column",
                xs: "column",
              },
            }}
          >
            {Advantages.map((items) => (
              <Box
                gap={2}
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  justifyContent: "center",
                  padding: "20px",
                }}
                data-aos="flip-down"
                data-aos-delay="300"
                data-aos-duration="1000"
              >
                <Box
                  sx={{
                    width: "121px",
                    height: "133px",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    borderRadius: "0px 0px 15px 15px",
                    transition: "transform .5s ease",
                    marginBottom: "16px",
                    "&:hover": {
                      background: "linear-gradient(#FFFAF8, #f6d4c6)",
                      transform: "scale(1.2)",
                    },
                  }}
                >
                  <img src={items.icon} alt="icon" />
                </Box>
                <Typography variant="h5" gutterBottom>
                  {items.title}
                </Typography>
                <Typography variant="body2" gutterBottom>
                  {items.description}
                </Typography>
              </Box>
            ))}
          </Box>
        </Container>
      </Container> */}

      {/* <Container
        maxWidth="100%"
        sx={{ backgroundColor: "#FFFAF8", paddingBottom: "15px" }}
      >
        <Grid container>
          <Grid size={2} sx={{ display: "flex" }}>
            <Box component="img" src={vector1} alt="vector1" height="100%" />
            <Box component="img" src={vector3} alt="vector1" height="100%" />
          </Grid>
          <Grid size={8}>
            <Box
              sx={{
                display: "flex",
                flexDirection: {
                  lg: "row",
                  md: "row",
                  sm: "column",
                  xs: "column",
                },
              }}
            >
              {Advantages.map((items) => (
                <Box
                  gap={2}
                  sx={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    justifyContent: "center",
                    padding: "20px",
                  }}
                  data-aos="flip-down"
                  data-aos-delay="300"
                  data-aos-duration="1000"
                >
                  <Box
                    sx={{
                      width: "121px",
                      height: "133px",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      borderRadius: "0px 0px 15px 15px",
                      transition: "transform .5s ease",
                      marginBottom: "16px",
                      "&:hover": {
                        background: "linear-gradient(#FFFAF8, #f6d4c6)",
                        transform: "scale(1.2)",
                      },
                    }}
                  >
                    <img src={items.icon} alt="icon" />
                  </Box>
                  <Typography variant="h5" gutterBottom>
                    {items.title}
                  </Typography>
                  <Typography variant="body2" gutterBottom>
                    {items.description}
                  </Typography>
                </Box>
              ))}
            </Box>
          </Grid>
          <Grid size={2} sx={{ display: "flex" }}>
            <Box component="img" src={vector2} alt="vector2" height={40} />
            <Box component="img" src={vector4} alt="vector2" height={40} />
          </Grid>
        </Grid>
      </Container> */}
      <Box sx={{ position: "relative" }}>
        {/* Background Vectors - Left */}
        <Box
          component="img"
          src={vector1}
          alt="vector1"
          sx={{ position: "absolute", top: 0, left: 0, height: "100%" }}
        />
        <Box
          component="img"
          src={vector3}
          alt="vector3"
          sx={{ position: "absolute", bottom: 0, left: 0, height: "100%" }}
        />

        {/* Background Vectors - Right */}
        <Box
          component="img"
          src={vector2}
          alt="vector2"
          sx={{ position: "absolute", top: 0, right: 0, height: "100%" }}
        />
        <Box
          component="img"
          src={vector4}
          alt="vector4"
          sx={{ position: "absolute", bottom: 0, right: 0, height: "100%" }}
        />

        <Container maxWidth="lg" sx={{width:"80%"}}>
          <Box
            sx={{
              display: "flex",
              flexDirection: {
                lg: "row",
                md: "row",
                sm: "column",
                xs: "column",
              },
            }}
          >
            {Advantages.map((items) => (
              <Box
                gap={1}
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  justifyContent: "center",
                  padding: "20px",
                }}
                data-aos="flip-down"
                data-aos-delay="300"
                data-aos-duration="1000"
              >
                <Box
                  sx={{
                    width: "120px",
                    height: "120px",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    borderRadius: "0px 0px 15px 15px",
                    transition: "transform .5s ease",
                    marginBottom: "16px",
                    "&:hover": {
                      background: "linear-gradient(#FFFAF8, #f6d4c6)",
                      transform: "scale(1.2)",
                    },
                  }}
                >
                  <Box component="img" src={items.icon} alt="icon" />
                </Box>
                <Typography variant="h5" gutterBottom>
                  {items.title}
                </Typography>
                <Typography variant="body2" gutterBottom>
                  {items.description}
                </Typography>
              </Box>
            ))}
          </Box>
        </Container>
      </Box>
    </div>
  );
};

export default Benefits;
