import { Box, Paper } from "@mui/material";
import React from "react";
import Logo from "../../assets/logo.png";
import SearchIcon from "@mui/icons-material/Search";

const NavBar = () => {
  return (
    <Paper>
    <Box className="box-layout">
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          fontSize: "14px",
          fontWeight: "400",
          py: "1rem",
        }}
      >
        <Box>
          <img src={Logo} alt="logo" height={"25px"} />
        </Box>
        <Box sx={{ display: "flex", gap: "2rem", alignItems: "center" }}>
          <span>Adobe Creative Cloud</span>
          <span>Explore</span>
          <span>What's new</span>
          <span>For Business</span>
          <span>Compare plans</span>
          <span>Learn & Support</span>
          <span>Free trial</span>
          <button className="btn-blue">Buy now</button>
        </Box>
        <Box display={"flex"} gap={"2rem"}>
          <Box>
            <SearchIcon />
          </Box>
          <Box>Sign in</Box>
        </Box>
      </Box>
      <Box sx={{ display: "flex", gap: "1rem", fontSize: "12px", py: "1rem" }}>
        <span>Home</span>/<span>Adobe Creative Cloud</span>
      </Box>
    </Box>
    </Paper>
  );
};

export default NavBar;
