import { useState } from "react";
// import "react-pro-sidebar/dist/css/styles.css";
import { Sidebar, Menu, MenuItem } from "react-pro-sidebar";
import { Box, IconButton, Typography, useTheme } from "@mui/material";
import { Link } from "react-router-dom";
import { tokens } from "../../theme";
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import PeopleOutlinedIcon from "@mui/icons-material/PeopleOutlined";
import ContactsOutlinedIcon from "@mui/icons-material/ContactsOutlined";
import ReceiptOutlinedIcon from "@mui/icons-material/ReceiptOutlined";
import PersonOutlinedIcon from "@mui/icons-material/PersonOutlined";
import CalendarTodayOutlinedIcon from "@mui/icons-material/CalendarTodayOutlined";
import HelpOutlineOutlinedIcon from "@mui/icons-material/HelpOutlineOutlined";
import BarChartOutlinedIcon from "@mui/icons-material/BarChartOutlined";
import PieChartOutlineOutlinedIcon from "@mui/icons-material/PieChartOutlineOutlined";
import TimelineOutlinedIcon from "@mui/icons-material/TimelineOutlined";
import MenuOutlinedIcon from "@mui/icons-material/MenuOutlined";
import MapOutlinedIcon from "@mui/icons-material/MapOutlined";
import { dark } from "@mui/material/styles/createPalette";

const Item = ({ link, title, to, icon, selected, setSelected }) => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  return (
    <MenuItem
      active={selected === title}
      style={{ color: colors.grey[100] }}
      onClick={() => setSelected(title)}
    >
      <Link
        to={to}
        style={{
          textDecoration: "none",
          color: "inherit",
          display: "flex",
          alignItems: "center",
        }}
      >
        {icon}
        <Typography>{title}</Typography>
      </Link>
    </MenuItem>
  );
};
const SidebarComponent = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const [isCollapsed, setIsCollapsed] = useState(false);
  const [selected, setSelected] = useState("Dashboard");

  return (
    <>
      <Box
  sx={{

    "& .pro-sidebar-inner": {
      backgroundColor: `${colors.primary[400]} !important`,
    },
    "& .pro-icon-wrapper": {
      backgroundColor: "transparent !important",
    },
    "& .pro-inner-item": {
      padding: "5px 35px 5px 20px !important",
      "&:hover": {
        backgroundColor: "transparent !important",
        color: `${colors.grey[100]} !important`,
      },
    },
    "& .pro-menu-item": {
      "&:hover": {
        backgroundColor: "transparent !important",
        "& .pro-inner-item": {
          backgroundColor: "transparent !important",
          color: `${colors.grey[100]} !important`,
        },
        "& .pro-icon-wrapper": {
          backgroundColor: "transparent !important",
        }
      },
    },
    "& .pro-menu-item.active": {
      color: "#6870fa !important",
    },
  }}
>
      
        {/* Sidebar Menu */}
        <Sidebar
          collapsed={isCollapsed}
          backgroundColor={theme.palette.mode === "dark" ? "#080b12" : "#ffffff"}
          rootStyles={{
            background: "transparent",
            height: "100vh",
            color: theme.palette.mode === "dark" ? "#ffffff" : "#000000",


          }}
          menuItemStyles={{
            button: {
              // Active/focus state
              "&:active": { background: "transparent" },
              "&:focus": { background: "transparent" },
            },

          }}
          
          
        >
          <Menu
          iconShape="square" sx={{color:"#000"}}
    menuItemStyles={{
      button: {
        // the active class will be added automatically by react router
        // so we can use it to style the active menu item
        [`&.active`]: {
          backgroundColor: 'transparent',
          color: '#000',
        },
        "&:hover": {
          backgroundColor: theme.palette.mode === dark ? "#131929" : "", // ✅ Removes white background on hover
          color: "#000", // Keeps text color black
        },
      },
    }}
  >
            {/* LOGO AND MENU ICON */}
            <MenuItem
              onClick={() => setIsCollapsed(!isCollapsed)}
              icon={isCollapsed ? <MenuOutlinedIcon /> : undefined}
              style={{
                margin: "10px 0 20px 0",
                color: colors.blueAccent[400],
              }}
            >
              {!isCollapsed && (
                <Box
                  display="flex"
                  justifyContent="space-between"
                  alignItems="center"
                  ml="15px"
                >
                  <Typography variant="h3" color={colors.greenAccent[100]}>
                    ADMINIS
                  </Typography>
                  <IconButton >
                    <MenuOutlinedIcon />
                    {isCollapsed ? "" : ""}

                  </IconButton>
                </Box>
              )}
            </MenuItem>
     

         
         
          <MenuItem icon={<PeopleOutlinedIcon />}>Users</MenuItem> 
            {/* Menu item */}
            <Box paddingLeft={isCollapsed ? undefined : "10%"} sx={{color:"blcak"}}>
              <Item
                title="Dashboard"
                to="/"
                icon={<HomeOutlinedIcon />}
                selected={selected}
                setSelected={setSelected}
              />
              <Typography
                variant="h6"
                colors={colors.grey[300]}
                sx={{ m: "15px 0 5px 20px" }}
              >
                Data
              </Typography>
              <Item
                title="Mange Team"
                to="/team"
                icon={<PeopleOutlinedIcon />}
                selected={selected}
                setSelected={setSelected}
              />
              <Item
                title="Contacts Information"
                to="/contacts"
                icon={<ContactsOutlinedIcon />}
                selected={selected}
                setSelected={setSelected}
              />{" "}
              <Item
                title="Invoices Balances"
                to="/invoices"
                icon={<ReceiptOutlinedIcon />}
                selected={selected}
                setSelected={setSelected}
              />
              <Typography variant="h6" sx={{ m: "15px 0 5px 20px" }}>
                Pages
              </Typography>
              <Item
                title="Profile Form"
                to="/form"
                icon={<PersonOutlinedIcon />}
                selected={selected}
                setSelected={setSelected}
              />
              <Item
                title="Calendar"
                to="/calendar"
                icon={<CalendarTodayOutlinedIcon />}
                selected={selected}
                setSelected={setSelected}
              />
              <Item
                title="FAQ Page"
                to="/faq"
                icon={<HelpOutlineOutlinedIcon />}
                selected={selected}
                setSelected={setSelected}
              />
              <Typography variant="h6" sx={{ m: "15px 0 5px 20px" }}>
                Charts
              </Typography>
              <Item
                title="Bar Chart"
                to="/bar"
                icon={<BarChartOutlinedIcon />}
                selected={selected}
                setSelected={setSelected}
              />
              <Item
                title="Pie Chart"
                to="/pie"
                icon={<PieChartOutlineOutlinedIcon />}
                selected={selected}
                setSelected={setSelected}
              />
              <Item
                title="Line Chart"
                to="/line"
                icon={<TimelineOutlinedIcon />}
                selected={selected}
                setSelected={setSelected}
              />
              <Item
                title="Geography Chart"
                to="/geography"
                icon={<MapOutlinedIcon />}
                selected={selected}
                setSelected={setSelected}
              />
            </Box>
          </Menu>
        </Sidebar>
      </Box>
    </>
  );
};

export default SidebarComponent;
