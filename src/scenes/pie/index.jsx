// import PieChart from "../../components/pie";
import { Box } from "@mui/material";
import Header from "../../components/Header";
import PieChart from "../../components/PieChart";







const Pie = () => {
  return( 
  <Box height="75vh">
    <Header title="Pie Chart" subtitle="Simple Pie Chart "/>
     <PieChart />

  </Box>
  )
}

export default Pie;
