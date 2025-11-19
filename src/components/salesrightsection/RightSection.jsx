import { Box, Tab, Tabs, Typography } from "@mui/material";
import React, { useCallback, useState } from "react";

const TABS = [
  "Purchase",
  "History",
  "Notes",
  "Tasks",
  "Assets",
  "Email",
  "Related",
];

function RightSection() {
  const [selectedTab, setSelectedTab] = useState(0);
  const handleTabChange = useCallback((_, idx) => {
    setSelectedTab(idx);
    fetchSalesHistoryList(salesID);
  }, []);

  const tabContents = [
    <Box key="purchase" sx={{ position: "relative" }}>
      <Typography variant="h6" sx={{ mb: 1 }}>
        Purchase
      </Typography>
      <Typography variant="body1" color="text.secondary" sx={{ mb: 4 }}>
        These items need purchasing but there's no purchase order associated
        with them yet. If you have some items in stock or the customer provides
        their own garments, you can remove the purchasing requirement for each
        such line item. You can also remove all purchasing requirements for this
        order at once.
      </Typography>
      <Typography variant="h6" sx={{ mb: 1 }}>
        Purchased Items
      </Typography>
      <Typography variant="body1" color="text.secondary">
        No Purchased Items.
      </Typography>
    </Box>,

    <Box key="history" sx={{ position: "relative" }}>
      <Typography variant="h6" sx={{ mb: 1 }}>
        History
      </Typography>
      <Typography variant="body1" color="text.secondary" sx={{ mb: 4 }}>
        These items need purchasing but there's no purchase order associated
        with them yet. If you have some items in stock or the customer provides
        their own garments, you can remove the purchasing requirement for each
        such line item. You can also remove all purchasing requirements for this
        order at once.
      </Typography>
    </Box>,
  ];
  return (
    <>
      <Box
        sx={{
          width: "100%",
          height: "100vh",
          borderRadius: "12px",
          backgroundColor: "white",
          marginTop: "1.5rem",
        }}
      >
        <Tabs
          value={selectedTab}
          onChange={handleTabChange}
          aria-label="Sidebar Tabs"
          variant="scrollable"
          scrollButtons="auto"
          sx={{
            paddingTop: "20px",
            minHeight: "40px",
            "& .MuiTab-root": {
              minHeight: "40px",
              textTransform: "none",
              fontSize: "1rem",
              color: "black",
              padding: "6px 12px",
              fontWeight: 600,
            },
            "& .Mui-selected": {
              color: "#1976d2",
              fontWeight: 500,
            },
            
            // "& .MuiTabs-indicator": {
            //   backgroundColor: "#1976d2",
            //   height: "3px",
            //   borderRadius: "2px 2px 0 0",
            // },

          }}
          ScrollButtonComponent={(props) => {
            return props.direction === "left" ? (
              <ArrowBackIcon sx={{ fontSize: "18px", color: "#757575" }} />
            ) : (
              <ArrowForwardIcon sx={{ fontSize: "18px", color: "#757575" }} />
            );
          }}
        >
          {TABS.map((label) => (
            <Tab key={label} label={label} />
          ))}
        </Tabs>
        <Box sx={{ p: 2, height: "40rem", overflow: "auto" }}>
          {tabContents[selectedTab]}
        </Box>
      </Box>
    </>
  );
}

export default RightSection;
