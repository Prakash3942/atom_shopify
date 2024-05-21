import React, { useEffect, useState } from "react";
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
import Lottie from "react-lottie";
import heroPageLottiei from "../../lottie/HomeLottie.json";
import { motion } from "framer-motion";
// import styled, { keyframes } from 'styled-components';
// import { Fade } from "react-awesome-reveal";

// const styles = {
//   animated: {
//     animation: 'fadeInUp 1s ease-in-out',
//     opacity: 1,
//     transform: 'translateY(0)',
//   },
// };
const HeroSection = () => {
  const router = useRouter();
  const theme = useTheme();
  const tabView = useMediaQuery(theme.breakpoints.up("sm"));
  const mobileView = useMediaQuery(theme.breakpoints.up("xs"));
  const LapTopView = useMediaQuery(theme.breakpoints.up("md"));

 
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: heroPageLottiei,
    rendererSettings: { preserveAspectRatio: "xMidYMid slice" },
  };

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
        width={"100%"}
        sx={{
          backgroundImage: "url(/images/homeBG.svg)",
          backgroundPosition: "bottom",
          backgroundSize: "cover",
          height: "100vh",
        }}
      >
        <Box width={"100%"}>
          <Grid
            container
            columnSpacing={2}
            sx={{
              padding: {
                md: "122px 77px 0px 77px",
                sm: "100px 50px 0px 50px",
                xs: "100px 16px 0px 16px",
              },
              alignItems: "center",
              flexDirection: { md: "row", sm: "row", xs: "column-reverse" },
            }}
          >
            <Grid item md={7} sm={7}>
              <Box
                width={"100%"}
                display={"flex"}
                flexDirection={"column"}
                padding={(LapTopView || tabView) ? "50px 0px" : "0px"}
              >

                <motion.div
                  initial={properties['slideInUp'].initial}
                  whileInView={properties['slideInUp'].whileInView}
                  transition={{ duration: 1.1 || 0.2, delay: 1.1 || 0.1 }}
                  viewport={{ once: true }} 
                >
                  <Typography
                    sx={{
                      fontSize: { xs: "24px", sm: "24px", md: "40px" },
                      fontWeight: "700",
                      lineHeight: { xs: "38px", sm: "38px", md: "64px" },
                      color: "#333333",
                      textAlign: { xs: "center", sm: "start", md: "start" },
                    }}
                  >
                    Excite your customers and boost your sales with the most complete video shopping app for your Shopify brand.
                  </Typography>
                </motion.div>


                <Typography
                  sx={{
                    fontSize: "12px",
                    fontWeight: "500",
                    lineHeight: "12px",
                    color: "#333333",
                    letterSpacing: "1px",
                    paddingTop: { xs: "15px", sm: "15px", md: "40px" },
                    textAlign: { xs: "center", sm: "start", md: "start" },
                    
                  }}
                >
                  14 Day Free Trial. No coding required.
                </Typography>


                <Box
                  pt={3}
                  display={"flex"}
                  justifyContent={"flex-start"}
                  flexDirection={LapTopView || tabView ? "row" : "column"}
                  gap={tabView ? "20px" : 3}
                >
                  <Button
                    onClick={() => router.push("/bookdemo")}
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
                    Get free demo
                  </Button>

                  <Button
                    onClick={() => router.push("/price")}
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
                    View pricing
                  </Button>
                </Box>

              </Box>
            </Grid>

            <Grid item md={5} sm={5}>
              <Box
                width={"100%"}
                display={"flex"}
                justifyContent={"center"}
                alignItems={"center"}
              >
                <Lottie options={defaultOptions} />
              </Box>
            </Grid>
            {LapTopView || tabView ? (
              <>
                <Grid item md={12} sm={12}>
                  <Box
                    sx={{
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                      flexDirection: "row",
                      gap: "30px",
                    }}
                  >

                    <Card
                      sx={{
                        width: "auto",
                        borderRadius: "16px",
                        padding: "18px",
                        position: "relative",
                        top: "35px",
                        left: "0px",
                      }}
                    >
                      <Box
                        sx={{
                          display: "flex",
                          justifyContent: "space-between",
                          alignItems: "center",
                        }}
                      >
                        <Typography
                          sx={{
                            fontSize: "32px",
                            fontWeight: "600",
                            lineHeight: "32px",
                            color: "#333333",
                          }}
                        >
                          35%
                        </Typography>
                        <img
                          src="/icons/Vector (16).svg"
                          alt=""
                          style={{ height: "22px" }}
                        />
                      </Box>

                      <Typography
                        sx={{
                          fontSize: "14px",
                          fontWeight: "500",
                          lineHeight: "14px",
                          color: "#999999",
                          paddingTop: "12px",
                        }}
                      >
                        Increase in ROI
                      </Typography>
                    </Card>


                    <Card
                      sx={{
                        width: "auto",
                        borderRadius: "16px",
                        padding: "18px",
                        position: "relative",
                        top: "65px",
                        left: "0px",
                      }}
                    >
                      <Box
                        sx={{
                          display: "flex",
                          justifyContent: "space-between",
                          alignItems: "center",
                        }}
                      >
                        <Typography
                          sx={{
                            fontSize: "32px",
                            fontWeight: "600",
                            lineHeight: "32px",
                            color: "#333333",
                          }}
                        >
                          90%
                        </Typography>
                        <img
                          src="/icons/Vector (17).svg"
                          alt=""
                          style={{ height: "22px" }}
                        />
                      </Box>

                      <Typography
                        sx={{
                          fontSize: "14px",
                          fontWeight: "500",
                          lineHeight: "14px",
                          color: "#999999",
                          paddingTop: "12px",
                        }}
                      >
                        Faster Conversions
                      </Typography>
                    </Card>


                    <Card
                      sx={{
                        width: "auto",
                        borderRadius: "16px",
                        padding: "18px",
                        position: "relative",
                        top: "35px",
                        left: "0px",
                      }}
                    >
                      <Box
                        sx={{
                          display: "flex",
                          justifyContent: "space-between",
                          alignItems: "center",
                        }}
                      >
                        <Typography
                          sx={{
                            fontSize: "32px",
                            fontWeight: "600",
                            lineHeight: "32px",
                            color: "#333333",
                          }}
                        >
                          12%
                        </Typography>
                        <img
                          src="/icons/Vector (18).svg"
                          alt=""
                          style={{ height: "22px" }}
                        />
                      </Box>

                      <Typography
                        sx={{
                          fontSize: "14px",
                          fontWeight: "500",
                          lineHeight: "14px",
                          color: "#999999",
                          paddingTop: "12px",
                        }}
                      >
                        Faster Load Time
                      </Typography>
                    </Card>

                  </Box>
                </Grid>
              </>
            ) : (
              <></>
            )}
          </Grid>
        </Box>
      </Box>

      {LapTopView || tabView ? (
        <></>
      ) : (
        <>
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              flexDirection: "row",
              gap: "10px",
              margin: "30px 0px",
            }}
          >

            <Card
              sx={{
                width: "auto",
                borderRadius: "9px",
                padding: "12px",
              }}
            >
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                }}
              >
                <Typography
                  sx={{
                    fontSize: "19px",
                    fontWeight: "600",
                    lineHeight: "19px",
                    color: "#333333",
                  }}
                >
                  35%
                </Typography>
                <img
                  src="/icons/Vector (16).svg"
                  alt=""
                  style={{ height: "13px" }}
                />
              </Box>

              <Typography
                sx={{
                  fontSize: "8px",
                  fontWeight: "500",
                  lineHeight: "8px",
                  color: "#999999",
                  paddingTop: "8px",
                }}
              >
                Increase in ROI
              </Typography>
            </Card>


            <Card
              sx={{
                width: "auto",
                borderRadius: "9px",
                padding: "12px",
              }}
            >
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                }}
              >
                <Typography
                  sx={{
                    fontSize: "19px",
                    fontWeight: "600",
                    lineHeight: "19px",
                    color: "#333333",
                  }}
                >
                  90%
                </Typography>
                <img
                  src="/icons/Vector (17).svg"
                  alt=""
                  style={{ height: "13px" }}
                />
              </Box>

              <Typography
                sx={{
                  fontSize: "8px",
                  fontWeight: "500",
                  lineHeight: "8px",
                  color: "#999999",
                  paddingTop: "8px",
                }}
              >
                Faster Conversions
              </Typography>
            </Card>


            <Card
              sx={{
                width: "auto",
                borderRadius: "9px",
                padding: "12px",
              }}
            >
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                }}
              >
                <Typography
                  sx={{
                    fontSize: "19px",
                    fontWeight: "600",
                    lineHeight: "19px",
                    color: "#333333",
                  }}
                >
                  12%
                </Typography>
                <img
                  src="/icons/Vector (18).svg"
                  alt=""
                  style={{ height: "13px" }}
                />
              </Box>

              <Typography
                sx={{
                  fontSize: "8px",
                  fontWeight: "500",
                  lineHeight: "8px",
                  color: "#999999",
                  paddingTop: "8px",
                }}
              >
                Faster Load Time
              </Typography>
            </Card>

          </Box>
        </>
      )}
    </>
  );
};

export default HeroSection;
