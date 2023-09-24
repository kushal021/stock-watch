import React from "react";
// import { Splide, SplideSlide } from "@splidejs/react-splide";
// import { AutoScroll } from "@splidejs/splide-extension-auto-scroll";
// import "@splidejs/splide/dist/css/splide.min.css";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import Ban1 from "../../../../assets/images/banner/ban1.jpg";
import Ban2 from "../../../../assets/images/banner/ban2.jpg";
import Ban3 from "../../../../assets/images/banner/ban3.jpg";
import Ban4 from "../../../../assets/images/banner/ban4.jpg";
import Ban5 from "../../../../assets/images/banner/ban5.jpg";

const HomeSlide = () => {
  // const options = {
  //   type: "loop",
  //   drag: "free",
  //   speed: 4000,
  //   // rewind: true,
  //   // focus: "left",
  //   perPage: 1,
  //   lazyLoad: "nearby",
  //   preloadPages: 1,
  //   autoplay: true,
  //   gap: "1rem",
  //   lazyLoad: "nearby",
  //   autoScroll: {
  //     speed: 5,
  //     pauseOnHover: false,
  //     pauseOnFocus: false,
  //     rewind: false,
  //   },
  //   arrows: true,
  //   pagination: false,
  //   direction: "left",
  //   breakpoints: {
  //     2000: {
  //       perPage: 1,
  //     },
  //     1600: {
  //       perPage: 1,
  //     },
  //     1200: {
  //       perPage: 1,
  //     },
  //     1024: {
  //       perPage: 1,
  //       gap: "15px",
  //     },
  //     820: {
  //       perPage: 1,
  //     },
  //     640: {
  //       perPage: 1,
  //     },
  //     625: {
  //       perPage: 1,
  //     },
  //     520: {
  //       perPage: 1,
  //     },
  //     430: {
  //       perPage: 1,
  //       gap: "15px",
  //     },
  //   },
  // };

  // const autoScroll = { AutoScroll };
  return (
    <>
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper"
      >
        <SwiperSlide>
          {" "}
          <img className="d-block w-100" src={Ban1} alt="First slide" />
        </SwiperSlide>
        <SwiperSlide>
          <img className="d-block w-100" src={Ban2} alt="Third slide" />
        </SwiperSlide>
        <SwiperSlide>
          <img className="d-block w-100" src={Ban3} alt="Second slide" />
        </SwiperSlide>
        <SwiperSlide>
          <img className="d-block w-100" src={Ban4} alt="Second slide" />
        </SwiperSlide>
        <SwiperSlide>
          <img className="d-block w-100" src={Ban5} alt="Second slide" />
        </SwiperSlide>
        {/* <SwiperSlide>Slide 4</SwiperSlide>
        <SwiperSlide>Slide 5</SwiperSlide>
        <SwiperSlide>Slide 6</SwiperSlide>
        <SwiperSlide>Slide 7</SwiperSlide>
        <SwiperSlide>Slide 8</SwiperSlide>
        <SwiperSlide>Slide 9</SwiperSlide> */}
      </Swiper>
      {/* <Splide options={options} extensions={{ AutoScroll }}>
        <SplideSlide>
          <img
            className="d-block w-100"
            src="https://images.prismic.io/tnfev2/0ccc4480-f5be-4d22-999f-e3831d87f99d_BRAND+TradingTools+Inverse+Hammer+2+-+No+Watermark+Teaser+Image+2240x1260.webp?auto=compress%2Cformat&fit=max&w=550"
            alt="First slide"
          />
        </SplideSlide>
        <SplideSlide>
          <img
            className="d-block w-100"
            src="https://static.vecteezy.com/system/resources/previews/027/120/317/large_2x/business-future-technology-market-economic-investment-and-money-concept-background-or-backdrop-common-forex-and-commodity-exchange-with-colorful-graphics-interface-ai-generated-photo.jpg"
            alt="Third slide"
          />
        </SplideSlide>
        <SplideSlide>
          <img
            className="d-block w-100"
            src="https://dynamic-images.admiralmarkets.com/720x,webp/fxmedia.s3.amazonaws.com/articles/How_to_Read_Candlestick_Charts.jpeg"
            alt="Second slide"
          />
        </SplideSlide>
      </Splide> */}
    </>
  );
};

export default HomeSlide;
