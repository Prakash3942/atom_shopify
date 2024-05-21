import React from "react";
import SectionHero from "../../src/page-components/section-page/SectionHero";
import SectionCaseStudy from "../../src/page-components/section-page/SectionCaseStudy";
import StoryBrandSection from "../../src/page-components/story-page/StoryBrandSection";
import VideoCardHead from "../../src/page-components/video-shopping-card/VideoCardHead";


import VideoCard from "../../src/page-components/video-shopping-card/VideoCard";
import { SectionSlider } from "../../src/page-components/AllSliderSection/SectionSlider";
// import IntractiveCard from "../../src/page-components/video-shopping-card/IntractiveCard";

const SectionPage = () => {
  const vCardDirection = ["row", "row-reverse"];
  const sectionProps1 = [
    {
      topheading:
        "Highlight Your Best Seller’s On Website Home",
      title: "Give attention to best-sellers",
      description:
        "Take control of your home page by showcasing one or two selected products that demand attention. Create a captivating first impression that draws visitors into your world.",
      buttonitem: "Watch Product Highlights",
      image: "/images/Frame 13979 (1).svg",
    },
    {
      topheading:
        "Highlight Your Best Seller’s On Website Home",
      title: "Highlight your star products",
      description:
        "Highlight your star products with multiple videos and special promotions directly on the home screen. Increase visibility and boost sales for your top-performing SKUs.",
      buttonitem: "Watch Product Highlights",
      image: "/images/Frame 13979 (1).svg",
    },
    {
      topheading:
        "Highlight Your Best Seller’s On Website Home",
      title: "Enhanced Engagement",
      description:
        "Boost user engagement and conversion rates. Product Page Videos create a captivating shopping experience that drives purchases and sets your brand apart from the competition.",
      buttonitem: "Watch Product Page Videos",
      image: "/images/Frame 13979 (1).svg",
    },
  ];

  const sectionProps2 = [
    {
      topheading: "Reinforce Your Product Using Mini Videos",
      title: "Videoify Your Narratives",
      description:
        "Expand your product's narrative. Use Mini Videos on your product page to dive deep into product features, quality, and unique selling points (USPs).",
      buttonitem: "Watch Product Page Videos",
      image: "/images/Frame 13978.svg",
    },
    {
      topheading: "Reinforce Your Product Using Mini Videos",
      title: "Testimonials and Feedback",
      description:
        "Leverage Mini Videos to showcase customer testimonials, feedback, and reviews. Build trust and credibility by letting satisfied customers speak for your brand.",
      buttonitem: "Watch Product Page Videos",
      image: "/images/Frame 13978.svg",
    },
    {
      topheading: "Reinforce Your Product Using Mini Videos",
      title: "Unify the Story",
      description:
        "Create a holistic brand story. Mini Videos seamlessly integrate with your core Product page Video, offering a well-rounded narrative that compels customers to make informed buying decisions.",
      buttonitem: "Watch Product Page Videos",
      image: "/images/Frame 13978.svg",
    },
  ];
  // const sectionProps3 = [
  //   {
  //     topheading: "Create Social Links On Product Detail Page",
  //     title: "Influencer Integration",
  //     description:
  //       "Connect with influencer-made content directly on your product page. When potential buyers are in the research phase, they can access reviews and influencer recommendations effortlessly.",
  //     buttonitem: "Watch Product Page Videos",
  //     image: "/images/Frame 13980 (1).svg",
  //   },
  //   {
  //     topheading: "Create Social Links On Product Detail Page",
  //     title: "Seamless Exploration",
  //     description:
  //       "Reduce customer churn during the research process. Allow customers to explore videos on our product from YouTube and Instagram without leaving your site.",
  //     buttonitem: "Watch Product Page Videos",
  //     image: "/images/Frame 13980 (1).svg",
  //   },
  //   {
  //     topheading: "Create Social Links On Product Detail Page",
  //     title: "Enhanced Confidence",
  //     description:
  //       "Boost buyer confidence with external endorsements. When customers see product reviews from trusted sources, they're more likely to trust your brand and make a purchase.",
  //     buttonitem: "Watch Product Page Videos",
  //     image: "/images/Frame 13980 (1).svg",
  //   },
  // ];
  return (
    <>
      <SectionHero />
      
      <VideoCardHead
        cardtitle={
          "Use mini-video showcase to make your best-sellers sell even more."
        }
      />
      <VideoCard Card={sectionProps1} cardDirection={vCardDirection[0]} />

<VideoCard Card={sectionProps2} cardDirection={vCardDirection[1]} />
{/* <VideoCard Card={sectionProps3} cardDirection={vCardDirection[0]} /> */}
      {/* <ShoppableCard
        image={"/images/Frame 13978 (3).svg"}
        topheading={"Highlight Your Best Seller’s On Website Home"}
        title={"Give attention to best-sellers"}
        description={
          "Take control of your home page by showcasing one or two selected products that demand attention. Create a captivating first impression that draws visitors into your world."
        }
        buttonitem={"Watch Product Highlights"}
        align={"row" || "row-reverse"}
      />
      <ClassicCard
        image={"/images/Frame 13978 (4).svg"}
        topheading={"Boost AOV Using Video Upsell On Product Pages"}
        title={"Personalized Recommendations"}
        description={
          "Enhance the shopping experience with smart suggestions. Use video upsell to display the products customers would most likely love."
        }
        buttonitem={"Watch Product Highlights"}
        align={"row" || "row-reverse"}
      />
      <IntractiveCard
        image={"/images/Frame 13978 (4).svg"}
        topheading={"Seamless Reels-Like Experience"}
        title={"Social Media Vibes"}
        description={
          "Bring the excitement of social media into your shopping journey. Reel Shopping offers a familiar and engaging interface that resonates with today's consumers."
        }
        buttonitem={"Watch Shoppable Reels"}
        align={"row" || "row-reverse"}
      /> */}
      <SectionSlider />
      <SectionCaseStudy />
      <StoryBrandSection />
    </>
  );
};

export default SectionPage;
