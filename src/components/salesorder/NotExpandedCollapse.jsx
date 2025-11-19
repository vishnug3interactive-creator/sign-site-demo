import { Box, Button, Collapse, Typography } from "@mui/material";
import React from "react";
import { BlueEditIcon, DateIcon } from "../../icons/Icons";

function NotExpandedCollapse({ open }) {
  const headingStyle = {
    color: "#111827",
    fontFamily: "Nunito",
    fontSize: "18px",
    fontWeight: "700",
    lineHeight: "24px",
  };

  const subStyle = {
    color: "#111827",
    fontFamily: "Nunito",
    fontSize: "16px",
    fontWeight: "600",
    lineHeight: "20px",
  };
  const regularStyle = {
    color: "#111827B2",
    fontFamily: "Nunito",
    fontSize: "14px",
    fontWeight: "500",
    lineHeight: "20px",
  };

  const DateButton = {
    backgroundColor: "#0071CE1A",
    borderRadius: "50%",
    minWidth: "auto",
  };

  return (
    <div>
      <Collapse in={!open} timeout="auto" sx={{ gridColumn: "1 / -1" }}>
        <Box
          sx={{
            display: "grid",
            gridTemplateColumns: "1.5fr 1.5fr 1.5fr 1.5fr",
            padding: "1.5rem",
          }}
        >
          <Box>
            <Box sx={{display:'flex',flexDirection:'column',gap:'1.5rem'}}>
              <Typography style={{ ...headingStyle }}>Customer</Typography>
            <Box sx={{display:'flex',flexDirection:'column',gap:'1rem'}}>
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                gap: "0.375rem",
              }}
            >
              <Typography style={{ ...regularStyle }}>
                Primary Contact
              </Typography>
              <Typography style={{ ...subStyle }}>
                Eric Hoffman Jerome
              </Typography>
             </Box>
            </Box>
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                gap: "0.375rem",
              }}
            >
              <Typography style={{ ...regularStyle }}>
                Invoice Contact
              </Typography>
              <Typography style={{ ...subStyle }}>David James</Typography>
            </Box>
            </Box>
          </Box>

          <Box>
            <Box sx={{display:'flex',flexDirection:'column',gap:'1.5rem'}}>
         <Typography style={{ ...headingStyle }}>Status</Typography>
         <Box sx={{display:'flex',flexDirection:'column',gap:'1rem'}}>
     <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                gap: "0.375rem",
              }}
            >
              <Typography style={{ ...regularStyle }}>Status</Typography>
              <Typography style={{ ...subStyle }}>No</Typography>
            </Box>
            </Box>
        
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                gap: "0.375rem",
              }}
            >
              <Typography style={{ ...regularStyle }}>Invoiced</Typography>
              <Typography style={{ ...subStyle }}>No</Typography>
            </Box>
         </Box>

          </Box>
          <Box>
            <Box  sx={{display:'flex',flexDirection:'column',gap:'1.5rem'}}>
               <Typography style={{ ...headingStyle }}>
              Team Assignments
            </Typography>
             <Box  sx={{display:'flex',flexDirection:'column',gap:'1rem'}}>
          <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                gap: "0.375rem",
              }}
            >
              <Typography style={{ ...regularStyle }}>Sales Rep</Typography>
              <Typography style={{ ...subStyle }}>Peter</Typography>
            </Box>
               </Box>
           
            <Box
              sx={{
                flexDirection: "column",
                gap: "0.375rem",
              }}
            >
              <Typography style={{ ...regularStyle }}>
                Production Manager
              </Typography>
              <Typography style={{ ...subStyle }}>Peter</Typography>
            </Box>
             </Box>
          </Box>

          <Box>
             <Box  sx={{display:'flex',flexDirection:'column',gap:'1.5rem'}}>
                 <Typography style={{ ...headingStyle }}>Dates</Typography>
            <Box sx={{ display: "flex", alignItems: "center", gap: "1rem" }}>
              <Button style={{ ...DateButton }}>
                <DateIcon />
              </Button>
               <Box  sx={{display:'flex',flexDirection:'column',gap:'1rem'}}>
             <Box
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  gap: "0.375rem",
                }}
              >
                <Typography style={{ ...regularStyle }}>Quote Date</Typography>
                <Typography style={{ ...subStyle }}>
                  Saturday, 15-02-2025
                </Typography>
              </Box>
            </Box>
             </Box>
         
            <Box sx={{ display: "flex", alignItems: "center", gap: "1rem" }}>
              <Button style={{ ...DateButton }}>
                <DateIcon />
              </Button>
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  gap: "0.375rem",
                }}
              >
                <Typography style={{ ...regularStyle }}>Due Date</Typography>
                <Typography style={{ ...subStyle }}>
                  Monday, 24-02-2025
                </Typography>
              </Box>
            </Box>
               </Box>
          </Box>

        </Box>
      </Collapse>
    </div>
  );
}

export default NotExpandedCollapse;
