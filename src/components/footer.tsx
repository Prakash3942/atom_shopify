import { Grid, Hidden, Stack, useMediaQuery } from "@mui/material";
import { useRouter } from "next/router";
import React from "react";
import {
  Box,
  Typography,
  TextField,
  InputAdornment,
  Divider,
} from "@mui/material";

import { APPBAR_HEIGHT } from "../utils/constants";
import theme from "../theme";
import { useTheme } from "@mui/material/styles";
import { useEffect } from "react";
// import { Fade } from "react-awesome-reveal";

const Footer = () => {
  const router = useRouter();
  const theme = useTheme();
  const tabView = useMediaQuery(theme.breakpoints.up("sm"));
  const mobileView = useMediaQuery(theme.breakpoints.up("xs"));
  const LapTopView = useMediaQuery(theme.breakpoints.up("md"));

  const [socialLinks, setSocialLinks] = React.useState<any>([]);

  const loadData = () => {
    const listData = fetch(
      "https://api.atom.smarttersstudio.in/v1/social-media-links"
    )
      .then((response) => response.json())
      .then((data) => setSocialLinks(data.data))
      .catch((error) => console.log(error));
  };

  useEffect(() => {
    loadData();
  }, []);

  return (
    <Box width={"100%"} p={LapTopView || tabView ? 4 : 1}>
      <Box
        width={"100%"}
        bgcolor={"#F3F6FC"}
        p={LapTopView || tabView ? 3 : 0}
        borderRadius={"32px"}
      >
        <Grid
          container
          columnSpacing={LapTopView ? 20 : 5}
          p={LapTopView || tabView ? "10px 28px" : "28px"}
          direction="row"
          justifyContent="space-between"
        >
          <Grid item md={4} sm={4} xs={12}>
            <Box display={"flex"} flexDirection={"row"} alignItems={"flex-end"}>
              <img
                src="/images/Layer_2.svg"
                alt=""
                style={{ height: "36px" }}
              />
              <Typography
                sx={{
                  paddingLeft: "12px",
                  fontSize: "21px",
                  fontWeight: "600",
                  color: "#333333",
                }}
              >
                VideoIt
              </Typography>
            </Box>
            <Typography
              sx={{
                py: "22px",
                fontSize: "12px",
                fontWeight: "500",
                color: "#333333",
                lineHeight: "19px",
              }}
            >
              Elevate your brand with VideoIt where dynamic shopping meets an
              immersive video experience.
            </Typography>
            <Box display={"flex"} flexDirection={"row"} gap={"15px"}>
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  width: "32px",
                  height: "32px",
                  borderRadius: "50%",
                  backgroundColor: "#FFFFFF",
                  cursor: "pointer",
                }}
                onClick={() =>
                  window.open(
                    socialLinks[1].facebook,
                    "_blank",
                    "noopener, noreferrer"
                  )
                }
              >
                <img src="/icons/Vector.svg" alt="" />
              </Box>
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  width: "32px",
                  height: "32px",
                  borderRadius: "50%",
                  backgroundColor: "#FFFFFF",
                  cursor: "pointer",
                }}
                onClick={() =>
                  window.open(
                    socialLinks[1].twitter,
                    "_blank",
                    "noopener, noreferrer"
                  )
                }
              >
                <img src="/icons/Vector (1).svg" alt="" />
              </Box>
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  width: "32px",
                  height: "32px",
                  borderRadius: "50%",
                  backgroundColor: "#FFFFFF",
                  cursor: "pointer",
                }}
                onClick={() =>
                  window.open(
                    socialLinks[1].instagram,
                    "_blank",
                    "noopener, noreferrer"
                  )
                }
              >
                <img src="/icons/Vector (2).svg" alt="" />
              </Box>
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  width: "32px",
                  height: "32px",
                  borderRadius: "50%",
                  backgroundColor: "#FFFFFF",
                  cursor: "pointer",
                }}
                onClick={() =>
                  window.open(
                    socialLinks[1].linkedIn,
                    "_blank",
                    "noopener, noreferrer"
                  )
                }
              >
                <img src="/icons/Vector (3).svg" alt="" />
              </Box>
            </Box>
          </Grid>
          <Grid item md={4} sm={4} xs={12} pt={LapTopView || tabView ? 0 : 5}>
            <Typography
              sx={{
                fontSize: "20px",
                fontWeight: "600",
                color: "#333333",
              }}
            >
              Useful Links
            </Typography>

            <Grid
              container
              spacing={2}
              gap={LapTopView || tabView ? 0 : "54px"}
            >
              <Grid item md={6}>
                <Box pt={"20px"}>
                  <Typography
                    sx={{
                      fontSize: "12px",
                      fontWeight: "500",
                      color: "#333333",
                    }}
                  >
                    Solution
                  </Typography>
                  <Typography
                    onClick={() => router.push("/story")}
                    sx={{
                      fontSize: "12px",
                      fontWeight: "500",
                      color: "#333333",
                      pt: 1,
                      cursor: "pointer",
                    }}
                  >
                    Story
                  </Typography>
                  <Typography
                    onClick={() => router.push("/product")}
                    sx={{
                      fontSize: "12px",
                      fontWeight: "500",
                      color: "#333333",
                      pt: 1,
                      cursor: "pointer",
                    }}
                  >
                    Product
                  </Typography>
                  <Typography
                    onClick={() => router.push("/banner")}
                    sx={{
                      fontSize: "12px",
                      fontWeight: "500",
                      color: "#333333",
                      pt: 1,
                      cursor: "pointer",
                    }}
                  >
                    Banner
                  </Typography>
                  <Typography
                    onClick={() => router.push("/category")}
                    sx={{
                      fontSize: "12px",
                      fontWeight: "500",
                      color: "#333333",
                      pt: 1,
                      cursor: "pointer",
                    }}
                  >
                    Categories
                  </Typography>
                  <Typography
                    onClick={() => router.push("/section")}
                    sx={{
                      fontSize: "12px",
                      fontWeight: "500",
                      color: "#333333",
                      pt: 1,
                      cursor: "pointer",
                    }}
                  >
                    Sections
                  </Typography>
                </Box>
              </Grid>
              <Grid item md={6}>
                <Box pt={"20px"}>
                  <Typography
                    onClick={() => router.push("/product")}
                    sx={{
                      fontSize: "12px",
                      fontWeight: "500",
                      color: "#333333",
                      cursor: "pointer",
                    }}
                  >
                    Product
                  </Typography>
                  <Typography
                    onClick={() => router.push("/price")}
                    sx={{
                      fontSize: "12px",
                      fontWeight: "500",
                      color: "#333333",
                      pt: 1,
                      cursor: "pointer",
                    }}
                  >
                    Pricing
                  </Typography>
                  <Typography
                    sx={{
                      fontSize: "12px",
                      fontWeight: "500",
                      color: "#333333",
                      pt: 1,
                    }}
                  >
                    Case Studies
                  </Typography>
                  <Typography
                    sx={{
                      fontSize: "12px",
                      fontWeight: "500",
                      color: "#333333",
                      pt: 1,
                    }}
                  >
                    Learn more
                  </Typography>
                </Box>
              </Grid>
            </Grid>
          </Grid>
          <Grid item md={4} sm={4} xs={12} pt={LapTopView || tabView ? 0 : 5}>
            <Box>
              <Typography
                sx={{
                  fontSize: "20px",
                  fontWeight: "600",
                  color: "#333333",
                }}
              >
                Subscribe Newsletter
              </Typography>
              <Typography
                sx={{
                  py: "22px",
                  fontSize: "12px",
                  fontWeight: "500",
                  color: "#333333",
                  lineHeight: "19px",
                }}
              >
                Enter your email to receive our valuable newsletters.
              </Typography>
              <Box display={"flex"} sx={{ width: "100%" }}>
                <Box>
                  <TextField
                    placeholder="Enter your email"
                    fullWidth
                    // size="small"
                    InputProps={{
                      style: {
                        backgroundColor: "#ffffff",
                        fontSize: "14px",
                        fontWeight: "400",
                        color: "#A1A1A1",
                        outline: 0,
                        border: "1px solid #E6E6E6",
                      },
                      endAdornment: (
                        <InputAdornment
                          position="end"
                          sx={{ cursor: "pointer" }}
                        >
                          <img
                            src="/icons/Vector (4).svg"
                            alt="password icon"
                            style={{ height: "20px" }}
                          />
                        </InputAdornment>
                      ),
                    }}
                  />
                </Box>
              </Box>
            </Box>
          </Grid>

          <Grid item md={12} xs={12} mt={LapTopView || tabView ? 6 : 4}>
            <Box
              width={"100%"}
              display={"flex"}
              justifyContent={"center"}
              alignItems={"center"}
              bgcolor={"#FFFFFF"}
              borderRadius={"8px"}
            >
              <Typography
                sx={{
                  p: 1.5,
                  fontSize: { xs: "10px", sm: "10px", md: "12px" },
                  fontWeight: "500",
                  color: "#333333",
                }}
              >
                Copyright © 2023 VideoIt All rights reserved
              </Typography>
            </Box>
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
};

export default Footer;
