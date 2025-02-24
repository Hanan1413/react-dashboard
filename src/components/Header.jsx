import { Typography, Box, useTheme } from "@mui/material";
import { tokens } from "../theme";




const Header = ({ title, subtitle }) => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  return (
  <Box mb="30px" ml="20px">
    <Typography color={colors.grey[100]} fontWeight="bold" sx={{mb: "5px"}} variant="h5">{title}</Typography>
    <Typography variant="h4" color={colors.blueAccent[400]}  >{subtitle}</Typography>

  </Box>
  )
};

export default Header;
