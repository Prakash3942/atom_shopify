import React, { useEffect, useState } from "react";
import Box from "@mui/material/Box";
// @ts-ignore
import Slider from "react-slick";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import { Card, Typography, useMediaQuery } from "@mui/material";
import { useTheme } from "@mui/material/styles";
// import { BannerService } from "../../../../apis/rest.app";

import { makeStyles } from "@mui/styles";
// const useStyles = makeStyles((theme: any) => ({
//   customDot: {
//     margin: "0 10px", // Adjust the gap between dots
//     cursor: "pointer",
//     width: "80px", // Set the dot width
//     height: "10px", // Set the dot height
//     // borderRadius: "50%",
//     backgroundColor: "#bbb",
//     display: "flex",
//     justifyContent: "center",
//     alignItems: "center",
//   },
//   slickDots: {
//     listStyle: "none",
//     display: "flex",
//     justifyContent: "center",
//     alignItems: "center",
//     padding: 0,
//     margin: "20px 0", // Adjust the margin to accommodate dots and space
//   },
//   slickDot: {
//     margin: "60px 80px",
//     width: "10px",
//     height: "10px",
//     // borderRadius: "50%",
//   },
//   slickDotActive: {
//     backgroundColor: "#333",
//   },
// }));
interface SliderSectionProps {}

export const SliderSection: React.FC<SliderSectionProps> = () => {
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
    infinite: true,
    lazyLoad: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 4,
    centerMode: true,
    centerPadding: "0px",
    initialSlide: 1,
    // dots: true,

    // dotClass: `slick-dots ${classes.dot}`,
    // appendDots: (dots: any) => (
    //   <Box
    //     style={{
    //       display: "flex",
    //       justifyContent: "center",
    //       alignItems: "center",
    //       flexDirection: "row",
    //       gap: "10px",
    //       paddingTop: "20px",
    //     }}
    //   >
    //     <Box
    //     // style={{
    //     //   display: "flex",
    //     //   justifyContent: "center",
    //     //   alignItems: "center",
    //     //   flexDirection: "row",
    //     //   gap: "10px",
    //     //   paddingTop: "20px",
    //     // }}
    //     >
    //       {" "}
    //       {dots}{" "}
    //     </Box>
    //   </Box>
    // ),
    // customPaging: (i: number) => {
    //   const dotStyles = {
    //     backgroundColor: i == imageIndex ? "#bbb" : "#ddd",
    //     width: i == imageIndex ? "80px" : "40px",
    //     height: "10px",
    //     // borderRadius: "50%",
    //   };

    //   return <div className="custom-dot" style={dotStyles}></div>;
    // },

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
  return (
    <Box
      position={"relative"}
      display={"flex"}
      flexDirection={"column"}
      mt={{ md: 12, sm: 12, xs: 2 }}
      mb={{ md: 8, sm: 5, xs: 0 }}
      p={"25px"}
    >
      <Box>
        <Slider {...settings}>
          {[1, 2, 3, 4, 5].map((img, idx) => (
            <>
              <Card
                sx={{
                  backgroundColor: "#F5F5F5",
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
                <Box
                  sx={{ display: "flex", flexDirection: "row", gap: "20px" }}
                >
                  <img src="/images/Frame 1573.svg" alt="" />
                  <Box
                    sx={{
                      display: "flex",
                      flexDirection: "column",
                      gap: "2px",
                    }}
                  >
                    <Typography
                      sx={{
                        fontSize: "14px",
                        fontWeight: 600,
                        color: "#333333",
                      }}
                    >
                      Sailok Behera
                    </Typography>
                    <Typography
                      sx={{
                        fontSize: "10px",
                        fontWeight: 400,
                        color: "#333333",
                      }}
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
                    paddingTop: { md: "15px", sm: "15px", xs: "0px" },
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
                  “Lorem ipsum dolor sit amet, consectetur adipiscin elit.
                  Egestas sodales adipiscing quis morbicur sus. Lorem ipsum
                  dolor sit amet, consectetur adipiscin elit. Egestas sodales
                  adipiscing quis morbicu rsus. Lorem ipsum dolor sit amet,
                  consectetur adipiscin elit. Egestas sodales adipiscing quis
                  morbi cursus.”
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
            </>
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
      {/* <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flexDirection: "row",
          gap: "10px",
          paddingTop: "20px",
        }}
      >
        <Box
          sx={{
            width: "40px",
            height: "3px",
            backgroundColor: "#CCCCCC",
            borderRadius: "5px",
          }}
        ></Box>
        <Box
          sx={{
            width: "40px",
            height: "3px",
            backgroundColor: "#CCCCCC",
            borderRadius: "5px",
          }}
        ></Box>
        <Box
          sx={{
            width: "80px",
            height: "3px",
            backgroundColor: "#666666",
            borderRadius: "5px",
          }}
        ></Box>
        <Box
          sx={{
            width: "40px",
            height: "3px",
            backgroundColor: "#CCCCCC",
            borderRadius: "5px",
          }}
        ></Box>
        <Box
          sx={{
            width: "40px",
            height: "3px",
            backgroundColor: "#CCCCCC",
            borderRadius: "5px",
          }}
        ></Box>
      </Box> */}

      {/* find shopify app store button  */}
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          paddingTop: "30px",
        }}
      >
        <Box
          onClick={() =>
            window.open(
              "https://apps.shopify.com/videoit-video-shopping",
              "_blank",
              "noopener, noreferrer"
            )
          }
          sx={{
            backgroundColor: "#67B21A",
            borderRadius: "6px",
            display: "flex",
            flexDirection: "row",
            gap: "8px",
            padding: "8px",
            alignItems: "center",
            cursor: "pointer",
          }}
        >
          <img
            src="/icons/logos_shopify.svg"
            alt=""
            style={{ height: "20px" }}
          />

          <Typography
            sx={{
              fontSize: "14px",
              fontWeight: 500,
              color: "#FFFFFF",
            }}
          >
            Find Shopify App Store
          </Typography>
        </Box>
      </Box>
    </Box>
  );
};
