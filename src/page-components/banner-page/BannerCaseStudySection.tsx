import React, { useEffect } from "react";
import { Box, Button, Grid, Typography, useMediaQuery } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import { motion } from "framer-motion";


const BannerCaseStudySection = () => {
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
      <Box
        sx={{
          margin: {
            md: "32px 35px 0px 35px",
            sm: "32px 35px 0px 35px",
            xs: "8px",
          },
          backgroundColor: "#F3F6FC",
          padding: { md: "40px", sm: "59px", xs: "16px" },
          borderRadius: { md: "38px", sm: "38px", xs: "18px" },
        }}
      >
        <Grid container>
          <Grid item md={6} sm={12} xs={12}>
            <Box>
              <img
                src="/images/image_37.svg"
                alt=""
                style={{ width: LapTopView || tabView ? "" : "100%" }}
              />
            </Box>
          </Grid>
          <Grid
            item
            md={6}
            sm={12}
            xs={12}
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              flexDirection: "column",
              gap: { md: "35px", sm: "35px", xs: "20px" },
              backgroundColor: "#FFFFFF",
              borderRadius: "16px",

              padding: { md: "0px 20px", sm: "16px", xs: "16px" },
            }}
          >
            <motion.div
              initial={properties["slideInUp"].initial}
              whileInView={properties["slideInUp"].whileInView}
              transition={{ duration: 1.1 || 0.2, delay: 1.1 || 0.1 }}
              viewport={{ once: true }}
            >
              <Typography
                sx={{
                  fontSize: { xs: "16px", sm: "16px", md: "28px" },
                  fontWeight: "600",
                  lineHeight: { xs: "25px", sm: "25px", md: "44px" },
                  letterSpacing: { sx: "1px", sm: "1px", md: "0px" },
                  color: "#333333",
                  textAlign: "center",
                }}
              >
                Check out how this DTC brand supercharged their website with
                stories and video selling!
              </Typography>
            </motion.div>

            <Box sx={{ display: "flex", flexDirection: "column", gap: "10px" }}>
              <Button
                style={{
                  fontSize: "14px",
                  fontWeight: "600",
                  borderRadius: "8px",
                  backgroundColor: "#FFA500",
                  color: "#FFFFFF",
                  textTransform: "uppercase",
                  lineHeight: "13px",
                  padding: "12px 25px",
                }}
              >
                Read case study
              </Button>
              <Button
                style={{
                  fontSize: "14px",
                  fontWeight: "600",
                  borderRadius: "8px",
                  color: "#FFA500",
                  textTransform: "uppercase",
                  lineHeight: "13px",
                  padding: "12px 25px",
                }}
              >
                Watch Brand Stories
              </Button>
            </Box>
          </Grid>
        </Grid>
      </Box>
    </>
  );
};

export default BannerCaseStudySection;
