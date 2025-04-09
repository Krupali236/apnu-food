import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  typography: {
    fontFamily: "'Poppins', sans-serif !important",
    button: {
      // heading -orange
      color: "#F16214",
      fontSize: "16px",
      fontWeight: 600,
      textTransform: "capitalize",
    },
    h1: {
      color: "#212529",
      fontSize: "60px",
      fontWeight: 600,
    },
    h2: {
      // sub heading
      color: " #18181b !important",
      fontSize: "39px",
      fontWeight: 700,
      lineHeight: "68.2px",
    },
    h3: {
      color: "white",
      fontSize: "30px",
      fontWeight: 600,
    },
    h4: {
      fontSize: "24px",
      fontWeight: 600,
      marginBottom: "16px",
      color: "#18181b !important",
      cursor: "pointer",
    },
    h5: {
      fontSize: "25px",
      color: "#F16214 !important",
      fontWeight: 500,
      marginBottom: "25px",
      letterSpacing: "0 !important",
    },
    h6: {
      fontSize: "18px !important",
      fontWeight: 600,
      lineHeight: "1.2 !important",
      color: "#2b2f32 !important",
      textAlign: "left !important",
      margin: "0 !important",
    },
    caption: {
      color: "#676767",
      fontSize: "18px",
      fontWeight: 500,
      textAlign: "justify",
      display: "block",
    },
    body2: {
      fontSize: "16px",
      color: "#676767",
      fontWeight: 400,
      lineHeight: "28px",
    },
    body1: {
      fontSize: "12px !important",
      fontWeight: 400,
      color: "#676767",
      margin: "auto",
    },
  },
  palette: {
    primary: {
      // main: "#1976d2",
      // main:"#ce9e9e",
      main: "#999",
    },
    secondary: {
      // main: "#ff4081",
      main: "#F16214",
    },
    background: {
      default: "#ffffff",
    },
  },
  components: {
    MuiAppBar: {
      styleOverrides: {
        root: {
          height: "100px",
          backgroundColor: "white",
          boxShadow: "none",
          display: "flex",
          justifyContent: "center",
        },
      },
    },
    MuiTypography: {
      styleOverrides: {
        root: {
          margin: "0 !important",
        },
        h2: {
          "&.questiontext": {
            fontSize: {
              lg: "39px !important",
              md: "39px !important",
              sm: "30px !important",
              xs: "30px !important",
            },
            fontWeight: "600 !important",
            lineHeight: "14px",
            mx: "auto",
          },
        },
        h6: {
          margin: "0 !important",
          textAlign: "left !important",
          color: "#2b2f32 !important",
          fontSize: "18px",
          fontWeight: 600,
          lineHeight: 1.2,
          "&.navlink": {
            fontSize: "18px !important",
            color: "#676767 !important",
            textDecoration: "none",
            fontWeight: 500,
            marginRight: "30px !important",
            "&:hover": {
              color: "#F16214 !important",
            },
          },
        },
        h5: {
          fontFamily: "monospace",
          fontWeight: 700,
          letterSpacing: ".3rem",
          color: "inherit",
          textDecoration: "none",
        },
        h4: {
          "&.question": {
            fontSize: "24px !important",
            fontWeight: 600,
          },
          "&.processno": {
            fontSize: "22px",
            color: "#fff !important",
            fontWeight: 700,
          },
        },
        body2: {
          "&.processtext": {
            fontSize: "16px",
            fontWeight: 400,
            lineHeight: "28px",
            color: "#212529 !important",
          },        
        },
      },
    },
    MuiButtonBase: {
      styleOverrides: {
        root: {
          "&:focus": {
            outline: "none !important",
          },
          "&:focus-visible": {
            outline: "none !important",
          },
        },
      },
    },
    MuiButton: {
      styleOverrides: {
        root: {
          cursor: "pointer",
          padding: "5px 10px",
          color: "#676767 !important",
          fontSize: "18px",
          textTransform: "capitalize",
          "&:focus": {
            outline: "none !important",
          },
          "&:focus-visible": {
            outline: "none !important",
          },
        },
      },
    },
    MuiBox: {
      styleOverrides: {
        root: {
          color: "black !important",
          "&.feedback-box": {
            height: "100px !important", // your desired height
            width: "100%",
            padding: "16px",
          },
        },
      },
    },
    MuiPaper: {
      styleOverrides: {
        root: {
          left: "15px",
          width: "100%",
        },
      },
    },
    MuiAccordion: {
      styleOverrides: {
        root: {
          width: "95%",
          backgroundColor: "transparent",
          boxShadow: "none",
          padding: "20px 0px",
        },
      },
    },
    MuiAccordionDetails: {
      styleOverrides: {
        root: { padding: "0px", textAlign: "left" },
      },
    },
    MuiContainer: {
      styleOverrides: {
        root: {
          margin: "40px auto !important",
          "&.margin-top": {
            marginTop: "150px !important",
          },
        },
      },
    },
    MuiCard: {
      styleOverrides: {
        root: {
          border: "1px solid #F16214",
          position: "relative",
          backgroundColor: "#fffcfb",
          borderRadius: "25px",
          textAlign: "center",
          padding: "85px 0px",
          width: "250px",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "space-between",
          zIndex: 0,
          overflow: "visible",
          transition: "transform 0.3s ease",
          // "&:hover": {
          //   transform: "scale(1.1)", // Slight zoom effect on card
          // },
        },
      },
    },
    MuiCardContent: {
      styleOverrides: {
        root: {
          padding: "85px auto",
          textAlign: "center",
        },
      },
    },
    MuiCardActions: {
      styleOverrides: {
        root: {
          padding: "0 !important",
        },
      },
    },
    MuiStepper: {
      styleOverrides: {
        root: {
          display: "flex",
          flexDirection: {
            lg: "row !important",
            md: "row !important",
            sm: "column",
            xs: "column",
          },
        },
      },
    },

    MuiMobileStepper: {
      styleOverrides: {
        root: {
          justifyContent: "center", // aligns buttons to the right
        },
        dots: {
          display: "none",
        },
        progress: {
          display: "none",
        },
        // Step label override is not part of MobileStepper directly, so no need to target it
      },
    },
    MuiListItem: {
      styleOverrides: {
        root: {
          padding: "0px !important",
          margin: "0px !important",
        },
      },
    },
    MuiLink: {
      styleOverrides: {
        root: {
          fontSize: "18px",
          color: "#676767",
          textDecoration: "none",
          fontWeight: 500,
          marginRight: "20px !important",
          "&:hover": {
            color: "#F16214",
          },
        },
      },
    },
    MuiFilledInput: {
      styleOverrides: {
        root: {
          padding: "10px 0px",
          display: "flex",

          // Removes the ::before border
          "&:before": {
            borderBottom: "none !important",
          },
          // Optional: also remove the focused version (on click/focus)
          "&:after": {
            borderBottom: "none !important",
          },
        },
      },
    },
    MuiFormLabel: {
      styleOverrides: {
        root: {
          color: "#676767 !important",
          lineHeight: 2.5,
          fontSize: "16px !important",
        },
      },
    },
    MuiFormHelperText: {
      styleOverrides: {
        root: {
          color: "#676767",
          fontSize: "14px",
          textAlign: "left",
          fontWeight: 500,
          fontFamily: "'Poppins', sans-serif",
          lineHeight: 1.66,
          marginTop: "3px",
          marginLeft: "14px",
          marginRight: "14px",
        },
        contained: {
          marginLeft: "14px",
          marginRight: "14px",
        },
      },
    },
  },
});
export default theme;
