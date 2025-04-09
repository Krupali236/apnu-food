import React from "react";
import { Box } from "@mui/material";
import SwipeableViews from "react-swipeable-views";
import DishesImage from "../../assets/DishesImage";

const Dishes = () => {
  const [activeStep, setActiveStep] = React.useState(0);

  const handleStepChange = (step) => {
    setActiveStep(step);
  };
  return (
    <Box
      sx={{
        flexGrow: 1,
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        margin: 0,
        mt:{lg:0 , md:0 , sm:5 , xs:5},
      }}
    >
      {/* Carousel */}
      <SwipeableViews
        index={activeStep}
        onChangeIndex={handleStepChange}
        style={{ maxWidth: 400 }}
      >
        {DishesImage.map((dish, index) => (
          <Box
            key={index}
            sx={{
              display: "flex",
              justifyContent: "center",
              margin: 0,
            }}
          >
            <Box
              component="img"
              src={dish.image}
              alt={dish.title}
              sx={{
                width: "90%",
                height: "auto",
                borderRadius: 2,
                objectFit: "cover",
              }}
            />
          </Box>
        ))}
      </SwipeableViews>

      {/* Dot Indicators */}
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          gap: 1,
          mt: 2,
          width: "100%",
          maxWidth: 400,
        }}
      >
        {DishesImage.map((_, index) => (
          <Box
            key={index}
            onClick={() => handleStepChange(index)}
            sx={{
              width: 10,
              height: 10,
              borderRadius: "50%",
              backgroundColor: index === activeStep ? "#F16214" : "#ccc",
              cursor: "pointer",
              transition: "background-color 0.3s",
            }}
          />
        ))}
      </Box>
    </Box>
  );
};

export default Dishes;
