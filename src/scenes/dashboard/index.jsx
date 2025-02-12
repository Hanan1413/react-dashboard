import Header from "../../components/Header";
import { Box } from "@mui/material";

const Dashboard = () => {
  return (
    <Box
      m="2px"
      display="flex"
      justifyContent="sapce-between"
      alignItems="center"
    >
      <Header title="DASHBOARD" subtitle="Welcome to your dashboard" />
    </Box>
  );
};

export default Dashboard;
