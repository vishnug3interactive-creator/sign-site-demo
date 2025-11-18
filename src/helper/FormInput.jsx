import { Box, TextField, InputAdornment } from "@mui/material";

export const SearchboxField = ({ label, value, placeholder }) => {
  return (
    <TextField
    //   fullWidth
      variant="outlined"
      placeholder={placeholder}
      label={label}
      InputLabelProps={{
        shrink: false,
        style: {
          color: "#9CA3AF",
          marginLeft:'30px',
          width:'24.25rem'
        },
      }}
      InputProps={{
        startAdornment: (
          <InputAdornment position="start">
            <svg
              width="16"
              height="16"
              viewBox="0 0 16 16"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g opacity="0.5">
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M9.1441 11.9861C11.8739 10.826 13.1464 7.67253 11.9863 4.94269C10.8261 2.21286 7.67265 0.940375 4.94281 2.10053C2.21297 3.26068 0.94049 6.41414 2.10064 9.14398C3.2608 11.8738 6.41426 13.1463 9.1441 11.9861Z"
                  stroke="#273142"
                  strokeWidth="1.2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M10.8398 10.8408L15.0052 15.0067"
                  stroke="#273142"
                  strokeWidth="1.2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </g>
            </svg>
          </InputAdornment>
        ),
      }}
      sx={{
        "& .MuiOutlinedInput-root": {
          "& fieldset": { borderColor: "#D1D5DB" },
          "&:hover fieldset": { borderColor: "#D1D5DB" },
          "&.Mui-focused fieldset": { borderColor: "#D1D5DB" },
        },
        "& .MuiInputLabel-root.Mui-focused": {
          color: "#9CA3AF !important",
        },
      }}
    />
  );
};

