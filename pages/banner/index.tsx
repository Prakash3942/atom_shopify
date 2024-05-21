import React from "react";
import BannerHeroSection from "../../src/page-components/banner-page/BannerHeroSection";
import StoryCaseStudySection from "../../src/page-components/story-page/StoryCaseStudySection";
import StoryBrandSection from "../../src/page-components/story-page/StoryBrandSection";
import VideoCardHead from "../../src/page-components/video-shopping-card/VideoCardHead";
import VideoCard from "../../src/page-components/video-shopping-card/VideoCard";
import { BannerSlider } from "../../src/page-components/AllSliderSection/BannerSlider";

const BannerPage = () => {
  const vCardDirection = ["row", "row-reverse"];
  const bannerProps1 = [
    {
      topheading: "Wide & Immersive Shoppable Videos",
      title: "Immersive Product Showcase",
      description:
        "Go beyond traditional videos. With Shoppable Banner Videos, you can curate an immersive product experience, showcasing multiple items in a wide & captivating carousel format.",
      buttonitem: "Watch Wide Screen Shopping",
      image: "/images/Frame 13979.svg",
    },
    {
      topheading: "Wide & Immersive Shoppable Videos",
      title: "Instant HD Video Shopping",
      description:
        "Drive impulse buys and immediate conversions. Our Instant Checkout feature embedded in Banner Videos empowers customers to make quick, time-based purchases directly from the video.",
      buttonitem: "Watch Brand Stories",
      image: "/images/Frame 13979.svg",
    },
    {
      topheading: "Wide & Immersive Shoppable Videos",
      title: "Boost Sales With FOMO",
      description:
        "Craft marketing strategies around instant offers and time-based discounts. Shoppable Banner Videos are your gateway to boosting sales and enhancing the customer shopping experience.",
      buttonitem: "Watch Brand Stories",
      image: "/images/Frame 13979.svg",
    },
  ];

  const bannerProps2 = [
    {
      topheading: "Classic Landscape Videos - Building Brand Narratives",
      title: "Tell A Story Beyond Sales",
      description:
        "Leave a lasting impression. Landscape videos allow you to tell a story that resonates with your audience, creating a connection that goes beyond transactions.",
      buttonitem: "Watch Wide Screen Shopping",
      image: "/images/Frame 13978.svg",
    },
    {
      topheading: "Classic Landscape Videos - Building Brand Narratives",
      title: "Build Narratives That Matter",
      description:
        "Create a visual narrative that drives demand. Classic Landscape Videos enable you to convey your brand's essence, values, and culture through compelling visuals and stories.        ",
      buttonitem: "Watch Brand Stories",
      image: "/images/Frame 13978.svg",
    },
    {
      topheading: "Classic Landscape Videos - Building Brand Narratives",
      title: "Give Brand Sneak Peak",
      description:
        "Showcase your processes, standards, and behind-the-scenes efforts. Give your customers a glimpse into what sets your brand apart and builds trust.        ",
      buttonitem: "Watch Brand Stories",
      image: "/images/Frame 13978.svg",
    },
  ];
  const bannerProps3 = [
    {
      topheading: "Maximize Website Dominance - Landscape Format",
      title: "Command Attention",
      description:
        "Position your content where it matters most. Landscape HD Videos in 1080x720 format dominate your website's key sections, ensuring maximum visibility and engagement.        ",
      buttonitem: "Watch Wide Screen Shopping",
      image: "/images/Frame 13980.svg",
    },
    {
      topheading: "Interactive Stories - Engage and Interact",
      title: "Enhanced User Experience",
      description:
        "Capture user attention instantly with visuals optimized for landscape viewing. Make your brand's message impossible to ignore.",
      buttonitem: "Watch Brand Stories",
      image: "/images/Frame 13980.svg",
    },
    {
      topheading: "Interactive Stories - Engage and Interact",
      title: "Aesthetic Excellence",
      description:
        "Elevate your website's aesthetics with stunning, full-screen landscape Videos. Create an immersive experience that keeps visitors engaged and coming back for more.",
      buttonitem: "Watch Brand Stories",
      image: "/images/Frame 13980.svg",
    },
  ];
  return (
    <>
      <BannerHeroSection />
      
      <VideoCardHead
        cardtitle={
          "Your eCommerce Website + HD Wide Videos = Unforgettable Shopping Experience"
        }
      />
      <VideoCard Card={bannerProps1} cardDirection={vCardDirection[0]} />

      <VideoCard Card={bannerProps2} cardDirection={vCardDirection[1]} />
      <VideoCard Card={bannerProps3} cardDirection={vCardDirection[0]} />
      <BannerSlider />
      <StoryCaseStudySection />
      <StoryBrandSection />
    </>
  );
};

export default BannerPage;
