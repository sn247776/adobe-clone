import { Box } from "@mui/material";
import React from "react";
import Ar from "../../assets/acr.png"
import Ps from "../../assets/ps.png"
import Ai from "../../assets/ai.png"

import Fb from '../../assets/social-icon-facebook.png'
import Tw from '../../assets/social-icon-twitter.png'

import Ins from '../../assets/social-icon-instagram.png'
import LI from '../../assets/social-icon-linkedin.png'
const Footer = () => {
  return (
    <Box className="box-layout">
      <Box className="footer">
        <Box>
          <h5>Shop for</h5>
          <ul>
            <li>Creative Cloud</li>
            <li>Photoshop</li>
            <li>Adobe Express</li>
            <li>Photography</li>
            <li>Premiere Pro</li>
            <li>Adobe Stock</li>
            <li>Elements Family</li>
            <br />
            <li>Document Cloud</li>
            <li>Acrobat</li>
            <li>Acrobat Sign</li>
            <br />
            <li>Special offers</li>
            <li>View plans and pricing</li>
            <li>View all products</li>
          </ul>
        </Box>

        <Box>
          <h5>For business</h5>
          <ul>
            <li>Creative Cloud for teams</li>
            <li>Creative Cloud for enterprise</li>
            <li>Document Cloud for business</li>
          </ul>
          <h5>For education</h5>
          <ul>
            <li>Discounts for students and teachers</li>
            <li>Schools and universities</li>
            <li>Digital Learning Solutions</li>
          </ul>
          <h5>For mobile</h5>
          <ul>
            <li>Apps for iOS</li>
            <li>Apps for Android</li>
          </ul>
        </Box>

        <Box>
          <h5>Experience Cloud</h5>
          <ul>
            <li>Analytics</li>
            <li>Experience Manager</li>
            <li>Commerce</li>
            <li>Marketo Engage</li>
            <li>Workfront</li>
            <li>Terms of Use</li>
          </ul>
        </Box>
        <Box>
          <h5>Support</h5>
          <ul>
            <li>Download and install</li>
            <li>Help Centre</li>
            <li>Adobe Support Community</li>
            <li>Enterprise Support</li>
            <li>Genuine software</li>
          </ul>
          <h5>Resources</h5>
          <ul>
            <li>Adobe Blog</li>
            <li>Adobe I/O</li>
          </ul>

          <h5>Adobe Account</h5>
          <ul>
            <li>Log in to your account</li>
          </ul>
        </Box>

        <Box>
          <h5>Adobe</h5>
          <ul>
            <li>About</li>
            <li>Careers</li>
            <li>Women-in-Technology Scholarship Program</li>
            <li>Newsroom</li>
            <li>Corporate responsibility</li>
            <li>Investor Relations</li>
            <li>Supply chain</li>
            <li>Trust Centre</li>
            <li>Events</li>
            <li>Diversity and inclusion</li>
            <li>Integrity</li>
          </ul>
        </Box>
      </Box>

      <Box>
        <hr />
        <Box sx={{display:"flex", gap:"50px", justifyContent:"center", padding:"10px"}}>
          <h5 style={{fontSize:"14px"}}>Featured products</h5>
          <Box sx={{display:"flex", alignItems:"center", gap:"10px"}}>
            <img src={Ar} alt="icon" height={"20px"}/>
            <span style={{fontSize:"12px"}}>Adobe Acrobat Reader</span>
          </Box>
          <Box sx={{display:"flex", alignItems:"center", gap:"10px"}}>
            <img src={Ar} alt="icon" height={"20px"}/>
            <span style={{fontSize:"12px"}}>Adobe Express</span>
          </Box>
          <Box sx={{display:"flex", alignItems:"center", gap:"10px"}}>
            <img src={Ps} alt="icon" height={"20px"}/>
            <span style={{fontSize:"12px"}}>Photoshop</span>
          </Box>
          <Box sx={{display:"flex", alignItems:"center", gap:"10px"}}>
            <img src={Ai} alt="icon" height={"20px"}/>
            <span style={{fontSize:"12px"}}>illustrator</span>
          </Box>
        </Box>
        <hr />
      </Box>

      <Box sx={{ display: "flex", justifyContent: "space-between", padding:"40px 0" }}>
        <Box sx={{display:"flex", gap:"20px"}}>
            <img src={Fb} width={"20px"}/>
            <img src={Tw} width={"20px"}/>
            <img src={LI} width={"20px"}/>
            <img src={Ins} width={"20px"}/>
        
        </Box>
        <Box>
          <p style={{fontSize:"11px"}}>
            Copyright © 2023 Adobe. All rights reserved. / Privacy / Terms of
            Use / Cookie preferences / Do not sell or share my personal
            information / AdChoices
          </p>
        </Box>
      </Box>
    </Box>
  );
};

export default Footer;
