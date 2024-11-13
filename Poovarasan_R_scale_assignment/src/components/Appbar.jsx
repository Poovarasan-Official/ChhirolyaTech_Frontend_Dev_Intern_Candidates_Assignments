import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import MenuIcon from "@mui/icons-material/Menu";
import { useState } from "react";
import MuiButton from "./MuiButton";

export default function Appbar() {
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);

  const handleMenuClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };
  return (
    <>
      <AppBar container position="static" color="scale">
        <Toolbar>
          {/* logo */}
          <Typography variant="h6">SCALE</Typography>
          {/* menu list */}
          <Box
            color="inherit"
            sx={{
              flexGrow: 1,
              display: { xs: "none", sm: "flex" },
              justifyContent: "center",
              gap: 3,
            }}
          >
            <Typography variant="body1"> Products</Typography>
            <Typography variant="body1"> Leaderboard</Typography>
            <Typography variant="body1"> Enterprise</Typography>
            <Typography variant="body1"> Government</Typography>
            <Typography variant="body1"> Customers</Typography>
            <Typography variant="body1"> Resources</Typography>
          </Box>
          {/* login */}
          {/* <Button
            sx={{
              borderRadius: 2,
              mr: 2,
              textTransform: "capitalize",
              background: `radial-gradient(231.94% 231.94% at 50% 100%, #8a6cff 0%, rgba(53, 41, 128, 0) 25.24%), 
                linear-gradient(180deg, rgba(243, 238, 255, 0), rgba(243, 238, 255, 0.04)), 
                rgba(147, 130, 255, 0.01)`, // Gradient background
              color: "white", // Set text color if needed
              boxShadow: `
     0 0 0 0 rgba(16, 0, 51, 0.4),
     0 2px 5px 0 rgba(16, 0, 51, 0.39),
     0 8px 8px 0 rgba(16, 0, 51, 0.34),
     0 19px 11px 0 rgba(16, 0, 51, 0.2),
     0 34px 14px 0 rgba(16, 0, 51, 0.06),
     0 53px 15px 0 rgba(16, 0, 51, 0.01),
     inset 0 0 12px 0 hsla(0, 0%, 100%, 0.08),
     inset 0 -8px 32px 0 #1e0d49`,
              "&:hover": {
                background: "#8a6cff", // Adjust for hover effect if desired
                boxShadow: `
        0 0 0 0 rgba(16, 0, 51, 0.5),
        0 3px 7px 0 rgba(16, 0, 51, 0.44),
        0 10px 10px 0 rgba(16, 0, 51, 0.39),
        0 22px 14px 0 rgba(16, 0, 51, 0.25),
        0 40px 18px 0 rgba(16, 0, 51, 0.1),
        0 60px 20px 0 rgba(16, 0, 51, 0.03),
        inset 0 0 14px 0 hsla(0, 0%, 100%, 0.1),
        inset 0 -10px 36px 0 #1e0d49`,
              },
            }}
            variant="contained"
            endIcon={<ArrowRightAltIcon />}
          >
            Book a Demo
          </Button> */}
          <MuiButton />
          <Typography
            variant="body1"
            sx={{ display: { xs: "none", sm: "block" } }}
          >
            Log in
          </Typography>
          {/* Hamburger Icon for Mobile */}
          <IconButton
            size="large"
            edge="end"
            color="inherit"
            aria-label="menu"
            sx={{ display: { xs: "flex", sm: "none" } }}
            onClick={handleMenuClick}
          >
            <MenuIcon />
          </IconButton>

          {/* Dropdown Menu for Mobile */}
          <Menu
            anchorEl={anchorEl}
            open={open}
            onClose={handleMenuClose}
            anchorOrigin={{
              vertical: "top",
              horizontal: "right",
            }}
            transformOrigin={{
              vertical: "top",
              horizontal: "right",
            }}
          >
            <MenuItem onClick={handleMenuClose}>Home</MenuItem>
            <MenuItem onClick={handleMenuClose}>About</MenuItem>
            <MenuItem onClick={handleMenuClose}>Services</MenuItem>
            <MenuItem onClick={handleMenuClose}>Contact</MenuItem>
            <MenuItem onClick={handleMenuClose}>Login</MenuItem>
          </Menu>
        </Toolbar>
      </AppBar>
    </>
  );
}
