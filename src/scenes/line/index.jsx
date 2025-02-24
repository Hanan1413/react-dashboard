import LineChart from "../../components/LineChart";
import {Box} from '@mui/material'
import Header from "../../components/Header";





const Line = () => {
  return (
    <Box>
        <Header title="line Chart"/>
        <Box  height="75vh">
        <LineChart />

 
        </Box>
    </Box>
  )
}

export default Line;
