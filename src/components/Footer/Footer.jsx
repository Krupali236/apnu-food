import { Box, Container, Grid, Typography } from "@mui/material";
import React from "react";
import appstore from "../../assets/images/AppStore.png";
import playstore from "../../assets/images/GooglePlay.png";
import logo from "../../assets/images/logo.png";
import socialIcons from "../../assets/SocialMedia";
import Link from "@mui/material/Link";
const Footer = () => {
  return (
    <div>
      <Container
        maxWidth="100%"
        sx={{
          marginTop: "200px !important",
          backgroundColor: "#F5F5F5",
          paddingTop: "64px",
          paddingBottom: "48px",
          marginBottom: "0px !important",
        }}
      >
        <Grid
          container
          sx={{
            margin: { lg: "0px 100px", md: "0px 80px", sm: "0px", xs: "0px" },
            display: "flex",
            paddingBottom: "20px",
            borderBottom: "1px solid #dee2e6",
          }}
        >
          <Grid
            size={{ lg: 8, md: 8, sm: 8, xs: 12 }}
            sx={{
              display: "flex",
              justifyContent: "flex-start",
              alignItems: "center",
            }}
          >
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                alignItems: "flex-start",
              }}
            >
              <Box component="img" src={logo} alt="logo" sx={{ height: 100 }} />
              <Box sx={{ display: "flex" }}>
                {socialIcons.map((items) => (
                  <>
                    <Box
                      sx={{
                        marginTop: "20px",
                        width: "40px !important",
                        height: "40px !important",
                        backgroundColor: " #f4dfd3",
                        color: "#f16214",
                        borderRadius: "50%",
                        marginRight: "15px",
                        fontSize: "14px",
                        textDecoration: "none",
                        cursor: "pointer",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        "&:hover": {
                          backgroundColor: "#f16214",
                          color: "white",
                        },
                      }}
                    >
                      <a href={items.link}></a>
                      <Box>
                        <i className={items.class}></i>
                      </Box>
                    </Box>
                  </>
                ))}
              </Box>
              <Box
                sx={{
                  width: "100%",
                  display: "flex",
                  flexDirection: {
                    lg: "row",
                    md: "row",
                    sm: "column",
                    xs: "column",
                  },
                  justifyContent: "flex-start",
                  alignItems: "flex-start",
                  textAlign: "start",
                  mt: 3,
                }}
              >
                <Link href="#">Terms & Conditions</Link>
                <Link href="#">Privacy</Link>
                <Link href="#">Delete Account</Link>
              </Box>
            </Box>
          </Grid>
          <Grid
            size={{ lg: 4, md: 4, sm: 4, xs: 12 }}
            sx={{
              display: "flex",
              justifyContent: {
                lg: "flex-end",
                md: "flex-end",
                sm: "flex-start",
                xs: "flex-start",
              },
              alignItems: "center",
            }}
          >
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                width: 200,
                mt: 4,
              }}
              gap={3}
            >
              <Typography
                variant="h4"
                sx={{ fontSize: "20px", color: "#18181B", textAlign: "left" }}
              >
                Get the app
              </Typography>
              <Box
                component="img"
                src={playstore}
                alt="Play Store"
                sx={{ maxWidth: 150, width: "100%", cursor: "pointer" }}
              />
              <Box
                component="img"
                src={appstore}
                alt="App Store"
                sx={{ maxWidth: 150, width: "100%", cursor: "pointer" }}
              />
            </Box>
          </Grid>
        </Grid>
        <Box sx={{ padding: "20px" }}>
          <Typography
            variant="caption"
            sx={{ lineHeight: "24px", fontWeight: 500 , textAlign:"center !important" }}
          >
            © 2025 All rights reserved by IHOCHINFOTECH PVT. LTD.
          </Typography>
        </Box>
      </Container>
    </div>
  );
};

export default Footer;
