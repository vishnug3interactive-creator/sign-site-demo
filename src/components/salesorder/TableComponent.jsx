import {
  Box,
  Button,
  Divider,
  Tab,
  Tabs,
  TextField,
  Typography,
} from "@mui/material";
import React, { useCallback, useState } from "react";
import { DownloadIcon, EyeIcon, SmallArrow, ThreeDot } from "../../icons/Icons";
const TABS = ["Items", "Jobs"];

function TableComponent() {
  const buttonStyle = {
    backgroundColor: "#0071CE1A",
    color: "#0071CE",
    fontFamily: "Nunito",
    minWidth: "auto",
    textTransform: "none",
  };

  const BlueBgButton = {
    backgroundColor: "#0071CE",
    color: "white",
    fontFamily: "Nunito",
    minWidth: "auto",
    textTransform: "none",
  };

  const tableTextSyle = {
    color: "#111827",
    fontFamily: "Nunito",
    fontSize: "16px",
    fontWeight: "600",
    lineHeight: "24px",
  };
  const calculateRegular = {
    color: "#111827B2",
    fontFamily: "Nunito",
    fontSize: "16px",
    fontWeight: "500",
    lineHeight: "20px",
  };

  const calculateBold = {
    color: "#111827",
    fontFamily: "Nunito",
    fontSize: "16px",
    fontWeight: "600",
    lineHeight: "20px",
  };

  const orangeBtn = {
    color: "#FF6600",
    fontFamily: "Nunito",
    fontSize: "16px",
    fontWeight: "400",
    lineHeight: "24px",
    backgroundColor: "#F5F6FA",
    minWidth: "auto",
    textTransform: "none",
  };

  const greenBtn = {
    color: "#45B369",
    fontFamily: "Nunito",
    fontSize: "16px",
    fontWeight: "400",
    lineHeight: "24px",
    backgroundColor: "#0080001A",
    minWidth: "auto",
    textTransform: "none",
  };

  const [selectedTab, setSelectedTab] = useState(0);

  const handleTabChange = useCallback((_, idx) => {
    setSelectedTab(idx);
    fetchSalesHistoryList(salesID);
  }, []);

  const tabContents = [
    <Box key="items" sx={{ position: "relative" }}>
      <Box sx={{ display: "flex", flexDirection: "column", gap: "1.5rem" }}>
        <Box
          sx={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr 1fr 1fr 1fr ",
            backgroundColor: "#F5F6FA",
            padding: "1rem",
            borderRadius: "12px",
          }}
        >
          <Box>Item name</Box>
          <Box>Quantity</Box>
          <Box>Unit Discount</Box>
          <Box>Unit Price</Box>
          <Box>Total Price</Box>
        </Box>
        <Box>
          <Box
            sx={{
              display: "grid",
              gridTemplateColumns: "1fr 1fr 1fr 1fr 1fr",
              border: "1px solid #D9D9D9",
              padding: "1rem",
              borderRadius: "12px",
            }}
          >
            <Box>
              <Typography style={{ ...tableTextSyle }}>
                Lorem ip - Apparel
              </Typography>
            </Box>
            <Box>
              <Typography style={{ ...tableTextSyle }}>18 Each</Typography>
            </Box>
            <Box>
              <Typography style={{ ...tableTextSyle }}>10 %</Typography>
            </Box>
            <Box>
              {" "}
              <Typography style={{ ...tableTextSyle }}>$2500.00</Typography>
            </Box>
            <Box sx={{ display: "flex", gap: "1rem" }}>
              <Typography style={{ ...tableTextSyle }}>$2500.00</Typography>
              <Button style={{ ...buttonStyle }}>
                <SmallArrow />
              </Button>
              <Button style={{ ...BlueBgButton }}>
                <ThreeDot />
              </Button>
            </Box>

            <Box sx={{ display: "flex", gap: "0.5rem", paddingTop: "1rem" }}>
              <Button
                style={{
                  ...buttonStyle,
                  display: "flex",
                  alignItems: "center",
                  gap: "8px",
                }}
              >
                Description
                <SmallArrow />
              </Button>
              <Button
                style={{
                  ...buttonStyle,
                  display: "flex",
                  alignItems: "center",
                  gap: "8px",
                  whiteSpace: "nowrap",
                }}
              >
                Price Breakdown
                <SmallArrow />
              </Button>
            </Box>
          </Box>
        </Box>
        <Box sx={{ padding: "1.5rem" }}>
          <Box sx={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
            <Divider sx={{ borderStyle: "dashed", borderColor: "grey.400" }} />
            <Box sx={{ display: "grid", gridTemplateColumns: "8fr 4fr" }}>
              <Box></Box>
              <Box
                sx={{
                  display: "grid",
                  gridTemplateColumns: "2fr 1fr",
                  rowGap: "1rem",
                }}
              >
                <Box>
                  <Typography style={{ ...calculateRegular }}>
                    Sub Total:
                  </Typography>
                </Box>
                <Box>
                  <Typography style={{ ...calculateBold }}>
                    $4,291.30
                  </Typography>
                </Box>

                <Box>
                  <Typography style={{ ...calculateRegular }}>(0%):</Typography>
                </Box>
                <Box>
                  <Typography style={{ ...calculateBold }}>$0.00</Typography>
                </Box>

                <Box>
                  <Typography style={{ ...calculateRegular }}>
                    State (8.5%):
                  </Typography>
                </Box>
                <Box>
                  <Typography style={{ ...calculateBold }}>$0.81</Typography>
                </Box>

                <Box>
                  <Typography style={{ ...calculateRegular }}>
                    Total Tax:
                  </Typography>
                </Box>
                <Box>
                  <Typography style={{ ...calculateBold }}>$0.00</Typography>
                </Box>

                <Divider sx={{ gridColumn: "1 / -1", my: 1 }} />
                <Box>
                  <Typography style={{ ...calculateRegular }}>
                    Total:
                  </Typography>
                </Box>
                <Box>
                  <Typography
                    sx={{
                      fontFamily: "Nunito",
                      fontWeight: "700",
                      fontSize: "18px",
                      lineHeight: "20px",
                    }}
                  >
                    $4,291.30
                  </Typography>
                </Box>
              </Box>
            </Box>
          </Box>
        </Box>
      </Box>
    </Box>,

    <Box key="jobs" sx={{ position: "relative" }}>
      <Box sx={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
        <Box
          sx={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr 1fr 1fr 1fr 1fr",
            backgroundColor: "#F5F6FA",
            padding: "1rem",
          }}
        >
          <Box>Item name</Box>
          <Box>Quantity</Box>
          <Box>Item Details</Box>
          <Box>Category</Box>
          <Box>Final Proof</Box>
          <Box>Production Status</Box>
        </Box>
        <Box
          sx={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr 1fr 1fr 1fr 1fr",
            border: "1px solid #D9D9D9",
            padding: "1rem",
            borderRadius: "12px",
          }}
        >
          <Box>
            <Typography style={{ ...tableTextSyle }}>
              Lorem ip - Apparel
            </Typography>
          </Box>
          <Box>
            <Typography style={{ ...tableTextSyle }}>18 Each</Typography>
          </Box>
          <Box sx={{ display: "flex" }}>
            <Button>
              <EyeIcon />
            </Button>
          </Box>
          <Box>
            <Button style={{ ...orangeBtn }}>Drive Board</Button>
          </Box>
          <Box sx={{ display: "flex", gap: "1rem", alignItems: "center" }}>
            <EyeIcon />
            <DownloadIcon />
          </Box>

          <Box>
            <Button style={{ ...greenBtn }}>Completed</Button>
          </Box>
        </Box>
      </Box>
      <Box sx={{ paddingTop: "1rem" }}>
        <TextField
          multiline
          rows={4}
          placeholder="Description"
          sx={{
            width: "100%",
            borderRadius: "12px",
          }}
        />
      </Box>
    </Box>,
  ];

  return (
    <div>
      <Box
        sx={{
          backgroundColor: "white",
          padding: "1.5rem",
          borderRadius: "0.75rem",
        }}
      >
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            paddingLeft: "1.5rem",
            paddingRight: "1.5rem",
          }}
        >
          <Box>
            {" "}
            <Tabs
              value={selectedTab}
              onChange={handleTabChange}
              aria-label="Sidebar Tabs"
              variant="scrollable"
              scrollButtons="auto"
              sx={{
                minHeight: "40px",
                "& .MuiTab-root": {
                  minHeight: "40px",
                  textTransform: "none",
                 fontSize:'24px',
                  lineHeight:'32px' , 
                  color: "#999999",
                  padding: "6px 12px",
                  fontWeight: 600,
                  "&:hover": {
                    color: "#1976d2",
                  },
                },
                "& .Mui-selected": {
                  color: "black",
                  fontWeight: 700,
                  fontSize:'24px',
                  lineHeight:'32px'             
                },
                "& .MuiTabs-indicator": {
                  backgroundColor: "#1976d2",
                  height: "3px",
                  borderRadius: "2px 2px 0 0",
                },

                "& .MuiSvgIcon-root": {
                  backgroundColor: "#B6B6B6",
                  color: "#fff",
                  borderRadius: "0.313rem",
                },
              }}
              ScrollButtonComponent={(props) => {
                return props.direction === "left" ? (
                  <ArrowBackIcon sx={{ fontSize: "18px", color: "#757575" }} />
                ) : (
                  <ArrowForwardIcon
                    sx={{ fontSize: "18px", color: "#757575" }}
                  />
                );
              }}
            >
              {TABS.map((label) => (
                <Tab key={label} label={label} />
              ))}
            </Tabs>
          </Box>

          <Box sx={{ display: "flex", flexDirection: "row", gap: "1rem" }}>
            <Button style={{ ...buttonStyle }}>Variant History</Button>
            <Button style={{ ...buttonStyle }}>+ Create Job</Button>
            <Button style={{ ...BlueBgButton }}>+ Add Items</Button>
          </Box>
        </Box>

        <Box sx={{ p: 2, overflow: "auto" }}>{tabContents[selectedTab]}</Box>
      </Box>
    </div>
  );
}

export default TableComponent;
