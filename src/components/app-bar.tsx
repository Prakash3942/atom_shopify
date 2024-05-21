import CancelIcon from "@mui/icons-material/Cancel";
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Box,
  Button,
  Divider,
  Drawer,
  MenuItem,
  Typography,
  useMediaQuery,
} from "@mui/material";
import Menu, { MenuProps } from "@mui/material/Menu";
import { alpha, styled, useTheme } from "@mui/material/styles";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
// import { Fade } from "react-awesome-reveal";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

const StyledMenu = styled((props: MenuProps) => (
  <Menu
    elevation={0}
    anchorOrigin={{
      vertical: "top",
      horizontal: "left",
    }}
    transformOrigin={{
      vertical: "top",
      horizontal: "left",
    }}
    {...props}
  />
))(({ theme }) => ({
  "& .MuiPaper-root": {
    borderRadius: 6,
    marginTop: theme.spacing(1),
    minWidth: 180,
    width: "230px",
    color:
      theme.palette.mode === "light"
        ? "rgb(55, 65, 81)"
        : theme.palette.grey[300],

    boxShadow:
      "rgb(255, 255, 255) 0px 0px 0px 0px, rgba(0, 0, 0, 0.05) 0px 0px 0px 1px, rgba(0, 0, 0, 0.1) 0px 10px 15px -3px, rgba(0, 0, 0, 0.05) 0px 4px 6px -2px",
    "& .MuiMenu-list": {
      padding: "4px 0",
    },
    "& .MuiMenuItem-root": {
      "& .MuiSvgIcon-root": {
        fontSize: 18,
        color: theme.palette.text.secondary,
        marginRight: theme.spacing(1.5),
      },
      "&:active": {
        backgroundColor: alpha(
          theme.palette.primary.main,
          theme.palette.action.selectedOpacity
        ),
      },
    },
  },
}));

const AppBar = () => {
  const router = useRouter();

  const [openDrawer, setOpenDrawer] = useState(false);
  // const [isScrolling, setIsScrolling] = useState(false);

  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const [anchorEl1, setAnchorEl1] = useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const open1 = Boolean(anchorEl1);
  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClick1 = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl1(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
    setAnchorEl1(null);
  };

  const pageLists = [
    {
      image: "/icons/fluent_app-recent-24-regular.svg",
      activeIcon: "/icons/storyicon.png",
      icon: "/icons/Vector (7).svg",
      page: "Shop Stories",
      href: "/story",
    },
    {
      image: "/icons/fluent_phone-multiple-24-regular.svg",
      activeIcon: "/icons/fluent_phone-multiple-24-filled (1).png",
      icon: "/icons/Vector (7).svg",
      page: "Product View360",
      href: "/product",
    },
    {
      image: "/icons/fluent_filmstrip-play-24-regular.svg",
      activeIcon: "/icons/fluent_filmstrip-play-24-filled (1).png",
      icon: "/icons/Vector (7).svg",
      page: "Shoppable Banners",
      href: "/banner",
    },
    {
      image: "/icons/fluent_glance-horizontal-24-regular.svg",
      activeIcon: "/icons/fluent_glance-horizontal-24-filled (1).png",
      icon: "/icons/Vector (7).svg",
      page: "Reel Shopping",
      href: "/category",
    },
    {
      image: "/icons/fluent_view-desktop-mobile-24-regular.svg",
      activeIcon: "/icons/fluent_view-desktop-mobile-24-filled (1).png",
      icon: "/icons/Vector (7).svg",
      page: "Multi-Video Shopping",
      href: "/section",
    },
    {
      image: "/icons/fluent_settings-24-regular.svg",
      activeIcon: "/icons/fluent_settings-24-filled.png",
      icon: "/icons/Vector (7).svg",
      page: "Management",
      href: "/management",
    },
  ];

  const learnMenuList = [
    {
      name: "Blog",
      icon: "/icons/Vector (7).svg",
    },
    {
      name: "Case Studies",
      icon: "/icons/Vector (7).svg",
    },
    {
      name: "Partners",
      icon: "/icons/Vector (7).svg",
    },
    {
      name: "Newsroom",
      icon: "/icons/Vector (7).svg",
    },
    {
      name: "Events",
      icon: "/icons/Vector (7).svg",
    },
    {
      name: "Community",
      icon: "/icons/Vector (7).svg",
    },
    {
      name: "Announcements",
      icon: "/icons/Vector (7).svg",
    },
  ];

  const theme = useTheme();
  const tabView = useMediaQuery(theme.breakpoints.up("sm"));
  const mobileView = useMediaQuery(theme.breakpoints.up("xs"));
  const LapTopView = useMediaQuery(theme.breakpoints.up("md"));

  return (
    <>
      <Box
        width={"100%"}
        p={LapTopView || tabView ? 3 : 2}
        position={"fixed"}
        zIndex={100}
      >
        {LapTopView ? (
          <Box
            width={"100%"}
            bgcolor={"#FFFFFF"}
            px={LapTopView || tabView ? 6 : 2}
            py={2}
            borderRadius={"16px"}
            boxShadow={"rgba(100, 100, 111, 0.2) 0px 7px 29px 0px"}
          >
            <Box
              display={"flex"}
              justifyContent={"space-between"}
              alignItems={"center"}
              width={"100%"}
            >
              <Box
                display={"flex"}
                width={"40%"}
                justifyContent={"space-between"}
                alignItems={"center"}
                sx={{ cursor: "pointer" }}
              >
                <Box
                  onClick={() => router.push("/")}
                  display={"flex"}
                  justifyContent={"center"}
                  alignItems={"center"}
                >
                  <img
                    src="/images/Layer_2.svg"
                    alt=""
                    style={{ height: "30px" }}
                  />
                  <Typography
                    sx={{
                      // paddingTop: "8px",
                      paddingLeft: "8px",
                      fontSize: "18px",
                      fontWeight: "600",
                      color: "#333333",
                    }}
                  >
                    VideoIt
                  </Typography>
                </Box>

                <Box>
                  <Button
                    sx={{
                      fontSize: "14px",
                      fontWeight: "500",
                      color: "#333333",
                      textTransform: "capitalize",
                    }}
                    endIcon={<img src="/icons/Vector (5).svg" />}
                    id="demo-positioned-button"
                    aria-controls={open ? "demo-positioned-menu" : undefined}
                    aria-haspopup="true"
                    aria-expanded={open ? "true" : undefined}
                    // onClick={handleClick}
                  >
                    Product
                  </Button>
                </Box>

                <Box>
                  <Button
                    sx={{
                      fontSize: "14px",
                      fontWeight: "500",
                      color: "#333333",
                      textTransform: "capitalize",
                    }}
                    endIcon={<img src="/icons/Vector (5).svg" />}
                    id="demo-positioned-button"
                    aria-controls={open ? "demo-positioned-menu" : undefined}
                    aria-haspopup="true"
                    aria-expanded={open ? "true" : undefined}
                    onClick={handleClick}
                  >
                    Solutions
                  </Button>

                  <StyledMenu
                    id="demo-customized-menu"
                    MenuListProps={{
                      "aria-labelledby": "demo-customized-button",
                    }}
                    anchorEl={anchorEl}
                    open={open}
                    onClose={handleClose}
                  >
                    {pageLists.map((e, i) => (
                      <>
                        <MenuItem
                          onClick={handleClose}
                          disableRipple
                          key={e.page}
                        >
                          <Box
                            display={"flex"}
                            justifyContent={"space-between"}
                            alignItems={"center"}
                            width={"100%"}
                            onClick={() => router.push(e.href)}
                          >
                            <Box
                              display={"flex"}
                              justifyContent={"center"}
                              alignItems={"center"}
                            >
                              {e?.href === router?.pathname ? (
                                <img
                                  src={e.activeIcon}
                                  style={{ height: "16px" }}
                                />
                              ) : (
                                <img
                                  src={e.image}
                                  alt=""
                                  style={{ height: "16px" }}
                                />
                              )}

                              <Typography
                                sx={{
                                  paddingLeft: "12px",
                                  fontSize: "12px",
                                  fontWeight:
                                    e?.href === router?.pathname
                                      ? "600"
                                      : "500",
                                  color: "#333333",
                                }}
                              >
                                {e.page}
                              </Typography>
                            </Box>
                            <Box>
                              <img
                                src={e.icon}
                                alt=""
                                style={{ height: "8px" }}
                              />
                            </Box>
                          </Box>
                        </MenuItem>
                        <Divider variant="middle" />
                      </>
                    ))}
                  </StyledMenu>
                </Box>

                <Box>
                  <Button
                    sx={{
                      fontSize: "14px",
                      fontWeight: "500",
                      color: "#333333",
                      textTransform: "capitalize",
                    }}
                    endIcon={<img src="/icons/Vector (5).svg" />}
                    id="demo-positioned-button"
                    aria-controls={open ? "demo-positioned-menu" : undefined}
                    aria-haspopup="true"
                    aria-expanded={open ? "true" : undefined}
                    onClick={handleClick1}
                  >
                    Learn
                  </Button>

                  <StyledMenu
                    id="demo-customized-menu"
                    MenuListProps={{
                      "aria-labelledby": "demo-customized-button",
                    }}
                    anchorEl={anchorEl1}
                    open={open1}
                    onClose={handleClose}
                  >
                    {learnMenuList.map((e, i) => (
                      <>
                        <MenuItem
                          onClick={handleClose}
                          disableRipple
                          key={e.name}
                        >
                          <Box
                            display={"flex"}
                            justifyContent={"space-between"}
                            alignItems={"center"}
                            width={"100%"}
                          >
                            <Box
                              display={"flex"}
                              justifyContent={"center"}
                              alignItems={"center"}
                            >
                              <Typography
                                sx={{
                                  fontSize: "12px",
                                  fontWeight: "500",
                                  color: "#333333",
                                }}
                              >
                                {e.name}
                              </Typography>
                            </Box>
                            <Box>
                              <img
                                src={e.icon}
                                alt=""
                                style={{ height: "8px" }}
                              />
                            </Box>
                          </Box>
                        </MenuItem>
                        <Divider variant="middle" />
                      </>
                    ))}
                  </StyledMenu>
                </Box>
              </Box>

              <Box
                display={"flex"}
                width={"38%"}
                justifyContent={"space-between"}
                alignItems={"center"}
              >
                <Typography
                  onClick={() => router.push("/price")}
                  sx={{
                    fontSize: "14px",
                    fontWeight: "500",
                    color: "#333333",
                    cursor: "pointer",
                  }}
                >
                  Pricing
                </Typography>
                <Typography
                onClick={() => router.push("/casestudy")}
                  sx={{
                    fontSize: "14px",
                    fontWeight: "500",
                    color: "#333333",
                    cursor: "pointer",
                  }}
                >
                  Case Studies
                </Typography>
                <Box>
                  <Button
                    onClick={() => router.push("/bookdemo")}
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
                    Get free demo
                  </Button>
                </Box>
              </Box>
            </Box>
          </Box>
        ) : tabView ? (
          <>
            <Box
              width={"100%"}
              bgcolor={"#FFFFFF"}
              py={2}
              px={3}
              borderRadius={"16px"}
              boxShadow={"rgba(100, 100, 111, 0.2) 0px 4px 25px 0px"}
            >
              <Box
                display={"flex"}
                justifyContent={"space-between"}
                alignItems={"center"}
                width={"100%"}
              >
                <Box
                  display={"flex"}
                  justifyContent={"center"}
                  alignItems={"center"}
                >
                  <img
                    src="/images/Layer_2.svg"
                    alt=""
                    style={{ height: "30px" }}
                  />
                  <Typography
                    sx={{
                      paddingTop: "8px",
                      paddingLeft: "12px",
                      fontSize: "16px",
                      fontWeight: "600",
                      color: "#333333",
                    }}
                  >
                    VideoIt
                  </Typography>
                </Box>
                <img src="/icons/Vector (15).svg" alt="" />
              </Box>
            </Box>
          </>
        ) : (
          <>
            <Box
              width={"100%"}
              bgcolor={"#FFFFFF"}
              px={LapTopView || tabView ? 6 : 2}
              py={2}
              borderRadius={"16px"}
              boxShadow={"rgba(100, 100, 111, 0.2) 0px 7px 29px 0px"}
            >
              <Box
                display={"flex"}
                justifyContent={"space-between"}
                alignItems={"center"}
                width={"100%"}
              >
                <Box
                  onClick={() => router.push("/")}
                  display={"flex"}
                  justifyContent={"center"}
                  alignItems={"center"}
                >
                  <img
                    src="/images/Layer_2.svg"
                    alt=""
                    style={{ height: "30px" }}
                  />
                  <Typography
                    sx={{
                      paddingTop: "8px",
                      paddingLeft: "12px",
                      fontSize: "16px",
                      fontWeight: "600",
                      color: "#333333",
                    }}
                  >
                    VideoIt
                  </Typography>
                </Box>
                <img
                  src="/icons/Vector (15).svg"
                  alt=""
                  onClick={() => setOpenDrawer(true)}
                  style={{ cursor: "pointer", height: "16px" }}
                />
              </Box>
            </Box>

            {/* Drawer  */}

            <Drawer
              variant="temporary"
              open={openDrawer}
              onClose={() => {
                setOpenDrawer(false);
              }}
              PaperProps={{
                sx: { width: "100%" },
              }}
            >
              <Box p={2}>
                <Box
                  sx={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",

                    padding: "10px 10px 16px 10px",
                  }}
                >
                  <Box
                    onClick={() => router.push("/")}
                    display={"flex"}
                    justifyContent={"center"}
                    alignItems={"center"}
                  >
                    <img
                      src="/images/Layer_2.svg"
                      alt=""
                      style={{ height: "30px" }}
                    />
                    <Typography
                      sx={{
                        paddingTop: "8px",
                        paddingLeft: "10px",
                        fontSize: "18px",
                        fontWeight: "600",
                        color: "#333333",
                      }}
                    >
                      VideoIt
                    </Typography>
                  </Box>
                  <CancelIcon
                    onClick={() => setOpenDrawer(false)}
                    sx={{
                      cursor: "pointer",
                      height: "25px",
                      position: "relative",
                      right: "8px",
                      top: "3px",
                    }}
                  />
                </Box>

                <Box display={"flex"} flexDirection={"column"}>
                  <Accordion
                    disableGutters
                    elevation={0}
                    sx={{
                      "&:before": {
                        display: "none",
                      },
                    }}
                  >
                    <AccordionSummary
                      expandIcon={<ExpandMoreIcon />}
                      aria-controls="panel1a-content"
                      id="panel1a-header"
                    >
                      <Typography
                        sx={{
                          fontSize: "14px",
                          fontWeight: "500",
                          color: "#333333",
                          textTransform: "capitalize",
                        }}
                      >
                        Product
                      </Typography>
                    </AccordionSummary>

                    {/* <AccordionDetails>
                    <Typography>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Suspendisse malesuada lacus ex, sit amet blandit leo
                      lobortis eget.
                    </Typography>
                  </AccordionDetails> */}
                  </Accordion>

                  <Accordion
                    disableGutters
                    elevation={0}
                    sx={{
                      "&:before": {
                        display: "none",
                      },
                    }}
                  >
                    <AccordionSummary
                      expandIcon={<ExpandMoreIcon />}
                      aria-controls="panel2a-content"
                      id="panel2a-header"
                    >
                      <Typography
                        sx={{
                          fontSize: "14px",
                          fontWeight: "500",
                          color: "#333333",
                          textTransform: "capitalize",
                        }}
                      >
                        Solutions
                      </Typography>
                    </AccordionSummary>

                    <AccordionDetails>
                      {pageLists?.map((e) => (
                        <>
                          <Box
                            display={"flex"}
                            borderRadius={2}
                            // bgcolor={
                            //   e?.href === router?.pathname ? "#a09d9dc5" : ""
                            // }
                            p={1.5}
                            alignItems={"center"}
                            justifyContent={"flex-start"}
                            onClick={async () => {
                              //onClick to show the right content part
                              await router.push(e?.href);
                              setOpenDrawer(false);
                            }}
                            sx={{ cursor: "pointer", paddingTop: "10px" }}
                          >
                            <Box
                              display={"flex"}
                              justifyContent={"space-between"}
                              alignItems={"center"}
                              width={"100%"}
                            >
                              <Box
                                display={"flex"}
                                justifyContent={"center"}
                                alignItems={"center"}
                              >
                                {e?.href === router?.pathname ? (
                                  <img
                                    src={e?.activeIcon}
                                    alt=""
                                    style={{ height: "18px" }}
                                  />
                                ) : (
                                  <img
                                    src={e?.image}
                                    alt=""
                                    style={{ height: "18px" }}
                                  />
                                )}

                                <Typography
                                  sx={{
                                    paddingLeft: "14px",
                                    fontSize: "13px",
                                    fontWeight:
                                      e?.href === router?.pathname
                                        ? "600"
                                        : "500",
                                    color: "#333333",
                                  }}
                                >
                                  {e?.page}
                                </Typography>
                              </Box>
                              <Box>
                                <img
                                  src="/icons/Vector (7).svg"
                                  alt=""
                                  style={{ height: "12px" }}
                                />
                              </Box>
                            </Box>
                          </Box>
                        </>
                      ))}
                    </AccordionDetails>
                  </Accordion>

                  <Accordion
                    disableGutters
                    elevation={0}
                    sx={{
                      "&:before": {
                        display: "none",
                      },
                    }}
                  >
                    <AccordionSummary
                      expandIcon={<ExpandMoreIcon />}
                      aria-controls="panel3a-content"
                      id="panel3a-header"
                    >
                      <Typography
                        sx={{
                          fontSize: "14px",
                          fontWeight: "500",
                          color: "#333333",
                          textTransform: "capitalize",
                        }}
                      >
                        Learn
                      </Typography>
                    </AccordionSummary>

                    <AccordionDetails>
                      {learnMenuList?.map((e) => (
                        <>
                          <Box
                            display={"flex"}
                            borderRadius={2}
                            // bgcolor={
                            //   e?.href === router?.pathname ? "#a09d9dc5" : ""
                            // }
                            p={1.5}
                            alignItems={"center"}
                            justifyContent={"flex-start"}
                            onClick={async () => {
                              //onClick to show the right content part
                              // await router.push(e?.href);
                              setOpenDrawer(false);
                            }}
                            sx={{ cursor: "pointer", paddingTop: "10px" }}
                          >
                            <Box
                              display={"flex"}
                              justifyContent={"space-between"}
                              alignItems={"center"}
                              width={"100%"}
                            >
                              <Box
                                display={"flex"}
                                justifyContent={"center"}
                                alignItems={"center"}
                              >
                                <Typography
                                  sx={{
                                    paddingLeft: "14px",
                                    fontSize: "13px",
                                    fontWeight: 500,
                                    color: "#333333",
                                  }}
                                >
                                  {e?.name}
                                </Typography>
                              </Box>
                              <Box>
                                <img
                                  src="/icons/Vector (7).svg"
                                  alt=""
                                  style={{ height: "12px" }}
                                />
                              </Box>
                            </Box>
                          </Box>
                        </>
                      ))}
                    </AccordionDetails>
                  </Accordion>

                  <Accordion
                    disableGutters
                    elevation={0}
                    sx={{
                      "&:before": {
                        display: "none",
                      },
                    }}
                  >
                    <AccordionSummary
                      expandIcon={<ExpandMoreIcon />}
                      aria-controls="panel3a-content"
                      id="panel3a-header"
                      onClick={() => router.push("/price")}
                    >
                      <Typography
                        sx={{
                          fontSize: "14px",
                          fontWeight: "500",
                          color: "#333333",
                          textTransform: "capitalize",
                        }}
                      >
                        Pricing
                      </Typography>
                    </AccordionSummary>

                    {/* <AccordionDetails>
                    <Typography>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Suspendisse malesuada lacus ex, sit amet blandit leo
                      lobortis eget.
                    </Typography>
                  </AccordionDetails> */}
                  </Accordion>

                  <Accordion
                    disableGutters
                    elevation={0}
                    sx={{
                      "&:before": {
                        display: "none",
                      },
                    }}
                  >
                    <AccordionSummary
                      expandIcon={<ExpandMoreIcon />}
                      aria-controls="panel3a-content"
                      id="panel3a-header"
                    >
                      <Typography
                        sx={{
                          fontSize: "14px",
                          fontWeight: "500",
                          color: "#333333",
                          textTransform: "capitalize",
                        }}
                      >
                        Case Studies
                      </Typography>
                    </AccordionSummary>

                    {/* <AccordionDetails>
                    <Typography>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Suspendisse malesuada lacus ex, sit amet blandit leo
                      lobortis eget.
                    </Typography>
                  </AccordionDetails> */}
                  </Accordion>
                </Box>
                <Box mt={3}>
                  <Button
                    onClick={() => router.push("/bookdemo")}
                    style={{
                      width: "100%",
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
                    Get free demo
                  </Button>
                </Box>
              </Box>
            </Drawer>
          </>
        )}
      </Box>
    </>
  );
};

export default AppBar;
