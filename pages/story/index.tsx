import React, { useEffect, useRef } from "react";
import StoryHeroSection from "../../src/page-components/story-page/StoryHeroSection";
import StoryCaseStudySection from "../../src/page-components/story-page/StoryCaseStudySection";
import StoryBrandSection from "../../src/page-components/story-page/StoryBrandSection";

import VideoCardHead from "../../src/page-components/video-shopping-card/VideoCardHead";
import { Box } from "@mui/material";
import VideoCard from "../../src/page-components/video-shopping-card/VideoCard";
import { StorySlider } from "../../src/page-components/AllSliderSection/StorySlider";
import { SliderSection } from "../../src/page-components/SliderSection";


const StoryPage = () => {
  const vCardDirection = ["row", "row-reverse"];


  const shoppableProps = [
    {
      topheading: "Shoppable Stories - Your Brand's Ultimate Showcase",
      title: "Product Centric Magic",
      description:
        "Bring your products to life with Shoppable Stories. Seamlessly link your products to captivating narratives that your customers won't be able to resist.",
      buttonitem: "Watch Brand Stories",
      image: "/images/Group 13940.svg",
    },
    {
      topheading: "Shoppable Stories - Your Brand's Ultimate Showcase",
      title: "Boost Sales Effortlessly",
      description:
        "Drive revenue like never before. Shoppable Stories make it easy for customers to explore and purchase featured products with just a tap.",
      buttonitem: "Watch Brand Stories",
      image: "/images/Group 13940.svg",
    },
    {
      topheading: "Shoppable Stories - Your Brand's Ultimate Showcase",
      title: "Engage and Convert",
      description:
        "Transform your storytelling into conversions. Shoppable Stories create a frictionless path from inspiration to purchase, boosting engagement and revenue.",
      buttonitem: "Watch Brand Stories",
      image: "/images/Group 13940.svg",
    },
  ];

  const classicProps = [
    {
      topheading: "Classic Stories - Storytelling Beyond Sales",
      title: "Holistic Brand Storytelling",
      description:
        "Use classic stories to share your brand's journey, behind-the-scenes content, and updates without any direct sales intent.",
      buttonitem: "Watch Brand Stories",
      image: "/images/Frame 13978 (7).svg",
    },
    {
      topheading: "Classic Stories - Storytelling Beyond Sales",
      title: "Build Trust and Connectiony",
      description:
        "Establish authenticity and trust with your audience. Share your brand's values, processes, and milestones to forge lasting relationships.",
      buttonitem: "Watch Brand Stories",
      image: "/images/Frame 13978 (7).svg",
    },
    {
      topheading: "Classic Stories - Storytelling Beyond Sales",
      title: "Diverse Content",
      description:
        "Craft a narrative that's as deep as your brand. Whether it's product launches or a sneak peek into your team's daily life.",
      buttonitem: "Watch Brand Stories",
      image: "/images/Frame 13978 (7).svg",
    },
  ];
  const intractiveProps = [
    {
      topheading: "Interactive Stories - Engage and Interact",
      title: "Interactive Engagement",
      description:
        "Collect user-generated responses, conduct Q&A sessions, run polls, and create a two-way conversation with your audience.",
      buttonitem: "Watch Brand Stories",
      image: "/images/Frame 13980 (4).svg",
    },
    {
      topheading: "Interactive Stories - Engage and Interact",
      title: "Feedback Loops",
      description:
        "Use interactive stories to gather valuable feedback, insights, and opinions from your audience. Improve your products and services based on real-time customer input.",
      buttonitem: "Watch Brand Stories",
      image: "/images/Frame 13980 (4).svg",
    },
    {
      topheading: "Interactive Stories - Engage and Interact",
      title: "Promotional Contests",
      description:
        "Turn your audience into active participants. Organize contests, challenges, and promotions within your stories, fostering a sense of community and excitement.",
      buttonitem: "Watch Brand Stories",
      image: "/images/Frame 13980 (4).svg",
    },
  ];
  return (
    <>
      <StoryHeroSection />
      
      <VideoCardHead
        cardtitle={"Elevate Your Brand Narrative Using Powerful Video Shopping"}
      />
      <VideoCard Card={shoppableProps} cardDirection={vCardDirection[0]} />

      <VideoCard Card={classicProps} cardDirection={vCardDirection[1]}  />
      <VideoCard Card={intractiveProps} cardDirection={vCardDirection[0]} />
      <StorySlider />
      {/* <SliderSection /> */}
      <StoryCaseStudySection />
      <StoryBrandSection />
      
    </>
  );
};

export default StoryPage;
