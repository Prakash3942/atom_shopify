import React from 'react'
import BookDemo from '../../src/page-components/book-demo-page/BookDemo'
import VideoShopifyStore from '../../src/page-components/video-shopify-store/VideoShopifyStore'
import StoryBrandSection from '../../src/page-components/story-page/StoryBrandSection'
import { BookDemoSlider } from '../../src/page-components/AllSliderSection/BookDemoSlider'

const BookDemoPage = () => {
  return (
    <>
    <BookDemo />
    <StoryBrandSection />
    <BookDemoSlider />
    <VideoShopifyStore />
    </>
  )
}

export default BookDemoPage