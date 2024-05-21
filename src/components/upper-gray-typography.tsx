import { Typography } from "@mui/material";
import React from "react";
import theme from "../theme";

interface Props {
  children: string;
  sx?: object;
}

const UpperGrayTypography = ({ children, sx }: Props) => {
  return (
    <Typography
      sx={{
        textTransform: "uppercase",
        fontWeight: 600,
        color: `${theme.palette.text.secondary}`,
        ...sx,
      }}
    >
      {children}
    </Typography>
  );
};

export default UpperGrayTypography;
