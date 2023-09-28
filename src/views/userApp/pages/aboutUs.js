import React from "react";
import "../../../scss/aboutus.scss";

const AboutUs = () => {
  return (
    <>
      <section class="about-section">
        <div class="container">
          <div class="row">
            <div class="content-column col-lg-6 col-md-12 col-sm-12 order-2">
              <div class="inner-column">
                <div class="sec-title">
                  <span class="title">Behind This Platform</span>
                  <h2>We Are Stock Enthusiast Working From Last 15 Years</h2>
                </div>
                <div class="text">
                  Mrs Shubhangi Shitalkumar Dagwar having more than 15yrs of
                  experience in stock market. She is also pursuing her Ph.D in
                  algo trading. The main purposed behind Stockwatch is to
                  provide education and guidance about stock market so that User
                  may get proper benefit from this.
                </div>
                <div class="text">
                  Stockwatch provide momentum based stock signal in real time
                  application. It provide the signal to day traders and
                  investors too. It also provide the Target price of signal.
                  User may get benefit from this with minimum risk.
                </div>
                <div class="btn-box">
                  <a href="/" class="theme-btn btn-style-one">
                    Explore Stock Watch
                  </a>
                </div>
              </div>
            </div>

            <div class="image-column col-lg-6 col-md-12 col-sm-12">
              <div class="inner-column wow fadeInLeft">
                <div class="author-desc">
                  <h2>Stock watch</h2>
                  <span>Stock analysis</span>
                </div>
                <figure class="image-1">
                  <a href="#" class="lightbox-image" data-fancybox="images">
                    <img
                      title="Stock watch"
                      src="https://i.ibb.co/QP6Nmpf/image-1-about.jpg"
                      alt=""
                    ></img>
                  </a>
                </figure>
              </div>
            </div>
          </div>
          <div class="sec-title">
            <span class="title">About Stock watch</span>
            <h2>Vision of Stock watch</h2>
          </div>
          <div class="text">
            Stockwatch website is designed for purely educational purpose. The
            main object of stockwatch is to provide the accurate signal to
            traders as well as Investors.
          </div>
          {/* <div class="text">
            We take a small toolkit here and ride it well so that it is fit for
            your use. One who performs well and looks even better.
          </div>
          <div class="text">
            Here we are trying to give you all kinds of technical content,
            whether it is related to designing or functionality. We are creating
            content on a lot of languages and will continue to make it free of
            cost even if you use it without any problem. Which is a very
            important thing.
          </div>
          <div class="text">
            Here you can also share the content you create, if our technical
            team likes it, then we will also share it on our blog.
          </div>
          <div class="text">
            In the end, I would say keep visiting our website and enjoy the
            quality content.
          </div> */}
        </div>
      </section>
    </>
  );
};

export default AboutUs;
