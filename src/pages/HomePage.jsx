import { Box } from "@mui/material";
import React from "react";
import Header from "../components/header/Header";
import Sidebar from "../components/sidebar/Sidebar";
import SalesOrderPage from "./salesorder/SalesOrderPage";
import RightSection from "../components/salesrightsection/RightSection";

function HomePage() {
  return (
    <Box
      sx={{
        display: "grid",
        gridTemplateColumns: "0.8fr 3.28fr 1.48fr ",
        height: "100vh",
        gridTemplateRows: "auto 1fr",
      }}
    >
      <Box sx={{ gridRow: "1/3" }}>
        <Sidebar />
      </Box>
      <Box sx={{ gridColumn: "2/4" }}>
        <Header />
      </Box>
      <Box sx={{ gridColumn: "2 / 3", overflow: "auto",backgroundColor:'#F5F6FA' }}>
        <SalesOrderPage />
      </Box>
      <Box sx={{ gridColumn: "3 / 4", overflow: "auto",backgroundColor:'#F5F6FA'  }}>
      <RightSection/>
      </Box>
    </Box>
  );
}

export default HomePage;
