import React from "react";
import ManagementHero from "../../src/page-components/management-page/ManagementHero";
import VideoShopifyStore from "../../src/page-components/video-shopify-store/VideoShopifyStore";
import StoryBrandSection from "../../src/page-components/story-page/StoryBrandSection";
import VideoCardHead from "../../src/page-components/video-shopping-card/VideoCardHead";
import VideoCard from "../../src/page-components/video-shopping-card/VideoCard";
import { ManagementSlider } from "../../src/page-components/AllSliderSection/ManagementSlider";

const ManagementPage = () => {
  const vCardDirection = ["row", "row-reverse"];
  const managementProps1 = [
    {
      topheading: "Seamless Video Management Via Mobile App",
      title: "Omni-channel sync",
      description:
        "Plan and schedule content across various platforms, for a unified brand presence. From your website to social media, take charge of your video content calendar.",
      buttonitem: "start free trial",
      image: "/images/Frame 13978 (5).svg",
    },
    {
      topheading: "Seamless Video Management Via Mobile App",
      title: "Strategic scheduling",
      description:
        "Maximize audience engagement with strategic scheduling. Deliver content when it matters most, capturing your audience's attention and boosting conversions.",
      buttonitem: "start free trial",
      image: "/images/Frame 13978 (5).svg",
    },
    {
      topheading: "Seamless Video Management Via Mobile App",
      title: "Planning made easy",
      description:
        "Save time and resources with centralized planning and scheduling. Manage all your content from one place, simplifying your workflow and improving productivity.",
      buttonitem: "start free trial",
      image: "/images/Frame 13978 (5).svg",
    },
  ];

  const managementProps2 = [
    {
      topheading: "Unlock Your Brand's Full Potential with Analytics",
      title: "Actionable Insights",
      description:
        "Gain valuable insights into user behavior, video performance, and customer demographics. Make informed decisions that drive your brand's success.",
      buttonitem: "start free trial",
      image: "/images/Frame 13978 (6).svg",
    },
    {
      topheading: "Unlock Your Brand's Full Potential with Analytics",
      title: "Video Content Optimization",
      description:
        "Identify top-performing content and replicate success. Leverage data to refine your content strategy and create more of what resonates with your audience.",
      buttonitem: "start free trial",
      image: "/images/Frame 13978 (6).svg",
    },
    {
      topheading: "Unlock Your Brand's Full Potential with Analytics",
      title: "Conversion Tracking",
      description:
        "Track the customer journey from start to finish. Understand the pathways to conversion and fine-tune your funnel for maximum efficiency and revenue.",
      buttonitem: "Watch Product Page Videos",
      image: "/images/Frame 13978 (6).svg",
    },
  ];
  const managementProps3 = [
    {
      topheading: "Unify Your Social Media Presence",
      title: "Simulcast Stories",
      description:
        "Reach a wider audience effortlessly. Simultaneously share Stories across all your social media platforms and your website from one app.",
      buttonitem: "start free trial",
      image: "/images/Frame 13980 (3).svg",
    },
    {
      topheading: "Unify Your Social Media Presence",
      title: "One-Stop Content Management",
      description:
        "Save time and effort by managing your content uploads across multiple platforms with ease. Upload once, share everywhere, and maintain a consistent brand presence.",
      buttonitem: "start free trial",
      image: "/images/Frame 13980 (3).svg",
    },
    {
      topheading: "Unify Your Social Media Presence",
      title: "Efficient Scheduling",
      description:
        "Plan and schedule social media stories for optimal engagement. Keep your audience engaged and informed without the hassle of manual uploads.",
      buttonitem: "start free trial",
      image: "/images/Frame 13980 (3).svg",
    },
  ];
  return (
    <>
      <ManagementHero />
      <StoryBrandSection />
      <VideoCardHead
        cardtitle={"Powerful shopping experience - now at your fingertips."}
      />
      <VideoCard Card={managementProps1} cardDirection={vCardDirection[0]} />

      <VideoCard Card={managementProps2} cardDirection={vCardDirection[1]} />
      <VideoCard Card={managementProps3} cardDirection={vCardDirection[0]} />
      <ManagementSlider />
      <VideoShopifyStore />
    </>
  );
};

export default ManagementPage;
