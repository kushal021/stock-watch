import { CBreadcrumb, CBreadcrumbItem, CContainer } from "@coreui/react";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "../../../scss/inthenews.scss";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import axios from "axios";

const News = () => {
  const [data, setData] = useState();
  const [category, setCategory] = useState();

  const getAllNews = async () => {
    try {
      const response = await axios.get(
        "https://www.cnbctv18.com/api/v1/home-page-changes"
      );
      console.log("response====>in news", response?.data);
      setData(response?.data);
    } catch (error) {
      console.log("errrrror", error);
    }
  };

  useEffect(() => {
    getAllNews();
  }, []);
  useEffect(() => {
    if (data) {
      setCategory({
        key: Object.keys(data)[0],
        data: data[Object.keys(data)[0]],
      });
    }
  }, [data]);
  return (
    <div>
      {" "}
      <div className="bred-crumb">
        <CContainer className="my_custom_container">
          <div className="bread-title">In The News</div>
          <div className="bread-content">
            <CBreadcrumb className="breads">
              <CBreadcrumbItem>
                <Link href="/"> Home </Link>
              </CBreadcrumbItem>
              <CBreadcrumbItem active>In The News</CBreadcrumbItem>
            </CBreadcrumb>
          </div>
        </CContainer>
      </div>
      <CContainer className="my_custom_container my-3">
        {/* <div className="main-news-title">In The News</div> */}
        <div className="card card-tabsClass">
          <div className="card-header card-header-tabsClass">
            <ul
              className="nav nav-tabsClass nav-tabs nav-tabs-tabsClass justify-content-center"
              role="tablist"
            >
              <Swiper
                spaceBetween={30}
                //   centeredSlides={true}
                slidesPerView={6}
                breakpoints={{
                  576: {
                    slidesPerView: 3,
                  },
                  768: {
                    width: 768,
                    slidesPerView: 6,
                  },
                  328: {
                    slidesPerView: 1,
                  },
                }}
                //   pagination={{
                //     clickable: true,
                //   }}
                navigation={true}
                modules={[Navigation]}
                grabCursor={true}
                className="mySwiper"
              >
                {data &&
                  Object.entries(data)?.map(([key, value], index) => (
                    <SwiperSlide key={index}>
                      <li
                        className="nav-item nav-item-tabsClass "
                        onClick={() => setCategory({ key, data: value })}
                      >
                        <p
                          className={` nav-link nav-link-tabsClass ${
                            key === category?.key && "active"
                          }`}
                        >
                          {key}
                        </p>
                      </li>
                      {/* <li>key</li> */}
                    </SwiperSlide>
                  ))}
              </Swiper>
            </ul>
          </div>
          {console.log("key category", category)}
        </div>
        {0 ? (
          <>
            <div className="loader-content">
              <div className="spinner-border text-secondary"></div>
            </div>
          </>
        ) : (
          <>
            <div className="content-wrapper">
              {category?.data &&
                category?.data?.map((item, index) => (
                  <figure className="snip1360" key={index}>
                    <img src={item?.post_image} alt="sample88" />
                    <figcaption>
                      <h2>{item?.headline?.substring(0, 150).concat("...")}</h2>
                      <p>{item?.intro?.substring(0, 100).concat("...")}</p>
                      <a
                        href={`https://www.cnbctv18.com/${item?.posturl}`}
                        className="read-more"
                        target="_blank"
                      >
                        Read More
                      </a>
                    </figcaption>
                  </figure>
                ))}
              {/* 
              <div className="news-card">
                <a href="#" className="news-card__card-link"></a>
                <img
                  src="https://images.pexels.com/photos/631954/pexels-photo-631954.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260"
                  alt=""
                  className="news-card__image"
                />
                <div className="news-card__text-wrapper">
                  <h2 className="news-card__title">
                    Amazing Second Title that is Quite Long
                  </h2>
                  <div className="news-card__post-date">Jan 29, 2018</div>
                  <div className="news-card__details-wrapper">
                    <p className="news-card__excerpt">
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                      Ullam obcaecati ex natus nulla rem sequi laborum quod
                      fugit&hellip;
                    </p>
                    <a href="#" className="news-card__read-more">
                      Read more <i className="fas fa-long-arrow-alt-right"></i>
                    </a>
                  </div>
                </div>
              </div>

              <div className="news-card">
                <a href="#" className="news-card__card-link"></a>
                <img
                  src="https://images.pexels.com/photos/247599/pexels-photo-247599.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
                  alt=""
                  className="news-card__image"
                />
                <div className="news-card__text-wrapper">
                  <h2 className="news-card__title">Amazing Title</h2>
                  <div className="news-card__post-date">Jan 29, 2018</div>
                  <div className="news-card__details-wrapper">
                    <p className="news-card__excerpt">
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Officiis beatae&hellip;
                    </p>
                    <a href="#" className="news-card__read-more">
                      Read more <i className="fas fa-long-arrow-alt-right"></i>
                    </a>
                  </div>
                </div>
              </div>

              <div className="news-card">
                <a href="#" className="news-card__card-link"></a>
                <img
                  src="https://images.pexels.com/photos/248486/pexels-photo-248486.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260"
                  alt=""
                  className="news-card__image"
                />
                <div className="news-card__text-wrapper">
                  <h2 className="news-card__title">
                    Amazing Forth Title that is Quite Long
                  </h2>
                  <div className="news-card__post-date">Jan 29, 2018</div>
                  <div className="news-card__details-wrapper">
                    <p className="news-card__excerpt">
                      Lorem ipsum dolor sit amet!
                    </p>
                    <a href="#" className="news-card__read-more">
                      Read more <i className="fas fa-long-arrow-alt-right"></i>
                    </a>
                  </div>
                </div>
              </div>

              <div className="news-card">
                <a href="#" className="news-card__card-link"></a>
                <img
                  src="https://images.pexels.com/photos/206660/pexels-photo-206660.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260"
                  alt=""
                  className="news-card__image"
                />
                <div className="news-card__text-wrapper">
                  <h2 className="news-card__title">Amazing Fifth Title</h2>
                  <div className="news-card__post-date">Jan 29, 2018</div>
                  <div className="news-card__details-wrapper">
                    <p className="news-card__excerpt">
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Est pariatur nemo tempore repellat? Ullam sed officia iure
                      architecto deserunt distinctio&hellip;
                    </p>
                    <a href="#" className="news-card__read-more">
                      Read more <i className="fas fa-long-arrow-alt-right"></i>
                    </a>
                  </div>
                </div>
              </div>

              <div className="news-card">
                <a href="#" className="news-card__card-link"></a>
                <img
                  src="https://images.pexels.com/photos/210243/pexels-photo-210243.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260"
                  alt=""
                  className="news-card__image"
                />
                <div className="news-card__text-wrapper">
                  <h2 className="news-card__title">
                    Amazing 6<sup>th</sup> Title
                  </h2>
                  <div className="news-card__post-date">Jan 29, 2018</div>
                  <div className="news-card__details-wrapper">
                    <p className="news-card__excerpt">
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Est pariatur nemo tempore repellat? Ullam sed officia.
                    </p>
                    <a href="#" className="news-card__read-more">
                      Read more <i className="fas fa-long-arrow-alt-right"></i>
                    </a>
                  </div>
                </div>
              </div> */}
            </div>
          </>
        )}
        <div></div>
      </CContainer>
    </div>
  );
};

export default News;
