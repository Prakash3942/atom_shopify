import React from "react";
import {
  Box,
  Button,
  Card,
  Grid,
  Paper,
  Typography,
  useMediaQuery,
} from "@mui/material";
import { useTheme } from "@mui/material/styles";
import { useRouter } from "next/router";
import { motion } from "framer-motion";

const CaseStudy = () => {
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
    <Box sx={{padding: {
        md: "122px 77px 0px 77px",
        sm: "100px 50px 0px 50px",
        xs: "100px 16px 0px 16px",
      },}}>
    <Grid
      container
      spacing={4}
    >
     
     <Grid item md={4} >
            <Paper elevation={2} sx={{ p: 3, borderRadius: "20px" }}>
              <img src="images/Frame 14052.png" alt="" style={{ width: "100%" }} />
              <Typography
                sx={{ fontSize: "12px", fontWeight: 700, color: "#999999", pt: 1 }}
              >
                Lemke LLC
              </Typography>
              <Typography
                sx={{ fontSize: "14px", fontWeight: 400, color: "#333333", pt: 1 }}
              >
                Lorem ipsum dolor sit amet, consectetur adipiscin elit. Egestas
                sodales adipiscing quis morbicur sus. Lorem ipsum dolor sit amet.
              </Typography>
              <Box display={"flex"} flexDirection={"row"} gap={2} pt={2}>
                <img
                  src="/images/unsplash_wZYXer0DwUE.png"
                  alt=""
                  style={{ borderRadius: "50%" }}
                />
                <Box
                  display={"flex"}
                  flexDirection={"column"}
                  justifyContent={"center"}
                  alignItems={"flex-start"}
                >
                  <Typography
                    sx={{ fontSize: "14px", fontWeight: 600, color: "#333333" }}
                  >
                    Lena Champlin MD
                  </Typography>
                  <Typography
                    sx={{ fontSize: "12px", fontWeight: 400, color: "#666666" }}
                  >
                    Investor
                  </Typography>
                </Box>
              </Box>
            </Paper>
          </Grid>
      <Grid item md={4} >
        <Paper elevation={2} sx={{ p: 3, borderRadius: "20px" }}>
          <img src="images/Frame 14052.png" alt="" style={{ width: "100%" }} />
          <Typography
            sx={{ fontSize: "12px", fontWeight: 700, color: "#999999", pt: 1 }}
          >
            Lemke LLC
          </Typography>
          <Typography
            sx={{ fontSize: "14px", fontWeight: 400, color: "#333333", pt: 1 }}
          >
            Lorem ipsum dolor sit amet, consectetur adipiscin elit. Egestas
            sodales adipiscing quis morbicur sus. Lorem ipsum dolor sit amet.
          </Typography>
          <Box display={"flex"} flexDirection={"row"} gap={2} pt={2}>
            <img
              src="/images/unsplash_wZYXer0DwUE.png"
              alt=""
              style={{ borderRadius: "50%" }}
            />
            <Box
              display={"flex"}
              flexDirection={"column"}
              justifyContent={"center"}
              alignItems={"flex-start"}
            >
              <Typography
                sx={{ fontSize: "14px", fontWeight: 600, color: "#333333" }}
              >
                Lena Champlin MD
              </Typography>
              <Typography
                sx={{ fontSize: "12px", fontWeight: 400, color: "#666666" }}
              >
                Investor
              </Typography>
            </Box>
          </Box>
        </Paper>
      </Grid>
      <Grid item md={4} >
        <Paper elevation={2} sx={{ p: 3, borderRadius: "20px" }}>
          <img src="images/Frame 14052.png" alt="" style={{ width: "100%" }} />
          <Typography
            sx={{ fontSize: "12px", fontWeight: 700, color: "#999999", pt: 1 }}
          >
            Lemke LLC
          </Typography>
          <Typography
            sx={{ fontSize: "14px", fontWeight: 400, color: "#333333", pt: 1 }}
          >
            Lorem ipsum dolor sit amet, consectetur adipiscin elit. Egestas
            sodales adipiscing quis morbicur sus. Lorem ipsum dolor sit amet.
          </Typography>
          <Box display={"flex"} flexDirection={"row"} gap={2} pt={2}>
            <img
              src="/images/unsplash_wZYXer0DwUE.png"
              alt=""
              style={{ borderRadius: "50%" }}
            />
            <Box
              display={"flex"}
              flexDirection={"column"}
              justifyContent={"center"}
              alignItems={"flex-start"}
            >
              <Typography
                sx={{ fontSize: "14px", fontWeight: 600, color: "#333333" }}
              >
                Lena Champlin MD
              </Typography>
              <Typography
                sx={{ fontSize: "12px", fontWeight: 400, color: "#666666" }}
              >
                Investor
              </Typography>
            </Box>
          </Box>
        </Paper>
      </Grid>
    </Grid>
    </Box>
  );
};

export default CaseStudy;
