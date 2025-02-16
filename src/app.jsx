import React from "react";
import { ColorModeContext, useMode } from "./theme";
import { CssBaseline, ThemeProvider } from "@mui/material";
import { Route, Routes } from "react-router-dom";
import Topbar from "./scenes/global/Topbar";
// import Sidebar from "./scenes/gloable/Sidebar";
import SidebarComponent from './scenes/global/SidebarComponent';
import Dashboarard from "./scenes/dashboard";
import Team from "./scenes/team";
import Invoices from "./scenes/invoices";
import Contacts from "./scenes/contacts";
import Form from './scenes/form';
import Bar from "./scenes/bar";
import Line from "./scenes/line";
import Pie from "./scenes/pie";
import FAQ from "./scenes/faq";
// import Geography from "./scenes/geography";
import Calendar from "./scenes/calendar";


function App() {
  const [theme, colorMode] = useMode();

  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <div className="app">
            <SidebarComponent />
            <div className="content">
            <Topbar />

            <Routes>
              <Route path="/" element={<Dashboarard />} />
               <Route path="/team" element={<Team />} />
               <Route path="/contacts" element={<Contacts />} />
               <Route path="/invoices" element={<Invoices />} />
              <Route path="/form" element={<Form />}/>
              <Route path="/calendar" element={<Calendar />} /> 
              <Route path="/faq" element={<FAQ />} />
              <Route path="/pie" element={<Pie />} />
              <Route path="/line" element={<Line />} />
              <Route path="/bar" element={<Bar />}  />
             


  

              {/* 
              <Route path="/geography" element={<Geography />} />
              <Route path="/calendar" element={<Calendar />} />    */}
            </Routes>
            </div>

        </div>
      </ThemeProvider>
    </ColorModeContext.Provider>
  );
}

export default App;
