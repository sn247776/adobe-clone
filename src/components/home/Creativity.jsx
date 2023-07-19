import { Box } from "@mui/material";
import React from "react";
import ColorLogo from "../../assets/colorLogo.png"
const Creativity = () => {
  return (
    <Box sx={{textAlign:"center", minHeight:"50vh", display:"flex", alignItems:"center", justifyContent:"center"}}>
        <Box>
            <img src={ColorLogo}/>
            <Box sx={{display:"flex", flexDirection:"column", gap:"2rem"}}>
            <h1>Creativity for all.</h1>
      <p style={{fontSize:"18px", lineHeight:"27px"}}>
        Photography, video, design, UI and UX and social media.
        <br />
        Creative Cloud has everything you need, wherever your imagination takes
        you.
      </p>
      <a>View plans and pricing</a>
            </Box>
        </Box>
    </Box>
  );
};

export default Creativity;
