import React from "react";
// import { Splide, SplideSlide } from "@splidejs/react-splide";
import { AutoScroll } from "@splidejs/splide-extension-auto-scroll";
// import imageError from "../../../../assets/sliderOnerror.png";

import Marquee from "react-fast-marquee";
import "../scss/home.scss";

const Slider = ({ data, direction, clickOnItem }) => {
  // const options = {
  //   type: "loop",
  //   drag: "free",
  //   speed: 8000,
  //   fixedWidth: 220,
  //   // rewind: true,
  //   // focus: "left",
  //   perPage: 4,
  //   lazyLoad: "nearby",
  //   preloadPages: 4,
  //   autoplay: true,
  //   gap: "1rem",
  //   lazyLoad: "nearby",
  //   autoScroll: {
  //     speed: 2,
  //   },
  //   arrows: false,
  //   pagination: false,
  //   direction: direction,
  //   breakpoints: {
  //     2000: {
  //       perPage: 4,
  //     },
  //     1600: {
  //       perPage: 3,
  //     },
  //     1200: {
  //       perPage: 4,
  //     },
  //     1024: {
  //       perPage: 4,
  //       gap: "15px",
  //     },
  //     820: {
  //       perPage: 3,
  //     },
  //     640: {
  //       perPage: 2,
  //     },
  //     625: {
  //       perPage: 2.5,
  //     },
  //     520: {
  //       perPage: 2,
  //     },
  //     430: {
  //       perPage: 1.5,
  //       gap: "15px",
  //     },
  //   },
  // };
  const autoScroll = { AutoScroll };

  const sliderClick = (e, region) => {
    // console.log("slider_click id", e, region);
    clickOnItem(e, region);
  };

  return (
    <Marquee
      gradientColor={[244, 245, 247]}
      gradientWidth={50}
      speed={50}
      delay={1}
      className="my-marquee"
      direction={direction}
    >
      {data &&
        data?.map((item, i) => (
          <div className="border_box" key={i}>
            {/* {console.log(item)} */}
            <div
              className="slide-content-box"
              onClick={() => sliderClick(item?.url, item?.region)}
            >
              <img
                className="slider_img"
                src={item?.logo}
                // onError={(e) => (e.target.src = imageError)}
                alt="Img 1"
              />
              {/* <div>
                <p className="text-center m-0 text-line">
                  <b>{item.name}</b>
                </p>
                <p className="sector-">{item.sector}</p>
              </div> */}
              {/* <div
                className={`label  ${
                  item?.status === "Available"
                    ? "card-labal-1"
                    : item?.status === "Sold Out"
                    ? "card-labal-2"
                    : "card-labal-3"
                }`}
              >
                {item?.status}
              </div> */}

              {/* <div className="desc-content"> */}
              {/* <div className="grid-content"> */}
              {/* <div className="grid-content">
                  <div className="price">Price</div>
                  <div className="price-content">
                    &#8377;{item.pricePerShare}
                  </div>
                </div> */}
              {/* </div> */}
            </div>
            {/* <div className="bg-gray text-center py-1 explore-color">
              EXPLORE
            </div> */}
          </div>
        ))}
    </Marquee>
    // <Splide options={options} Extensions={autoScroll}>
    //   {data &&
    //     data?.map((item, i) => (
    //       <SplideSlide key={i} onClick={() => sliderClick(item?._id)}>
    //         {/* onClick={() => clickOnItem(item?._id)} */}

    //         <div className="slide-content-box">
    //           <img
    //             className="slider_img"
    //             src={item?.logo}
    //             onError={(e) => (e.target.src = imageError)}
    //             alt="Img 1"
    //           />
    //           <div className="label">Available</div>

    //           <div className="desc-content">
    //             {/* <div className="grid-content"> */}
    //             <div
    //               className={`grid-content ${
    //                 direction === "rtl" ? "revert-grid" : ""
    //               }`}
    //             >
    //               <div className="price">Price</div>
    //               {/* <div className="price-content"> */}
    //               <div
    //                 className={`price-content ${
    //                   direction === "rtl" ? "ltr-ellipse" : ""
    //                 }`}
    //               >
    //                 &#8377;{item.pricePerShare}
    //               </div>
    //             </div>
    //             <div
    //               className={`grid-content ${
    //                 direction === "rtl" ? "revert-grid" : ""
    //               }`}
    //             >
    //               {/* <div
    //                 className={`sector ${
    //                   direction === "rtl" ? "ltr-ellipse" : ""
    //                 }`}
    //               >
    //                 {item.sector}
    //               </div>
    //               <div
    //                 className={`sector-content ${
    //                   direction === "rtl" ? "ltr-ellipse" : ""
    //                 }`}
    //               >
    //                 {item.name}
    //               </div> */}
    //             </div>
    //           </div>
    //         </div>
    //       </SplideSlide>
    //     ))}
    // </Splide>
  );
};

export default Slider;
