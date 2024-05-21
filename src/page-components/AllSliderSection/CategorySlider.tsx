import React, { useEffect, useState } from "react";

// @ts-ignore
import Slider from "react-slick";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import { Card, Box, Typography, useMediaQuery, Button } from "@mui/material";
// import { BannerService } from "../../../../apis/rest.app";
import { useTheme } from "@mui/material/styles";
import { useRouter } from "next/router";
import { motion } from "framer-motion";

interface SliderSectionProps {}

export const CategorySlider: React.FC<SliderSectionProps> = () => {
  const router = useRouter();
  const [imageIndex, setImageIndex] = useState(1);

  const [data, setData] = useState<any[]>([]);
  const theme = useTheme();
  const tabView = useMediaQuery(theme.breakpoints.up("sm"));
  const mobileView = useMediaQuery(theme.breakpoints.up("xs"));
  const LapTopView = useMediaQuery(theme.breakpoints.up("md"));
  // const { enqueueSnackbar } = useSnackbar();

  // @ts-ignore
  const NextArrow = ({ onClick }) => {
    return (
      <Box
        sx={{
          backgroundColor: "#fff",
          position: "absolute",
          cursor: "pointer",
          zIndex: "10",
          right: "4%",
          top: "50%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          borderRadius: 2,
          p: 0.5,
        }}
        onClick={onClick}
      >
        <ArrowForwardIcon />
      </Box>
    );
  };

  // @ts-ignore
  const PrevArrow = ({ onClick }) => {
    return (
      <Box
        sx={{
          backgroundColor: "#fff",
          position: "absolute",
          cursor: "pointer",
          zIndex: "10",
          left: "4%",
          top: "50%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          borderRadius: 2,
          p: 0.5,
        }}
        onClick={onClick}
      >
        <ArrowBackIcon />
      </Box>
    );
  };

  const settings: any = {
    // dots: true,
    infinite: true,
    lazyLoad: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 4,
    centerMode: true,
    centerPadding: "0px",
    initialSlide: 1,
    // nextArrow: <NextArrow onClick={undefined} />,
    // prevArrow: <PrevArrow onClick={undefined} />,
    beforeChange: (current: any, next: any) => setImageIndex(next),
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          infinite: false,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  // useEffect(() => {
  //     BannerService.find()
  //         .then((res) => {
  //             // @ts-ignore
  //             return setData([...res]);
  //         }).catch((error) => {
  //             enqueueSnackbar(error ? error : "Copied to clipboard", {
  //                 variant: "error",
  //             });
  //         });
  // }, []);

  // @ts-ignore
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
    <Box
      position={"relative"}
      display={"flex"}
      flexDirection={"column"}
      mt={{ md: 13, sm: 13, xs: 6 }}
      mb={{ md: 8, sm: 5, xs: 6 }}
      p={"25px"}
      bgcolor={"#F6F7F9"}
    >
      <motion.div
        initial={properties["slideInUp"].initial}
        whileInView={properties["slideInUp"].whileInView}
        transition={{ duration: 1.1 || 0.2, delay: 1.1 || 0.1 }}
        viewport={{ once: true }}
      >
        <Typography
          sx={{
            fontSize: { md: "40px", sm: "40px", xs: "25px" },
            fontWeight: 600,
            lineHeight: { md: "55px", sm: "55px", xs: "34px" },
            color: "#1E1E1E",
            textAlign: "center",
            paddingTop: { md: "40px", sm: "40px", xs: "0px" },
          }}
        >
          50+ Shopify brands are powering <br /> Shoppable Reels using VideoIt
        </Typography>
      </motion.div>

      <Box sx={{ paddingTop: "40px" }}>
        <Slider {...settings}>
          {[1, 2, 3, 4, 5].map((img, idx) => (
            <Card
              sx={{
                backgroundColor: "#FFFFFF",
                overflow: "none",
                borderRadius: 2,
                display: "flex",
                flexDirection: "column",

                padding: "20px",
                ...(idx === imageIndex
                  ? {
                      transform: "scale(1)",
                      transition: "transform 300ms",
                    }
                  : {
                      transform: "scale(0.8)",
                      transition: "transform 300ms",
                    }),
              }}
            >
              <Box sx={{ display: "flex", flexDirection: "row", gap: "20px" }}>
                <img src="/images/Frame 1573.svg" alt="" />
                <Box
                  sx={{ display: "flex", flexDirection: "column", gap: "2px" }}
                >
                  <Typography
                    sx={{ fontSize: "14px", fontWeight: 600, color: "#333333" }}
                  >
                    Sailok Behera
                  </Typography>
                  <Typography
                    sx={{ fontSize: "10px", fontWeight: 400, color: "#333333" }}
                  >
                    Istanbul
                  </Typography>
                </Box>
              </Box>
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "row",
                  gap: "10px",
                  paddingTop: "15px",
                }}
              >
                <img src="/icons/Vector (23).svg" alt="" />
                <img src="/icons/Vector (23).svg" alt="" />
                <img src="/icons/Vector (23).svg" alt="" />
                <img src="/icons/Vector (23).svg" alt="" />
                <img src="/icons/Vector (23).svg" alt="" />
              </Box>
              <Typography
                sx={{
                  fontSize: "12px",
                  fontWeight: 400,
                  color: "#333333",
                  lineHeight: "18px",
                  paddingTop: "15px",
                }}
              >
                “Lorem ipsum dolor sit amet, consectetur adipiscin elit. Egestas
                sodales adipiscing quis morbicur sus. Lorem ipsum dolor sit
                amet, consectetur adipiscin elit. Egestas sodales adipiscing
                quis morbicu rsus. Lorem ipsum dolor sit amet, consectetur
                adipiscin elit. Egestas sodales adipiscing quis morbi cursus.”
              </Typography>
              <Typography
                sx={{
                  fontSize: "10px",
                  fontWeight: 700,
                  color: "#999999",
                  paddingTop: "15px",
                }}
              >
                12th Jan, 2023
              </Typography>
            </Card>
          ))}
        </Slider>
      </Box>
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flexDirection: "row",
          gap: "10px",
          paddingTop: "20px",
        }}
      >
        {[1, 2, 3, 4, 5].map((img, idx) => (
          <Box
            // onClick={() => {
            //   console.log(idx);
            //   setImageIndex(idx);
            // }}
            sx={{
              width: idx === imageIndex ? 40 * 2 + "px" : "40px",
              height: "4px",
              backgroundColor: idx === imageIndex ? "#666666" : "#CCCCCC",
              borderRadius: "5px",
            }}
          ></Box>
        ))}
      </Box>
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flexDirection: { md: "row", sm: "row", xs: "column" },
          gap: "10px",
          paddingBottom: "30px",
          paddingTop: {
            md: "40px",
            sm: "40px",
            xs: "30px",
          },
        }}
      >
        <Button
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
          Watch Shoppable Reels
        </Button>
        <Button
          onClick={() => router.push("/bookdemo")}
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
        >
          Book Demo
        </Button>
      </Box>
    </Box>
  );
};
