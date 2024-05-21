import React, { useEffect } from "react";
import { Box, Button, Grid, Typography, useMediaQuery } from "@mui/material";
import { useTheme } from "@mui/material/styles";
// import { Fade } from "react-awesome-reveal";
import { motion } from "framer-motion";

const VideoManagement = () => {
  const theme = useTheme();
  const tabView = useMediaQuery(theme.breakpoints.up("sm"));
  const mobileView = useMediaQuery(theme.breakpoints.up("xs"));
  const LapTopView = useMediaQuery(theme.breakpoints.up("md"));


  const properties = {
    slideInDown: {
      initial: { opacity: 0, y: -70 },
      whileInView: { opacity: 1, y: 0 },
    },
    slideInUp: {
      initial: { opacity: 0, y: 70 },
      whileInView: { opacity: 1, y: 0 },
    },
    slideInLeft: {
      initial: { opacity: 0, x: -80 },
      whileInView: { opacity: 1, x: 0 },
    },
    slideInRight: {
      initial: { opacity: 0, x: 80 },
      whileInView: { opacity: 1, x: 0 },
    },
    fadeIn: {
      initial: { opacity: 0 },
      whileInView: { opacity: 1 },
    },
  };

  return (
    <>
      <Box sx={{ padding: { md: "32px", sm: "32px", xs: "16px" } }}>
        <Box
          sx={{
            backgroundColor: "#F3F6FC",
            padding: { md: "24px", sm: "24px", xs: "16px" },
            borderRadius: { md: "38px", sm: "38px", xs: "24px" },
          }}
        >
          <Box
            sx={{
              textAlign: "center",
              padding: { md: "0px 245px", sm: "16px", xs: "2px 4px" },
            }}
          >
            <motion.div
              initial={properties['slideInUp'].initial}
              whileInView={properties['slideInUp'].whileInView}
              transition={{ duration: 0.5 || 0.2, delay: 0.5 || 0.1 }}
              viewport={{ once: true }}

            >
              <Typography
                sx={{
                  fontSize: { xs: "24px", sm: "24px", md: "32px" },
                  fontWeight: "600",
                  lineHeight: { xs: "38px", sm: "38px", md: "50px" },
                  color: "#333333",
                  
                }}
              >
                Easily manage shoppable videos on your <br /> Shopify website with
                an intuitive app.
              </Typography>
            </motion.div>

          </Box>
        </Box>

        <Box
          sx={{
            padding: {
              md: "20px 50px",
              sm: "20px 50px",
              xs: "10px 0px 0px 0px",
            },
          }}
        >
          <Box
            sx={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "space-between",
              alignItems: "center",
              overflow: "scroll",
              "&::-webkit-scrollbar": {
                display: "none",
              },
              "&-ms-overflow-style:": {
                display: "none",
              },
            }}
          >
            <Box>
              <img src="/images/image 94.svg" alt="" />
              <Typography
                sx={{
                  fontSize: "16px",
                  fontWeight: 600,
                  color: "#333333",
                  textAlign: "center",
                }}
              >
                Schedule Shoppable Video Campaigns
              </Typography>
            </Box>
            <Box>
              <img src="/images/image 92.svg" alt="" />
              <Typography
                sx={{
                  fontSize: "16px",
                  fontWeight: 600,
                  color: "#333333",
                  textAlign: "center",
                }}
              >
                Analyze Your Video Shopping Analytics
              </Typography>
            </Box>
            <Box>
              <img src="/images/image 98.svg" alt="" />
              <Typography
                sx={{
                  fontSize: "16px",
                  fontWeight: 600,
                  color: "#333333",
                  textAlign: "center",
                }}
              >
                Control Shoppable Videos Using App
              </Typography>
            </Box>
            <Box>
              <img src="/images/image 99.svg" alt="" />
              <Typography
                sx={{
                  fontSize: "16px",
                  fontWeight: 600,
                  color: "#333333",
                  textAlign: "center",
                }}
              >
                Integrate Multiple Social Platforms
              </Typography>
            </Box>
          </Box>
        </Box>
      </Box>
    </>
  );
};

export default VideoManagement;
