import React, { useEffect } from "react";
import {
  Box,
  Button,
  Card,
  Grid,
  Typography,
  useMediaQuery,
} from "@mui/material";
import { useRouter } from "next/router";
import { useTheme } from "@mui/material/styles";
import { motion } from "framer-motion";

const VideoShopifyStore = () => {
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
      <Box
        my={5}
        width={"100%"}
        sx={{
          backgroundImage: "url(/images/BG.svg)",
          backgroundPosition: "center",
          backgroundSize: "cover",
          height: "100%",
        }}
      >
        <Grid container>
          {LapTopView ? (
            <>
              <Grid item md={6} sx={{ position: "relative" }}>
                <Card
                  sx={{
                    width: "auto",
                    borderRadius: "16px",
                    position: "absolute",
                    top: "55px",
                    left: "377px",
                  }}
                >
                  <Box
                    display={"flex"}
                    justifyContent={"space-between"}
                    sx={{ padding: "12px 22px", gap: "25px" }}
                  >
                    <Box display={"flex"} flexDirection={"column"}>
                      <Typography
                        sx={{
                          fontSize: "32px",
                          fontWeight: "600",
                          color: "#333333",
                        }}
                      >
                        12%
                      </Typography>
                      <Typography
                        sx={{
                          fontSize: "14px",
                          fontWeight: "500",
                          color: "#999999",
                        }}
                      >
                        Faster Load Time
                      </Typography>
                    </Box>
                    <Box
                      display={"flex"}
                      justifyContent={"center"}
                      alignItems={"center"}
                    >
                      <img src="/icons/Vector (14).svg" alt="" />
                    </Box>
                  </Box>
                </Card>

                <Card
                  sx={{
                    width: "auto%",
                    borderRadius: "16px",
                    position: "absolute",
                    top: "125px",
                    left: "90px",
                  }}
                >
                  <Box
                    display={"flex"}
                    justifyContent={"space-between"}
                    sx={{ padding: "12px 22px", gap: "25px" }}
                  >
                    <Box display={"flex"} flexDirection={"column"}>
                      <Typography
                        sx={{
                          fontSize: "32px",
                          fontWeight: "600",
                          color: "#333333",
                        }}
                      >
                        35%
                      </Typography>
                      <Typography
                        sx={{
                          fontSize: "14px",
                          fontWeight: "500",
                          color: "#999999",
                        }}
                      >
                        Increase in ROI
                      </Typography>
                    </Box>
                    <Box
                      display={"flex"}
                      justifyContent={"center"}
                      alignItems={"center"}
                    >
                      <img src="/icons/uis_graph-bar.svg" alt="" />
                    </Box>
                  </Box>
                </Card>
                <Card
                  sx={{
                    width: "auto%",
                    borderRadius: "16px",
                    position: "absolute",
                    top: "212px",
                    left: "260px",
                  }}
                >
                  <Box
                    display={"flex"}
                    justifyContent={"space-between"}
                    sx={{ padding: "12px 22px", gap: "25px" }}
                  >
                    <Box display={"flex"} flexDirection={"column"}>
                      <Typography
                        sx={{
                          fontSize: "32px",
                          fontWeight: "600",
                          color: "#333333",
                        }}
                      >
                        90%
                      </Typography>
                      <Typography
                        sx={{
                          fontSize: "14px",
                          fontWeight: "500",
                          color: "#999999",
                        }}
                      >
                        Faster Conversions
                      </Typography>
                    </Box>
                    <Box
                      display={"flex"}
                      justifyContent={"center"}
                      alignItems={"center"}
                    >
                      <img
                        src="/icons/streamline_money-graph-arrow-increase-ascend-growth-up-arrow-stats-graph-right-grow.svg"
                        alt=""
                      />
                    </Box>
                  </Box>
                </Card>
              </Grid>
              <Grid item md={6} py={9} pl={5}>
                <Box display={"flex"} pr={2}>
                  <motion.div
                    initial={properties["slideInUp"].initial}
                    whileInView={properties["slideInUp"].whileInView}
                    transition={{ duration: 0.5 || 0.2, delay: 0.5 || 0.1 }}
                    viewport={{ once: true }}
                  >
                    <Typography
                      sx={{
                        fontSize: "40px",
                        fontWeight: "600",
                        lineHeight: "60px",
                        color: "#333333",
                      }}
                    >
                      Videoit your Shopify store and drive more sales.
                    </Typography>
                  </motion.div>
                </Box>
                <Box
                  py={4}
                  display={"flex"}
                  justifyContent={"flex-start"}
                  gap={2}
                >
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
                  <Button
                    onClick={() => router.push("/bookdemo")}
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
                    Get a free demo
                  </Button>
                </Box>
              </Grid>
            </>
          ) : tabView ? (
            <>
              <Grid item sm={6}>
                <Card
                  sx={{
                    width: "40%",
                    borderRadius: "9px",
                    position: "relative",
                    top: "30px",
                    left: "180px",
                  }}
                >
                  <Box
                    display={"flex"}
                    justifyContent={"center"}
                    sx={{ padding: "15px", gap: "10px" }}
                  >
                    <Box display={"flex"} flexDirection={"column"}>
                      <Typography
                        sx={{
                          fontSize: "18px",
                          fontWeight: "600",
                          color: "#333333",
                        }}
                      >
                        12%
                      </Typography>
                      <Typography
                        sx={{
                          fontSize: "8px",
                          fontWeight: "500",
                          color: "#999999",
                        }}
                      >
                        Faster Load Time
                      </Typography>
                    </Box>
                    <Box
                      display={"flex"}
                      justifyContent={"center"}
                      alignItems={"center"}
                    >
                      <img
                        src="/icons/Vector (14).svg"
                        alt=""
                        style={{ width: "23px", height: "23px" }}
                      />
                    </Box>
                  </Box>
                </Card>
                <Card
                  sx={{
                    width: "40%",
                    borderRadius: "9px",
                    position: "relative",
                    top: "50px",
                    left: "30px",
                  }}
                >
                  <Box
                    display={"flex"}
                    justifyContent={"center"}
                    sx={{ padding: "15px", gap: "10px" }}
                  >
                    <Box display={"flex"} flexDirection={"column"}>
                      <Typography
                        sx={{
                          fontSize: "18px",
                          fontWeight: "600",
                          color: "#333333",
                        }}
                      >
                        35%
                      </Typography>
                      <Typography
                        sx={{
                          fontSize: "8px",
                          fontWeight: "500",
                          color: "#999999",
                        }}
                      >
                        Increase in ROI
                      </Typography>
                    </Box>
                    <Box
                      display={"flex"}
                      justifyContent={"center"}
                      alignItems={"center"}
                    >
                      <img
                        src="/icons/uis_graph-bar.svg"
                        alt=""
                        style={{ width: "23px", height: "23px" }}
                      />
                    </Box>
                  </Box>
                </Card>
                <Card
                  sx={{
                    width: "40%",
                    borderRadius: "9px",
                    position: "relative",
                    top: "43px",
                    left: "142px",
                  }}
                >
                  <Box
                    display={"flex"}
                    justifyContent={"center"}
                    sx={{ padding: "15px", gap: "10px" }}
                  >
                    <Box display={"flex"} flexDirection={"column"}>
                      <Typography
                        sx={{
                          fontSize: "18px",
                          fontWeight: "600",
                          color: "#333333",
                        }}
                      >
                        90%
                      </Typography>
                      <Typography
                        sx={{
                          fontSize: "8px",
                          fontWeight: "500",
                          color: "#999999",
                        }}
                      >
                        Faster Conversions
                      </Typography>
                    </Box>
                    <Box
                      display={"flex"}
                      justifyContent={"center"}
                      alignItems={"center"}
                    >
                      <img
                        src="/icons/streamline_money-graph-arrow-increase-ascend-growth-up-arrow-stats-graph-right-grow.svg"
                        alt=""
                        style={{ width: "23px", height: "23px" }}
                      />
                    </Box>
                  </Box>
                </Card>
              </Grid>
              <Grid
                item
                sm={6}
                py={9}
                pl={5}
                sx={{ padding: "60px 25px 0px 25px" }}
              >
                <Box display={"flex"}>
                  <motion.div
                    initial={properties["slideInUp"].initial}
                    whileInView={properties["slideInUp"].whileInView}
                    transition={{ duration: 0.5 || 0.2, delay: 0.5 || 0.1 }}
                    viewport={{ once: true }}
                  >
                    <Typography
                      sx={{
                        fontSize: "24px",
                        fontWeight: "600",
                        lineHeight: "36px",
                        color: "#333333",
                        textAlign: "center",
                      }}
                    >
                      Videoit your Shopify store and drive more sales.
                    </Typography>
                  </motion.div>
                </Box>
                <Box
                  py={2}
                  display={"flex"}
                  justifyContent={"flex-start"}
                  flexDirection={"column"}
                  gap={2}
                >
                  <Button
                    href="https://apps.shopify.com/videoit-video-shopping"
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
                    start free trial
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
                    Get a free demo
                  </Button>
                </Box>
              </Grid>
            </>
          ) : (
            <>
              <Grid item md={6} sm={12}>
                <Card
                  sx={{
                    width: "auto",
                    borderRadius: "9px",
                    position: "relative",
                    top: "30px",
                    left: "160px",
                  }}
                >
                  <Box
                    display={"flex"}
                    justifyContent={"center"}
                    sx={{ padding: "10px", gap: "18px" }}
                  >
                    <Box display={"flex"} flexDirection={"column"}>
                      <Typography
                        sx={{
                          fontSize: "18px",
                          fontWeight: "600",
                          color: "#333333",
                        }}
                      >
                        12%
                      </Typography>
                      <Typography
                        sx={{
                          fontSize: "8px",
                          fontWeight: "500",
                          color: "#999999",
                        }}
                      >
                        Faster Load Time
                      </Typography>
                    </Box>
                    <Box
                      display={"flex"}
                      justifyContent={"center"}
                      alignItems={"center"}
                    >
                      <img
                        src="/icons/Vector (14).svg"
                        alt=""
                        style={{ width: "23px", height: "23px" }}
                      />
                    </Box>
                  </Box>
                </Card>
                <Card
                  sx={{
                    width: "auto",
                    borderRadius: "9px",
                    position: "relative",
                    top: "50px",
                    left: "30px",
                  }}
                >
                  <Box
                    display={"flex"}
                    justifyContent={"center"}
                    sx={{ padding: "10px", gap: "18px" }}
                  >
                    <Box display={"flex"} flexDirection={"column"}>
                      <Typography
                        sx={{
                          fontSize: "18px",
                          fontWeight: "600",
                          color: "#333333",
                        }}
                      >
                        35%
                      </Typography>
                      <Typography
                        sx={{
                          fontSize: "8px",
                          fontWeight: "500",
                          color: "#999999",
                        }}
                      >
                        Increase in ROI
                      </Typography>
                    </Box>
                    <Box
                      display={"flex"}
                      justifyContent={"center"}
                      alignItems={"center"}
                    >
                      <img
                        src="/icons/uis_graph-bar.svg"
                        alt=""
                        style={{ width: "23px", height: "23px" }}
                      />
                    </Box>
                  </Box>
                </Card>
                <Card
                  sx={{
                    width: "auto",
                    borderRadius: "9px",
                    position: "relative",
                    top: "43px",
                    left: "142px",
                  }}
                >
                  <Box
                    display={"flex"}
                    justifyContent={"center"}
                    sx={{ padding: "10px", gap: "18px" }}
                  >
                    <Box display={"flex"} flexDirection={"column"}>
                      <Typography
                        sx={{
                          fontSize: "18px",
                          fontWeight: "600",
                          color: "#333333",
                        }}
                      >
                        90%
                      </Typography>
                      <Typography
                        sx={{
                          fontSize: "8px",
                          fontWeight: "500",
                          color: "#999999",
                        }}
                      >
                        Faster Conversions
                      </Typography>
                    </Box>
                    <Box
                      display={"flex"}
                      justifyContent={"center"}
                      alignItems={"center"}
                    >
                      <img
                        src="/icons/streamline_money-graph-arrow-increase-ascend-growth-up-arrow-stats-graph-right-grow.svg"
                        alt=""
                        style={{ width: "23px", height: "23px" }}
                      />
                    </Box>
                  </Box>
                </Card>
              </Grid>
              <Grid
                item
                md={6}
                xs={12}
                sm={12}
                py={9}
                pl={5}
                sx={{ padding: "90px 15px 0px 15px" }}
              >
                <Box display={"flex"}>
                  <motion.div
                    initial={properties["slideInUp"].initial}
                    whileInView={properties["slideInUp"].whileInView}
                    transition={{ duration: 0.5 || 0.2, delay: 0.5 || 0.1 }}
                    viewport={{ once: true }}
                  >
                    <Typography
                      sx={{
                        fontSize: "24px",
                        fontWeight: "600",
                        lineHeight: "36px",
                        color: "#333333",
                        textAlign: "center",
                      }}
                    >
                      Videoit your Shopify store and drive more sales.
                    </Typography>
                  </motion.div>
                </Box>
                <Box
                  py={2}
                  display={"flex"}
                  justifyContent={"flex-start"}
                  flexDirection={"column"}
                  gap={2}
                >
                  <Button
                    href="https://apps.shopify.com/videoit-video-shopping"
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
                    start free trial
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
                    Get a free demo
                  </Button>
                </Box>
              </Grid>
            </>
          )}
        </Grid>
      </Box>
    </>
  );
};

export default VideoShopifyStore;
