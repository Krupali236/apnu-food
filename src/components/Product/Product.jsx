import {
  Container,
  Box,
  Typography,
  Card,
  CardActions,
  CardContent,
  Button,
} from "@mui/material";
import React from "react";
import ProductList from "../../assets/ProductList";

const Product = () => {
  return (
    <Container maxWidth="lg" className="margin-top">
      {/* Section Title */}
      <Box sx={{ textAlign: "center", marginBottom: 15 }} data-aos="zoom-in">
        <Typography variant="button">Product</Typography>
        <Typography variant="h2">Choose Your Favorite Food</Typography>
      </Box>

      {/* Cards Container */}
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          flexWrap: "wrap",
          flexDirection: "row",
        }}
        gap={{ lg: 3, md: 3, sm: 10, xs: 10 }}
      >
        {ProductList.map((item, index) => (
          <Card key={index} data-aos="fade-up" data-aos-duration="4000">
            {/* Floating Circular Image */}
            <Box
              sx={{
                width: 100,
                height: 100,
                borderRadius: "50%",
                backgroundColor: "#FBFBFB",
                border: "1px solid #F8DDCD",
                position: "absolute",
                top: "-40px",
                left: "50%",
                transform: "translateX(-50%)",
                zIndex: 1,
                overflow: "hidden",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                transition: "transform 0.3s ease",
              }}
              className="hover-image"
            >
              <CardContent
                sx={{
                  padding: "0px !important",
                  transition: "transform .5s ease",
                  "&:hover": {
                    transform: "scale(1.2)",
                  },
                }}
              >
                <img
                  src={item.image}
                  alt={item.title}
                  style={{
                    width: "50px",
                    height: "50px",
                    objectFit: "contain",
                    transform: "scale(1.3)",
                  }}
                />
              </CardContent>
            </Box>

            {/* Card Content */}
            <CardContent>
              <Typography variant="h4" fontWeight={400}>
                {item.title}
              </Typography>
              <Typography
                variant="body1"
                pt={2}
                fontSize="18px !important"
                sx={{ opacity: "60%" }}
              >
                {item.price}
              </Typography>
            </CardContent>

            {/* Floating Circular Image */}
            <Box
              sx={{
                position: "absolute",
                bottom: "-30px",
                left: "50%",
                transform: "translateX(-50%)",
                backgroundColor: "white",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                zIndex: 1,
              }}
            >
              {/* Order Now Button - Now inside the Card */}
              <CardActions sx={{ justifyContent: "center", marginBottom: 1 }}>
                <Button
                  variant="outlined"
                  size="small"
                  sx={{
                    border: "1px solid #F16214",
                    borderRadius: "10px",
                    width: "145px",
                    height: "54px",
                    color: "#F16214 !important",
                    textTransform: "none",
                    fontSize: "16px",
                    fontWeight: 300,
                    "&:hover": {
                      border: "none",
                      backgroundColor: "#F16214",
                      color: "#fff !important",
                    },
                  }}
                >
                  Order Now
                </Button>
              </CardActions>
            </Box>
          </Card>
        ))}
      </Box>
    </Container>
  );
};

export default Product;
