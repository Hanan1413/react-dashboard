import { Box, useTheme, Typography } from "@mui/material";
import Header from "../../components/Header";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { tokens } from "../../theme";

const FAQ = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  return (
    <Box m="20px">
      <Header title="FAQ" subtitle="Frequently Asked Questions Page" />

      {/* Reusable Accordion */}
      {[
        "An Important Question",
        "Another Question",
        "Your Favorite Question",
        "The Final Question",
      ].map((question, index) => (
        <Accordion 
          key={index} 
          sx={{ backgroundColor: colors.blueAccent[900], color: "black" }} 
        >
          <AccordionSummary expandIcon={<ExpandMoreIcon sx={{ color: "white" }} />}>
            <Typography color={colors.primary[100]} variant="h6">
              {question}
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography color="white">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero repellendus praesentium sapiente sunt autem eos ad explicabo ut saepe.
              Necessitatibus nulla quis dicta quo pariatur ipsam optio vel cumque veritatis!
            </Typography>
          </AccordionDetails>
        </Accordion>
      ))}
    </Box>
  );
};

export default FAQ;
