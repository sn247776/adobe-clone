import { Box, Paper } from "@mui/material";
import React from "react";
import GridImg from "../../../assets/grid1.png";

const CloudGridBox = () => {
  return (
    <Paper style={{width:"340px",}}>
      <img src={GridImg} />
      <h3 style={{fontSize:"22px", fontWeight:"500", color:"#4B4B4B"}}>Fonts, stock images and tutorials</h3>
      <Box sx={{display:"flex", margin:"1rem 2rem"}}>
      <ul>
        <li>One million+ free photos, drawings, video clips, <a>and more</a></li>
        <li>20,000+ <a>fonts</a> at your fingertips</li>
        <li><a>Tutorials</a> for the basics and beyond</li>
      </ul>
      </Box>
    </Paper>
  );
};

export default CloudGridBox;
