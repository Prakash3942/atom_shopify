import React from "react";
import { Grid, Typography, useMediaQuery } from "@mui/material";
import { useTheme } from "@mui/material/styles";
// import { Fade } from "react-awesome-reveal";
import { motion } from "framer-motion";

export interface VidepCardHeadCardProps {
  cardtitle: string;
}
const VideoCardHead: React.FC<VidepCardHeadCardProps> = ({ cardtitle }) => {
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
        sx={{
          padding: {
            md: "40px 75px 0px 75px",
            sm: "20px 40px 0px 40px",
            xs: "16px",
          },
        }}
      >
        <Grid
          item
          md={12}
          sm={12}
          xs={12}
          sx={{
            backgroundImage: "url(/images/Frame_13995.svg)",
            backgroundPosition: "center",
            backgroundSize: "cover",
            height: "100%",
            borderRadius: "24px",
            padding: { md: "20px 180px", sm: "10px 15px", xs: "16px" },
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
                fontSize: { md: "40px", sm: "32px", xs: "20px" },
                fontWeight: "600",
                lineHeight: { md: "64px", sm: "52px", xs: "35px" },
                color: "#364563",
                textAlign: "center",
                textTransform: "uppercase",
              }}
            >
              {cardtitle}
            </Typography>
          </motion.div>
        </Grid>
      </Grid>
    </>
  );
};

export default VideoCardHead;
