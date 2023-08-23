import React from "react";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import { AutoScroll } from "@splidejs/splide-extension-auto-scroll";
import "@splidejs/splide/dist/css/splide.min.css";

const HomeSlide = () => {
  const options = {
    type: "loop",
    drag: "free",
    speed: 4000,
    fixedWidth: 700,
    // rewind: true,
    // focus: "left",
    perPage: 1,
    lazyLoad: "nearby",
    preloadPages: 1,
    autoplay: true,
    gap: "1rem",
    lazyLoad: "nearby",
    autoScroll: {
      speed: 4000,
    },
    arrows: true,
    pagination: false,
    direction: "left",
    breakpoints: {
      2000: {
        perPage: 1,
      },
      1600: {
        perPage: 1,
      },
      1200: {
        perPage: 1,
      },
      1024: {
        perPage: 1,
        gap: "15px",
      },
      820: {
        perPage: 1,
      },
      640: {
        perPage: 1,
      },
      625: {
        perPage: 1,
      },
      520: {
        perPage: 1,
      },
      430: {
        perPage: 1,
        gap: "15px",
      },
    },
  };

  const autoScroll = { AutoScroll };
  return (
    <Splide options={options} Extensions={autoScroll}>
      <SplideSlide>
        <img
          class="d-block w-100"
          src="https://images.prismic.io/tnfev2/0ccc4480-f5be-4d22-999f-e3831d87f99d_BRAND+TradingTools+Inverse+Hammer+2+-+No+Watermark+Teaser+Image+2240x1260.webp?auto=compress%2Cformat&fit=max&w=550"
          alt="First slide"
        />
      </SplideSlide>
      <SplideSlide>
        <img
          class="d-block w-100"
          src="https://static.vecteezy.com/system/resources/previews/027/120/317/large_2x/business-future-technology-market-economic-investment-and-money-concept-background-or-backdrop-common-forex-and-commodity-exchange-with-colorful-graphics-interface-ai-generated-photo.jpg"
          alt="Third slide"
        />
      </SplideSlide>
      <SplideSlide>
        <img
          class="d-block w-100"
          src="https://dynamic-images.admiralmarkets.com/720x,webp/fxmedia.s3.amazonaws.com/articles/How_to_Read_Candlestick_Charts.jpeg"
          alt="Second slide"
        />
      </SplideSlide>
    </Splide>
  );
};

export default HomeSlide;
