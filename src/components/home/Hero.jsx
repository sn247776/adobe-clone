import { Box } from "@mui/material";
import React from "react";
import AdobeImg from "../../assets/adobe.png";
import BgImg from "../../assets/bg.jpg";
const Hero = () => {
  return (
    <Box >
      <Box className="bg-video">
        <video
          autoPlay
          muted
          src="https://images-tv.adobe.com/mpcv3/1041/cde9d4e1-a0eb-405e-9e18-65345dda2440_1663887436.1920x1080at3000_h264.mp4"
        ></video>
      </Box>

      <Box className="hero box-layout" >
        <Box>
          <Box sx={{ display: "flex", gap: "1.5rem", alignItems: "center" }}>
            <img src={AdobeImg} alt="adobe" height={"50px"} />
            <h4>Adobe Creative Cloud</h4>
          </Box>
          <h1>
            More creativity. Save 40% <br /> now.​
          </h1>
          <p>
            Save big on all Creative Cloud apps in the first year of <br /> your
            membership and get access to over 20 apps including <br />{" "}
            Photoshop, Illustrator, InDesign, and Acrobat. Was <br />{" "}
            ₹4,230.30/mo, now ₹2,394.22/mo incl. GST. <a>See terms</a>
          </p>
          <button
            className="btn-blue"
            style={{ fontSize: "1rem", padding: "15px 20px" }}
          >
            Buy Now!
          </button>
        </Box>
      </Box>
    </Box>
  );
};

export default Hero;
