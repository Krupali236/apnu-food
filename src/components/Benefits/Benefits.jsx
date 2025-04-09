import React from "react";
import Advantages from "../../assets/Advantages";
import { Container, Typography, Box } from "@mui/material";
const Benefits = () => {
  return (
    <div>
      <Container
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
      </Container>
    </div>
  );
};

export default Benefits;
