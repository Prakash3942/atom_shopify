// import * as React from "react";
import ProductDetails from "../src/page-components/all-product-details/ProductDetail";
import Testimonial from "../src/page-components/testimonial/Testimonial";
import CustomerReview from "../src/page-components/customer-review/CustomerReview";
import ReadCaseStudy from "../src/page-components/read-case-study/ReadCaseStudy";
import VideoManagement from "../src/page-components/video-management/VideoManagement";
import VideoShopExperience from "../src/page-components/video-shopping-experience/VideoShopExperience";
import VideoShopifyStore from "../src/page-components/video-shopify-store/VideoShopifyStore";
import ShopifyBrand from "../src/page-components/shopify-brand/ShopifyBrand";
import HeroSection from "../src/page-components/hero-section/HeroSection";
import StoryHeroSection from "../src/page-components/story-page/StoryHeroSection";
import { SliderSection } from "../src/page-components/SliderSection";
import ExploreVideo from "../src/page-components/ExploreVideo";
import SeamlessVideo from "../src/page-components/Seamless-video-Shopping";

export default function Home() {
  return (
    <>
      <HeroSection />
      <ShopifyBrand />
      <SliderSection />
      {/* <Testimonial /> */}
      <CustomerReview />
      <ProductDetails />
      <SeamlessVideo />
      <ReadCaseStudy />
      <VideoManagement />
      <ExploreVideo />
      {/* <VideoShopExperience /> */}
      <VideoShopifyStore />
      {/* <StoryHeroSection /> */}
    </>
  );
}
