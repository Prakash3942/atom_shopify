import React, { useRef } from "react";
import PriceHeroSection from "../../src/page-components/price-page/PriceHeroSection";
import VideoPricingSection from "../../src/page-components/price-page/VideoPricingSection";
import VideoShopifyStore from "../../src/page-components/video-shopify-store/VideoShopifyStore";
import StoryBrandSection from "../../src/page-components/story-page/StoryBrandSection";
import PriceBrandSection from "../../src/page-components/price-page/PriceBrandSection";
import { PriceSlider } from "../../src/page-components/AllSliderSection/PriceSlider";

const PricePage = () => {
  const SubRef = useRef(null);
  return (
    <>
      <PriceHeroSection targetRef={SubRef} />
      <PriceBrandSection targetRef={SubRef} />
      <VideoPricingSection targetRef={SubRef} />
      <PriceSlider />
      <VideoShopifyStore />
    </>
  );
};

export default PricePage;
