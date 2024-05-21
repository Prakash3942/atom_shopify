import React from "react";
import CategoryHeroSection from "../../src/page-components/category-page/CategoryHeroSection";
import CategoryCaseStudySection from "../../src/page-components/category-page/CategoryCaseStudySection";
import StoryBrandSection from "../../src/page-components/story-page/StoryBrandSection";
import VideoCardHead from "../../src/page-components/video-shopping-card/VideoCardHead";
import VideoCard from "../../src/page-components/video-shopping-card/VideoCard";
import { CategorySlider } from "../../src/page-components/AllSliderSection/CategorySlider";

const CategoryPage = () => {
  const vCardDirection = ["row", "row-reverse"];
  const categoryProps1 = [
    {
      topheading: "Never Ending Content = Shopping On The Go",
      title: "Endless Exploration",
      description:
        "Dive into an endless stream of products. With Shoppable Reels, you can effortlessly explore a wide range of products one after the other, just like the captivating experience of watching social media reels.",
      buttonitem: "Watch Shoppable Reels",
      image: "/images/Frame 13978 (1).svg",
    },
    {
      topheading: "Never Ending Content = Shopping On The Go",
      title: "SKU-Friendly",
      description:
        "Perfect for brands with extensive product catalogs. Whether you're a fashion retailer with countless t-shirt designs or a tech brand with numerous gadgets, Video Categories streamlines the shopping process.",
      buttonitem: "Watch Shoppable Reels",
      image: "/images/Frame 13978 (1).svg",
    },
    {
      topheading: "Never Ending Content = Shopping On The Go",
      title: "Intuitive Engagement",
      description:
        "Keep your audience engaged without clicks or page navigation. Customers can stay in the shopping flow, making it easier and more enjoyable to discover and purchase products.",
      buttonitem: "Watch Shoppable Reels",
      image: "/images/Frame 13978 (1).svg",
    },
  ];

  const categoryProps2 = [
    {
      topheading: "Showcase Product Categories - Each With Unique Reel Flow",
      title: "Eye-Catching GIFs",
      description:
        "Capture attention with animated icons for your product categories. These dynamic visuals provide a sneak peek into the exciting content that awaits customers.",
      buttonitem: "Watch Shoppable Reels",
      image: "/images/Frame 13978 (2).svg",
    },
    {
      topheading: "Showcase Product Categories - Each With Unique Reel Flow",
      title: "Intuitive Navigation",
      description:
        "Quickly identify and select the categories that interest you most. Animated icons make it easy to find what you're looking for in a visually appealing manner.",
      buttonitem: "Watch Shoppable Reels",
      image: "/images/Frame 13978 (2).svg",
    },
    {
      topheading: "Showcase Product Categories - Each With Unique Reel Flow",
      title: "Unify the Story",
      description:
        "Create a holistic brand story. Mini Videos seamlessly integrate with your core Product page Video, offering a well-rounded narrative that compels customers to make informed buying decisions.",
      buttonitem: "Watch Product Page Videos",
      image: "/images/Frame 13978 (2).svg",
    },
  ];
  const categoryProps3 = [
    {
      topheading: "Seamless Reels-Like Experience",
      title: "Social Media Vibes",
      description:
        "Bring the excitement of social media into your shopping journey. Reel Shopping offers a familiar and engaging interface that resonates with today's consumers.",
      buttonitem: "Watch Shoppable Reels",
      image: "/images/Frame 13980 (2).svg",
    },
    {
      topheading: "Seamless Reels-Like Experience",
      title: "Effortless Shopping",
      description:
        "No more cumbersome navigation. Customers can effortlessly swipe through product videos, making shopping feel more like entertainment than a chore.",
      buttonitem: "Watch Shoppable Reels",
      image: "/images/Frame 13980 (2).svg",
    },
    {
      topheading: "Seamless Reels-Like Experience",
      title: "Discover, Watch, and Shop",
      description:
        "Browse, watch, and make purchases seamlessly. Shoppable Reels simplifies the buying process, making it easier for customers to find and buy the products they love.",
      buttonitem: "Watch Shoppable Reels",
      image: "/images/Frame 13980 (2).svg",
    },
  ];
  return (
    <>
      <CategoryHeroSection />

      <VideoCardHead
        cardtitle={
          "Let the shopping never end with endless reel like experience."
        }
      />
      <VideoCard Card={categoryProps1} cardDirection={vCardDirection[0]} />

      <VideoCard Card={categoryProps2} cardDirection={vCardDirection[1]} />
      <VideoCard Card={categoryProps3} cardDirection={vCardDirection[0]} />
      <CategorySlider />
      <CategoryCaseStudySection />
      <StoryBrandSection />
    </>
  );
};

export default CategoryPage;
