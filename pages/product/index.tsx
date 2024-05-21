import React from "react";
import ProductHeroSection from "../../src/page-components/product-page/ProductHeroSection";
import ProductCaseStudySection from "../../src/page-components/product-page/ProductCaseStudySection";
import StoryBrandSection from "../../src/page-components/story-page/StoryBrandSection";
import VideoCardHead from "../../src/page-components/video-shopping-card/VideoCardHead";
import VideoCard from "../../src/page-components/video-shopping-card/VideoCard";
import { ProductSlider } from "../../src/page-components/AllSliderSection/ProductSlider";

const ProductPage = () => {
  const vCardDirection = ["row", "row-reverse"];
  const productProps1 = [
    {
      topheading:
        "Boost conversion rates from product pages using dynamic videos",
      title: "Visual Immersion",
      description:
        "Immerse your customers in your product like never before. Videos bring your products to life, showcasing them in action, with details, zoom-ins, and close-ups that leave a lasting impression.",
      buttonitem: "Watch Product Page Videos",
      image: "/images/Frame 13979 (1).svg",
    },
    {
      topheading:
        "Boost conversion rates from product pages using dynamic videos",
      title: "Fashion on the Ramp",
      description:
        "For fashion brands, create runway experiences for your customers. Let them witness your products in motion, just like on a fashion show runway, sparking their desire to own what they see.",
      buttonitem: "Watch Product Page Videos",
      image: "/images/Frame 13979 (1).svg",
    },
    {
      topheading:
        "Boost conversion rates from product pages using dynamic videos",
      title: "Enhanced Engagement",
      description:
        "Boost user engagement and conversion rates. Product Page Videos create a captivating shopping experience that drives purchases and sets your brand apart from the competition.",
      buttonitem: "Watch Product Page Videos",
      image: "/images/Frame 13979 (1).svg",
    },
  ];

  const productProps2 = [
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
  const productProps3 = [
    {
      topheading: "Create Social Links On Product Detail Page",
      title: "Influencer Integration",
      description:
        "Connect with influencer-made content directly on your product page. When potential buyers are in the research phase, they can access reviews and influencer recommendations effortlessly.",
      buttonitem: "Watch Product Page Videos",
      image: "/images/Frame 13980 (1).svg",
    },
    {
      topheading: "Create Social Links On Product Detail Page",
      title: "Seamless Exploration",
      description:
        "Reduce customer churn during the research process. Allow customers to explore videos on our product from YouTube and Instagram without leaving your site.",
      buttonitem: "Watch Product Page Videos",
      image: "/images/Frame 13980 (1).svg",
    },
    {
      topheading: "Create Social Links On Product Detail Page",
      title: "Enhanced Confidence",
      description:
        "Boost buyer confidence with external endorsements. When customers see product reviews from trusted sources, they're more likely to trust your brand and make a purchase.",
      buttonitem: "Watch Product Page Videos",
      image: "/images/Frame 13980 (1).svg",
    },
  ];
  return (
    <>
      <ProductHeroSection />

      <VideoCardHead
        cardtitle={
          "Boost conversion rates from product pages using dynamic videos"
        }
      />
      <VideoCard Card={productProps1} cardDirection={vCardDirection[0]} />

      <VideoCard Card={productProps2} cardDirection={vCardDirection[1]} />
      <VideoCard Card={productProps3} cardDirection={vCardDirection[0]} />
      <ProductSlider />
      <ProductCaseStudySection />
      <StoryBrandSection />
    </>
  );
};

export default ProductPage;
