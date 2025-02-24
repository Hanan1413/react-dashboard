import { Box } from "@mui/material";
import SidebarComponent from "./SidebarComponent"; 
import { Outlet } from "react-router-dom"; 

const Layout = () => {
  return (
    <Box display="flex" sx={{height: {xs:"100vh", md:"auto", lg:"auto"} }}> {/* Flex container */}
      {/* Sidebar */}
      <Box bgcolor="primary.main" height="100vh" >
        <SidebarComponent />
      </Box>

      <Box flexGrow={1} bgcolor="background.default" sx={{ overflow: {xs:"auto", md:"auto", lg:"hidden"}, padding: 2 }}>
        <Outlet /> 
      </Box>
    </Box>
  );
};

export default Layout;
