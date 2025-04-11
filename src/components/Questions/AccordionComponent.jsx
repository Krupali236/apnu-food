import React from "react";
import Accordion from "@mui/material/Accordion";
import AccordionDetails from "@mui/material/AccordionDetails";
import AccordionSummary from "@mui/material/AccordionSummary";
import { Box, Container, Typography } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import AccordionData from "../../assets/AccordionData";
const AccordionComponent = () => {
  const [expanded, setExpanded] = React.useState(false);

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };
  return (
    <div
      data-aos="fade-up"
      data-aos-anchor-placement="center-center"
      data-aos-duration="1000"
    >
      {AccordionData.map((item) => {
        const panelId = `panel${item.id}`;
        return (
          <Accordion
            key={item.id}
            expanded={expanded === panelId}
            onChange={handleChange(panelId)}
            sx={{ borderBottom: "1px solid #dee2e6", margin: "0 !important" }}
          >
            <AccordionSummary
              expandIcon={
                <Box
                  sx={{
                    height: 30,
                    width: 30,
                    borderRadius: "50%",
                    backgroundColor: "#F16214",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  {expanded === panelId ? (
                    <RemoveIcon
                      sx={{ fill: "white", fontSize: "18px !important" }}
                    />
                  ) : (
                    <AddIcon
                      sx={{ fill: "white", fontSize: "18px !important" }}
                    />
                  )}
                </Box>
              }
              aria-controls={`${panelId}-content`}
              id={`${panelId}-header`}
            >
              <Typography variant="h4" className="question">
                {item.title}
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography
                variant="caption"
                sx={{ textAlign: "left !important" }}
              >
                {item.details}
              </Typography>
            </AccordionDetails>
          </Accordion>
        );
      })}
    </div>
  );
};

export default AccordionComponent;
