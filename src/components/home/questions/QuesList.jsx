import * as React from "react";
import { styled } from "@mui/material/styles";
import ArrowForwardIosSharpIcon from "@mui/icons-material/ArrowForwardIosSharp";
import MuiAccordion from "@mui/material/Accordion";
import MuiAccordionSummary from "@mui/material/AccordionSummary";
import MuiAccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import { Box } from "@mui/material";

const Accordion = styled((props) => (
  <MuiAccordion disableGutters elevation={0} square {...props} />
))(({ theme }) => ({}));

const AccordionSummary = styled((props) => (
  <MuiAccordionSummary
    expandIcon={<ArrowForwardIosSharpIcon sx={{ fontSize: "0.9rem" }} />}
    {...props}
  />
))(({ theme }) => ({
  backgroundColor:
    theme.palette.mode === "dark"
      ? "rgba(255, 255, 255, .05)"
      : "rgba(0, 0, 0, .03)",
  flexDirection: "row-reverse",
  "& .MuiAccordionSummary-expandIconWrapper.Mui-expanded": {
    transform: "rotate(90deg)",
  },
  "& .MuiAccordionSummary-content": {
    marginLeft: theme.spacing(1),
  },
}));

const AccordionDetails = styled(MuiAccordionDetails)(({ theme }) => ({
  padding: theme.spacing(2),
  borderTop: "1px solid rgba(0, 0, 0, .125)",
}));

export default function CustomizedAccordions() {
  const [expanded, setExpanded] = React.useState("panel1");

  const handleChange = (panel) => (event, newExpanded) => {
    setExpanded(newExpanded ? panel : false);
  };

  return (
    <Box>
      <Accordion
        expanded={expanded === "panel1"}
        onChange={handleChange("panel1")}
      >
        <AccordionSummary aria-controls="panel1d-content" id="panel1d-header">
          <Typography fontWeight={"600"}> What is Adobe Creative Cloud?</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Adobe Creative Cloud provides apps, web services and resources for
            all your creative projects — photography, graphic design, video
            editing, UX design, drawing and painting, social media and more.
            Build your own plan with individual app subscriptions or subscribe
            to the Creative Cloud All Apps plan. Learn more about the apps in
            Creative Cloud
          </Typography>
        </AccordionDetails>
      </Accordion>

      <Accordion
        expanded={expanded === "panel2"}
        onChange={handleChange("panel2")}
      >
        <AccordionSummary aria-controls="panel2d-content" id="panel2d-header">
          <Typography fontWeight={"600"}>What is Adobe Creative Cloud pricing?</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Adobe Creative Cloud offers individual app plans starting at
            ₹638.38/mo, the Creative Cloud Photography plan for ₹638.38/mo and
            the Creative Cloud All Apps plan for ₹2,394.22/mo incl. GST. We also
            offer a free Creative Cloud membership that includes the free Adobe
            Express plan and starter plans for Adobe Fresco and Adobe XD. See
            pricing options for Creative Cloud apps
          </Typography>
        </AccordionDetails>
      </Accordion>

      <Accordion
        expanded={expanded === "panel3"}
        onChange={handleChange("panel3")}
      >
        <AccordionSummary aria-controls="panel3d-content" id="panel3d-header">
          <Typography fontWeight={"600"}> Is Adobe Creative Cloud free?</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Adobe offers a free Creative Cloud membership that includes the free
            Adobe Express plan, mobile apps, fonts and starter plans for Adobe
            Fresco and XD. You can add Single App plans or subscribe to the
            Creative Cloud All Apps plan at any time. Explore the free Creative
            Cloud membership
          </Typography>
        </AccordionDetails>
      </Accordion>

      <Accordion
        expanded={expanded === "panel4"}
        onChange={handleChange("panel4")}
      >
        <AccordionSummary aria-controls="panel4d-content" id="panel4d-header">
          <Typography fontWeight={"600"}> What is Creative Cloud used for?</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Adobe Creative Cloud helps you to bring your creative projects to
            life in photography, graphic design, video editing, UX design,
            drawing and painting, social media and more. Learn about Creative
            Cloud plans and pricing
          </Typography>
        </AccordionDetails>
      </Accordion>

      <Accordion
        expanded={expanded === "panel5"}
        onChange={handleChange("panel5")}
      >
        <AccordionSummary aria-controls="panel5d-content" id="panel5d-header">
          <Typography fontWeight={"600"}> What is the Creative Cloud All Apps plan?</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Creative Cloud All Apps is a subscription plan that includes more
            than 20 creative apps, including Photoshop, Premiere Pro,
            Illustrator, InDesign, Audition, XD and After Effects. You also get
            Adobe Fonts, thousands of free assets in Adobe Stock, templates, 100
            GB of cloud storage and more. See what you get in the Creative Cloud
            All Apps plan
          </Typography>
        </AccordionDetails>
      </Accordion>

      <Accordion
        expanded={expanded === "panel6"}
        onChange={handleChange("panel6")}
      >
        <AccordionSummary aria-controls="panel6d-content" id="panel6d-header">
          <Typography fontWeight={"600"}>How do I download and install Creative Cloud?</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Start your Creative Cloud downloads by install the Creative Cloud
            desktop app or signing in to Creative Cloud online. You can manage
            your subscription from the log in page. Download and install
            Creative Cloud
          </Typography>
        </AccordionDetails>
      </Accordion>

      <Accordion
        expanded={expanded === "panel7"}
        onChange={handleChange("panel7")}
      >
        <AccordionSummary aria-controls="panel7d-content" id="panel7d-header">
          <Typography fontWeight={"600"}>
            Are Substance 3D products included in the Creative Cloud All Apps
            plan?
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            No. Substance 3D products are sold exclusively in a Substance 3D
            plan.
          </Typography>
        </AccordionDetails>
      </Accordion>
    </Box>
  );
}
