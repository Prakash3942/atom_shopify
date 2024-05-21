import React, { useEffect, useState } from "react";
import { Grid, Typography, useMediaQuery, Box, Button } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import { Fade } from "react-awesome-reveal";


export interface VideoCardProps {
  Card: any;
  cardDirection: any;
}
const VideoCard: React.FC<VideoCardProps> = ({ Card, cardDirection }) => {
  const [toggleCard, setToggleCard] = useState(0);
  const theme = useTheme();
  const tabView = useMediaQuery(theme.breakpoints.up("sm"));
  const mobileView = useMediaQuery(theme.breakpoints.up("xs"));
  const LapTopView = useMediaQuery(theme.breakpoints.up("md"));

  const handleToggle = (val: number) => {
    setToggleCard(val);
  };

  // const handleScroll = (e: any) => {
  //   console.log('insd');

  //   // Detect scroll direction
  //   const currentScroll = e.target.scrollTop;
  //   if (currentScroll > toggleCard) {
  //     setToggleCard(toggleCard + 1); // Scroll down
  //   } else if (currentScroll < toggleCard) {
  //     setToggleCard(toggleCard - 1); // Scroll up
  //   }
  // };
  const [opacity, setOpacity] = useState(1);
  useEffect(() => {
    // console.log("toggleCard", toggleCard);
    setTimeout(() => {
      setOpacity(0.6);
    }, 2000);

    setTimeout(() => {
      if (toggleCard === 2) {
        setToggleCard(0);
      } else {
        setToggleCard(toggleCard + 1);
      }
      setOpacity(1);
    }, 3000);
  }, [toggleCard]);

  

  return (
    <Box>
      <Grid
        container
        sx={{
          padding: {
            md: "40px 95px 0px 95px",
            sm: "20px 40px 0px 40px",
            xs: "16px",
          },
        }}
      >
        <Grid item md={12} sm={12} xs={12}>
          
            <Typography
              sx={{
                fontSize: { md: "32px", sm: "32px", xs: "20px" },
                fontWeight: "600",
                lineHeight: { md: "50px", sm: "50px", xs: "32px" },
                color: "#1E1E1E",
              }}
            >
              {Card[toggleCard].topheading}
            </Typography>
         
        </Grid>

        <Grid
          item
          md={12}
          sm={12}
          xs={12}
          sx={{
            display: "flex",
            flexDirection: {
              md: cardDirection,
              sm: cardDirection,
              xs: "column-reverse",
            },

            alignItems: "center",
            gap: { md: "70px", sm: "20px", xs: "20px" },
            paddingTop: { md: "20px", sm: "18px", xs: "16px" },
          }}
        >
          <Fade>
            <Box
              sx={{
                display: "flex",
                flexDirection: { md: "column", sm: "column", xs: "row" },
                gap: "5px",
              }}
            >
              <Box
                onClick={() => {
                  handleToggle(0);
                }}
                sx={{
                  width: {
                    md: toggleCard === 0 ? "3px" : "3px",
                    sm: toggleCard === 0 ? "3px" : "3px",
                    xs: toggleCard === 0 ? "40px" : "20px",
                  },
                  height: {
                    md: toggleCard === 0 ? "55px" : "20px",
                    sm: toggleCard === 0 ? "55px" : "20px",
                    xs: toggleCard === 0 ? "3px" : "3px",
                  },
                  backgroundColor: {
                    md: toggleCard === 0 ? "#666666" : "#CCCCCC",
                    sm: toggleCard === 0 ? "#666666" : "#CCCCCC",
                    xs: toggleCard === 0 ? "#666666" : "#CCCCCC",
                  },
                  borderRadius: "24px",
                  cursor: "pointer",
                  transition: "all 1s ease",
                }}
              ></Box>
              <Box
                onClick={() => {
                  handleToggle(1);
                }}
                sx={{
                  width: {
                    md: toggleCard === 1 ? "3px" : "3px",
                    sm: toggleCard === 1 ? "3px" : "3px",
                    xs: toggleCard === 1 ? "40px" : "20px",
                  },
                  height: {
                    md: toggleCard === 1 ? "55px" : "20px",
                    sm: toggleCard === 1 ? "55px" : "20px",
                    xs: toggleCard === 1 ? "3px" : "3px",
                  },
                  backgroundColor: {
                    md: toggleCard === 1 ? "#666666" : "#CCCCCC",
                    sm: toggleCard === 1 ? "#666666" : "#CCCCCC",
                    xs: toggleCard === 1 ? "#666666" : "#CCCCCC",
                  },
                  borderRadius: "24px",
                  cursor: "pointer",
                  transition: "all 1s ease",
                }}
              ></Box>
              <Box
                onClick={() => {
                  handleToggle(2);
                }}
                sx={{
                  width: {
                    md: toggleCard === 2 ? "3px" : "3px",
                    sm: toggleCard === 2 ? "3px" : "3px",
                    xs: toggleCard === 2 ? "40px" : "20px",
                  },
                  height: {
                    md: toggleCard === 2 ? "55px" : "20px",
                    sm: toggleCard === 2 ? "55px" : "20px",
                    xs: toggleCard === 2 ? "3px" : "3px",
                  },
                  backgroundColor: {
                    md: toggleCard === 2 ? "#666666" : "#CCCCCC",
                    sm: toggleCard === 2 ? "#666666" : "#CCCCCC",
                    xs: toggleCard === 2 ? "#666666" : "#CCCCCC",
                  },
                  borderRadius: "24px",
                  cursor: "pointer",
                  transition: "all 1s ease",
                }}
              ></Box>
            </Box>
          </Fade>

          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              gap: { md: "30px", sm: "30px", xs: "16px" },
            }}
          >
            <Typography
              sx={{
                fontSize: { md: "24px", sm: "24px", xs: "16px" },
                fontWeight: "600",
                lineHeight: { md: "24px", sm: "24px", xs: "16px" },
                color: "#333333",
              }}
            >
              {Card[toggleCard].title}
            </Typography>
            <Typography
              sx={{
                fontSize: { md: "16px", sm: "16px", xs: "12px" },
                fontWeight: "400",
                lineHeight: { md: "25px", sm: "25px", xs: "19px" },
                color: "#333333",
              }}
            >
              {Card[toggleCard].description}
            </Typography>

            <Typography
              style={{
                fontSize: "14px",
                fontWeight: "600",
                borderRadius: "8px",
                color: "#FFA500",
                textTransform: "uppercase",
                lineHeight: "13px",
                cursor: "pointer",
              }}
            >
              {Card[toggleCard].buttonitem}
            </Typography>
          </Box>
          <Box>
            <img
              src={Card[toggleCard].image}
              alt=""
              style={{ height: LapTopView || tabView ? "" : "200px" }}
            />
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
};

export default VideoCard;
