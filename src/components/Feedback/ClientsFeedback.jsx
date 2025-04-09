import React from "react";
import MobileStepper from "@mui/material/MobileStepper";
import { Box, Typography } from "@mui/material";
import Button from "@mui/material/Button";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import ListItemAvatar from "@mui/material/ListItemAvatar";
import Avatar from "@mui/material/Avatar";
import HappyClients from "../../assets/HappyClients";
import EastIcon from "@mui/icons-material/East";
import WestIcon from "@mui/icons-material/West";
const ClientsFeedback = () => {
  const [activeStep, setActiveStep] = React.useState(0);
  const maxSteps = HappyClients.length;

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };
  return (
    <div>
      <Box
        sx={{
          maxWidth: 450,
          flexGrow: 1,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <List>
          <ListItem>
            <ListItemAvatar>
              <Avatar
                alt="Remy Sharp"
                src={HappyClients[activeStep].image}
                sx={{ height: 50, width: 50, margin: "0px 20px" }}
              />
            </ListItemAvatar>
            <ListItemText
              primary={
                <React.Fragment>
                  <Typography
                    variant="h6"
                    sx={{ marginBottom: "10px !important" }}
                  >
                    {HappyClients[activeStep].name}
                  </Typography>
                </React.Fragment>
              }
              secondary={
                <React.Fragment>
                  <Typography variant="body1">
                    {HappyClients[activeStep].message}
                  </Typography>
                </React.Fragment>
              }
            />
          </ListItem>
        </List>
        <Box sx={{ margin: "10px 0px" }}>
          <Typography variant="body1">
            {HappyClients[activeStep].feedback}
          </Typography>
        </Box>
        <MobileStepper
          steps={maxSteps}
          position="static"
          activeStep={activeStep}
          sx={{ marginTop: 2 }}
          nextButton={
            <Button
              size="small"
              onClick={handleBack}
              disabled={activeStep === 0}
              sx={{
                height: "37px",
                minWidth: "37px",
                outline: "none",
                padding: 0,
                margin: "0px 10px",
                "&:hover": { backgroundColor: "transparent" },
              }}
            >
              <WestIcon
                onClick={handleBack}
                disabled={activeStep === 0}
                sx={{
                  fill: "#F16214",
                  border: "1px solid #EEEEEE",
                  fontSize: "20px",
                  backgroundColor: "white",
                  padding: "5px",
                  borderRadius: "7px",
                  "&:hover": {
                    fill: "white",
                    backgroundColor: "#F16214",
                  },
                }}
              />
            </Button>
          }
          backButton={
            <Button
              size="small"
              onClick={handleNext}
              disabled={activeStep === maxSteps - 1}
              sx={{
                height: "37px",
                minWidth: "37px",
                outline: "none",
                padding: 0,
                margin: "0px 10px",
                "&:hover": { backgroundColor: "transparent" },
              }}
            >
              <EastIcon
                sx={{
                  fill: "#F16214",
                  border: "1px solid #EEEEEE",
                  fontSize: "20px",
                  backgroundColor: "white",
                  padding: "5px",
                  borderRadius: "7px",
                  "&:hover": {
                    fill: "white",
                    backgroundColor: "#F16214",
                  },
                }}
              />
            </Button>
          }
        />
      </Box>
    </div>
  );
};

export default ClientsFeedback;
