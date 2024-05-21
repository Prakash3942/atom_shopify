import React, { useEffect } from "react";
import {
  Box,
  Button,
  Card,
  Grid,
  Typography,
  useMediaQuery,
} from "@mui/material";
import { useTheme } from "@mui/material/styles";
import { useRouter } from "next/router";
import { motion } from "framer-motion";
// import { Fade } from "react-awesome-reveal";

const StoryHeroSection = () => {
  const router = useRouter();
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
      <Grid
        container
        columnSpacing={2}
        sx={{
          padding: {
            md: "122px 77px 0px 77px",
            sm: "100px 50px 0px 50px",
            xs: "100px 16px 0px 16px",
          },
          // marginTop: { md: "75px", sm: "20px", xs: "10px" },
          alignItems: "center",
          flexDirection: { md: "row", sm: "row", xs: "column-reverse" },
        }}
      >
        <Grid item md={6} sm={6} xs={12}>
          <Box sx={{ display: "flex", flexDirection: "column" }}>
            <motion.div
              initial={properties["slideInUp"].initial}
              whileInView={properties["slideInUp"].whileInView}
              transition={{ duration: 1.1 || 0.2, delay: 1.1 || 0.1 }}
              viewport={{ once: true }}
            >
              <Typography
                sx={{
                  fontSize: { xs: "24px", sm: "24px", md: "40px" },
                  fontWeight: "700",
                  lineHeight: { xs: "38px", sm: "38px", md: "64px" },
                  color: { xs: "#333333", sm: "#1E1E1E", md: "#1E1E1E" },
                  textAlign: { xs: "center", sm: "start", md: "start" },
                }}
              >
                Unleash the power of Shop Stories for your DTC brand.
              </Typography>
            </motion.div>

            <Typography
              sx={{
                fontSize: { xs: "14px", sm: "14px", md: "14px" },
                fontWeight: "400",
                letterSpacing: { xs: "1px", sm: "1px", md: "0px" },
                lineHeight: { xs: "19px", sm: "20px", md: "21px" },
                color: { xs: "#1E1E1E", sm: "#1E1E1E", md: "#1E1E1E" },
                paddingTop: { xs: "10px", sm: "20px", md: "30px" },
                textAlign: { xs: "center", sm: "start", md: "start" },
              }}
            >
              Welcome to the future of DTC storytelling. Transform your brand's
              narrative into a dynamic and engaging shopping experience using
              Instagram & WhatsApp like stories.
            </Typography>

            <Box
              pt={3}
              display={"flex"}
              justifyContent={"flex-start"}
              flexDirection={LapTopView || tabView ? "row" : "column"}
              gap={tabView ? "20px" : 3}
            >
              <Button
                style={{
                  fontSize: "14px",
                  fontWeight: "600",
                  borderRadius: "8px",
                  backgroundColor: "#FFA500",
                  color: "#FFFFFF",
                  textTransform: "uppercase",
                  lineHeight: "14px",
                  padding: "12px 25px",
                }}
              >
                Watch Brand Stories
              </Button>
              <Button
                onClick={() => router.push("/bookdemo")}
                style={{
                  fontSize: "14px",
                  fontWeight: "600",
                  borderRadius: "8px",
                  color: "#FFA500",
                  textTransform: "uppercase",
                  lineHeight: "14px",
                  padding: "12px 25px",
                }}
              >
                Book Demo
              </Button>
            </Box>
          </Box>
        </Grid>

        <Grid item md={6} sm={6} xs={12}>
          <Box
            sx={{
              display: "flex",
              justifyContent: "flex-end",
              alignItems: "center",
            }}
          >
            {LapTopView ? (
              <img src="/images/Frame 1550.svg" alt="" />
            ) : tabView ? (
              <img
                src="/images/Frame 1550.svg"
                alt=""
                style={{ width: "100%" }}
              />
            ) : (
              <img
                src="/images/Frame 1550.svg"
                alt=""
                style={{ width: "100%" }}
              />
            )}
          </Box>
        </Grid>
      </Grid>
    </>
  );
};

export default StoryHeroSection;
