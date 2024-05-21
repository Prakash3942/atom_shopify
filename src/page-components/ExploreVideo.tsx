import React, { useEffect, useState } from "react";
import { Grid, Box, Typography, useMediaQuery, Card } from "@mui/material";
import { useTheme } from "@mui/material/styles";
// import { Fade } from "react-awesome-reveal";
import { motion } from "framer-motion";

const ExploreVideo = () => {
  const theme = useTheme();
  const tabView = useMediaQuery(theme.breakpoints.up("sm"));
  const mobileView = useMediaQuery(theme.breakpoints.up("xs"));
  const LapTopView = useMediaQuery(theme.breakpoints.up("md"));

  const [exploredata, setexploreData] = useState<any>([]);

  const loadData = () => {
    const listData = fetch("https://api.atom.smarttersstudio.in/v1/partners")
      .then((response) => response.json())
      .then((data) => setexploreData(data.data))
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
      <Box
        sx={{
          backgroundColor: "#F6F7F9",
          padding: { md: "34px", sm: "34px", xs: "16px" },
        }}
      >
        <Box sx={{ display: "flex", flexDirection: "column", gap: "10px" }}>
          <motion.div
            initial={properties['slideInUp'].initial}
            whileInView={properties['slideInUp'].whileInView}
            transition={{ duration: 0.5 || 0.2, delay: 0.5 || 0.1 }}
            viewport={{ once: true }}

          >
            <Typography
              sx={{
                fontSize: { md: "28px", sm: "28px", xs: "20px" },
                fontWeight: 600,
                color: "#333333",
                textAlign: "center",
              
              }}
            >
              Supercharge your video-shopping experience <br /> using deep
              integrations with our Shopify partners.
            </Typography>
          </motion.div>
          <Typography
            sx={{
              fontSize: "14px",
              fontWeight: 600,
              color: "#FFA500",
              textAlign: "center",
            }}
          >
            Explore Integration
          </Typography>
        </Box>
        <Grid container spacing={3} p={2}>
          {exploredata.length > 0 &&
            exploredata.map((e: any, i: number) => (
              <Grid item md={3}>
                <Card
                  key={i}
                  variant="outlined"
                  sx={{
                    display: "flex",
                    flexDirection: "row",
                    justifyContent: "flex-start",
                    alignItems: "center",
                    gap: "20px",
                    padding: "20px",
                    borderRadius: "10px",
                  }}
                >
                  <img src={e?.image} alt="" style={{ width: "50px" }} />

                  <Typography
                    sx={{ fontSize: "20px", fontWeight: 400, color: "#333333" }}
                  >
                    {e?.text}
                  </Typography>
                </Card>
              </Grid>
            ))}
        </Grid>
      </Box>
    </>
  );
};

export default ExploreVideo;
