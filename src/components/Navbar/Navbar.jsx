import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import MenuItem from "@mui/material/MenuItem";
import logo from "../../assets/images//Logo1.png";
import { NavLink } from "react-router-dom";
import { Link } from "@mui/material";
import LoginBtn from "../Button/LoginBtn";
import SignupBtn from "../Button/SignupBtn";

const pages = [
  { name: "Home", path: "/" },
  { name: "About Us", path: "/about" },
  { name: "Contact Us", path: "/contact" }, // Add a route later
];

function Navbar() {
  const [anchorElNav, setAnchorElNav] = React.useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  return (
    <AppBar position="static">
      <Container maxWidth="lg">
        <Toolbar
          disableGutters
          sx={{
            borderBottom: "1px solid #CBCBCB",
            display: "flex",
            alignItems: "center !important",
            justifyContent: "center",
          }}
        >
          <NavLink to="/">
            <img src={logo} alt="logo" height={50} width={100} />
          </NavLink>
          <Box
            sx={{
              flexGrow: 1,
              display: { xs: "flex", md: "none" },
              justifyContent: "flex-end",
              alignItems: "center !important",
            }}
          >
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="black"
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: "bottom",
                horizontal: "left",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "left",
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{ display: { xs: "block", md: "none" }, width: "100%" }}
            >
              {/* {pages.map((page) => (
                <MenuItem key={page.name} onClick={handleCloseNavMenu}>
                  <NavLink to={page.path}>
                    <Typography variant="h6" className="navlink">
                      {page.name}
                    </Typography>
                  </NavLink>
                  <LoginBtn />
                  <SignupBtn />
                </MenuItem>
              ))} */}
              <MenuItem>
                <LoginBtn />
                <SignupBtn />
              </MenuItem>
            </Menu>
          </Box>

          <Box
            sx={{
              flexGrow: 1,
              display: { xs: "none", md: "flex" },
              justifyContent: "flex-end",
              alignItems: "center !important",
            }}
          >
            {/* {pages.map((page) => (
              <NavLink to={page.path}>
                <Typography variant="h6" className="navlink">
                  {page.name}
                </Typography>
              </NavLink>
            ))} */}
            <LoginBtn />
            <SignupBtn />
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}
export default Navbar;
