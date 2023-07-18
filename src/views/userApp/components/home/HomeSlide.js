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
          src="https://storage.googleapis.com/download/storage/v1/b/tradeunlisted-aef3b.appspot.com/o/images%2F8938.617427816514care-health-insurance-unlisted-share.webp?generation=1671518396175295&alt=media"
          alt="First slide"
        />
      </SplideSlide>
      <SplideSlide>
        <img
          class="d-block w-100"
          src="https://storage.googleapis.com/download/storage/v1/b/tradeunlisted-aef3b.appspot.com/o/images%2F7650.710156398491elcid-investments-unlisted-share.webp?generation=1671518176373856&alt=media"
          alt="Third slide"
        />
      </SplideSlide>
      <SplideSlide>
        <img
          class="d-block w-100"
          src="https://storage.googleapis.com/download/storage/v1/b/tradeunlisted-aef3b.appspot.com/o/images%2F1500.474804718115webfil%20logo-01.png?generation=1677659243150416&alt=media"
          alt="Second slide"
        />
      </SplideSlide>
    </Splide>
  );
};

export default HomeSlide;
