import { Box, Button, Grid, Typography, useMediaQuery } from "@mui/material";
import React, { useState } from "react";
import { useTheme } from "@mui/material/styles";
import { useRouter } from "next/router";
import { Fade } from "react-awesome-reveal";
import { styled } from "@mui/material/styles";
import { motion } from "framer-motion";


import Tooltip, { TooltipProps, tooltipClasses } from "@mui/material/Tooltip";

const ProductDetail = () => {
  const router = useRouter();
  const [toggleProduct, setToggleProduct] = useState("1");

  const handleStoryClick = () => {
    setToggleProduct("1");
  };

  const handleProductclick = () => {
    setToggleProduct("2");
  };

  const handleBannerClick = () => {
    setToggleProduct("3");
  };

  const handleCategoryClick = () => {
    setToggleProduct("4");
  };

  const handleSectionClick = () => {
    setToggleProduct("5");
  };

  const CustomWidthTooltip = styled(({ className, ...props }: TooltipProps) => (
    <Tooltip {...props} classes={{ popper: className }} />
  ))(({ theme }) => ({
    [`& .${tooltipClasses.tooltip}`]: {
      maxWidth: 300,
      backgroundColor: theme.palette.common.white,
      color: "rgba(0, 0, 0, 0.87)",
      boxShadow: theme.shadows[1],
      fontSize: 11,
    },
  }));

  const shopStories =
    "Interactive Stories are the most fun way to keep your customers engaged using short <60 second clips.";
  const productView =
    "Give your customers a 360 degree view of your product and help them take decisions on the spot.";
  const shoppableBanner =
    "Visualize your products in HD wide screen using shoppable banners that grab customer attention.";
  const reelShopping =
    "Hook your customers in a never-ending loop of product discovery using shoppable reels.";
  const meultiVideo =
    "Add mini videos to give a wholesome look and feel to your products and make shopping instantaneous.";

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
  

  const theme = useTheme();
  const tabView = useMediaQuery(theme.breakpoints.up("sm"));
  const mobileView = useMediaQuery(theme.breakpoints.up("xs"));
  const LapTopView = useMediaQuery(theme.breakpoints.up("md"));

  return (
    <>
      <Box
        sx={{
          width: "100%",
          padding: { md: "60px 35px 0px 35px", sm: "16px", xs: "16px" },
        }}
      >
        <Box
          sx={{
            // width:"100%",
            backgroundColor: "#1E1E1E",
            padding: { md: "40px", sm: "25px", xs: "16px" },
            borderRadius: { md: "38px", sm: "38px", xs: "30px" },
          }}
        >
          <Box
            sx={{
              backgroundColor: "#666666",
              borderRadius: "38px",
              overflow: { md: "scroll", sm: "scroll", xs: "scroll" },
              "&::-webkit-scrollbar": {
                display: "none",
              },
              "&-ms-overflow-style:": {
                display: "none",
              },
            }}
          >
            <Box
              sx={{
                // width:"100%",
                display: "flex",
                justifyContent: {
                  md: "space-around",
                  sm: "space-aroun",
                  xs: "flex-start",
                },
                alignItems: "center",
                gap: { md: "10px", sm: "10px", xs: "5px" },
                padding: "10px",
              }}
            >
              <Box
                sx={{
                  width: "100%",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <Button
                fullWidth
                  onClick={handleStoryClick}
                  style={{
                    width: LapTopView || tabView ? "" : "120px",
                    fontSize: LapTopView || tabView ? "16px" : "12px",
                    fontWeight: "600",
                    letterSpacing: "1px",
                    backgroundColor: toggleProduct === "1" ? "#1E1E1E" : "",
                    color: toggleProduct === "1" ? "#FFFFFF" : "#F5F5F5",
                    textTransform: "capitalize",
                    borderRadius: "36px",
                    padding: LapTopView || tabView ? "10px" : "5px",
                  }}
                >
                  Shop Stories
                </Button>
              </Box>

              <Box
                sx={{
                  width: "100%",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <Button
                  onClick={handleProductclick}
                  fullWidth
                  style={{
                    width: LapTopView || tabView ? "" : "140px",
                    fontSize: LapTopView || tabView ? "16px" : "12px",
                    fontWeight: "600",
                    letterSpacing: "1px",
                    backgroundColor: toggleProduct === "2" ? "#1E1E1E" : "",
                    color: toggleProduct === "2" ? "#FFFFFF" : "#F5F5F5",
                    textTransform: "capitalize",
                    borderRadius: "36px",
                    padding: LapTopView || tabView ? "10px" : "5px",
                  }}
                >
                  Product View360
                </Button>
              </Box>

              <Box
                sx={{
                  width: "100%",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <Button
                  onClick={handleBannerClick}
                  fullWidth
                  style={{
                    width: LapTopView || tabView ? "" : "160px",
                    fontSize: LapTopView || tabView ? "16px" : "12px",
                    fontWeight: "600",
                    letterSpacing: "1px",
                    backgroundColor: toggleProduct === "3" ? "#1E1E1E" : "",
                    color: toggleProduct === "3" ? "#FFFFFF" : "#F5F5F5",
                    textTransform: "capitalize",
                    borderRadius: "36px",
                    padding: LapTopView || tabView ? "10px" : "5px",
                  }}
                >
                  Shoppable Banners
                </Button>
              </Box>

              <Box
                sx={{
                  width: "100%",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <Button
                  onClick={handleCategoryClick}
                  fullWidth
                  style={{
                    width: LapTopView || tabView ? "" : "130px",
                    fontSize: LapTopView || tabView ? "16px" : "12px",
                    fontWeight: "600",
                    letterSpacing: "1px",
                    backgroundColor: toggleProduct === "4" ? "#1E1E1E" : "",
                    color: toggleProduct === "4" ? "#FFFFFF" : "#F5F5F5",
                    textTransform: "capitalize",
                    borderRadius: "36px",
                    padding: LapTopView || tabView ? "10px" : "5px",
                  }}
                >
                  Reel Shopping
                </Button>
              </Box>

              <Box
                sx={{
                  width: "100%",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <Button
                  onClick={handleSectionClick}
                  fullWidth
                  style={{
                    width: LapTopView || tabView ? "" : "180px",
                    fontSize: LapTopView || tabView ? "16px" : "12px",
                    fontWeight: "600",
                    letterSpacing: "1px",
                    backgroundColor: toggleProduct === "5" ? "#1E1E1E" : "",
                    color: toggleProduct === "5" ? "#FFFFFF" : "#F5F5F5",
                    textTransform: "capitalize",
                    borderRadius: "36px",
                    padding: LapTopView || tabView ? "10px" : "5px",
                  }}
                >
                  Multi-Video Shopping
                </Button>
              </Box>
            </Box>
          </Box>
          {toggleProduct === "1" ? (
            <Grid
              container
              sx={{
                marginTop: { md: "50px", sm: "25px", xs: "20px" },
                flexDirection: {
                  md: "row",
                  sm: "column-reverse",
                  xs: "column-reverse",
                },
                padding: { xs: "2px 7px" },
              }}
            >
              <Grid item md={7} sm={12} xs={12}>
              <motion.div
                  initial={properties['slideInUp'].initial}
                  whileInView={properties['slideInUp'].whileInView}
                  transition={{ duration: 1.1 || 0.2, delay: 1.1 || 0.1 }}
                  viewport={{ once: true }}
                  
                >
                  <Typography
                  sx={{
                    fontSize: { md: "32px", sm: "32px", xs: "24px" },
                    fontWeight: "600",
                    letterSpacing: "1px",
                    color: "#FFFFFF",
                  }}
                >
                  ROI Boosting Shop Stories
                </Typography>
                </motion.div>
                
                <Typography
                  sx={{
                    fontSize: { md: "16px", sm: "16px", xs: "14px" },
                    fontWeight: "400",
                    color: "#FFFFFF",
                    letterSpacing: "1px",
                    padding: "24px 0px",
                  }}
                >
                  Capture attention with engaging stories for promotions and
                  products.
                </Typography>
                <Box
                  sx={{ display: "flex", flexDirection: "column", gap: "20px" }}
                >
                  <Box
                    sx={{
                      display: "flex",
                      justifyContent: "flex-start",
                      alignItems: "center",
                    }}
                  >
                    <img
                      src="/icons/Vector (13).svg"
                      alt=""
                      style={{ height: "12px" }}
                    />
                    <Typography
                      sx={{
                        fontSize: { md: "16px", sm: "16px", xs: "14px" },
                        fontWeight: "400",
                        color: "#FFFFFF",
                        letterSpacing: "1px",
                        paddingLeft: "12px",
                      }}
                    >
                      Shoppable & non-shoppable options for versatile content.
                    </Typography>
                  </Box>
                  <Box
                    sx={{
                      display: "flex",
                      justifyContent: "flex-start",
                      alignItems: "center",
                    }}
                  >
                    <img
                      src="/icons/Vector (13).svg"
                      alt=""
                      style={{ height: "12px" }}
                    />
                    <Typography
                      sx={{
                        fontSize: { md: "16px", sm: "16px", xs: "14px" },
                        fontWeight: "400",
                        color: "#FFFFFF",
                        letterSpacing: "1px",
                        paddingLeft: "12px",
                      }}
                    >
                      Interactivity with Q&A sessions, polls, and user
                      responses.
                    </Typography>
                  </Box>
                  <Box
                    sx={{
                      display: "flex",
                      justifyContent: "flex-start",
                      alignItems: "center",
                    }}
                  >
                    <img
                      src="/icons/Vector (13).svg"
                      alt=""
                      style={{ height: "12px" }}
                    />
                    <Typography
                      sx={{
                        fontSize: { md: "16px", sm: "16px", xs: "14px" },
                        fontWeight: "400",
                        color: "#FFFFFF",
                        letterSpacing: "1px",
                        paddingLeft: "12px",
                      }}
                    >
                      Ideal for feedback loops, surveys, and promotional
                      contests.
                    </Typography>
                  </Box>
                  <Box
                    sx={{
                      display: "flex",
                      justifyContent: "flex-start",
                      alignItems: "center",
                    }}
                  >
                    <img
                      src="/icons/Vector (13).svg"
                      alt=""
                      style={{ height: "12px" }}
                    />
                    <Typography
                      sx={{
                        fontSize: { md: "16px", sm: "16px", xs: "14px" },
                        fontWeight: "400",
                        color: "#FFFFFF",
                        letterSpacing: "1px",
                        paddingLeft: "12px",
                      }}
                    >
                      Mimics Instagram and WhatsApp story functions for
                      familiarity.
                    </Typography>
                  </Box>
                </Box>

                <CustomWidthTooltip title={shopStories} placement="right-start">
                  <Button
                    startIcon={
                      <img src="/icons/fluent_app-recent-24-filled.png" />
                    }
                    sx={{
                      color: "#fff",
                      backgroundColor: "#d5cece61",
                      mt: 4,
                      "&:hover": {
                        backgroundColor: "#d5cece61",
                      },
                    }}
                  >
                    Stories: Boosts Time Spent On Website By 52%
                  </Button>
                </CustomWidthTooltip>

                <Box
                  sx={{
                    paddingTop: { md: "40px", sm: "40px", xs: "40px" },
                    paddingBottom: { md: "", sm: "", xs: "30px" },
                  }}
                >
                  <Button
                    onClick={() => router.push("/story")}
                    style={{
                      width: LapTopView || tabView ? "auto" : "100%",
                      fontSize: "14px",
                      fontWeight: "400",
                      borderRadius: "6px",
                      backgroundColor: "#FFA500",
                      color: "#FFFFFF",
                      textTransform: "uppercase",
                      padding: "12px 25px",
                    }}
                  >
                    Explore Feature
                  </Button>
                </Box>
              </Grid>

              <Grid item md={5} sm={12} xs={12}>
                <Box
                  sx={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  {LapTopView || tabView ? (
                    <img src="/images/Frame 1544.svg" alt="" />
                  ) : (
                    <img
                      src="/images/Frame 1544.svg"
                      alt=""
                      style={{ width: "100%" }}
                    />
                  )}
                </Box>
              </Grid>
            </Grid>
          ) : (
            ""
          )}

          {toggleProduct === "2" ? (
            <Grid
              container
              sx={{
                marginTop: { md: "50px", sm: "25px", xs: "20px" },
                padding: { xs: "2px 7px" },
              }}
            >
              <Grid item md={6} sm={12} xs={12}>
                <Box
                  sx={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  {LapTopView || tabView ? (
                    <img src="/images/Frame 1563.svg" alt="" />
                  ) : (
                    <img
                      src="/images/Frame 1563.svg"
                      alt=""
                      style={{ width: "100%" }}
                    />
                  )}
                </Box>
              </Grid>
              <Grid item md={6} sm={12} xs={12}>
              <motion.div
                  initial={properties['slideInUp'].initial}
                  whileInView={properties['slideInUp'].whileInView}
                  transition={{ duration: 1.1 || 0.2, delay: 1.1 || 0.1 }}
                  viewport={{ once: true }}
                  
                >
                   <Typography
                  sx={{
                    fontSize: { md: "32px", sm: "32px", xs: "24px" },
                    fontWeight: "600",
                    letterSpacing: "1px",
                    color: "#FFFFFF",
                  }}
                >
                  High Converting Product View360
                </Typography>
                </motion.div>
               
                <Typography
                  sx={{
                    fontSize: { md: "16px", sm: "16px", xs: "14px" },
                    fontWeight: "400",
                    color: "#FFFFFF",
                    letterSpacing: "1px",
                    padding: "24px 0px",
                  }}
                >
                  Elevate products through dynamic personalized product videos.
                </Typography>
                <Box
                  sx={{ display: "flex", flexDirection: "column", gap: "20px" }}
                >
                  <Box
                    sx={{
                      display: "flex",
                      justifyContent: "flex-start",
                      alignItems: "center",
                    }}
                  >
                    <img
                      src="/icons/Vector (13).svg"
                      alt=""
                      style={{ height: "12px" }}
                    />
                    <Typography
                      sx={{
                        fontSize: { md: "16px", sm: "16px", xs: "14px" },
                        fontWeight: "400",
                        color: "#FFFFFF",
                        letterSpacing: "1px",
                        paddingLeft: "12px",
                      }}
                    >
                      Primary videos for detailed product showcases.
                    </Typography>
                  </Box>
                  <Box
                    sx={{
                      display: "flex",
                      justifyContent: "flex-start",
                      alignItems: "center",
                    }}
                  >
                    <img
                      src="/icons/Vector (13).svg"
                      alt=""
                      style={{ height: "12px" }}
                    />
                    <Typography
                      sx={{
                        fontSize: { md: "16px", sm: "16px", xs: "14px" },
                        fontWeight: "400",
                        color: "#FFFFFF",
                        letterSpacing: "1px",
                        paddingLeft: "12px",
                      }}
                    >
                      Secondary videos enhance brand narrative and credibility.
                    </Typography>
                  </Box>
                  <Box
                    sx={{
                      display: "flex",
                      justifyContent: "flex-start",
                      alignItems: "center",
                    }}
                  >
                    <img
                      src="/icons/Vector (13).svg"
                      alt=""
                      style={{ height: "12px" }}
                    />
                    <Typography
                      sx={{
                        fontSize: { md: "16px", sm: "16px", xs: "14px" },
                        fontWeight: "400",
                        color: "#FFFFFF",
                        letterSpacing: "1px",
                        paddingLeft: "12px",
                      }}
                    >
                      Integration of third-party influencer reviews for
                      authenticity.
                    </Typography>
                  </Box>
                  <Box
                    sx={{
                      display: "flex",
                      justifyContent: "flex-start",
                      alignItems: "center",
                    }}
                  >
                    <img
                      src="/icons/Vector (13).svg"
                      alt=""
                      style={{ height: "12px" }}
                    />
                    <Typography
                      sx={{
                        fontSize: { md: "16px", sm: "16px", xs: "14px" },
                        fontWeight: "400",
                        color: "#FFFFFF",
                        letterSpacing: "1px",
                        paddingLeft: "12px",
                      }}
                    >
                      Transform static images into interactive and captivating
                      visuals.
                    </Typography>
                  </Box>
                </Box>

                <CustomWidthTooltip title={productView} placement="right-start">
                  <Button
                    startIcon={
                      <img src="/icons/fluent_phone-multiple-24-filled.png" />
                    }
                    sx={{
                      color: "#fff",
                      backgroundColor: "#d5cece61",
                      mt: 4,
                      "&:hover": {
                        backgroundColor: "#d5cece61",
                      },
                    }}
                  >
                    Product Videos: Increases Cart Conversion Rates By 61%
                  </Button>
                </CustomWidthTooltip>

                <Box
                  sx={{
                    paddingTop: { md: "40px", sm: "40px", xs: "40px" },
                    paddingBottom: { md: "", sm: "", xs: "30px" },
                  }}
                >
                  <Button
                    onClick={() => router.push("/product")}
                    style={{
                      width: LapTopView || tabView ? "auto" : "100%",
                      fontSize: "14px",
                      fontWeight: "400",
                      borderRadius: "6px",
                      backgroundColor: "#FFA500",
                      color: "#FFFFFF",
                      textTransform: "uppercase",
                      padding: "12px 25px",
                    }}
                  >
                    Explore Feature
                  </Button>
                </Box>
              </Grid>
            </Grid>
          ) : (
            ""
          )}

          {toggleProduct === "3" ? (
            <Grid
              container
              sx={{
                marginTop: { md: "50px", sm: "25px", xs: "20px" },
                flexDirection: {
                  md: "row",
                  sm: "column-reverse",
                  xs: "column-reverse",
                },
                padding: { xs: "2px 7px" },
              }}
            >
              <Grid item md={7} sm={12} xs={12}>
              <motion.div
                  initial={properties['slideInUp'].initial}
                  whileInView={properties['slideInUp'].whileInView}
                  transition={{ duration: 1.1 || 0.2, delay: 1.1 || 0.1 }}
                  viewport={{ once: true }}
                  
                >
                  <Typography
                  sx={{
                    fontSize: { md: "32px", sm: "32px", xs: "24px" },
                    fontWeight: "600",
                    letterSpacing: "1px",
                    color: "#FFFFFF",
                  }}
                >
                  High Resolution Shoppable Banners
                </Typography>
                </motion.div>
                
                <Typography
                  sx={{
                    fontSize: { md: "16px", sm: "16px", xs: "14px" },
                    fontWeight: "400",
                    color: "#FFFFFF",
                    letterSpacing: "1px",
                    padding: "24px 0px",
                  }}
                >
                  Make an impact with immersive high-resolution banner videos.
                </Typography>
                <Box
                  sx={{ display: "flex", flexDirection: "column", gap: "20px" }}
                >
                  <Box
                    sx={{
                      display: "flex",
                      justifyContent: "flex-start",
                      alignItems: "center",
                    }}
                  >
                    <img
                      src="/icons/Vector (13).svg"
                      alt=""
                      style={{ height: "12px" }}
                    />
                    <Typography
                      sx={{
                        fontSize: { md: "16px", sm: "16px", xs: "14px" },
                        fontWeight: "400",
                        color: "#FFFFFF",
                        letterSpacing: "1px",
                        paddingLeft: "12px",
                      }}
                    >
                      Shoppable banner videos offer instant checkout
                      convenience.
                    </Typography>
                  </Box>
                  <Box
                    sx={{
                      display: "flex",
                      justifyContent: "flex-start",
                      alignItems: "center",
                    }}
                  >
                    <img
                      src="/icons/Vector (13).svg"
                      alt=""
                      style={{ height: "12px" }}
                    />
                    <Typography
                      sx={{
                        fontSize: { md: "16px", sm: "16px", xs: "14px" },
                        fontWeight: "400",
                        color: "#FFFFFF",
                        letterSpacing: "1px",
                        paddingLeft: "12px",
                      }}
                    >
                      Non-shoppable banner videos weave brand stories and
                      processes.
                    </Typography>
                  </Box>
                  <Box
                    sx={{
                      display: "flex",
                      justifyContent: "flex-start",
                      alignItems: "center",
                    }}
                  >
                    <img
                      src="/icons/Vector (13).svg"
                      alt=""
                      style={{ height: "12px" }}
                    />
                    <Typography
                      sx={{
                        fontSize: { md: "16px", sm: "16px", xs: "14px" },
                        fontWeight: "400",
                        color: "#FFFFFF",
                        letterSpacing: "1px",
                        paddingLeft: "12px",
                      }}
                    >
                      Dominant landscape format captures user attention.
                    </Typography>
                  </Box>
                  <Box
                    sx={{
                      display: "flex",
                      justifyContent: "flex-start",
                      alignItems: "center",
                    }}
                  >
                    <img
                      src="/icons/Vector (13).svg"
                      alt=""
                      style={{ height: "12px" }}
                    />
                    <Typography
                      sx={{
                        fontSize: { md: "16px", sm: "16px", xs: "14px" },
                        fontWeight: "400",
                        color: "#FFFFFF",
                        letterSpacing: "1px",
                        paddingLeft: "12px",
                      }}
                    >
                      Ideal for home and product pages to drive engagement.
                    </Typography>
                  </Box>
                </Box>

                <CustomWidthTooltip
                  title={shoppableBanner}
                  placement="right-start"
                >
                  <Button
                    startIcon={
                      <img src="/icons/fluent_filmstrip-play-24-filled.png" />
                    }
                    sx={{
                      color: "#fff",
                      backgroundColor: "#d5cece61",
                      mt: 4,
                      "&:hover": {
                        backgroundColor: "#d5cece61",
                      },
                    }}
                  >
                    Banners: Improve Click Through Rates By 34%
                  </Button>
                </CustomWidthTooltip>

                <Box
                  sx={{
                    paddingTop: { md: "40px", sm: "40px", xs: "40px" },
                    paddingBottom: { md: "", sm: "", xs: "30px" },
                  }}
                >
                  <Button
                    onClick={() => router.push("/banner")}
                    style={{
                      width: LapTopView || tabView ? "auto" : "100%",
                      fontSize: "14px",
                      fontWeight: "400",
                      borderRadius: "6px",
                      backgroundColor: "#FFA500",
                      color: "#FFFFFF",
                      textTransform: "uppercase",
                      padding: "12px 25px",
                    }}
                  >
                    Explore Feature
                  </Button>
                </Box>
              </Grid>

              <Grid item md={5} sm={12} xs={12}>
                <Box
                  sx={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  <img src="/images/Group 13937.svg" alt="" />
                </Box>
              </Grid>
            </Grid>
          ) : (
            ""
          )}

          {toggleProduct === "4" ? (
            <Grid
              container
              sx={{
                marginTop: { md: "50px", sm: "25px", xs: "20px" },
                padding: { xs: "2px 7px" },
              }}
            >
              <Grid item md={6} sm={12} xs={12}>
                <Box
                  sx={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  {LapTopView || tabView ? (
                    <img src="/images/Group 746.svg" alt="" />
                  ) : (
                    <img
                      src="/images/Group 746.svg"
                      alt=""
                      style={{ width: "100%" }}
                    />
                  )}
                </Box>
              </Grid>
              <Grid item md={6} sm={12} xs={12}>
              <motion.div
                  initial={properties['slideInUp'].initial}
                  whileInView={properties['slideInUp'].whileInView}
                  transition={{ duration: 1.1 || 0.2, delay: 1.1 || 0.1 }}
                  viewport={{ once: true }}
                  
                >
                  <Typography
                  sx={{
                    fontSize: { md: "32px", sm: "32px", xs: "24px" },
                    fontWeight: "600",
                    letterSpacing: "1px",
                    color: "#FFFFFF",
                  }}
                >
                  Unstoppable Reel Shopping
                </Typography>
                </motion.div>
                
                <Typography
                  sx={{
                    fontSize: { md: "16px", sm: "16px", xs: "14px" },
                    fontWeight: "400",
                    color: "#FFFFFF",
                    letterSpacing: "1px",
                    padding: "24px 0px",
                  }}
                >
                  Engage users with continuous and dynamic content.
                </Typography>
                <Box
                  sx={{ display: "flex", flexDirection: "column", gap: "20px" }}
                >
                  <Box
                    sx={{
                      display: "flex",
                      justifyContent: "flex-start",
                      alignItems: "center",
                    }}
                  >
                    <img
                      src="/icons/Vector (13).svg"
                      alt=""
                      style={{ height: "12px" }}
                    />
                    <Typography
                      sx={{
                        fontSize: { md: "16px", sm: "16px", xs: "14px" },
                        fontWeight: "400",
                        color: "#FFFFFF",
                        letterSpacing: "1px",
                        paddingLeft: "12px",
                      }}
                    >
                      GIF-like category icons create an interactive and
                      appealing experience.
                    </Typography>
                  </Box>
                  <Box
                    sx={{
                      display: "flex",
                      justifyContent: "flex-start",
                      alignItems: "center",
                    }}
                  >
                    <img
                      src="/icons/Vector (13).svg"
                      alt=""
                      style={{ height: "12px" }}
                    />
                    <Typography
                      sx={{
                        fontSize: { md: "16px", sm: "16px", xs: "14px" },
                        fontWeight: "400",
                        color: "#FFFFFF",
                        letterSpacing: "1px",
                        paddingLeft: "12px",
                      }}
                    >
                      Replace traditional product pages with a seamless content
                      flow.
                    </Typography>
                  </Box>
                  <Box
                    sx={{
                      display: "flex",
                      justifyContent: "flex-start",
                      alignItems: "center",
                    }}
                  >
                    <img
                      src="/icons/Vector (13).svg"
                      alt=""
                      style={{ height: "12px" }}
                    />
                    <Typography
                      sx={{
                        fontSize: { md: "16px", sm: "16px", xs: "14px" },
                        fontWeight: "400",
                        color: "#FFFFFF",
                        letterSpacing: "1px",
                        paddingLeft: "12px",
                      }}
                    >
                      Perfect for showcasing a variety of products quickly.
                    </Typography>
                  </Box>
                  <Box
                    sx={{
                      display: "flex",
                      justifyContent: "flex-start",
                      alignItems: "center",
                    }}
                  >
                    <img
                      src="/icons/Vector (13).svg"
                      alt=""
                      style={{ height: "12px" }}
                    />
                    <Typography
                      sx={{
                        fontSize: { md: "16px", sm: "16px", xs: "14px" },
                        fontWeight: "400",
                        color: "#FFFFFF",
                        letterSpacing: "1px",
                        paddingLeft: "12px",
                      }}
                    >
                      Mimics the social media reel format for a familiar
                      interface. visuals.
                    </Typography>
                  </Box>
                </Box>

                <CustomWidthTooltip
                  title={reelShopping}
                  placement="right-start"
                >
                  <Button
                    startIcon={
                      <img src="/icons/fluent_glance-horizontal-24-filled.png" />
                    }
                    sx={{
                      color: "#fff",
                      backgroundColor: "#d5cece61",
                      mt: 4,
                      "&:hover": {
                        backgroundColor: "#d5cece61",
                      },
                    }}
                  >
                    Categories: Increases AOV By 28%
                  </Button>
                </CustomWidthTooltip>

                <Box
                  sx={{
                    paddingTop: { md: "40px", sm: "40px", xs: "40px" },
                    paddingBottom: { md: "", sm: "", xs: "30px" },
                  }}
                >
                  <Button
                    onClick={() => router.push("/category")}
                    style={{
                      width: LapTopView || tabView ? "auto" : "100%",
                      fontSize: "14px",
                      fontWeight: "400",
                      borderRadius: "6px",
                      backgroundColor: "#FFA500",
                      color: "#FFFFFF",
                      textTransform: "uppercase",
                      padding: "12px 25px",
                    }}
                  >
                    Explore Feature
                  </Button>
                </Box>
              </Grid>
            </Grid>
          ) : (
            ""
          )}

          {toggleProduct === "5" ? (
            <Grid
              container
              sx={{
                marginTop: { md: "50px", sm: "25px", xs: "20px" },
                flexDirection: {
                  md: "row",
                  sm: "column-reverse",
                  xs: "column-reverse",
                },
                padding: { xs: "2px 7px" },
              }}
            >
              <Grid item md={7} sm={12} xs={12}>
              <motion.div
                  initial={properties['slideInUp'].initial}
                  whileInView={properties['slideInUp'].whileInView}
                  transition={{ duration: 1.1 || 0.2, delay: 1.1 || 0.1 }}
                  viewport={{ once: true }}
                  
                >
                  <Typography
                  sx={{
                    fontSize: { md: "32px", sm: "32px", xs: "24px" },
                    fontWeight: "600",
                    letterSpacing: "1px",
                    color: "#FFFFFF",
                  }}
                >
                  High AOV Multi-Video Shopping
                </Typography>
                </motion.div>
                
                <Typography
                  sx={{
                    fontSize: { md: "16px", sm: "16px", xs: "14px" },
                    fontWeight: "400",
                    color: "#FFFFFF",
                    letterSpacing: "1px",
                    padding: "24px 0px",
                  }}
                >
                  Increase average order value through targeted recommendations.
                </Typography>
                <Box
                  sx={{ display: "flex", flexDirection: "column", gap: "20px" }}
                >
                  <Box
                    sx={{
                      display: "flex",
                      justifyContent: "flex-start",
                      alignItems: "center",
                    }}
                  >
                    <img
                      src="/icons/Vector (13).svg"
                      alt=""
                      style={{ height: "12px" }}
                    />
                    <Typography
                      sx={{
                        fontSize: { md: "16px", sm: "16px", xs: "14px" },
                        fontWeight: "400",
                        color: "#FFFFFF",
                        letterSpacing: "1px",
                        paddingLeft: "12px",
                      }}
                    >
                      Spotlight selected products on home and product pages
                      directly.
                    </Typography>
                  </Box>
                  <Box
                    sx={{
                      display: "flex",
                      justifyContent: "flex-start",
                      alignItems: "center",
                    }}
                  >
                    <img
                      src="/icons/Vector (13).svg"
                      alt=""
                      style={{ height: "12px" }}
                    />
                    <Typography
                      sx={{
                        fontSize: { md: "16px", sm: "16px", xs: "14px" },
                        fontWeight: "400",
                        color: "#FFFFFF",
                        letterSpacing: "1px",
                        paddingLeft: "12px",
                      }}
                    >
                      Enhance the shopping journey by suggesting complementary
                      items.s.
                    </Typography>
                  </Box>
                  <Box
                    sx={{
                      display: "flex",
                      justifyContent: "flex-start",
                      alignItems: "center",
                    }}
                  >
                    <img
                      src="/icons/Vector (13).svg"
                      alt=""
                      style={{ height: "12px" }}
                    />
                    <Typography
                      sx={{
                        fontSize: { md: "16px", sm: "16px", xs: "14px" },
                        fontWeight: "400",
                        color: "#FFFFFF",
                        letterSpacing: "1px",
                        paddingLeft: "12px",
                      }}
                    >
                      Optimize user experience while boosting sales metrics.
                    </Typography>
                  </Box>
                  <Box
                    sx={{
                      display: "flex",
                      justifyContent: "flex-start",
                      alignItems: "center",
                    }}
                  >
                    <img
                      src="/icons/Vector (13).svg"
                      alt=""
                      style={{ height: "12px" }}
                    />
                    <Typography
                      sx={{
                        fontSize: { md: "16px", sm: "16px", xs: "14px" },
                        fontWeight: "400",
                        color: "#FFFFFF",
                        letterSpacing: "1px",
                        paddingLeft: "12px",
                      }}
                    >
                      Personalized approach to drive higher-value purchases.
                    </Typography>
                  </Box>
                </Box>

                <CustomWidthTooltip
                  title={meultiVideo}
                  placement={"right-start"}
                >
                  <Button
                    startIcon={
                      <img src="/icons/fluent_view-desktop-mobile-24-filled.png" />
                    }
                    sx={{
                      color: "#fff",
                      backgroundColor: "#d5cece61",
                      mt: 4,
                      "&:hover": {
                        backgroundColor: "#d5cece61",
                      },
                    }}
                  >
                    Sections: Boost On Site Sales By 43%
                  </Button>
                </CustomWidthTooltip>

                <Box
                  sx={{
                    paddingTop: { md: "40px", sm: "40px", xs: "40px" },
                    paddingBottom: { md: "", sm: "", xs: "30px" },
                  }}
                >
                  <Button
                    onClick={() => router.push("/section")}
                    style={{
                      width: LapTopView || tabView ? "auto" : "100%",
                      fontSize: "14px",
                      fontWeight: "400",
                      borderRadius: "6px",
                      backgroundColor: "#FFA500",
                      color: "#FFFFFF",
                      textTransform: "uppercase",
                      padding: "12px 25px",
                    }}
                  >
                    Explore Feature
                  </Button>
                </Box>
              </Grid>

              <Grid item md={5} sm={12} xs={12}>
                <Box
                  sx={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  {LapTopView || tabView ? (
                    <img src="/images/Group 13938.svg" alt="" />
                  ) : (
                    <img
                      src="/images/Group 13938.svg"
                      alt=""
                      style={{ width: "100%" }}
                    />
                  )}
                </Box>
              </Grid>
            </Grid>
          ) : (
            ""
          )}
        </Box>
      </Box>
    </>
  );
};

export default ProductDetail;
