import GeographyChart from "../../components/GeographyChart";
import Header from "../../components/Header";
import { Box } from "@mui/material";
import { tokens } from "../../theme";
import { useTheme } from "@mui/material";



const Geography = () => {
     const theme = useTheme();
      const colors = tokens(theme.palette.mode);
  return (
    <Box padding="10px">
      <Header title=" geography Chart"  />
     <Box  height="75vh" border={`1px solid ${colors.grey[100]}`}   borderRadius="4xp">
        
      <GeographyChart />
        </Box>
    </Box>
  );
};

export default Geography;
