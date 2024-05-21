import React, { useEffect } from "react";
import { Box, Button, Grid, Paper, Typography, useMediaQuery } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import { useRouter } from "next/router";
// import { Fade } from "react-awesome-reveal";
import { motion } from "framer-motion";

const ReadCaseStudy = () => {
  const theme = useTheme();
  const tabView = useMediaQuery(theme.breakpoints.up("sm"));
  const mobileView = useMediaQuery(theme.breakpoints.up("xs"));
  const LapTopView = useMediaQuery(theme.breakpoints.up("md"));
  const router = useRouter();

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
            xs: "16px",
          },
          backgroundColor: "#F3F6FC",
          padding: { md: "40px", sm: "59px", xs: "16px" },
          borderRadius: { md: "38px", sm: "38px", xs: "18px" },
        }}
      >
        <Grid container spacing={LapTopView || tabView ? 20 : 2}>
          <Grid item md={6} sm={12} xs={12}>
            {LapTopView || tabView ? (
              <img src="/images/image_37.svg" alt="" style={{ height: "100%" }} />
            ) : (
              <img
                src="/images/image_37.svg"
                alt=""
                style={{ width: "100%" }}
              />
            )}
          </Grid>
          <Grid
            item
            md={6}
            sm={12}
            xs={12}
          >
            <Paper sx={{ p: 3, borderRadius: "16px" }} >
              <motion.div
                initial={properties['slideInUp'].initial}
                whileInView={properties['slideInUp'].whileInView}
                transition={{ duration: 0.5 || 0.2, delay: 0.5 || 0.1 }}
                viewport={{ once: true }}

              >
                <Typography
                  sx={{
                    fontSize: { xs: "16px", sm: "16px", md: "28px" },
                    fontWeight: "600",
                    lineHeight: { xs: "25px", sm: "25px", md: "44px" },
                    letterSpacing: { sx: "1px", sm: "1px", md: "0px" },
                    color: "#333333",
                    
                  }}
                >
                  Why Did This 6 Year Old Shopify Brand Migrate From Videowise to
                  VideoIt.
                </Typography>
              </motion.div>
              <Typography
                sx={{
                  fontSize: { xs: "12px", sm: "12px", md: "16px" },
                  fontWeight: "400",
                  lineHeight: { xs: "19px", sm: "19px", md: "25px" },
                  letterSpacing: { sx: "4px", sm: "0px", md: "0px" },
                  color: "#333333",
                  paddingTop: { md: "25px", sm: "25px", xs: "12px" },
                 
                }}
              >
                Soul Shop is a grocery brand on a mission to make the world a
                sustainable place by providing affordable and organic fruits &
                veggies.
              </Typography>
              <Box sx={{ paddingTop: { md: "40px", sm: "40px", xs: "30px" } }}>
                <Button
                  style={{
                    width: LapTopView || tabView ? "" : "100%",
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
                  onClick={() => router.push("/bookdemo")}
                  style={{
                    width: LapTopView || tabView ? "" : "100%",
                    fontSize: "14px",
                    fontWeight: "600",
                    borderRadius: "8px",
                    color: "#FFA500",
                    textTransform: "uppercase",
                    lineHeight: "13px",
                    padding: "12px 20px",
                  }}
                >
                  Compare Videowise
                </Button>
              </Box>
              <Box
                display={"flex"}
                justifyContent={"space-between"}
                alignItems={"center"}
                pt={3}
              >
                <img
                  src="/images/Rectangle 1135.png"
                  alt=""
                  style={{ height: LapTopView || tabView ? "" : "35px" }}
                />
                <img
                  src="/images/Rectangle 1136.png"
                  alt=""
                  style={{ height: LapTopView || tabView ? "" : "35px" }}
                />
                <img
                  src="/images/Rectangle 1138.png"
                  alt=""
                  style={{ height: LapTopView || tabView ? "" : "35px" }}
                />
                <img
                  src="/images/Rectangle 1137.png"
                  alt=""
                  style={{ height: LapTopView || tabView ? "" : "35px" }}
                />
                <img
                  src="/icons/fluent_arrow-circle-right-24-filled.png"
                  alt=""
                  style={{ height: LapTopView || tabView ? "" : "35px" }}
                />
              </Box>
            </Paper>

          </Grid>
        </Grid>
      </Box>
    </>
  );
};

export default ReadCaseStudy;
