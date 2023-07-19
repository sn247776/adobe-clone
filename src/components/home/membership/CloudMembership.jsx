import { Box } from "@mui/material";
import React from "react";
import CloudGridBox from "./CloudGridBox";

const CloudMembership = () => {
  return (
    <Box className="cloud-membership">
      <Box className="box-layout">
        <h1 style={{textAlign:"center"}}>Your Creative Cloud membership comes with more than great apps.</h1>
        <Box className="grid-box">
          <CloudGridBox />
          <CloudGridBox />
          <CloudGridBox />
        </Box>
      </Box>
    </Box>
  );
};

export default CloudMembership;
