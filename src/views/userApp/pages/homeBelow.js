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
        <h1 className="section-1-title">Strategies</h1>
        <div className="row str-card ">
          {strategyArray?.map((item, index) => (
            <div
              className="parent col-md-4 justify-content-md-center "
              key={index}
            >
              <a href={`/strategy/${item?.slug}`} target="_blank">
                <div className="card1">
                  <div className="glass"></div>
                  <div className="content">
                    <span className="title">
                      {item?.strategy} {item?.name} strategy
                    </span>
                    {/* <span className="text">Click to view more.</span> */}
                  </div>
                  {/* <div className="bottom">
                    <div className="social-buttons-container">
                      <button className="social-button .social-button1">
                        <img
                          alt="icon"
                          src={
                            item?.strategy === "Bullish" ? BullIcon : BearIcon
                          }
                          className="svg"
                        />
                      </button>
                    </div>
                  </div> */}
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
