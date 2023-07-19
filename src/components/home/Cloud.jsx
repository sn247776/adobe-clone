import { Box } from "@mui/material";
import React from "react";
import AdobeImg from "../../assets/adobe.png";

function Cloud() {
  return (
    <Box sx={{display:"flex", height:"50vh", justifyContent:"center", alignItems:"center",}}>
      <Box sx={{display:"flex", flexDirection:"column", textAlign:"center", gap:"20px"}}>
      <Box>
      <img src={AdobeImg}  />
      </Box>
        <h1>New in Creative Cloud.</h1>
        <p>
          Create faster with new AI features in Illustrator, Premiere Pro and
          Lightroom. Collaborate with Share for Review in Photoshop and
          Illustrator.
          <br />
          And make standout content quickly with Adobe Express.
        </p>
       <Box>
       <button className="btn-black">See what's new</button>
       </Box>
      </Box>
    </Box>
  );
}

export default Cloud;
