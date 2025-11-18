import { Box, Button, Collapse, Divider, Typography } from "@mui/material";
import React, { useState } from "react";
import { ArrowDown, ArrowUp, BlueEditIcon, DateIcon } from "../../icons/Icons";

function SalesOrderPage() {
  const buttonStyle = {
    backgroundColor: "#0071CE1A",
    color: "#0071CE",
    fontFamily: "Nunito",
    minWidth: "auto",
  };

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
          </Box>

          <Box sx={{ display: "flex", gap: "10px" }}>
            <Button
              style={{ ...buttonStyle }}
              sx={{
                textTransform: "none",
                paddingTop: "8px",
                paddingBottom: "8px",
                paddingRight: "16px",
                paddingLeft: "16px",
                borderRadius: "10px",
              }}
              startIcon={
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M8.46997 13.53C8.17697 13.237 8.17697 12.762 8.46997 12.469C8.76297 12.176 9.23801 12.176 9.53101 12.469L11.251 14.189V3C11.251 2.586 11.587 2.25 12.001 2.25C12.415 2.25 12.751 2.586 12.751 3V14.189L14.4709 12.469C14.7639 12.176 15.239 12.176 15.532 12.469C15.825 12.762 15.825 13.237 15.532 13.53L12.532 16.53C12.463 16.599 12.3801 16.654 12.2881 16.692C12.1961 16.73 12.099 16.75 12.001 16.75C11.903 16.75 11.8061 16.73 11.7141 16.692C11.6221 16.654 11.539 16.599 11.47 16.53L8.46997 13.53ZM18 9.25C17.586 9.25 17.25 9.586 17.25 10C17.25 10.414 17.586 10.75 18 10.75C19.577 10.75 20.25 11.423 20.25 13V18C20.25 19.577 19.577 20.25 18 20.25H6C4.423 20.25 3.75 19.577 3.75 18V13C3.75 11.423 4.423 10.75 6 10.75C6.414 10.75 6.75 10.414 6.75 10C6.75 9.586 6.414 9.25 6 9.25C3.582 9.25 2.25 10.582 2.25 13V18C2.25 20.418 3.582 21.75 6 21.75H18C20.418 21.75 21.75 20.418 21.75 18V13C21.75 10.582 20.418 9.25 18 9.25Z"
                    fill="#0071CE"
                  />
                </svg>
              }
            >
              Download PDF
            </Button>

            <Button
              style={{ ...buttonStyle }}
              sx={{
                textTransform: "none",
                paddingTop: "8px",
                paddingBottom: "8px",
                paddingRight: "16px",
                paddingLeft: "16px",
                borderRadius: "10px",
              }}
              startIcon={
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M17 20.5H7C4 20.5 2 19 2 15.5V8.5C2 5 4 3.5 7 3.5H17C20 3.5 22 5 22 8.5V15.5C22 19 20 20.5 17 20.5Z"
                    stroke="#0071CE"
                    stroke-width="1.5"
                    stroke-miterlimit="10"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M17 9L13.87 11.5C12.84 12.32 11.15 12.32 10.12 11.5L7 9"
                    stroke="#0071CE"
                    stroke-width="1.5"
                    stroke-miterlimit="10"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
              }
            >
              Email PDF
            </Button>

            <Button
              style={{ ...buttonStyle }}
              sx={{
                padding: "8px",
                width: "40px",
                height: "40px",
                borderRadius: "10px",
              }}
            >
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M19.75 15V18C19.75 20.418 18.418 21.75 16 21.75H6C3.582 21.75 2.25 20.418 2.25 18V8C2.25 5.582 3.582 4.25 6 4.25H9C9.414 4.25 9.75 4.586 9.75 5C9.75 5.414 9.414 5.75 9 5.75H6C4.423 5.75 3.75 6.423 3.75 8V18C3.75 19.577 4.423 20.25 6 20.25H16C17.577 20.25 18.25 19.577 18.25 18V15C18.25 14.586 18.586 14.25 19 14.25C19.414 14.25 19.75 14.586 19.75 15ZM21.75 6.056C21.749 6.643 21.52 7.194 21.104 7.608L12.141 16.531C12 16.671 11.81 16.75 11.612 16.75H8C7.586 16.75 7.25 16.414 7.25 16V12.389C7.25 12.191 7.32799 12 7.46899 11.86L16.392 2.896C16.805 2.48 17.357 2.251 17.944 2.25C17.945 2.25 17.946 2.25 17.947 2.25C18.533 2.25 19.084 2.47801 19.499 2.89301L21.108 4.50201C21.522 4.91701 21.751 5.469 21.75 6.056ZM17.617 8.96301L15.037 6.383L8.75 12.699V15.251H11.302L17.617 8.96301ZM20.25 6.05399C20.25 5.86799 20.178 5.69301 20.047 5.56201L18.438 3.953C18.307 3.822 18.132 3.75 17.947 3.75H17.946C17.76 3.75 17.586 3.82301 17.455 3.95401L16.096 5.319L18.681 7.90399L20.046 6.54501C20.177 6.41501 20.249 6.23999 20.25 6.05399Z"
                  fill="#0071CE"
                />
              </svg>
            </Button>

            <Button
              style={{ ...buttonStyle }}
              sx={{
                padding: "8px",
                borderRadius: "10px",
              }}
            >
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <circle cx="4.5" cy="11.5" r="2.5" fill="#0071CE" />
                <circle cx="12.5" cy="11.5" r="2.5" fill="#0071CE" />
                <circle cx="20.5" cy="11.5" r="2.5" fill="#0071CE" />
              </svg>
            </Button>
          </Box>
        </Box>
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
                <Box>
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
            <Collapse in={!open} timeout="auto" sx={{ gridColumn: "1 / -1" }}>
              <Box
                sx={{
                  display: "grid",
                  gridTemplateColumns: "1.5fr 1.5fr 1.5fr 1.5fr",
                  padding: "1.5rem",
                }}
              >
                <Box>
                  <Typography style={{ ...headingStyle }}>Customer</Typography>
                  <Box
                    sx={{
                      paddingTop: "1.5rem",
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

                  <Box
                    sx={{
                      paddingTop: "1rem",
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
                <Box>
                  <Typography style={{ ...headingStyle }}>Status</Typography>

                  <Box
                    sx={{
                      paddingTop: "1.5rem",
                      display: "flex",
                      flexDirection: "column",
                      gap: "0.375rem",
                    }}
                  >
                    <Typography style={{ ...regularStyle }}>Status</Typography>
                    <Typography style={{ ...subStyle }}>No</Typography>
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
                      Invoiced
                    </Typography>
                    <Typography style={{ ...subStyle }}>No</Typography>
                  </Box>
                </Box>
                <Box>
                  <Typography style={{ ...headingStyle }}>
                    Team Assignments
                  </Typography>
                  <Box
                    sx={{
                      paddingTop: "1.5rem",
                      display: "flex",
                      flexDirection: "column",
                      gap: "0.375rem",
                    }}
                  >
                    <Typography style={{ ...regularStyle }}>
                      Sales Rep
                    </Typography>
                    <Typography style={{ ...subStyle }}>Peter</Typography>
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
                    <Typography style={{ ...subStyle }}>Peter</Typography>
                  </Box>
                </Box>
                <Box>
                  <Typography style={{ ...headingStyle }}>Dates</Typography>

                  <Box
                    sx={{ display: "flex", alignItems: "center", gap: "1rem" }}
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
                        Quote Date
                      </Typography>
                      <Typography style={{ ...subStyle }}>
                        Saturday, 15-02-2025
                      </Typography>
                    </Box>
                  </Box>
                  <Box
                    sx={{ display: "flex", alignItems: "center", gap: "1rem" }}
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
                </Box>
              </Box>
            </Collapse>
            {/* open content */}
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
                <Box sx={{position:"relative"}} >
                    <Box sx={{backgroundColor:'#F5F6FA',borderRadius:'12px',padding:'0.9rem'}}>
                         <Typography style={{ ...headingStyle }}>Dates</Typography>
                    </Box>
                
                  <Box sx={{border:'1px solid #D9D9D9',backgroundColor:'white',borderRadius:'12px',padding:'0.3rem',position:'absolute',top:'45px',width:'100%',padding:'20px'}}>
                  <Box
                    sx={{ display: "flex", alignItems: "center", gap: "1rem" }}
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
                    sx={{ display: "flex", alignItems: "center", gap: "1rem" }}
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
                    sx={{ display: "flex", alignItems: "center", gap: "1rem" }}
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
                    sx={{ display: "flex", alignItems: "center", gap: "1rem" }}
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
                    sx={{ display: "flex", alignItems: "center", gap: "1rem" }}
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
                    sx={{ display: "flex", alignItems: "center", gap: "1rem" }}
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
                    sx={{ display: "flex", alignItems: "center", gap: "1rem" }}
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
                    sx={{ display: "flex", alignItems: "center", gap: "1rem" }}
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
                    <Typography style={{ ...regularStyle, display: "flex",
                        alignItems: "center",
                        gap: "6px", }}>
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
          </Box>
        </Box>

        <Box></Box>
      </Box>
    </>
  );
}

export default SalesOrderPage;
