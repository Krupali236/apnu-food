import * as React from "react";
import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";
import { Container, Box, Grid, Typography } from "@mui/material";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
export default function DownloadBtn() {
  return (
    <Stack direction="row" spacing={2} mb={2}>
      <Button
        variant="contained"
        endIcon={
          <Box
            sx={{
              backgroundColor: "white",
              borderRadius: "100%",
              width: 40,
              height: 40,
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              ml: 1,
            }}
          >
            <ArrowForwardIosIcon
              sx={{ fill: "#F16214", fontSize: "18px", fontWeight: 800 }}
            />
          </Box>
        }
        sx={{
          borderRadius: "30px",
          backgroundColor: "#F16214",
          color: "#fff !important",
          display: "flex",
          height: 55,
        }}
      >
        Download Now
      </Button>
    </Stack>
  );
}
