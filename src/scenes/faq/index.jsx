import{ Box, useTheme, Typography } from "@mui/material";
import Header from "../../components/Header";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { tokens } from "../../theme";



const FAQ = () =>{
   const theme = useTheme();
   const colors = tokens(theme.palette.mode);

    return<Box m="20px">
        <Header title="FAQ" subtitle="Frequently Asked Questions Page"/>
        <Accordion>
            <AccordionSummary expandIcon={<ExpandMoreIcon />} >
                <Typography color={colors.greenAccent[500]} variant="h6" backgroundColor="" >
                    An Important Question


                </Typography>
            </AccordionSummary>
            <AccordionDetails>
                <Typography>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero repellendus praesentium sapiente sunt autem eos ad explicabo ut saepe.
                     Necessitatibus nulla quis dicta quo pariatur ipsam optio vel cumque veritatis!
                </Typography>
            </AccordionDetails>
        </Accordion>

        <Accordion>
            <AccordionSummary expandIcon={<ExpandMoreIcon />} >
                <Typography color={colors.greenAccent[500]}  variant="h6" backgroundColor="" >
                    An Important Question


                </Typography>
            </AccordionSummary>
            <AccordionDetails>
                <Typography>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero repellendus praesentium sapiente sunt autem eos ad explicabo ut saepe.
                     Necessitatibus nulla quis dicta quo pariatur ipsam optio vel cumque veritatis!
                </Typography>
            </AccordionDetails>
        </Accordion>

        <Accordion>
            <AccordionSummary expandIcon={<ExpandMoreIcon />} >
                <Typography color={colors.greenAccent[500]} variant="h6" backgroundColor="" >
                    Another Question


                </Typography>
            </AccordionSummary>
            <AccordionDetails>
                <Typography>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero repellendus praesentium sapiente sunt autem eos ad explicabo ut saepe.
                     Necessitatibus nulla quis dicta quo pariatur ipsam optio vel cumque veritatis!
                </Typography>
            </AccordionDetails>
        </Accordion>

        <Accordion>
            <AccordionSummary expandIcon={<ExpandMoreIcon />} >
                <Typography color={colors.greenAccent[500]}  variant="h6" backgroundColor="" >
                Your favorite Question

                </Typography>
            </AccordionSummary>
            <AccordionDetails>
                <Typography>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero repellendus praesentium sapiente sunt autem eos ad explicabo ut saepe.
                     Necessitatibus nulla quis dicta quo pariatur ipsam optio vel cumque veritatis!
                </Typography>
            </AccordionDetails>
        </Accordion>

        <Accordion>
            <AccordionSummary expandIcon={<ExpandMoreIcon />} >
                <Typography color={colors.greenAccent[500]}  variant="h6" backgroundColor="" >
                    The final  Question


                </Typography>
            </AccordionSummary>
            <AccordionDetails>
                <Typography>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero repellendus praesentium sapiente sunt autem eos ad explicabo ut saepe.
                     Necessitatibus nulla quis dicta quo pariatur ipsam optio vel cumque veritatis!
                </Typography>
            </AccordionDetails>
        </Accordion>

    </Box>
}


export default FAQ;