import React, { useEffect } from "react";
import {
  Box,
  Button,
  Grid,
  Typography,
  useMediaQuery,
  Card,
} from "@mui/material";
import { useTheme } from "@mui/material/styles";
import { useRouter } from "next/router";
// import { Fade } from "react-awesome-reveal";
import { motion } from "framer-motion";

interface PriceHeroSectionProps {
  targetRef?: any;
}

const PriceHeroSection: React.FC<PriceHeroSectionProps> = ({ targetRef }) => {
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
      <Grid
        container
        sx={{
          backgroundImage: "url(/images/BG_1.svg)",
          backgroundPosition: "center",
          backgroundSize: "cover",
          height: "100%",
          // padding: { xs: "0px 16px" },
          padding: {
            md: "122px 77px 0px 77px",
            sm: "100px 50px 0px 50px",
            xs: "100px 16px 0px 16px",
          },
        }}
      >
        <Grid
          item
          md={12}
          sm={12}
          xs={12}
          sx={{
            paddingTop: { md: "60px", sm: "60px", xs: "20px" },
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
                fontSize: { md: "40px", sm: "40px", xs: "21px" },
                fontWeight: "600",
                lineHeight: { md: "40px", sm: "40px", xs: "35px" },
                textAlign: "center",
                color: "#1E1E1E",
              }}
            >
              Video Shopping Pricing & Plans
            </Typography>
          </motion.div>

          <Typography
            sx={{
              fontSize: "14px",
              fontWeight: "400",
              lineHeight: "14px",
              textAlign: "center",
              color: "#1E1E1E",
              paddingTop: "22px",
            }}
          >
            Pricing for every stage of your DTC success.
          </Typography>
        </Grid>

        <Grid container>
          <Grid
            item
            md={12}
            sm={12}
            xs={12}
            sx={{
              display: "flex",
              justifyContent: "center",
              gap: "20px",
              paddingTop: { md: "45px", sm: "45px", xs: "25px" },
              flexDirection: { md: "row", sm: "row", xs: "column" },
            }}
          >
            <Button
              href="https://apps.shopify.com/videoit-video-shopping"
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
              Get Custom Pricing
            </Button>
            <Button
              href="https://apps.shopify.com/videoit-video-shopping"
              style={{
                width: LapTopView || tabView ? "" : "100%",
                fontSize: "14px",
                fontWeight: "600",
                borderRadius: "8px",
                color: "#FFA500",
                textTransform: "uppercase",
                lineHeight: "13px",
                padding: "12px 25px",
              }}
              // onClick={() => {
              //   if (targetRef.current) {
              //     targetRef?.current?.scrollIntoView({ behavior: 'smooth' });
              //   }

              // }}
            >
              View Subscription Plans
            </Button>
          </Grid>

          <Grid
            item
            md={12}
            sm={12}
            xs={12}
            sx={{ paddingTop: { md: "40px", sm: "40px", xs: "0px" } }}
          >
            <Box
              sx={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                flexDirection: { md: "row", sm: "row", xs: "column" },
                gap: { md: "10px", sm: "10px", xs: "30px" },
                margin: { md: "30px 0px", sm: "30px 0px", xs: "20px 0px" },
              }}
            >
              <Card
                sx={{
                  width: "auto",
                  borderRadius: "16px",
                  padding: { md: "20px", sm: "20px", xs: "10px" },
                  marginTop: { md: "30px", sm: "30px", xs: "0px" },
                  marginRight: { md: "40px", sm: "40px", xs: "0px" },
                }}
              >
                <Box
                  display={"flex"}
                  justifyContent={"center"}
                  sx={{ gap: { md: "20px", sm: "20px", xs: "25px" } }}
                >
                  <Box
                    sx={{
                      display: "flex",
                      flexDirection: "column",
                      gap: { md: "6px", sm: "6px", xs: "3px" },
                    }}
                  >
                    <Typography
                      sx={{
                        fontSize: { md: "25px", sm: "25px", xs: "20px" },
                        fontWeight: "600",
                        lineHeight: "40px",
                        color: "#333333",
                      }}
                    >
                      35%
                    </Typography>
                    <Typography
                      sx={{
                        fontSize: { md: "18px", sm: "18px", xs: "15px" },
                        fontWeight: "500",
                        lineHeight: "16px",
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
                    {LapTopView || tabView ? (
                      <img
                        src="/icons/uis_graph-bar.svg"
                        alt=""
                        style={{ height: "45px" }}
                      />
                    ) : (
                      <img
                        src="/icons/uis_graph-bar.svg"
                        alt=""
                        style={{ height: "40px" }}
                      />
                    )}
                  </Box>
                </Box>
              </Card>
              <Card
                sx={{
                  width: "auto",
                  borderRadius: "16px",
                  padding: { md: "20px", sm: "20px", xs: "10px" },
                  marginTop: { md: "-160px", sm: "-160px", xs: "0px" },
                }}
              >
                <Box
                  display={"flex"}
                  justifyContent={"center"}
                  sx={{ gap: "20px" }}
                >
                  <Box
                    sx={{
                      display: "flex",
                      flexDirection: "column",
                      gap: "6px",
                    }}
                  >
                    <Typography
                      sx={{
                        fontSize: { md: "56px", sm: "56px", xs: "50px" },
                        fontWeight: "600",
                        lineHeight: "56px",
                        color: "#333333",
                      }}
                    >
                      90%
                    </Typography>
                    <Typography
                      sx={{
                        fontSize: { md: "18px", sm: "18px", xs: "16px" },
                        fontWeight: "500",
                        lineHeight: "16px",
                        color: "#999999",

                        marginTop: { md: "10px", sm: "10px", xs: "0px" },
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
                    {LapTopView || tabView ? (
                      <img
                        src="/icons/streamline_money-graph-arrow-increase-ascend-growth-up-arrow-stats-graph-right-grow.svg"
                        alt=""
                        style={{ height: "65px" }}
                      />
                    ) : (
                      <img
                        src="/icons/streamline_money-graph-arrow-increase-ascend-growth-up-arrow-stats-graph-right-grow.svg"
                        alt=""
                        style={{ height: "60px" }}
                      />
                    )}
                  </Box>
                </Box>
              </Card>
              <Card
                sx={{
                  width: "auto",
                  borderRadius: "16px",
                  padding: { md: "20px", sm: "20px", xs: "10px" },
                  marginTop: { md: "140px", sm: "140px", xs: "0px" },
                  marginLeft: { md: "-14px", sm: "-14px", xs: "0px" },
                }}
              >
                <Box
                  display={"flex"}
                  justifyContent={"center"}
                  sx={{ gap: { md: "20px", sm: "20px", xs: "25px" } }}
                >
                  <Box
                    sx={{
                      display: "flex",
                      flexDirection: "column",
                      gap: { md: "6px", sm: "6px", xs: "3px" },
                    }}
                  >
                    <Typography
                      sx={{
                        fontSize: { md: "25px", sm: "25px", xs: "20px" },
                        fontWeight: "600",
                        lineHeight: "40px",
                        color: "#333333",
                      }}
                    >
                      12%
                    </Typography>
                    <Typography
                      sx={{
                        fontSize: { md: "18px", sm: "18px", xs: "15px" },
                        fontWeight: "500",
                        lineHeight: "16px",
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
                    {LapTopView || tabView ? (
                      <img
                        src="/icons/Vector (14).svg"
                        alt=""
                        style={{ height: "45px" }}
                      />
                    ) : (
                      <img
                        src="/icons/Vector (14).svg"
                        alt=""
                        style={{ height: "40px" }}
                      />
                    )}
                  </Box>
                </Box>
              </Card>
            </Box>
          </Grid>
        </Grid>
      </Grid>
    </>
  );
};

export default PriceHeroSection;
