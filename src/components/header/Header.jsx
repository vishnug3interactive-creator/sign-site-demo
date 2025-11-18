import { Box } from "@mui/material";
import React from "react";
import { SearchboxField } from "../../helper/FormInput";

function Header() {
  return (
    <Box sx={{ display: "flex", justifyContent: "space-between" }}>
      <Box>
        <Box className="icon" sx={{ padding: "1.5rem" }}>
          <svg
            width="24"
            height="25"
            viewBox="0 0 24 25"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g opacity="0.898019">
              <path
                d="M3.75 6.5625H20.25V7.9375H3.75V6.5625ZM3.75 12.0625H20.25V13.4375H3.75V12.0625ZM3.75 17.5625H20.25V18.9375H3.75V17.5625Z"
                fill="#111827"
              />
            </g>
          </svg>
        </Box>
        <Box className='search-box'>
          <Box>
          <SearchboxField label='Search'/>
          </Box>
        </Box>
      </Box> 
    </Box>
  );
}

export default Header;
