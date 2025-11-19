import {
  Box,
  Button,
  Divider,
  Typography,
} from "@mui/material";
import React, { useCallback, useState } from "react";
import {
  ArrowDown,
  ArrowUp,
  DownloadPdf,
  EditIcon,
  EmailPdf,
  GreenTick,
  ThreeDotBlue,
} from "../../icons/Icons";
import ExpandedCollapse from "../../components/salesorder/ExpandedCollapse";
import NotExpandedCollapse from "../../components/salesorder/NotExpandedCollapse";
import TableComponent from "../../components/salesorder/TableComponent";

function SalesOrderPage() {

  const buttonStyle = {
    backgroundColor: "#0071CE1A",
    color: "#0071CE",
    fontFamily: "Nunito",
    minWidth: "auto",
    textTransform: "none",
  };

  const jobidbtn={
    color:'#FF0000',
    backgroundColor:'#FF00001A',
    minWidth:'auto',
    textTransform: "none",
    fontSize:'14px',
    lineHeight:'24px'
  }

  const [open, setOpen] = useState(false);
  return (
    <>
      <Box sx={{ padding: "1.5rem" }}>
        <Box sx={{ display: "flex", justifyContent: "space-between" }}>
          <Box>
            <Typography
              sx={{
                fontFamily: "Nunito",
                fontWeight: "700",
                fontSize: "1.5rem",
                lineHeight: "2rem",
                gap: "8px",
              }}
            >
              SO #1002: Lorem Ipsum
            </Typography>
           <Box><Button style={{...jobidbtn}}>#JOB_ID_10100</Button></Box>
          </Box>

          <Box sx={{ display: "flex", gap: "10px",alignItems:'start' }}>
            <Button
              style={{ ...buttonStyle }}
              sx={{
                textTransform: "none",
                paddingBottom: "8px",
                paddingRight: "16px",
                paddingLeft: "16px",
                borderRadius: "10px",
              }}
              startIcon={
                <DownloadPdf/>
              }
            >
              Download PDF
            </Button>

            <Button
              style={{ ...buttonStyle }}
              sx={{
                textTransform: "none",
             
                paddingBottom: "8px",
                paddingRight: "16px",
                paddingLeft: "16px",
                borderRadius: "10px",
              }}
              startIcon={
               
                <EmailPdf/>
              }
            >
              Email PDF
            </Button>

            <Button
              style={{ ...buttonStyle }}
              sx={{
                
              
                borderRadius: "10px",
              }}
            >
              <EditIcon/>
            </Button>

            <Button
              style={{ ...buttonStyle }}
              sx={{
              
              
                borderRadius: "10px",
              }}
            >
             <ThreeDotBlue/>
            </Button>
          </Box>
        </Box>

        <Box sx={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
          <Box sx={{ paddingTop: "1.25rem" }}>
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
                  alignItems: "center",
                }}
              >
                <Box sx={{ display: "flex", gap: "1rem", alignItems: "center" }}>
                  <Box sx={{position:'relative'}}>
                    <Button
                      sx={{
                        backgroundColor: "#0071CE1A",
                        border: "2px solid #0071CE",
                        borderRadius: "50%",
                        width: "68px",
                        height: "68px",
                      }}
                    >
                      <Typography
                        sx={{
                          fontSize: "24px",
                          lineHeight: "32px",
                          fontFamily: "Nunito",
                          fontWeight: "700",
                          color: "#111827",
                        }}
                      >
                        AL
                      </Typography>
                    </Button>
                    <Box sx={{position:'absolute',bottom:'-5.5px',right:0}}><GreenTick/></Box>
                  </Box>
                  <Box>
                    <Typography
                      sx={{
                        color: "#111827",
                        fontFamily: "Nunito",
                        fontWeight: "600",
                        fontSize: "20px",
                        lineHeight: "30px",
                      }}
                    >
                      Alexander Luie Philip
                    </Typography>
                    <Typography
                      sx={{
                        color: "#111827B2",
                        fontFamily: "Nunito",
                        fontWeight: "500",
                        fontSize: "16px",
                        lineHeight: "20px",
                      }}
                    >
                      Individual
                    </Typography>
                  </Box>
                  <Box>
                    <Button
                      sx={{
                        backgroundColor: "#0080001A",
                        textTransform: "none",
                        color: "#45B369",
                      }}
                    >
                      Approved
                    </Button>
                  </Box>
                </Box>
                <Box>
                  <Button
                    onClick={() => setOpen(!open)}
                    style={{ ...buttonStyle }}
                    sx={{
                      width: "40px",
                      height: "40px",
                      borderRadius: "50%",
                      border: "1px solid #0071CE",
                    }}
                  >
                    {open ? <ArrowUp /> : <ArrowDown />}
                  </Button>
                 
                </Box>
              </Box>
              <Box sx={{ paddingTop: "1.25rem" }}>
                <Divider />
              </Box>
              <NotExpandedCollapse open={open}/>
              {/* open content */}
               <ExpandedCollapse open={open} />
            </Box>
          </Box>
          <Box >
             {!open && <TableComponent />}
          </Box>
        </Box>
      </Box>
    </>
  );
}

export default SalesOrderPage;
