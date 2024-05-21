import React from "react";
import { Box, Button, Grid, Typography, useMediaQuery } from "@mui/material";
import { useTheme } from "@mui/material/styles";

const VideoShopExperience = () => {
  const theme = useTheme();
  const tabView = useMediaQuery(theme.breakpoints.up("sm"));
  const mobileView = useMediaQuery(theme.breakpoints.up("xs"));
  const LapTopView = useMediaQuery(theme.breakpoints.up("md"));
  return (
    <>
      {LapTopView || tabView ? (
        <>
          
          <Box my={2} p={4} width={"100%"} bgcolor={"#F3F6FC"}>
            <Box width={"58%"} display={"flex"} flexDirection={"column"}>
              <Typography
                sx={{
                  fontSize: "28px",
                  fontWeight: "600",
                  lineHeight: "42px",
                  color: "#333333",
                }}
              >
                Supercharge your video-shopping experience using deep
                integrations with our Shopify partners.
              </Typography>
              <Typography
                sx={{
                  fontSize: "14px",
                  fontWeight: "600",
                  color: "#FFA500",
                  paddingTop: "10px",
                }}
              >
                Explore Integration
              </Typography>
            </Box>

            <Box width={"100%"} p={3}>
              <Typography>hello</Typography>
            </Box>
          </Box>
        </>
      ) : (
        <></>
      )}
    </>
  );
};

export default VideoShopExperience;
