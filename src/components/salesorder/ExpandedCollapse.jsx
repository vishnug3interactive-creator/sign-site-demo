import { Box, Button, Collapse, Typography } from '@mui/material'
import React from 'react'
import { BlueEditIcon, DateIcon } from '../../icons/Icons';

function ExpandedCollapse({open}) {
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
       <Collapse in={open}>
                      <Box
                        sx={{
                          display: "grid",
                          gridTemplateColumns: "8fr  4fr",
                          padding: "1.5rem",
                        }}
                      >
                        {/* customer */}
                        <Box sx={{ display: "grid", gap: "2.5rem" }}>
                          <Box sx={{ display: "grid" }}>
                            <Typography style={{ ...headingStyle }}>
                              Customer
                            </Typography>
                            <Box
                              sx={{ display: "grid", gridTemplateColumns: "6fr 6fr" }}
                            >
                              <Box>
                                <Box
                                  sx={{
                                    paddingTop: "1.5rem",
                                    display: "flex",
                                    flexDirection: "column",
                                    gap: "0.375rem",
                                  }}
                                >
                                  <Typography
                                    sx={{
                                      ...regularStyle,
                                      display: "flex",
                                      alignItems: "center",
                                      gap: "6px",
                                    }}
                                  >
                                    Primary Contact
                                    <BlueEditIcon />
                                  </Typography>
      
                                  <Typography style={{ ...subStyle }}>
                                    Eric Hoffman Jerome
                                  </Typography>
                                </Box>
                              </Box>
      
                              <Box
                                sx={{
                                  paddingTop: "1rem",
                                  display: "flex",
                                  flexDirection: "column",
                                  gap: "0.375rem",
                                }}
                              >
                                <Typography
                                  style={{
                                    ...regularStyle,
                                    display: "flex",
                                    alignItems: "center",
                                    gap: "6px",
                                  }}
                                >
                                  Invoice Contact
                                  <BlueEditIcon />
                                </Typography>
                                <Typography
                                  style={{
                                    ...subStyle,
                                  }}
                                >
                                  David James
                                </Typography>
                              </Box>
                            </Box>
                          </Box>
                          {/* status */}
                          <Box sx={{ display: "grid" }}>
                            <Typography style={{ ...headingStyle }}>Status</Typography>
                            <Box
                              sx={{ display: "grid", gridTemplateColumns: "6fr 6fr" }}
                            >
                              <Box
                                sx={{
                                  paddingTop: "1.5rem",
                                  display: "flex",
                                  flexDirection: "column",
                                  gap: "0.375rem",
                                }}
                              >
                                <Typography
                                  sx={{
                                    ...regularStyle,
                                    display: "flex",
                                    alignItems: "center",
                                    gap: "6px",
                                  }}
                                >
                                  Status
                                  <BlueEditIcon />
                                </Typography>
      
                                <Typography style={{ ...subStyle }}>
                                  Approved
                                </Typography>
                              </Box>
      
                              <Box
                                sx={{
                                  paddingTop: "1rem",
                                  display: "flex",
                                  flexDirection: "column",
                                  gap: "0.375rem",
                                }}
                              >
                                <Typography style={{ ...regularStyle }}>
                                  Ordered / Invoiced
                                </Typography>
                                <Typography style={{ ...subStyle }}>No / No</Typography>
                              </Box>
      
                              <Box
                                sx={{
                                  paddingTop: "1.5rem",
                                  display: "flex",
                                  flexDirection: "column",
                                  gap: "0.375rem",
                                }}
                              >
                                <Typography
                                  sx={{
                                    ...regularStyle,
                                    display: "flex",
                                    alignItems: "center",
                                    gap: "6px",
                                  }}
                                >
                                  Job Status
                                  <BlueEditIcon />
                                </Typography>
      
                                <Typography style={{ ...subStyle }}>
                                  In Process
                                </Typography>
                              </Box>
      
                              <Box
                                sx={{
                                  paddingTop: "1rem",
                                  display: "flex",
                                  flexDirection: "column",
                                  gap: "0.375rem",
                                }}
                              >
                                <Typography
                                  style={{
                                    ...regularStyle,
                                    display: "flex",
                                    alignItems: "center",
                                    gap: "6px",
                                  }}
                                >
                                  Assigned Departments
                                  <BlueEditIcon />
                                </Typography>
                                <Typography style={{ ...subStyle }}>
                                  Production
                                </Typography>
                              </Box>
                            </Box>
                          </Box>
                          {/* team assign */}
                          <Box sx={{ display: "grid" }}>
                            <Typography style={{ ...headingStyle }}>
                              Team Assignments
                            </Typography>
                            <Box
                              sx={{ display: "grid", gridTemplateColumns: "6fr 6fr" }}
                            >
                              <Box
                                sx={{
                                  paddingTop: "1.5rem",
                                  display: "flex",
                                  flexDirection: "column",
                                  gap: "0.375rem",
                                }}
                              >
                                <Typography
                                  sx={{
                                    ...regularStyle,
                                    display: "flex",
                                    alignItems: "center",
                                    gap: "6px",
                                  }}
                                >
                                  Sales Rep
                                  <BlueEditIcon />
                                </Typography>
      
                                <Typography style={{ ...subStyle }}>
                                  Dianne Rachel
                                </Typography>
                              </Box>
      
                              <Box
                                sx={{
                                  paddingTop: "1rem",
                                  display: "flex",
                                  flexDirection: "column",
                                  gap: "0.375rem",
                                }}
                              >
                                <Typography style={{ ...regularStyle }}>
                                  Production Manager
                                </Typography>
                                <Typography style={{ ...subStyle }}>
                                  Dianne Rachel
                                </Typography>
                              </Box>
      
                              <Box
                                sx={{
                                  paddingTop: "1.5rem",
                                  display: "flex",
                                  flexDirection: "column",
                                  gap: "0.375rem",
                                }}
                              >
                                <Typography
                                  sx={{
                                    ...regularStyle,
                                    display: "flex",
                                    alignItems: "center",
                                    gap: "6px",
                                  }}
                                >
                                  Designer
                                  <BlueEditIcon />
                                </Typography>
      
                                <Typography style={{ ...subStyle }}>
                                  Dianne Rachel
                                </Typography>
                              </Box>
      
                              <Box
                                sx={{
                                  paddingTop: "1rem",
                                  display: "flex",
                                  flexDirection: "column",
                                  gap: "0.375rem",
                                }}
                              >
                                <Typography
                                  style={{
                                    ...regularStyle,
                                    display: "flex",
                                    alignItems: "center",
                                    gap: "6px",
                                  }}
                                >
                                  Project Manager
                                  <BlueEditIcon />
                                </Typography>
                                <Typography style={{ ...subStyle }}>
                                  Dianne Rachel
                                </Typography>
                              </Box>
      
                              <Box
                                sx={{
                                  paddingTop: "1rem",
                                  display: "flex",
                                  flexDirection: "column",
                                  gap: "0.375rem",
                                }}
                              >
                                <Typography
                                  style={{
                                    ...regularStyle,
                                    display: "flex",
                                    alignItems: "center",
                                    gap: "6px",
                                  }}
                                >
                                  Proof Reviewer
                                  <BlueEditIcon />
                                </Typography>
                                <Typography style={{ ...subStyle }}>Abby</Typography>
                              </Box>
                            </Box>
                          </Box>
      
                          {/* address */}
                          <Box sx={{ display: "grid" }}>
                            <Typography style={{ ...headingStyle }}>
                              Addresses & Shipping
                            </Typography>
                            <Box
                              sx={{ display: "grid", gridTemplateColumns: "6fr 6fr" }}
                            >
                              <Box
                                sx={{
                                  paddingTop: "1.5rem",
                                  display: "flex",
                                  flexDirection: "column",
                                  gap: "0.375rem",
                                }}
                              >
                                <Typography
                                  sx={{
                                    ...regularStyle,
                                    display: "flex",
                                    alignItems: "center",
                                    gap: "6px",
                                  }}
                                >
                                  Billing Address
                                  <BlueEditIcon />
                                </Typography>
      
                                <Typography style={{ ...subStyle }}>
                                  61 Samarinda, Queens Street,
                                </Typography>
                              </Box>
      
                              <Box
                                sx={{
                                  paddingTop: "1rem",
                                  display: "flex",
                                  flexDirection: "column",
                                  gap: "0.375rem",
                                }}
                              >
                                <Typography
                                  style={{
                                    ...regularStyle,
                                    display: "flex",
                                    alignItems: "center",
                                    gap: "6px",
                                  }}
                                >
                                  Shipping Address
                                  <BlueEditIcon />
                                </Typography>
                                <Typography style={{ ...subStyle }}>
                                  Dianne Rachel
                                </Typography>
                              </Box>
      
                              <Box
                                sx={{
                                  paddingTop: "1.5rem",
                                  display: "flex",
                                  flexDirection: "column",
                                  gap: "0.375rem",
                                }}
                              >
                                <Typography
                                  sx={{
                                    ...regularStyle,
                                    display: "flex",
                                    alignItems: "center",
                                    gap: "6px",
                                  }}
                                >
                                  Billing Attention To
                                  <BlueEditIcon />
                                </Typography>
      
                                <Typography style={{ ...subStyle }}>
                                  Dianne Rachel
                                </Typography>
                              </Box>
      
                              <Box
                                sx={{
                                  paddingTop: "1rem",
                                  display: "flex",
                                  flexDirection: "column",
                                  gap: "0.375rem",
                                }}
                              >
                                <Typography
                                  style={{
                                    ...regularStyle,
                                    display: "flex",
                                    alignItems: "center",
                                    gap: "6px",
                                  }}
                                >
                                  Shipping Attention To
                                  <BlueEditIcon />
                                </Typography>
                                <Typography style={{ ...subStyle }}>
                                  Dianne Rachel
                                </Typography>
                              </Box>
      
                              <Box
                                sx={{
                                  paddingTop: "1rem",
                                  display: "flex",
                                  flexDirection: "column",
                                  gap: "0.375rem",
                                }}
                              >
                                <Typography
                                  style={{
                                    ...regularStyle,
                                    display: "flex",
                                    alignItems: "center",
                                    gap: "6px",
                                  }}
                                >
                                  Install Address
                                  <BlueEditIcon />
                                </Typography>
                                <Typography style={{ ...subStyle }}>Abby</Typography>
                              </Box>
                              <Box
                                sx={{
                                  paddingTop: "1rem",
                                  display: "flex",
                                  flexDirection: "column",
                                  gap: "0.375rem",
                                }}
                              >
                                <Typography
                                  style={{
                                    ...regularStyle,
                                    display: "flex",
                                    alignItems: "center",
                                    gap: "6px",
                                  }}
                                >
                                  Shipping Method
                                  <BlueEditIcon />
                                </Typography>
                                <Typography style={{ ...subStyle }}>Abby</Typography>
                              </Box>
      
                              <Box
                                sx={{
                                  paddingTop: "1rem",
                                  display: "flex",
                                  flexDirection: "column",
                                  gap: "0.375rem",
                                }}
                              >
                                <Typography
                                  style={{
                                    ...regularStyle,
                                    display: "flex",
                                    alignItems: "center",
                                    gap: "6px",
                                  }}
                                >
                                  Install Attention To
                                  <BlueEditIcon />
                                </Typography>
                                <Typography style={{ ...subStyle }}>Abby</Typography>
                              </Box>
                              <Box
                                sx={{
                                  paddingTop: "1rem",
                                  display: "flex",
                                  flexDirection: "column",
                                  gap: "0.375rem",
                                }}
                              >
                                <Typography
                                  style={{
                                    ...regularStyle,
                                    display: "flex",
                                    alignItems: "center",
                                    gap: "6px",
                                  }}
                                >
                                  Shipping Tracking
                                  <BlueEditIcon />
                                </Typography>
                                <Typography style={{ ...subStyle }}>Abby</Typography>
                              </Box>
                            </Box>
                          </Box>
                          {/* Payment $ tax */}
                          <Box sx={{ display: "grid" }}>
                            <Typography style={{ ...headingStyle }}>
                              Payment & Tax{" "}
                            </Typography>
                            <Box
                              sx={{ display: "grid", gridTemplateColumns: "6fr 6fr" }}
                            >
                              <Box
                                sx={{
                                  paddingTop: "1.5rem",
                                  display: "flex",
                                  flexDirection: "column",
                                  gap: "0.375rem",
                                }}
                              >
                                <Typography
                                  sx={{
                                    ...regularStyle,
                                    display: "flex",
                                    alignItems: "center",
                                    gap: "6px",
                                  }}
                                >
                                  Terms
                                  <BlueEditIcon />
                                </Typography>
                                <Typography style={{ ...subStyle }}>
                                  Approved
                                </Typography>
                              </Box>
      
                              <Box
                                sx={{
                                  paddingTop: "1rem",
                                  display: "flex",
                                  flexDirection: "column",
                                  gap: "0.375rem",
                                }}
                              >
                                <Typography style={{ ...regularStyle }}>
                                  Downpayment Percentage
                                </Typography>
                                <Typography style={{ ...subStyle }}>No / No</Typography>
                              </Box>
                              <Box
                                sx={{
                                  paddingTop: "1.5rem",
                                  display: "flex",
                                  flexDirection: "column",
                                  gap: "0.375rem",
                                }}
                              >
                                <Typography
                                  sx={{
                                    ...regularStyle,
                                    display: "flex",
                                    alignItems: "center",
                                    gap: "6px",
                                  }}
                                >
                                  External Payment
                                  <BlueEditIcon />
                                </Typography>
      
                                <Typography style={{ ...subStyle }}>
                                  In Process
                                </Typography>
                              </Box>
      
                              <Box
                                sx={{
                                  paddingTop: "1rem",
                                  display: "flex",
                                  flexDirection: "column",
                                  gap: "0.375rem",
                                }}
                              >
                                <Typography
                                  style={{
                                    ...regularStyle,
                                    display: "flex",
                                    alignItems: "center",
                                    gap: "6px",
                                  }}
                                >
                                  Tax
                                  <BlueEditIcon />
                                </Typography>
                                <Typography style={{ ...subStyle }}>
                                  Production
                                </Typography>
                              </Box>
                            </Box>
                          </Box>
                        </Box>
      
                        {/* second grid */}
                        <Box sx={{ position: "relative" }}>
                          <Box
                            sx={{
                              backgroundColor: "#F5F6FA",
                              borderRadius: "12px",
                              padding: "0.9rem",
                            }}
                          >
                            <Typography style={{ ...headingStyle }}>Dates</Typography>
                          </Box>
      
                          <Box
                            sx={{
                              border: "1px solid #D9D9D9",
                              backgroundColor: "white",
                              borderRadius: "12px",
                              padding: "0.3rem",
                              position: "absolute",
                              top: "45px",
                              width: "100%",
                              padding: "20px",
                            }}
                          >
                            <Box
                              sx={{
                                display: "flex",
                                alignItems: "center",
                                gap: "1rem",
                              }}
                            >
                              <Button style={{ ...DateButton }}>
                                <DateIcon />
                              </Button>
                              <Box
                                sx={{
                                  paddingTop: "1.5rem",
                                  display: "flex",
                                  flexDirection: "column",
                                  gap: "0.375rem",
                                }}
                              >
                                <Typography style={{ ...regularStyle }}>
                                  Sales Order Date
                                </Typography>
                                <Typography style={{ ...subStyle }}>
                                  Saturday, 15-02-2025
                                </Typography>
                              </Box>
                            </Box>
                            <Box
                              sx={{
                                display: "flex",
                                alignItems: "center",
                                gap: "1rem",
                              }}
                            >
                              <Button style={{ ...DateButton }}>
                                <DateIcon />
                              </Button>
                              <Box
                                sx={{
                                  paddingTop: "1.5rem",
                                  display: "flex",
                                  flexDirection: "column",
                                  gap: "0.375rem",
                                }}
                              >
                                <Typography style={{ ...regularStyle }}>
                                  Due Date
                                </Typography>
                                <Typography style={{ ...subStyle }}>
                                  Monday, 24-02-2025
                                </Typography>
                              </Box>
                            </Box>
                            <Box
                              sx={{
                                display: "flex",
                                alignItems: "center",
                                gap: "1rem",
                              }}
                            >
                              <Button style={{ ...DateButton }}>
                                <DateIcon />
                              </Button>
                              <Box
                                sx={{
                                  paddingTop: "1.5rem",
                                  display: "flex",
                                  flexDirection: "column",
                                  gap: "0.375rem",
                                }}
                              >
                                <Typography style={{ ...regularStyle }}>
                                  Art Due Date
                                </Typography>
                                <Typography style={{ ...subStyle }}>
                                  Saturday, 15-02-2025
                                </Typography>
                              </Box>
                            </Box>
                            <Box
                              sx={{
                                display: "flex",
                                alignItems: "center",
                                gap: "1rem",
                              }}
                            >
                              <Button style={{ ...DateButton }}>
                                <DateIcon />
                              </Button>
                              <Box
                                sx={{
                                  paddingTop: "1.5rem",
                                  display: "flex",
                                  flexDirection: "column",
                                  gap: "0.375rem",
                                }}
                              >
                                <Typography style={{ ...regularStyle }}>
                                  Production Due Date
                                </Typography>
                                <Typography style={{ ...subStyle }}>
                                  Saturday, 15-02-2025
                                </Typography>
                              </Box>
                            </Box>
                            <Box
                              sx={{
                                display: "flex",
                                alignItems: "center",
                                gap: "1rem",
                              }}
                            >
                              <Button style={{ ...DateButton }}>
                                <DateIcon />
                              </Button>
                              <Box
                                sx={{
                                  paddingTop: "1.5rem",
                                  display: "flex",
                                  flexDirection: "column",
                                  gap: "0.375rem",
                                }}
                              >
                                <Typography style={{ ...regularStyle }}>
                                  Next Contact Date
                                </Typography>
                                <Typography style={{ ...subStyle }}>
                                  Saturday, 15-02-2025
                                </Typography>
                              </Box>
                            </Box>
                            <Box
                              sx={{
                                display: "flex",
                                alignItems: "center",
                                gap: "1rem",
                              }}
                            >
                              <Button style={{ ...DateButton }}>
                                <DateIcon />
                              </Button>
                              <Box
                                sx={{
                                  paddingTop: "1.5rem",
                                  display: "flex",
                                  flexDirection: "column",
                                  gap: "0.375rem",
                                }}
                              >
                                <Typography style={{ ...regularStyle }}>
                                  Shipping Date
                                </Typography>
                                <Typography style={{ ...subStyle }}>
                                  Saturday, 15-02-2025
                                </Typography>
                              </Box>
                            </Box>
                            <Box
                              sx={{
                                display: "flex",
                                alignItems: "center",
                                gap: "1rem",
                              }}
                            >
                              <Button style={{ ...DateButton }}>
                                <DateIcon />
                              </Button>
                              <Box
                                sx={{
                                  paddingTop: "1.5rem",
                                  display: "flex",
                                  flexDirection: "column",
                                  gap: "0.375rem",
                                }}
                              >
                                <Typography style={{ ...regularStyle }}>
                                  Install Date
                                </Typography>
                                <Typography style={{ ...subStyle }}>
                                  Saturday, 15-02-2025
                                </Typography>
                              </Box>
                            </Box>
                            <Box
                              sx={{
                                display: "flex",
                                alignItems: "center",
                                gap: "1rem",
                              }}
                            >
                              <Button style={{ ...DateButton }}>
                                <DateIcon />
                              </Button>
                              <Box
                                sx={{
                                  paddingTop: "1.5rem",
                                  display: "flex",
                                  flexDirection: "column",
                                  gap: "0.375rem",
                                }}
                              >
                                <Typography style={{ ...regularStyle }}>
                                  In Hand Date
                                </Typography>
                                <Typography style={{ ...subStyle }}>
                                  Saturday, 15-02-2025
                                </Typography>
                              </Box>
                            </Box>
                          </Box>
                        </Box>
                      </Box>
                      {/* Details */}
                      <Box sx={{ display: "grid", padding: "1.5rem" }}>
                        <Typography style={{ ...headingStyle }}>Details</Typography>
                        <Box
                          sx={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr" }}
                        >
                          <Box
                            sx={{
                              paddingTop: "1.5rem",
                              display: "flex",
                              flexDirection: "column",
                              gap: "0.375rem",
                            }}
                          >
                            <Typography
                              sx={{
                                ...regularStyle,
                                display: "flex",
                                alignItems: "center",
                                gap: "6px",
                              }}
                            >
                              Design Details
                              <BlueEditIcon />
                            </Typography>
      
                            <Typography style={{ ...subStyle }}>
                              Dianne Rachel
                            </Typography>
                          </Box>
      
                          <Box
                            sx={{
                              paddingTop: "1rem",
                              display: "flex",
                              flexDirection: "column",
                              gap: "0.375rem",
                            }}
                          >
                            <Typography style={{ ...regularStyle }}>
                              Production Details
                            </Typography>
                            <Typography style={{ ...subStyle }}>
                              Dianne Rachel
                            </Typography>
                          </Box>
      
                          <Box
                            sx={{
                              paddingTop: "1.5rem",
                              display: "flex",
                              flexDirection: "column",
                              gap: "0.375rem",
                            }}
                          >
                            <Typography
                              sx={{
                                ...regularStyle,
                                display: "flex",
                                alignItems: "center",
                                gap: "6px",
                              }}
                            >
                              Shipping Details
                              <BlueEditIcon />
                            </Typography>
      
                            <Typography style={{ ...subStyle }}>
                              Dianne Rachel
                            </Typography>
                          </Box>
      
                          <Box
                            sx={{
                              paddingTop: "1rem",
                              display: "flex",
                              flexDirection: "column",
                              gap: "0.375rem",
                            }}
                          >
                            <Typography
                              style={{
                                ...regularStyle,
                                display: "flex",
                                alignItems: "center",
                                gap: "6px",
                              }}
                            >
                              Installation Details
                              <BlueEditIcon />
                            </Typography>
                            <Typography style={{ ...subStyle }}>
                              Dianne Rachel
                            </Typography>
                          </Box>
      
                          <Box
                            sx={{
                              paddingTop: "1rem",
                              display: "flex",
                              flexDirection: "column",
                              gap: "0.375rem",
                            }}
                          >
                            <Typography
                              style={{
                                ...regularStyle,
                                display: "flex",
                                alignItems: "center",
                                gap: "6px",
                              }}
                            >
                              Special Info
                              <BlueEditIcon />
                            </Typography>
                            <Typography style={{ ...subStyle }}>Abby</Typography>
                          </Box>
                          <Box
                            sx={{
                              paddingTop: "1rem",
                              display: "flex",
                              flexDirection: "column",
                              gap: "0.375rem",
                            }}
                          >
                            <Typography
                              style={{
                                ...regularStyle,
                                display: "flex",
                                alignItems: "center",
                                gap: "6px",
                              }}
                            >
                              Customer Note
                              <BlueEditIcon />
                            </Typography>
                            <Typography style={{ ...subStyle }}>Abby</Typography>
                          </Box>
                        </Box>
                      </Box>
                      {/* others */}
                      <Box sx={{ display: "grid", padding: "1.5rem" }}>
                        <Typography style={{ ...headingStyle }}>Others</Typography>
                        <Box
                          sx={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr" }}
                        >
                          <Box
                            sx={{
                              paddingTop: "1.5rem",
                              display: "flex",
                              flexDirection: "column",
                              gap: "0.375rem",
                            }}
                          >
                            <Typography
                              sx={{
                                ...regularStyle,
                                display: "flex",
                                alignItems: "center",
                                gap: "6px",
                              }}
                            >
                              Sales Order Title
                              <BlueEditIcon />
                            </Typography>
      
                            <Typography style={{ ...subStyle }}>
                              Dianne Rachel
                            </Typography>
                          </Box>
      
                          <Box
                            sx={{
                              paddingTop: "1rem",
                              display: "flex",
                              flexDirection: "column",
                              gap: "0.375rem",
                            }}
                          >
                            <Typography
                              style={{
                                ...regularStyle,
                                display: "flex",
                                alignItems: "center",
                                gap: "6px",
                              }}
                            >
                              Customer PO
                              <BlueEditIcon />
                            </Typography>
                            <Typography style={{ ...subStyle }}>
                              Dianne Rachel
                            </Typography>
                          </Box>
      
                          <Box
                            sx={{
                              paddingTop: "1.5rem",
                              display: "flex",
                              flexDirection: "column",
                              gap: "0.375rem",
                            }}
                          >
                            <Typography
                              sx={{
                                ...regularStyle,
                                display: "flex",
                                alignItems: "center",
                                gap: "6px",
                              }}
                            >
                              Customer PO Date
                              <BlueEditIcon />
                            </Typography>
      
                            <Typography style={{ ...subStyle }}>
                              Dianne Rachel
                            </Typography>
                          </Box>
                        </Box>
                      </Box>
                    </Collapse>
    </div>
  )
}

export default ExpandedCollapse
