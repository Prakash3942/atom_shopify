import React, { useEffect, useState } from "react";
import {
  Box,
  Button,
  Grid,
  Typography,
  useMediaQuery,
  Card,
} from "@mui/material";
import { useTheme } from "@mui/material/styles";
// import { Fade } from "react-awesome-reveal";
import { motion } from "framer-motion";

interface VideoPricingSectionProps {
  targetRef?: any;
}
const VideoPricingSection: React.FC<VideoPricingSectionProps> = ({
  targetRef,
}) => {
  const theme = useTheme();
  const tabView = useMediaQuery(theme.breakpoints.up("sm"));
  const mobileView = useMediaQuery(theme.breakpoints.up("xs"));
  const LapTopView = useMediaQuery(theme.breakpoints.up("md"));

  const [priceData, setPriceData] = useState<any>([]);
  const [togglePrice, setTogglePrice] = useState(0);

  const handleTogglePrice = (val: number) => {
    setTogglePrice(val);
  };

  const loadData = () => {
    const listData = fetch(
      "https://api.atom.smarttersstudio.in/v1/subscription-plan-management"
    )
      .then((response) => response.json())
      .then((data) => setPriceData(data.data))
      .catch((error) => console.log(error));
  };

  useEffect(() => {
    loadData();
  }, []);

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
      <Box>
        <Grid
          container
          sx={{
            marginTop: { md: "60px", sm: "60px", xs: "35px" },
            padding: { xs: "0px 10px" },
          }}
        >
          <Grid item md={12} sm={12} xs={12}>
            <motion.div
              initial={properties["slideInUp"].initial}
              whileInView={properties["slideInUp"].whileInView}
              transition={{ duration: 1.1 || 0.2, delay: 1.1 || 0.1 }}
              viewport={{ once: true }}
            >
              <Typography
                sx={{
                  fontSize: { md: "24px", sm: "24px", xs: "20px" },
                  fontWeight: "600",
                  lineHeight: { md: "24px", sm: "24px", xs: "30px" },
                  color: "#1E1E1E",
                  textAlign: "center",
                }}
              >
                Video Shopping Pricing & Plans
              </Typography>
            </motion.div>

            <Typography
              sx={{
                fontSize: "12px",
                fontWeight: "400",
                lineHeight: "12px",
                color: "#1E1E1E",
                textAlign: "center",
                paddingTop: "18px",
              }}
            >
              Pricing for every stage of your DTC success.
            </Typography>
          </Grid>

          <Grid
            container
            columnSpacing={4}
            sx={{
              marginTop: "40px",
              padding: { md: "0px 80px", sm: "0px 0px", xs: "0px" },
              gap: { xs: "20px", md: "0px", sm: "0px" },
            }}
          >
            {priceData.length > 0 &&
              priceData.map((e: any, i: number) => (
                <Grid item md={4} sm={4} xs={12} key={i}>
                  <Box
                    sx={{
                      display: "flex",
                      flexDirection: "column",
                      gap: { md: "40px", sm: "40px", xs: "20px" },
                      backgroundColor: "#FFFFFF",
                      borderRadius: "15px",
                      padding: { md: "22px", sm: "22px", xs: "15px" },
                      boxShadow: "rgba(0, 0, 0, 0.24) 0px 3px 8px",
                    }}
                  >
                    <Box
                      sx={{
                        display: "flex",
                        flexDirection: "column",
                        gap: "15px",
                        padding: "20px",
                        backgroundColor: "#F1F2F4",
                        borderRadius: "15px",
                      }}
                    >
                      <Typography
                        sx={{
                          fontSize: "15px",
                          fontWeight: "500",
                          lineHeight: "15px",
                          color: "#333333",
                        }}
                      >
                        {e.name}
                      </Typography>
                      <Typography
                        sx={{
                          fontSize: "32px",
                          fontWeight: "600",
                          lineHeight: "32px",
                          color: "#333333",
                        }}
                      >
                        $ {e.price}/-
                      </Typography>
                      <Typography
                        sx={{
                          fontSize: "14px",
                          fontWeight: "400",
                          lineHeight: "14px",
                          color: "#333333",
                        }}
                      >
                        per month
                      </Typography>
                    </Box>

                    <Box
                      sx={{
                        display: "flex",
                        flexDirection: "column",
                        gap: "15px",
                        padding: "15px",
                      }}
                    >
                      <Typography
                        sx={{
                          fontSize: "12px",
                          fontWeight: "600",
                          lineHeight: "12px",
                          color: "#999999",
                        }}
                      >
                        {e.description}
                      </Typography>
                      <Box
                        sx={{
                          display: "flex",
                          flexDirection: "row",
                          alignItems: "center",
                          gap: "10px",
                        }}
                      >
                        <img src="/icons/Vector (20).svg" alt="" />
                        <Typography
                          sx={{
                            fontSize: "14px",
                            fontWeight: "400",
                            lineHeight: "14px",
                            color: "#333333",
                          }}
                        >
                          Feature listing
                        </Typography>
                      </Box>
                      <Box
                        sx={{
                          display: "flex",
                          flexDirection: "row",
                          alignItems: "center",
                          gap: "10px",
                        }}
                      >
                        <img src="/icons/Vector (20).svg" alt="" />
                        <Typography
                          sx={{
                            fontSize: "14px",
                            fontWeight: "400",
                            lineHeight: "14px",
                            color: "#333333",
                          }}
                        >
                          Feature listing
                        </Typography>
                      </Box>
                      <Box
                        sx={{
                          display: "flex",
                          flexDirection: "row",
                          alignItems: "center",
                          gap: "10px",
                        }}
                      >
                        <img src="/icons/Vector (20).svg" alt="" />
                        <Typography
                          sx={{
                            fontSize: "14px",
                            fontWeight: "400",
                            lineHeight: "14px",
                            color: "#333333",
                          }}
                        >
                          Feature listing
                        </Typography>
                      </Box>
                      <Box
                        sx={{
                          display: "flex",
                          flexDirection: "row",
                          alignItems: "center",
                          gap: "10px",
                        }}
                      >
                        <img src="/icons/Vector (20).svg" alt="" />
                        <Typography
                          sx={{
                            fontSize: "14px",
                            fontWeight: "400",
                            lineHeight: "14px",
                            color: "#333333",
                          }}
                        >
                          Feature listing
                        </Typography>
                      </Box>
                      <Box
                        sx={{
                          display: "flex",
                          flexDirection: "row",
                          alignItems: "center",
                          gap: "10px",
                        }}
                      >
                        <img src="/icons/Vector (20).svg" alt="" />
                        <Typography
                          sx={{
                            fontSize: "14px",
                            fontWeight: "400",
                            lineHeight: "14px",
                            color: "#333333",
                          }}
                        >
                          Feature listing
                        </Typography>
                      </Box>
                    </Box>

                    <Box sx={{ paddingTop: "10px" }}>
                      <Button
                        href="https://apps.shopify.com/videoit-video-shopping"
                        style={{
                          width: "100%",
                          fontSize: "14px",
                          fontWeight: "600",
                          borderRadius: "6px",
                          backgroundColor: "#FFA500",
                          //   border:"1px solid #FFA500",
                          color: "#FFFFFF",
                          textTransform: "uppercase",
                          lineHeight: "14px",
                          padding: "12px 25px",
                        }}
                      >
                        10 days free trial
                      </Button>
                    </Box>
                  </Box>
                </Grid>
              ))}

            {/* <Grid item md={4} sm={4} xs={12}>
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  gap: { md: "40px", sm: "40px", xs: "20px" },
                  backgroundColor: "#FFFFFF",
                  borderRadius: "15px",
                  padding: { md: "22px", sm: "22px", xs: "15px" },
                  boxShadow: "rgba(0, 0, 0, 0.24) 0px 3px 8px",
                }}
              >
                <Box
                  sx={{
                    display: "flex",
                    flexDirection: "column",
                    gap: "15px",
                    padding: "20px",
                    backgroundColor: "#F1F2F4",
                    borderRadius: "15px",
                  }}
                >
                  <Typography
                    sx={{
                      fontSize: "15px",
                      fontWeight: "500",
                      lineHeight: "15px",
                      color: "#333333",
                    }}
                  >
                    Plan name
                  </Typography>
                  <Typography
                    sx={{
                      fontSize: "32px",
                      fontWeight: "600",
                      lineHeight: "32px",
                      color: "#333333",
                    }}
                  >
                    $ 1640.00/-
                  </Typography>
                  <Typography
                    sx={{
                      fontSize: "14px",
                      fontWeight: "400",
                      lineHeight: "14px",
                      color: "#333333",
                    }}
                  >
                    per month
                  </Typography>
                </Box>

                <Box
                  sx={{
                    display: "flex",
                    flexDirection: "column",
                    gap: "15px",
                    padding: "15px",
                  }}
                >
                  <Typography
                    sx={{
                      fontSize: "12px",
                      fontWeight: "600",
                      lineHeight: "12px",
                      color: "#999999",
                    }}
                  >
                    This is what you get:
                  </Typography>
                  <Box
                    sx={{
                      display: "flex",
                      flexDirection: "row",
                      alignItems: "center",
                      gap: "10px",
                    }}
                  >
                    <img src="/icons/Vector (20).svg" alt="" />
                    <Typography
                      sx={{
                        fontSize: "14px",
                        fontWeight: "400",
                        lineHeight: "14px",
                        color: "#333333",
                      }}
                    >
                      Feature listing
                    </Typography>
                  </Box>
                  <Box
                    sx={{
                      display: "flex",
                      flexDirection: "row",
                      alignItems: "center",
                      gap: "10px",
                    }}
                  >
                    <img src="/icons/Vector (20).svg" alt="" />
                    <Typography
                      sx={{
                        fontSize: "14px",
                        fontWeight: "400",
                        lineHeight: "14px",
                        color: "#333333",
                      }}
                    >
                      Feature listing
                    </Typography>
                  </Box>
                  <Box
                    sx={{
                      display: "flex",
                      flexDirection: "row",
                      alignItems: "center",
                      gap: "10px",
                    }}
                  >
                    <img src="/icons/Vector (20).svg" alt="" />
                    <Typography
                      sx={{
                        fontSize: "14px",
                        fontWeight: "400",
                        lineHeight: "14px",
                        color: "#333333",
                      }}
                    >
                      Feature listing
                    </Typography>
                  </Box>
                  <Box
                    sx={{
                      display: "flex",
                      flexDirection: "row",
                      alignItems: "center",
                      gap: "10px",
                    }}
                  >
                    <img src="/icons/Vector (20).svg" alt="" />
                    <Typography
                      sx={{
                        fontSize: "14px",
                        fontWeight: "400",
                        lineHeight: "14px",
                        color: "#333333",
                      }}
                    >
                      Feature listing
                    </Typography>
                  </Box>
                  <Box
                    sx={{
                      display: "flex",
                      flexDirection: "row",
                      alignItems: "center",
                      gap: "10px",
                    }}
                  >
                    <img src="/icons/Vector (20).svg" alt="" />
                    <Typography
                      sx={{
                        fontSize: "14px",
                        fontWeight: "400",
                        lineHeight: "14px",
                        color: "#333333",
                      }}
                    >
                      Feature listing
                    </Typography>
                  </Box>
                </Box>

                <Box sx={{ paddingTop: "10px" }}>
                  <Button
                    href="https://apps.shopify.com/videoit-video-shopping"
                    style={{
                      width: "100%",
                      fontSize: "14px",
                      fontWeight: "600",
                      borderRadius: "6px",
                      backgroundColor: "#FFA500",
                      //   border:"1px solid #FFA500",
                      color: "#FFFFFF",
                      textTransform: "uppercase",
                      lineHeight: "14px",
                      padding: "12px 25px",
                    }}
                  >
                    10 days free trial
                  </Button>
                </Box>
              </Box>
            </Grid>
            <Grid item md={4} sm={4} xs={12}>
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  gap: { md: "40px", sm: "40px", xs: "20px" },
                  backgroundColor: "#F6F7F9",
                  borderRadius: "15px",
                  padding: { md: "22px", sm: "22px", xs: "15px" },
                }}
              >
                <Box
                  sx={{
                    display: "flex",
                    flexDirection: "column",
                    gap: "15px",
                    padding: "20px",
                    backgroundColor: "#F1F2F4",
                    borderRadius: "15px",
                  }}
                >
                  <Typography
                    sx={{
                      fontSize: "15px",
                      fontWeight: "500",
                      lineHeight: "15px",
                      color: "#333333",
                    }}
                  >
                    Plan name
                  </Typography>
                  <Typography
                    sx={{
                      fontSize: "32px",
                      fontWeight: "600",
                      lineHeight: "32px",
                      color: "#333333",
                    }}
                  >
                    $ 1640.00/-
                  </Typography>
                  <Typography
                    sx={{
                      fontSize: "14px",
                      fontWeight: "400",
                      lineHeight: "14px",
                      color: "#333333",
                    }}
                  >
                    per month
                  </Typography>
                </Box>

                <Box
                  sx={{
                    display: "flex",
                    flexDirection: "column",
                    gap: "15px",
                    padding: "15px",
                  }}
                >
                  <Typography
                    sx={{
                      fontSize: "12px",
                      fontWeight: "600",
                      lineHeight: "12px",
                      color: "#999999",
                    }}
                  >
                    This is what you get:
                  </Typography>
                  <Box
                    sx={{
                      display: "flex",
                      flexDirection: "row",
                      alignItems: "center",
                      gap: "10px",
                    }}
                  >
                    <img src="/icons/Vector (19).svg" alt="" />
                    <Typography
                      sx={{
                        fontSize: "14px",
                        fontWeight: "400",
                        lineHeight: "14px",
                        color: "#333333",
                      }}
                    >
                      Feature listing
                    </Typography>
                  </Box>
                  <Box
                    sx={{
                      display: "flex",
                      flexDirection: "row",
                      alignItems: "center",
                      gap: "10px",
                    }}
                  >
                    <img src="/icons/Vector (19).svg" alt="" />
                    <Typography
                      sx={{
                        fontSize: "14px",
                        fontWeight: "400",
                        lineHeight: "14px",
                        color: "#333333",
                      }}
                    >
                      Feature listing
                    </Typography>
                  </Box>
                  <Box
                    sx={{
                      display: "flex",
                      flexDirection: "row",
                      alignItems: "center",
                      gap: "10px",
                    }}
                  >
                    <img src="/icons/Vector (19).svg" alt="" />
                    <Typography
                      sx={{
                        fontSize: "14px",
                        fontWeight: "400",
                        lineHeight: "14px",
                        color: "#333333",
                      }}
                    >
                      Feature listing
                    </Typography>
                  </Box>
                  <Box
                    sx={{
                      display: "flex",
                      flexDirection: "row",
                      alignItems: "center",
                      gap: "10px",
                    }}
                  >
                    <img src="/icons/Vector (19).svg" alt="" />
                    <Typography
                      sx={{
                        fontSize: "14px",
                        fontWeight: "400",
                        lineHeight: "14px",
                        color: "#333333",
                      }}
                    >
                      Feature listing
                    </Typography>
                  </Box>
                  <Box
                    sx={{
                      display: "flex",
                      flexDirection: "row",
                      alignItems: "center",
                      gap: "10px",
                    }}
                  >
                    <img src="/icons/Vector (19).svg" alt="" />
                    <Typography
                      sx={{
                        fontSize: "14px",
                        fontWeight: "400",
                        lineHeight: "14px",
                        color: "#333333",
                      }}
                    >
                      Feature listing
                    </Typography>
                  </Box>
                </Box>

                <Box sx={{ paddingTop: "10px" }}>
                  <Button
                    href="https://apps.shopify.com/videoit-video-shopping"
                    style={{
                      width: "100%",
                      fontSize: "14px",
                      fontWeight: "600",
                      borderRadius: "6px",
                      border: "1px solid #FFA500",
                      color: "#FFA500",
                      textTransform: "uppercase",
                      lineHeight: "14px",
                      padding: "12px 25px",
                    }}
                  >
                    10 days free trial
                  </Button>
                </Box>
              </Box>
            </Grid> */}
          </Grid>
        </Grid>
      </Box>
    </>
  );
};

export default VideoPricingSection;
