import React from "react";
import { Box, Button, Grid, Typography } from "@mui/material";
import Slider from "react-slick";

const Testimonial = () => {
  var settings = {
    dots: true,
    infinite: true,
    // lazyLoad: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 4,
    centerMode: true,
    // initialSlide: 2,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 2,
          infinite: false,
          dots: true,
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
          initialSlide: 1,
        },
      },
    ],
  };
  return (
    <Box
      // mt={{ md: 3, sm: 2, xs: 0 }}
      sx={{ p: { lg: 5, md: 2, sm: 2, xs: 0 } }}
    >
      <Slider {...settings}>
        <Box sx={{ height: "100px", backgroundColor: "red", pl: 2 }}>hello</Box>
        <Box sx={{ height: "100px", backgroundColor: "red", pl: 2, ml: 2 }}>
          hello
        </Box>
        <Box sx={{ height: "100px", backgroundColor: "red", pl: 2 }}>hello</Box>
        <Box sx={{ height: "100px", backgroundColor: "red", pl: 2 }}>hello</Box>
        <Box sx={{ height: "100px", backgroundColor: "red", pl: 2 }}>hello</Box>
        <Box sx={{ height: "100px", backgroundColor: "red", pl: 2 }}>hello</Box>
      </Slider>
    </Box>
  );
};

export default Testimonial;
