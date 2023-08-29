import React from "react";
import { useNavigate } from "react-router-dom";
import BearIcon from "../../../assets/images/bear-side-view-silhouette.png";
import BullIcon from "../../../assets/images/bull-market.png";

const HomeBelow = () => {
  const navigate = useNavigate();

  const strategyArray = [
    {
      strategy: "Bullish",
      name: "Breakfast",
      slug: "breakfast-bullish-strategy",
    },
    {
      strategy: "Bearish",
      name: "Breakfast",
      slug: "breakfast-bearish-strategy",
    },
    {
      strategy: "",
      name: "Positional buy",
      slug: "positional-buy-strategy",
    },
    {
      strategy: "",
      name: "Best buy",
      slug: "best-buy-strategy",
    },
    {
      strategy: "",
      name: "Investment",
      slug: "investment-existing-strategy",
    },
    {
      strategy: "",
      name: "Optimised investment",
      slug: "optimised-investment-strategy",
    },
  ];
  return (
    <main>
      <section
        className="container my_custom_container slider_container px-0"
        id="strategyCard"
      >
        <div className="row str-card m-0">
          {strategyArray?.map((item, index) => (
            <div
              className="parent col-md-4 justify-content-md-center "
              key={index}
              // onClick={() => navigate(`/strategy/${item?.slug}`)}
            >
              <a href={`/strategy/${item?.slug}`} target="_blank">
                <div className="card1">
                  {/* <div className="logo">
                  <span className="circle circle1"></span>
                  <span className="circle circle2"></span>
                  <span className="circle circle3"></span>
                  <span className="circle circle4"></span>
                  <span className="circle circle5">
                    <svg className="svg" viewBox="0 0 100 100" fill="white">
                      <path d="M100 34.2c-.4-2.6-3.3-4-5.3-5.3-3.6-2.4-7.1-4.7-10.7-7.1-8.5-5.7-17.1-11.4-25.6-17.1-2-1.3-4-2.7-6-4-1.4-1-3.3-1-4.8 0-5.7 3.8-11.5 7.7-17.2 11.5L5.2 29C3 30.4.1 31.8 0 34.8c-.1 3.3 0 6.7 0 10v16c0 2.9-.6 6.3 2.1 8.1 6.4 4.4 12.9 8.6 19.4 12.9 8 5.3 16 10.7 24 16 2.2 1.5 4.4 3.1 7.1 1.3 2.3-1.5 4.5-3 6.8-4.5 8.9-5.9 17.8-11.9 26.7-17.8l9.9-6.6c.6-.4 1.3-.8 1.9-1.3 1.4-1 2-2.4 2-4.1V37.3c.1-1.1.2-2.1.1-3.1 0-.1 0 .2 0 0zM54.3 12.3 88 34.8 73 44.9 54.3 32.4V12.3zm-8.6 0v20L27.1 44.8 12 34.8l33.7-22.5zM8.6 42.8 19.3 50 8.6 57.2V42.8zm37.1 44.9L12 65.2l15-10.1 18.6 12.5v20.1zM50 60.2 34.8 50 50 39.8 65.2 50 50 60.2zm4.3 27.5v-20l18.6-12.5 15 10.1-33.6 22.4zm37.1-30.5L80.7 50l10.8-7.2-.1 14.4z"></path>
                    </svg>
                  </span>
                </div> */}
                  <div className="glass"></div>
                  <div className="content">
                    <span className="title">
                      {item?.strategy} {item?.name} strategy
                    </span>
                    <span className="text">
                      {/* {item?.name} ({item?.strategy}) */}
                      Click to view more.
                    </span>
                  </div>
                  <div className="bottom">
                    <div className="social-buttons-container">
                      <button className="social-button .social-button1">
                        {/* <svg
                        viewBox="0 0 30 30"
                        xmlns="http://www.w3.org/2000/svg"
                        className="svg"
                      >
                        <path d="M 9.9980469 3 C 6.1390469 3 3 6.1419531 3 10.001953 L 3 20.001953 C 3 23.860953 6.1419531 27 10.001953 27 L 20.001953 27 C 23.860953 27 27 23.858047 27 19.998047 L 27 9.9980469 C 27 6.1390469 23.858047 3 19.998047 3 L 9.9980469 3 z M 22 7 C 22.552 7 23 7.448 23 8 C 23 8.552 22.552 9 22 9 C 21.448 9 21 8.552 21 8 C 21 7.448 21.448 7 22 7 z M 15 9 C 18.309 9 21 11.691 21 15 C 21 18.309 18.309 21 15 21 C 11.691 21 9 18.309 9 15 C 9 11.691 11.691 9 15 9 z M 15 11 A 4 4 0 0 0 11 15 A 4 4 0 0 0 15 19 A 4 4 0 0 0 19 15 A 4 4 0 0 0 15 11 z"></path>
                      </svg> */}
                        <img
                          alt="icon"
                          src={
                            item?.strategy === "Bullish" ? BullIcon : BearIcon
                          }
                          className="svg"
                        />
                      </button>
                      {/* <button className="social-button .social-button2">
                      <svg
                        viewBox="0 0 512 512"
                        xmlns="http://www.w3.org/2000/svg"
                        className="svg"
                      >
                        <path d="M459.37 151.716c.325 4.548.325 9.097.325 13.645 0 138.72-105.583 298.558-298.558 298.558-59.452 0-114.68-17.219-161.137-47.106 8.447.974 16.568 1.299 25.34 1.299 49.055 0 94.213-16.568 130.274-44.832-46.132-.975-84.792-31.188-98.112-72.772 6.498.974 12.995 1.624 19.818 1.624 9.421 0 18.843-1.3 27.614-3.573-48.081-9.747-84.143-51.98-84.143-102.985v-1.299c13.969 7.797 30.214 12.67 47.431 13.319-28.264-18.843-46.781-51.005-46.781-87.391 0-19.492 5.197-37.36 14.294-52.954 51.655 63.675 129.3 105.258 216.365 109.807-1.624-7.797-2.599-15.918-2.599-24.04 0-57.828 46.782-104.934 104.934-104.934 30.213 0 57.502 12.67 76.67 33.137 23.715-4.548 46.456-13.32 66.599-25.34-7.798 24.366-24.366 44.833-46.132 57.827 21.117-2.273 41.584-8.122 60.426-16.243-14.292 20.791-32.161 39.308-52.628 54.253z"></path>
                      </svg>
                    </button>
                    <button className="social-button .social-button3">
                      <svg
                        viewBox="0 0 640 512"
                        xmlns="http://www.w3.org/2000/svg"
                        className="svg"
                      >
                        <path d="M524.531,69.836a1.5,1.5,0,0,0-.764-.7A485.065,485.065,0,0,0,404.081,32.03a1.816,1.816,0,0,0-1.923.91,337.461,337.461,0,0,0-14.9,30.6,447.848,447.848,0,0,0-134.426,0,309.541,309.541,0,0,0-15.135-30.6,1.89,1.89,0,0,0-1.924-.91A483.689,483.689,0,0,0,116.085,69.137a1.712,1.712,0,0,0-.788.676C39.068,183.651,18.186,294.69,28.43,404.354a2.016,2.016,0,0,0,.765,1.375A487.666,487.666,0,0,0,176.02,479.918a1.9,1.9,0,0,0,2.063-.676A348.2,348.2,0,0,0,208.12,430.4a1.86,1.86,0,0,0-1.019-2.588,321.173,321.173,0,0,1-45.868-21.853,1.885,1.885,0,0,1-.185-3.126c3.082-2.309,6.166-4.711,9.109-7.137a1.819,1.819,0,0,1,1.9-.256c96.229,43.917,200.41,43.917,295.5,0a1.812,1.812,0,0,1,1.924.233c2.944,2.426,6.027,4.851,9.132,7.16a1.884,1.884,0,0,1-.162,3.126,301.407,301.407,0,0,1-45.89,21.83,1.875,1.875,0,0,0-1,2.611,391.055,391.055,0,0,0,30.014,48.815,1.864,1.864,0,0,0,2.063.7A486.048,486.048,0,0,0,610.7,405.729a1.882,1.882,0,0,0,.765-1.352C623.729,277.594,590.933,167.465,524.531,69.836ZM222.491,337.58c-28.972,0-52.844-26.587-52.844-59.239S193.056,219.1,222.491,219.1c29.665,0,53.306,26.82,52.843,59.239C275.334,310.993,251.924,337.58,222.491,337.58Zm195.38,0c-28.971,0-52.843-26.587-52.843-59.239S388.437,219.1,417.871,219.1c29.667,0,53.307,26.82,52.844,59.239C470.715,310.993,447.538,337.58,417.871,337.58Z"></path>
                      </svg>
                    </button> */}
                    </div>
                    {/* <div className="view-more">
                    <button className="view-more-button">View more</button>
                    <svg
                      className="svg"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    >
                      <path d="m6 9 6 6 6-6" />
                    </svg>
                  </div> */}
                  </div>
                </div>
              </a>
            </div>
          ))}
        </div>
      </section>
      <section className="section-1">
        <div className="section-1-main">
          <div className="section-content">
            <div className="section-1-content">
              <h1 className="section-1-title">
                Stock market analytics taken to a whole new level.
              </h1>
              <p className="section-1-desc">
                Stockwatch is a suite of Stock marketanalytics that will help
                you better understand your audience, which analysis they like,
                and most importantly, when they are the msot active on Twitter.
              </p>
              <div className="section-1-links">
                <a href="#" className="section-1-link social-link">
                  Get Started &#8211; <span>It's free</span>
                </a>
                <a href="#" className="section-1-alt-link">
                  {" "}
                  Learn more &#10230;
                </a>
              </div>
              <div className="section-1-imgs">
                <img
                  src="https://rvs-chirp-landing-page.vercel.app/Assets/userAvatar01.svg"
                  alt=""
                />
                <img
                  src="https://rvs-chirp-landing-page.vercel.app/Assets/userAvatar02.svg"
                  alt=""
                />
                <img
                  src="https://rvs-chirp-landing-page.vercel.app/Assets/userAvatar03.svg"
                  alt=""
                />
                <img
                  src="https://rvs-chirp-landing-page.vercel.app/Assets/userAvatar04.svg"
                  alt=""
                />
                <img
                  src="https://rvs-chirp-landing-page.vercel.app/Assets/userAvatar05.svg"
                  alt=""
                />
                <img
                  src="https://rvs-chirp-landing-page.vercel.app/Assets/userAvatar06.svg"
                  alt=""
                />
                <img
                  src="https://rvs-chirp-landing-page.vercel.app/Assets/userAvatar07.svg"
                  alt=""
                />
                <img
                  src="https://rvs-chirp-landing-page.vercel.app/Assets/userAvatar08.svg"
                  alt=""
                />
                <img
                  src="https://rvs-chirp-landing-page.vercel.app/Assets/userAvatar09.svg"
                  alt=""
                />
              </div>
              <p className="section-1-alt-txt">
                Join <span>195</span> others who have analyzed their followers
                and scheduled <span>1342</span> analysis!
              </p>
            </div>
            <div className="section-1-img">
              <img
                src="https://rvs-chirp-landing-page.vercel.app/Assets/Hero-Image-Desktop.png"
                alt=""
                className="section-1-hero-img"
              />
            </div>
          </div>
        </div>
      </section>

      {/* <section className="pricing-section section-4">
        <div className="container">
          <div className="row justify-content-md-center">
            <div className="col-xl-5 col-lg-6 col-md-8">
              <div className="section-title text-center title-ex1">
                <h2>Pricing Tables</h2>
                <p>
                  Here are some our plans. Go with anyone that comforts you.
                </p>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-md-3">
              <div className="price-card ">
                <h2>Breakfast</h2>
                <p>The standard strategy</p>
                <p className="price">
                  <span>49</span>/ Month
                </p>
                <ul className="pricing-offers">
                  <li>6 Domain Names</li>
                  <li>8 E-Mail Address</li>
                  <li>10GB Disk Space</li>
                  <li>Monthly Bandwidth</li>
                  <li>Powerful Admin Panel</li>
                </ul>
                <button
                  className="btn btn-primary btn-mid"
                  onClick={() => navigate("/stocks/breakfast-strategy")}
                >
                  Buy Now
                </button>
              </div>
            </div>
            <div className="col-md-3">
              <div className="price-card featured">
                <h2>Positional</h2>
                <p>Most popular strategy</p>
                <p className="price">
                  <span>69</span>/ Month
                </p>
                <ul className="pricing-offers">
                  <li>6 Domain Names</li>
                  <li>8 E-Mail Address</li>
                  <li>10GB Disk Space</li>
                  <li>Monthly Bandwidth</li>
                  <li>Powerful Admin Panel</li>
                </ul>
                <button
                  onClick={() => navigate("/stocks/positional-strategy")}
                  className="btn btn-primary btn-mid"
                >
                  Buy Now
                </button>
              </div>
            </div>
            <div className="col-md-3">
              <div className="price-card ">
                <h2>Business</h2>
                <p>For the whole team</p>
                <p className="price">
                  <span>89</span>/ Month
                </p>
                <ul className="pricing-offers">
                  <li>6 Domain Names</li>
                  <li>8 E-Mail Address</li>
                  <li>10GB Disk Space</li>
                  <li>Monthly Bandwidth</li>
                  <li>Powerful Admin Panel</li>
                </ul>
                <a href="#" className="btn btn-primary btn-mid">
                  Buy Now
                </a>
              </div>
            </div>
            <div className="col-md-3">
              <div className="price-card featured">
                <h2>Business</h2>
                <p>For the whole team</p>
                <p className="price">
                  <span>89</span>/ Month
                </p>
                <ul className="pricing-offers">
                  <li>6 Domain Names</li>
                  <li>8 E-Mail Address</li>
                  <li>10GB Disk Space</li>
                  <li>Monthly Bandwidth</li>
                  <li>Powerful Admin Panel</li>
                </ul>
                <a href="#" className="btn btn-primary btn-mid">
                  Buy Now
                </a>
              </div>
            </div>
          </div>
        </div>
      </section> */}
      <section className="section-2">
        <div className="section-2-main">
          <div className="section-2-1">
            <h1 className="section-2-1-title">
              Features that help you <br /> Tweet smarter.
            </h1>
          </div>
          <div className="section-2-2">
            <div className="cards">
              <div className="card">
                <div className="card-img">
                  <img
                    src="https://rvs-chirp-landing-page.vercel.app/Assets/statistics.svg"
                    alt=""
                  />
                </div>
                <h4 className="card-title">Analytics</h4>
                <p className="card-text">
                  We constantly monitor your audience as it grows - so you can
                  Tweet when your followers are most likely to be online and
                  ready to engage with your content.
                </p>
              </div>
              <div className="card">
                <div className="card-img">
                  <img
                    src="https://rvs-chirp-landing-page.vercel.app/Assets/emotsmile.svg"
                    alt=""
                  />
                </div>
                <h4 className="card-title">Smart Analyzer</h4>
                <p className="card-text">
                  Stockwatch automatically recognizes your followers most active
                  times and automatically sends you notifications if you're
                  missing out on an opportunity.
                </p>
              </div>
              <div className="card">
                <div className="card-img">
                  <img
                    src="https://rvs-chirp-landing-page.vercel.app/Assets/newspaper.svg"
                    alt=""
                  />
                </div>
                <h4 className="card-title">Scheduled Your analysis</h4>
                <p className="card-text">
                  Quality analysis drive tons of engagement. With Chirp, you can
                  write analysis in an advance and schedule them when your
                  audience is most likely to read.
                </p>
              </div>
              <div className="card">
                <div className="card-img">
                  <img
                    src="https://rvs-chirp-landing-page.vercel.app/Assets/night-mode.svg"
                    alt=""
                  />
                </div>
                <h4 className="card-title">Dark Mode</h4>
                <p className="card-text">
                  Friendly on the eyes, no matter what time you write your
                  analysis. All colors are chosen to make sure your eyes are at
                  ease at all times.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="section-3">
        <div className="section-3-main">
          <div className="section-3-1">
            <h1 className="section-3-1-title">What our customers say</h1>
          </div>
          <div className="section-3-2">
            <div className="cards">
              <div className="card">
                <div className="card-details">
                  <div className="card-user-details">
                    <div className="card-user-img">
                      <img
                        src="https://rvs-chirp-landing-page.vercel.app/Assets/userAvatar01.svg"
                        alt=""
                      />
                    </div>
                    <div className="card-user-content">
                      <h4>Analytics</h4>
                      <span>@sara_may</span>
                    </div>
                  </div>
                  <div className="card-twitter">
                    {/* <img
                      // src="https://rvs-chirp-landing-page.vercel.app/Assets/Twitter-Blue.svg"
                      // src="https://rvs-chirp-landing-page.vercel.app/Assets/Twitter-Blue.svg"
                      alt=""
                    /> */}
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      version="1.1"
                      xmlnsXlink="http://www.w3.org/1999/xlink"
                      xmlnssvgjs="http://svgjs.com/svgjs"
                      width="24"
                      height="24"
                      x="0"
                      y="0"
                      viewBox="0 0 1227 1227"
                      // style={{ :new 0 0 512 512}}
                      xmlSpace="preserve"
                    >
                      <g>
                        <path
                          d="M654.53 592.55 930.65 987.5H817.33L592.01 665.22v-.02l-33.08-47.31-263.21-376.5h113.32l212.41 303.85z"
                          fill="#000000"
                          data-original="#000000"
                        ></path>
                        <path
                          d="M1094.42 0H132.58C59.36 0 0 59.36 0 132.58v961.84C0 1167.64 59.36 1227 132.58 1227h961.84c73.22 0 132.58-59.36 132.58-132.58V132.58C1227 59.36 1167.64 0 1094.42 0zm-311.8 1040.52L554.61 708.68l-285.47 331.84h-73.78l326.49-379.5-326.49-475.17h249.02l215.91 314.23 270.32-314.23h73.78l-311.33 361.9h-.02l338.6 492.77z"
                          fill="#000000"
                          data-original="#000000"
                        ></path>
                      </g>
                    </svg>
                  </div>
                </div>
                <p className="card-text">
                  I just tried out @Stockwatch and it's amazing, love all the
                  analytics I can see.
                </p>
                <div className="card-footer">
                  <div className="card-like">
                    <img
                      src="https://rvs-chirp-landing-page.vercel.app/Assets/Like.svg"
                      alt=""
                    />
                    <span>2</span>
                  </div>
                  <div className="card-log">
                    <span>March 2, 2021</span>
                  </div>
                </div>
              </div>
              <div className="card">
                <div className="card-details">
                  <div className="card-user-details">
                    <div className="card-user-img">
                      <img
                        src="https://rvs-chirp-landing-page.vercel.app/Assets/userAvatar04.svg"
                        alt=""
                      />
                    </div>
                    <div className="card-user-content">
                      <h4>Jack Scott</h4>
                      <span>@jackscott_</span>
                    </div>
                  </div>
                  <div className="card-twitter">
                    {/* <img
                      src="https://rvs-chirp-landing-page.vercel.app/Assets/Twitter-Blue.svg"
                      alt=""
                    /> */}
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      version="1.1"
                      xmlnsXlink="http://www.w3.org/1999/xlink"
                      xmlnssvgjs="http://svgjs.com/svgjs"
                      width="24"
                      height="24"
                      x="0"
                      y="0"
                      viewBox="0 0 1227 1227"
                      // style={{ :new 0 0 512 512}}
                      xmlSpace="preserve"
                    >
                      <g>
                        <path
                          d="M654.53 592.55 930.65 987.5H817.33L592.01 665.22v-.02l-33.08-47.31-263.21-376.5h113.32l212.41 303.85z"
                          fill="#000000"
                          data-original="#000000"
                        ></path>
                        <path
                          d="M1094.42 0H132.58C59.36 0 0 59.36 0 132.58v961.84C0 1167.64 59.36 1227 132.58 1227h961.84c73.22 0 132.58-59.36 132.58-132.58V132.58C1227 59.36 1167.64 0 1094.42 0zm-311.8 1040.52L554.61 708.68l-285.47 331.84h-73.78l326.49-379.5-326.49-475.17h249.02l215.91 314.23 270.32-314.23h73.78l-311.33 361.9h-.02l338.6 492.77z"
                          fill="#000000"
                          data-original="#000000"
                        ></path>
                      </g>
                    </svg>
                  </div>
                </div>
                <p className="card-text">
                  I initially started using Stockwatch to support the co-founder
                  as I personally knew him, but after having tried it out for a
                  few weeks, I can genuinely say this changed my Stock
                  marketgame.
                </p>
                <div className="card-footer">
                  <div className="card-like">
                    <img
                      src="https://rvs-chirp-landing-page.vercel.app/Assets/Like.svg"
                      alt=""
                    />
                    <span>32</span>
                  </div>
                  <div className="card-log">
                    <span>March 2, 2021</span>
                  </div>
                </div>
              </div>
              <div className="card">
                <div className="card-details">
                  <div className="card-user-details">
                    <div className="card-user-img">
                      <img
                        src="https://rvs-chirp-landing-page.vercel.app/Assets/userAvatar03.svg"
                        alt=""
                      />
                    </div>
                    <div className="card-user-content">
                      <h4>Jessica May</h4>
                      <span>@jmay98</span>
                    </div>
                  </div>
                  <div className="card-twitter">
                    {/* <img
                      src="https://rvs-chirp-landing-page.vercel.app/Assets/Twitter-Blue.svg"
                      alt=""
                    /> */}
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      version="1.1"
                      xmlnsXlink="http://www.w3.org/1999/xlink"
                      xmlnssvgjs="http://svgjs.com/svgjs"
                      width="24"
                      height="24"
                      x="0"
                      y="0"
                      viewBox="0 0 1227 1227"
                      // style={{ :new 0 0 512 512}}
                      xmlSpace="preserve"
                    >
                      <g>
                        <path
                          d="M654.53 592.55 930.65 987.5H817.33L592.01 665.22v-.02l-33.08-47.31-263.21-376.5h113.32l212.41 303.85z"
                          fill="#000000"
                          data-original="#000000"
                        ></path>
                        <path
                          d="M1094.42 0H132.58C59.36 0 0 59.36 0 132.58v961.84C0 1167.64 59.36 1227 132.58 1227h961.84c73.22 0 132.58-59.36 132.58-132.58V132.58C1227 59.36 1167.64 0 1094.42 0zm-311.8 1040.52L554.61 708.68l-285.47 331.84h-73.78l326.49-379.5-326.49-475.17h249.02l215.91 314.23 270.32-314.23h73.78l-311.33 361.9h-.02l338.6 492.77z"
                          fill="#000000"
                          data-original="#000000"
                        ></path>
                      </g>
                    </svg>
                  </div>
                </div>
                <p className="card-text">
                  Absolutely love everything about Chirp, from the design to how
                  everything works smoothly.
                </p>
                <div className="card-footer">
                  <div className="card-like">
                    <img
                      src="https://rvs-chirp-landing-page.vercel.app/Assets/Like.svg"
                      alt=""
                    />
                    <span>221</span>
                  </div>
                  <div className="card-log">
                    <span>March 2, 2021</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* <section className="section-4">
        <div className="section-4-main">
          <div className="section-4-1">
            <h1 className="section-4-1-title">One simple price plan.</h1>
            <p className="section-4-1-text">
              Start growing your Stock marketaccount by analyzing your
              follower's patterns.
            </p>
          </div>
          <div className="section-4-2">
            <div className="pricing-cards">
              <div className="pricing-card">
                <div className="pricing-card-details">
                  <span>Montly</span>
                  <div className="pricing-user-content">
                    <h1>$0</h1>
                    <span>/mo</span>
                  </div>
                </div>
                <ul className="pricing-card-lists">
                  <li>
                    <img
                      src="https://rvs-chirp-landing-page.vercel.app/Assets/Checkmark.svg"
                      alt=""
                    />{" "}
                    <span>Unlimited* scheduled analysis and threads.</span>
                  </li>
                  <li>
                    <img
                      src="https://rvs-chirp-landing-page.vercel.app/Assets/Checkmark.svg"
                      alt=""
                    />{" "}
                    <span>Schedule up to 3 weeks in advance.</span>
                  </li>
                  <li>
                    <img
                      src="https://rvs-chirp-landing-page.vercel.app/Assets/Checkmark.svg"
                      alt=""
                    />{" "}
                    <span>
                      Real-time audience analytics tracking up to 5k followers.
                    </span>
                  </li>
                </ul>
                <div className="pricing-card-footer">
                  <a href="#" className="social-link">
                    <img
                      src="https://rvs-chirp-landing-page.vercel.app/Assets/Twitter.svg"
                      alt=""
                    />
                    <span>Sign in with Twitter</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section> */}
    </main>
  );
};

export default HomeBelow;
