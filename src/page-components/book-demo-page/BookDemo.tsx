import React, { useEffect } from "react";
import {
  Box,
  Button,
  Card,
  Grid,
  Typography,
  useMediaQuery,
  TextField,
} from "@mui/material";
import { useTheme } from "@mui/material/styles";
// import { Fade } from "react-awesome-reveal";

const BookDemo = () => {
  const theme = useTheme();
  const tabView = useMediaQuery(theme.breakpoints.up("sm"));
  const mobileView = useMediaQuery(theme.breakpoints.up("xs"));
  const LapTopView = useMediaQuery(theme.breakpoints.up("md"));

  const [scrollY, setScrollY] = React.useState(0);
  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <Grid
        container
        sx={{
          // padding: { md: "24px 68px", sm: "10px 45px", xs: "10px" },
          padding: {
            md: "122px 77px 0px 77px",
            sm: "100px 50px 0px 50px",
            xs: "100px 16px 0px 16px",
          },
          // marginTop: { md: "24px", sm: "0px", xs: "8px" },
        }}
      >
        <Grid
          item
          md={6}
          sm={12}
          sx={{ paddingTop: { md: "50px", sm: "20px" } }}
        >
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              gap: "25px",
              //   padding: "50px 80px",
            }}
          >
            
              <Typography
                sx={{
                  fontSize: { md: "24px", xs: "20px" },
                  fontWeight: "500",
                  lineHeight: { md: "38px", xs: "32px" },
                  color: "#1E1E1E",
                  transform: `translateY(-${scrollY / 200}px)`, 
                  transition: 'transform 0.2s ease',
                }}
              >
                Why Did This 6 Year Old Shopify Brand Migrate From Videowise to
                VideoIt.
              </Typography>
              <Typography
                sx={{
                  fontSize: "12px",
                  fontWeight: "400",
                  lineHeight: "19px",
                  color: "#1E1E1E",
                  transform: `translateY(-${scrollY / 200}px)`, 
                  transition: 'transform 0.2s ease',
                }}
              >
                Soul Shop is a grocery brand on a mission to make the world a
                sustainable place by providing affordable and organic fruits &
                veggies.
              </Typography>
            
            <Box>
              
                <Button
                  style={{
                    fontSize: "14px",
                    fontWeight: "600",
                    borderRadius: "8px",
                    color: "#FFA500",
                    textTransform: "uppercase",
                    lineHeight: "13px",
                    //   padding: "12px 25px",
                  }}
                >
                  Read case study
                </Button>
              
            </Box>

            
              <Box sx={{ width: "100%" }}>
                {LapTopView || tabView ? (
                  <img
                    src="/images/image_37.svg"
                    alt=""
                    style={{ height: "390px" }}
                  />
                ) : (
                  <img
                    src="/images/image_37.svg"
                    alt=""
                    style={{ width: "100%" }}
                  />
                )}
              </Box>
            
          </Box>
        </Grid>
        <Grid item md={6} sm={12}>
          <Box
            sx={{
              backgroundColor: "#F3F6FC",
              padding: { md: "30px", xs: "12px" },
              borderRadius: { md: "32px", xs: "20px" },
            }}
          >
            
              <Card
                sx={{
                  display: "flex",
                  justifyContent: "center",
                  flexDirection: "column",
                  alignItems: "center",
                  padding: LapTopView || tabView ? "25px 30px" : "12px",
                  borderRadius: "15px",
                }}
              >
                
                <Typography
                  sx={{
                    fontSize: { md: "40px", xs: "25px" },
                    fontWeight: "700",
                    lineHeight: "40px",
                    color: "#C2C9D6",
                    transform: `translateY(-${scrollY / 200}px)`, 
                  transition: 'transform 0.2s ease',
                  }}
                >
                  Book a demo now.
                </Typography>
                
                
                <Typography
                  sx={{
                    fontSize: { md: "12px", xs: "10px" },
                    fontWeight: "400",
                    lineHeight: "18px",
                    color: "#666666",
                    textAlign: { xs: "center" },
                    paddingTop: "10px",
                    transform: `translateY(-${scrollY / 200}px)`, 
                    transition: 'transform 0.2s ease',
                  }}
                >
                  Schedule a product demo with expert. Get 14-day free trial of
                  our Enterprise plan.
                </Typography>
                
                <Box sx={{ paddingTop: "20px", width: "100%" }}>
                
                  <Typography
                    sx={{
                      fontSize: "12px",
                      fontWeight: "600",
                      lineHeight: "12px",
                      letterSpacing: "1px",
                      color: "#333333",
                    }}
                  >
                    Name*
                  </Typography>
                  <TextField
                    sx={{
                      marginTop: "8px",
                      border: "1px solid #CCCCCC",
                      borderRadius: "5px",
                    }}
                    fullWidth
                    variant="outlined"
                    size="small"
                    placeholder="Placeholder text"
                    InputProps={{
                      style: {
                        //   borderRadius: "6px",
                        fontSize: "14px",
                        fontWeight: "400",
                        color: "#A1A1A1",
                        letterSpacing: "1px",
                        lineHeight: "14px",
                        padding: "5px 5px",
                      },
                    }}
                  />
                  
                </Box>

                <Box sx={{ paddingTop: "20px", width: "100%" }}>
                
                  <Typography
                    sx={{
                      fontSize: "12px",
                      fontWeight: "600",
                      lineHeight: "12px",
                      letterSpacing: "1px",
                      color: "#333333",
                    }}
                  >
                    Email ID*
                  </Typography>
                  <TextField
                    sx={{
                      marginTop: "8px",
                      border: "1px solid #CCCCCC",
                      borderRadius: "5px",
                    }}
                    fullWidth
                    variant="outlined"
                    size="small"
                    placeholder="Placeholder text"
                    InputProps={{
                      style: {
                        //   borderRadius: "6px",
                        fontSize: "14px",
                        fontWeight: "400",
                        color: "#A1A1A1",
                        letterSpacing: "1px",
                        lineHeight: "14px",
                        padding: "5px 5px",
                      },
                    }}
                  />
                  
                </Box>

                <Box sx={{ paddingTop: "20px", width: "100%" }}>
                
                  <Typography
                    sx={{
                      fontSize: "12px",
                      fontWeight: "600",
                      lineHeight: "12px",
                      letterSpacing: "1px",
                      color: "#333333",
                    }}
                  >
                    Store URL*
                  </Typography>
                  <TextField
                    sx={{
                      marginTop: "8px",
                      border: "1px solid #CCCCCC",
                      borderRadius: "5px",
                    }}
                    fullWidth
                    variant="outlined"
                    size="small"
                    placeholder="Placeholder text"
                    InputProps={{
                      style: {
                        //   borderRadius: "6px",
                        fontSize: "14px",
                        fontWeight: "400",
                        color: "#A1A1A1",
                        letterSpacing: "1px",
                        lineHeight: "14px",
                        padding: "5px 5px",
                      },
                    }}
                  />
                  
                </Box>

                <Box sx={{ paddingTop: "20px", width: "100%" }}>
                
                  <Typography
                    sx={{
                      fontSize: "12px",
                      fontWeight: "600",
                      lineHeight: "12px",
                      letterSpacing: "1px",
                      color: "#333333",
                    }}
                  >
                    Phone*
                  </Typography>
                  <TextField
                    sx={{
                      marginTop: "8px",
                      border: "1px solid #CCCCCC",
                      borderRadius: "5px",
                    }}
                    fullWidth
                    variant="outlined"
                    size="small"
                    placeholder="Placeholder text"
                    InputProps={{
                      style: {
                        //   borderRadius: "6px",
                        fontSize: "14px",
                        fontWeight: "400",
                        color: "#A1A1A1",
                        letterSpacing: "1px",
                        lineHeight: "14px",
                        padding: "5px 5px",
                      },
                    }}
                  />
                  
                </Box>

                <Box sx={{ paddingTop: "20px", width: "100%" }}>
                
                  <Typography
                    sx={{
                      fontSize: "12px",
                      fontWeight: "600",
                      lineHeight: "12px",
                      letterSpacing: "1px",
                      color: "#333333",
                    }}
                  >
                    Message
                  </Typography>
                  <TextField
                    sx={{
                      marginTop: "8px",
                      border: "1px solid #CCCCCC",
                      borderRadius: "5px",
                    }}
                    fullWidth
                    variant="outlined"
                    size="small"
                    multiline
                    rows={5}
                    placeholder="Placeholder text"
                    InputProps={{
                      style: {
                        //   borderRadius: "6px",
                        fontSize: "14px",
                        fontWeight: "400",
                        color: "#A1A1A1",
                        letterSpacing: "1px",
                        lineHeight: "14px",
                      },
                    }}
                  />
                  
                </Box>

                <Box sx={{ paddingTop: "20px" }}>
                  
                    <Button
                      style={{
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
                      book a demo
                    </Button>
                  
                </Box>
              </Card>
            
          </Box>
        </Grid>
      </Grid>
    </>
  );
};

export default BookDemo;
