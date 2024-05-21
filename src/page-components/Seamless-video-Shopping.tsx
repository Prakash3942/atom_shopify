import React, { useEffect, useState } from "react";

import {
  Box,
  Button,
  Grid,
  Paper,
  Typography,
  useMediaQuery,
} from "@mui/material";
import { useTheme } from "@mui/material/styles";
import { motion } from "framer-motion";

const SeamlessVideo = () => {
  const theme = useTheme();
  const tabView = useMediaQuery(theme.breakpoints.up("sm"));
  const mobileView = useMediaQuery(theme.breakpoints.up("xs"));
  const LapTopView = useMediaQuery(theme.breakpoints.up("md"));

  // const [scrollY, setScrollY] = React.useState(0);
  // useEffect(() => {
  //   const handleScroll = () => setScrollY(window.scrollY);
  //   window.addEventListener('scroll', handleScroll);
  //   return () => window.removeEventListener('scroll', handleScroll);
  // }, []);

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
    <Box p={LapTopView || tabView ? 4 : 2}>
      <Paper
        elevation={2}
        sx={{
          padding: LapTopView || tabView ? "24px 64px" : "16px 8px",
          borderRadius: "16px",
        }}
      >
        <motion.div
          initial={properties["slideInUp"].initial}
          whileInView={properties["slideInUp"].whileInView}
          transition={{ duration: 0.5 || 0.2, delay: 0.5 || 0.1 }}
          viewport={{ once: true }}
        >
          <Typography
            sx={{
              fontSize: LapTopView || tabView ? "28px" : "22px",
              fontWeight: 600,
              color: "#333333",
              textAlign: "center",
            }}
          >
            Seamless Video Shopping - From Social To Your Website
          </Typography>
        </motion.div>

        <Typography
          sx={{
            fontSize: "16px",
            fontWeight: 400,
            color: "#333333",
            textAlign: "center",
            pt: 2,
          }}
        >
          Do not let the video shopping experience stop. Ensure your social
          visitors get the social media like video experience on <br /> the
          website using shoppable reels, stories and banners.
        </Typography>

        <Grid container spacing={2} pt={4}>
          <Grid
            item
            md={6}
            display={"flex"}
            justifyContent={"center"}
            alignItems={"flex-start"}
            flexDirection={"column"}
          >
            <motion.div
              initial={properties["slideInUp"].initial}
              whileInView={properties["slideInUp"].whileInView}
              transition={{ duration: 0.5 || 0.2, delay: 0.5 || 0.1 }}
              viewport={{ once: true }}
            >
              <Typography
                sx={{
                  fontSize: LapTopView || tabView ? "24px" : "18px",
                  fontWeight: 600,
                  color: "#333333",
                }}
              >
                Choose engagement, clicks and sales over video watch time.
              </Typography>
            </motion.div>

            <Typography
              sx={{
                fontSize: "16px",
                fontWeight: 400,
                color: "#333333",
                pt: 2,
              }}
            >
              Double down on the shopping in “video-shopping” by shifting
              customer attention to product discovery over watch time. Embed
              multiple shoppable videos to excite customers continuously.
            </Typography>

            <Typography
              sx={{
                fontSize: "16px",
                fontWeight: 400,
                color: "#333333",
                pt: 4,
              }}
            >
              3 Reasons Why Video Converts Better:
            </Typography>

            <Typography
              sx={{
                fontSize: "16px",
                fontWeight: 400,
                color: "#333333",
                pt: 2,
                pl: 1,
              }}
            >
              Faster decision making and higher conversion rate
            </Typography>
            <Typography
              sx={{
                fontSize: "16px",
                fontWeight: 400,
                color: "#333333",
                pt: 2,
                pl: 1,
              }}
            >
              Effortless product showcase to boost sales
            </Typography>
            <Typography
              sx={{
                fontSize: "16px",
                fontWeight: 400,
                color: "#333333",
                pt: 2,
                pl: 1,
              }}
            >
              Intuitive video shopping experience within few clicks
            </Typography>
          </Grid>
          <Grid item md={6} display={"flex"} justifyContent={"center"}>
            <img
              src="/images/Frame 14056.png"
              alt=""
              style={{ width: "100%" }}
            />
          </Grid>
        </Grid>
      </Paper>
    </Box>
  );
};

export default SeamlessVideo;
