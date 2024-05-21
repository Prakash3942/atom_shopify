import React from "react";
import { Box, Grid, Typography, useMediaQuery } from "@mui/material";
import Marquee from "react-fast-marquee";
import { useTheme } from "@mui/material/styles";

const ShopifyBrand = () => {
  const theme = useTheme();
  const tabView = useMediaQuery(theme.breakpoints.up("sm"));
  const mobileView = useMediaQuery(theme.breakpoints.up("xs"));
  const LapTopView = useMediaQuery(theme.breakpoints.up("md"));
  return (
    <>
      <Grid
        container
        sx={{ marginTop: { md: "125px", sm: "125px", xs: "35px" } }}
      >
        <Grid item md={12} sm={12} xs={12}>
          <Typography
            sx={{
              fontSize: { md: "16px", sm: "16px", xs: "14px" },
              fontWeight: "700",
              color: "#CCCCCC",
              textAlign: "center",
            }}
          >
            Trusted by best-selling Shopify brands across USA
          </Typography>
        </Grid>
        <Grid
          item
          md={12}
          sm={12}
          xs={12}
          sx={{ marginTop: { md: "40px", sm: "40px", xs: "25px" } }}
        >
          <Marquee pauseOnHover>
            <Box
              sx={{
                padding: { md: "0px 50px", sm: "0px 50px", xs: "0px 10px" },
              }}
            >
              <img
                src="/images/Smartters_LogoWhite_Horizontal.svg"
                alt=""
                style={{ width: LapTopView || tabView ? "" : "170px" }}
              />
            </Box>
            <Box
              sx={{
                padding: { md: "0px 50px", sm: "0px 50px", xs: "0px 10px" },
              }}
            >
              <img
                src="/images/Smartters_LogoWhite_Horizontal (1).svg"
                alt=""
                style={{ width: LapTopView || tabView ? "" : "170px" }}
              />
            </Box>
            <Box
              sx={{
                padding: { md: "0px 50px", sm: "0px 50px", xs: "0px 10px" },
              }}
            >
              <img
                src="/images/Smartters_LogoWhite_Horizontal (2).svg"
                alt=""
                style={{ width: LapTopView || tabView ? "" : "170px" }}
              />
            </Box>
            <Box
              sx={{
                padding: { md: "0px 50px", sm: "0px 50px", xs: "0px 10px" },
              }}
            >
              <img
                src="/images/Smartters_LogoWhite_Horizontal.svg"
                alt=""
                style={{ width: LapTopView || tabView ? "" : "170px" }}
              />
            </Box>
            <Box
              sx={{
                padding: { md: "0px 50px", sm: "0px 50px", xs: "0px 10px" },
              }}
            >
              <img
                src="/images/Smartters_LogoWhite_Horizontal (1).svg"
                alt=""
                style={{ width: LapTopView || tabView ? "" : "170px" }}
              />
            </Box>
            <Box
              sx={{
                padding: { md: "0px 50px", sm: "0px 50px", xs: "0px 10px" },
              }}
            >
              <img
                src="/images/Smartters_LogoWhite_Horizontal (2).svg"
                alt=""
                style={{ width: LapTopView || tabView ? "" : "170px" }}
              />
            </Box>
          </Marquee>
        </Grid>
      </Grid>
    </>
  );
};

export default ShopifyBrand;
