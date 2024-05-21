import React, { useEffect } from "react";
import { Box, Button, Grid, Typography, useMediaQuery } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import { useRouter } from "next/router";
// import { Fade } from "react-awesome-reveal";
import { motion } from "framer-motion";

const CustomerReview = () => {
  const router = useRouter();
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
    <>
      <Grid container sx={{ marginTop: "50px" }}>
        <Grid
          item
          md={12}
          sm={12}
          xs={12}
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            flexDirection: "column",
            gap: { md: "22px", sm: "22px", xs: "15px" },
            backgroundColor: "#F3F6FC",
            padding: { md: "50px 0px", sm: "50px 0px", xs: "16px" },
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
                fontSize: { xs: "24px", sm: "28px", md: "28px" },
                lineHeight: { xs: "38px", sm: "44px", md: "44px" },
                textAlign: { xs: "center" },
                fontWeight: "600",
                color: "#333333",
  
              }}
            >
              Unlock an immersive video shopping experience <br /> for your
              customers.
            </Typography>
          </motion.div>

          <Typography
            sx={{
              fontSize: { xs: "14px", sm: "14px", md: "16px" },
              lineHeight: { xs: "21px", sm: "21px", md: "" },
              textAlign: { xs: "center" },
              fontWeight: "400",
              color: "#333333",
              
            }}
          >
            Convert your Shopify store into a live demo of your product that
            customers want to shop ❤️
          </Typography>
          <Box
            sx={{
              width: "100%",
              display: "flex",
              justifyContent: "center",
              flexDirection: { md: "row", sm: "row", xs: "column-reverse" },
              gap: { md: "20px", sm: "20px", xs: "10px" },
            }}
          >
            <Button
              onClick={() => router.push("/price")}
              style={{
                fontSize: "14px",
                fontWeight: "600",
                borderRadius: "8px",
                backgroundColor: "#F3F6FC",
                color: "#FFA500",
                textTransform: "uppercase",
                lineHeight: "13px",
                padding: "12px 25px",
              }}
            >
              View pricing
            </Button>
            <Button
              href="https://apps.shopify.com/videoit-video-shopping"
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
              start free trial
            </Button>
          </Box>
        </Grid>
      </Grid>
    </>
  );
};

export default CustomerReview;
