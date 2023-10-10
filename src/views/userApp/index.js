import React, { useEffect, useState } from "react";
import ApexCharts from "../userApp/components/ChartComp";
import Slider from "src/helper/Slider";
import { CCol, CRow } from "@coreui/react";
import { Link, useNavigate } from "react-router-dom";
import stockImg from "../../assets/images/6256458.jpg";
import HomeBelow from "./pages/homeBelow";
import HomeSlide from "./components/home/HomeSlide";
import LiveData from "./components/home/LiveData";
import axios from "axios";

const Index = () => {
  const [sliderData, setSliderData] = useState([]);
  const [viceVersa, setViceVersa] = useState(false);
  const [viceVersaCards, setViceVersaCards] = useState(1);
  const [data, setData] = useState();
  const [sensex, setSensex] = useState();
  const navigate = useNavigate();

  const arr = [
    {
      _id: "639acb46eedaa913c8fe912b",
      logo: "https://storage.googleapis.com/download/storage/v1/b/tradeunlisted-aef3b.appspot.com/o/images%2F7650.710156398491elcid-investments-unlisted-share.webp?generation=1671518176373856&alt=media",
      name: "Elcid Investments Limited unlisted shares",
      urlName: "elcid investments unlisted shares",
      sector: "Finance",
      region: "Indian",
      pricePerShare: 0,
      brokerPrice: null,
      top: 41,
      status: "Sold Out",
      schemaMarkup:
        '{\n  "@context": "https://schema.org",\n  "@type": "Article",\n  "mainEntityOfPage": {\n    "@type": "WebPage",\n    "@id": "https://tradeunlisted.com/buy-indian-stocks/elcid-investments-unlisted-shares"\n  },\n  "headline": "Elcid Investments Limited Unlisted Share",\n  "description": "Buy or Sell Elcid Investments Limited Unlisted Shares. Download Research Paper and check prices and valuation of shares.",\n  "image": "https://storage.googleapis.com/download/storage/v1/b/tradeunlisted-aef3b.appspot.com/o/images%2F7650.710156398491elcid-investments-unlisted-share.webp?generation=1671518176373856&alt=media",  \n  "author": {\n    "@type": "Organization",\n    "name": "Trade Unlisted",\n    "url": "http://tradeunlisted.com/"\n  },  \n  "publisher": {\n    "@type": "Organization",\n    "name": "Trade Unlisted",\n    "logo": {\n      "@type": "ImageObject",\n      "url": "https://tradeunlisted.com/static/media/unlistedlogo.633ff8bf9d339671184b944bd469b977.svg"\n    }\n  },\n  "datePublished": "2022-12-08",\n  "dateModified": "2022-12-29"\n}\n \n{\n  "@context": "https://schema.org/", \n  "@type": "Product", \n  "name": "Elcid Investments Limited Unlisted Share",\n  "image": "https://storage.googleapis.com/download/storage/v1/b/tradeunlisted-aef3b.appspot.com/o/images%2F7650.710156398491elcid-investments-unlisted-share.webp?generation=1671518176373856&alt=media",\n  "description": "Buy Elcid Investments Limited unlisted shares at the best price.",\n  "brand": {\n    "@type": "Brand",\n    "name": "TradeUnlisted"\n  },\n  "offers": {\n    "@type": "Offer",\n    "url": "https://tradeunlisted.com/buy-indian-stocks/utkarsh-coreinvest-limited-unlisted-shares",\n    "priceCurrency": "INR",\n    "price": "-",\n    "availability": "https://schema.org/InStock"\n  }\n}\n  \n{\n  "@context": "https://schema.org/", \n  "@type": "BreadcrumbList", \n  "itemListElement": [{\n    "@type": "ListItem", \n    "position": 1, \n    "name": "TradeUnlisted",\n    "item": "https://tradeunlisted.com/"  \n  },{\n    "@type": "ListItem", \n    "position": 2, \n    "name": "Unlisted Shares in India",\n    "item": "https://tradeunlisted.com/buy-indian-stocks"  \n  },{\n    "@type": "ListItem", \n    "position": 3, \n    "name": "Elcid Investments Limited Unlisted Share",\n    "item": "https://tradeunlisted.com/buy-indian-stocks/elcid-investments-unlisted-shares"  \n  }]\n}\n ',
      isWatchList: false,
    },
    {
      _id: "63fdeed8467f00df8beaf881",
      logo: "https://storage.googleapis.com/download/storage/v1/b/tradeunlisted-aef3b.appspot.com/o/images%2F1500.474804718115webfil%20logo-01.png?generation=1677659243150416&alt=media",
      name: "Webfil Limited Unlisted Shares (in NSDL only)",
      urlName: "webfil unlisted shares",
      sector: "Telecom Equipments",
      region: "Indian",
      pricePerShare: 93,
      brokerPrice: null,
      top: 47,
      status: "Available",
      isWatchList: false,
    },
    {
      _id: "626d0d3fe0b6aaa29a157fea",
      logo: "https://storage.googleapis.com/download/storage/v1/b/tradeunlisted-aef3b.appspot.com/o/images%2F8938.617427816514care-health-insurance-unlisted-share.webp?generation=1671518396175295&alt=media",
      name: "Care Health Insurance Ltd (Religare Health) Unlisted Shares",
      urlName: "care health insurance limited unlisted shares",
      sector: "Insurance",
      region: "Indian",
      pricePerShare: 170,
      brokerPrice: null,
      top: null,
      status: "Available",
      schemaMarkup:
        '  \n{\n  "@context": "https://schema.org",\n  "@type": "Article",\n  "mainEntityOfPage": {\n    "@type": "WebPage",\n    "@id": "https://tradeunlisted.com/buy-indian-stocks/care-health-insurance-limited-unlisted-shares"\n  },\n  "headline": "Care Health Insurance Share Price | Buy Sell Care Health Insurance Unlisted Shares / Pre IPO Stocks",\n  "description": "Buy or Sell Care Health Insurance Unlisted Shares at best price. Free Valuation of your Care Health shares on Trade Unlisted. Explore the research report on Care Health!",\n  "image": "https://storage.googleapis.com/download/storage/v1/b/tradeunlisted-aef3b.appspot.com/o/images%2F8938.617427816514care-health-insurance-unlisted-share.webp?generation=1671518396175295&alt=media",  \n  "author": {\n    "@type": "Organization",\n    "name": "Trade Unlisted",\n    "url": "https://tradeunlisted.com/"\n  },  \n  "publisher": {\n    "@type": "Organization",\n    "name": "Trade Unlisted",\n    "logo": {\n      "@type": "ImageObject",\n      "url": "https://tradeunlisted.com/static/media/unlistedlogo.633ff8bf9d339671184b944bd469b977.svg"\n    }\n  },\n  "datePublished": "",\n  "dateModified": "2022-12-27"\n}\n \n{\n  "@context": "https://schema.org/", \n  "@type": "Product", \n  "name": "Care Health Insurance Ltd Unlisted Shares",\n  "image": "https://storage.googleapis.com/download/storage/v1/b/tradeunlisted-aef3b.appspot.com/o/images%2F8938.617427816514care-health-insurance-unlisted-share.webp?generation=1671518396175295&alt=media",\n  "description": "Buy Care Health unlisted shares at the best price.",\n  "brand": {\n    "@type": "Brand",\n    "name": "TradeUnlisted"\n  },\n  "offers": {\n    "@type": "Offer",\n    "url": "https://tradeunlisted.com/buy-indian-stocks/care-health-insurance-limited-unlisted-shares",\n    "priceCurrency": "INR",\n    "price": "141",\n    "availability": "https://schema.org/InStock"\n  }\n}\n  \n{\n  "@context": "https://schema.org/", \n  "@type": "BreadcrumbList", \n  "itemListElement": [{\n    "@type": "ListItem", \n    "position": 1, \n    "name": "TradeUnlisted",\n    "item": "https://tradeunlisted.com/"  \n  },{\n    "@type": "ListItem", \n    "position": 2, \n    "name": "Unlisted Shares in India",\n    "item": "https://tradeunlisted.com/buy-indian-stocks"  \n  },{\n    "@type": "ListItem", \n    "position": 3, \n    "name": "Care Health Unlisted Shares",\n    "item": "https://tradeunlisted.com/buy-indian-stocks/care-health-insurance-limited-unlisted-shares"  \n  }]\n}\n ',
      isWatchList: false,
    },
    {
      _id: "6312f3aa7a2a48806e6e5885",
      logo: "https://storage.googleapis.com/download/storage/v1/b/tradeunlisted-aef3b.appspot.com/o/images%2F863.1949555480944sterlite-power-unlisted-share.webp?generation=1671518321648828&alt=media",
      name: "Sterlite Power Transmission Ltd Unlisted Shares",
      urlName: "sterlite power unlisted shares",
      sector: "Power & Energy",
      region: "Indian",
      pricePerShare: 530,
      brokerPrice: null,
      top: 42,
      status: "Available",
      schemaMarkup:
        '  {\n  "@context": "https://schema.org",\n  "@type": "Article",\n  "mainEntityOfPage": {\n    "@type": "WebPage",\n    "@id": "https://tradeunlisted.com/buy-indian-stocks/sterlite-power-unlisted-shares"\n  },\n  "headline": "Sterlite Power unlisted Share Price | Buy Sell Sterlite Unlisted Shares | Pre IPO",\n  "description": "Buy or sell Sterlite Unlisted Shares. Check updated prices, download the research report. Find the right valuation of your current holdings.",\n  "image": "https://storage.googleapis.com/download/storage/v1/b/tradeunlisted-aef3b.appspot.com/o/images%2F863.1949555480944sterlite-power-unlisted-share.webp?generation=1671518321648828&alt=media",  \n  "author": {\n    "@type": "Organization",\n    "name": "Trade Unlisted",\n    "url": "https://tradeunlisted.com/"\n  },  \n  "publisher": {\n    "@type": "Organization",\n    "name": "Trade Unlisted",\n    "logo": {\n      "@type": "ImageObject",\n      "url": "https://tradeunlisted.com/static/media/unlistedlogo.633ff8bf9d339671184b944bd469b977.svg"\n    }\n  },\n  "datePublished": "",\n  "dateModified": "2022-12-27"\n}\n  \n{\n  "@context": "https://schema.org/", \n  "@type": "Product", \n  "name": "Sterlite Power Transmission Ltd Unlisted Shares",\n  "image": "https://storage.googleapis.com/download/storage/v1/b/tradeunlisted-aef3b.appspot.com/o/images%2F863.1949555480944sterlite-power-unlisted-share.webp?generation=1671518321648828&alt=media",\n  "description": "Buy Sterlite Power Transmission Ltd unlisted shares at the best price.",\n  "brand": {\n    "@type": "Brand",\n    "name": "TradeUnlisted"\n  },\n  "offers": {\n    "@type": "Offer",\n    "url": "https://tradeunlisted.com/buy-indian-stocks/sterlite-power-unlisted-shares",\n    "priceCurrency": "INR",\n    "price": "184",\n    "availability": "https://schema.org/InStock"\n  }\n}\n  \n{\n  "@context": "https://schema.org/", \n  "@type": "BreadcrumbList", \n  "itemListElement": [{\n    "@type": "ListItem", \n    "position": 1, \n    "name": "TradeUnlisted",\n    "item": "https://tradeunlisted.com/"  \n  },{\n    "@type": "ListItem", \n    "position": 2, \n    "name": "Unlisted Shares in India",\n    "item": "https://tradeunlisted.com/buy-indian-stocks"  \n  },{\n    "@type": "ListItem", \n    "position": 3, \n    "name": "Sterlite Power Unlisted Shares",\n    "item": "https://tradeunlisted.com/buy-indian-stocks/sterlite-power-unlisted-shares"  \n  }]\n}\n ',
      isWatchList: false,
    },
    {
      _id: "627cd23ff97c028d0069640c",
      logo: "https://storage.googleapis.com/download/storage/v1/b/tradeunlisted-aef3b.appspot.com/o/images%2F3097.354294149672merino-unlisted-share.webp?generation=1671517856689239&alt=media",
      name: "Merino Industries Ltd Unlisted Shares",
      urlName: "merino industries unlisted shares",
      sector: "Laminates",
      region: "Indian",
      pricePerShare: 2800,
      brokerPrice: null,
      top: 33,
      status: "Available",
      schemaMarkup:
        '  \n{\n  "@context": "https://schema.org",\n  "@type": "Article",\n  "mainEntityOfPage": {\n    "@type": "WebPage",\n    "@id": "https://tradeunlisted.com/buy-indian-stocks/merino-industries-unlisted-shares"\n  },\n  "headline": "Merino Laminates Share Price | Buy Sell Merino Industries Unlisted Shares / Pre IPO Stocks",\n  "description": "Buy or sell Merino Unlisted Shares. Check updated prices and download the research report. Find the right valuation of your current holdings.",\n  "image": "https://storage.googleapis.com/download/storage/v1/b/tradeunlisted-aef3b.appspot.com/o/images%2F3097.354294149672merino-unlisted-share.webp?generation=1671517856689239&alt=media",  \n  "author": {\n    "@type": "Organization",\n    "name": "Trade Unlisted",\n    "url": "https://tradeunlisted.com/"\n  },  \n  "publisher": {\n    "@type": "Organization",\n    "name": "Trade Unlisted",\n    "logo": {\n      "@type": "ImageObject",\n      "url": "https://tradeunlisted.com/static/media/unlistedlogo.633ff8bf9d339671184b944bd469b977.svg"\n    }\n  },\n  "datePublished": "",\n  "dateModified": "2022-12-27"\n}\n \n{\n  "@context": "https://schema.org/", \n  "@type": "Product", \n  "name": "Merino Industries Unlisted Shares",\n  "image": "https://storage.googleapis.com/download/storage/v1/b/tradeunlisted-aef3b.appspot.com/o/images%2F3097.354294149672merino-unlisted-share.webp?generation=1671517856689239&alt=media",\n  "description": "Buy Merino unlisted shares at the best price.",\n  "brand": {\n    "@type": "Brand",\n    "name": "TradeUnlisted"\n  },\n  "offers": {\n    "@type": "Offer",\n    "url": "https://tradeunlisted.com/buy-indian-stocks/merino-industries-unlisted-shares",\n    "priceCurrency": "INR",\n    "price": "3060",\n    "availability": "https://schema.org/InStock"\n  }\n}\n  \n{\n  "@context": "https://schema.org/", \n  "@type": "BreadcrumbList", \n  "itemListElement": [{\n    "@type": "ListItem", \n    "position": 1, \n    "name": "TradeUnlisted",\n    "item": "https://tradeunlisted.com/"  \n  },{\n    "@type": "ListItem", \n    "position": 2, \n    "name": "Unlisted Shares in India",\n    "item": "https://tradeunlisted.com/buy-indian-stocks"  \n  },{\n    "@type": "ListItem", \n    "position": 3, \n    "name": "Merino Unlisted Shares",\n    "item": "https://tradeunlisted.com/buy-indian-stocks/merino-industries-unlisted-shares"  \n  }]\n}\n ',
      isWatchList: false,
    },
    {
      _id: "626d0454e0b6aaa29a157da4",
      logo: "https://storage.googleapis.com/download/storage/v1/b/tradeunlisted-aef3b.appspot.com/o/images%2F277.5651239585475metropolitan-stock-exchange-msei-unlisted-share.webp?generation=1671518685121913&alt=media",
      name: "Metropolitan Stock Exchange Of India Ltd (MSEI) Unlisted Shares",
      urlName: "metropolitan stock exchange of india limited unlisted shares",
      sector: "Exchanges",
      region: "Indian",
      pricePerShare: 1.45,
      brokerPrice: null,
      top: null,
      status: "Available",
      schemaMarkup:
        '  \n{\n  "@context": "https://schema.org",\n  "@type": "Article",\n  "mainEntityOfPage": {\n    "@type": "WebPage",\n    "@id": "https://tradeunlisted.com/buy-indian-stocks/metropolitan-stock-exchange-of-india-limited-unlisted-shares"\n  },\n  "headline": "Metropolitan Stock Exchange Of India Limited (MSEI) Shares Price | Buy Sell Unlisted Shares / Pre IPO Stocks",\n  "description": "Buy or Sell Metropolitan Stock Exchange Of India Limited (MSEI) Unlisted Shares / Pre IPO at Best Prices at Trade Unlisted.",\n  "image": "https://storage.googleapis.com/download/storage/v1/b/tradeunlisted-aef3b.appspot.com/o/images%2F277.5651239585475metropolitan-stock-exchange-msei-unlisted-share.webp?generation=1671518685121913&alt=media",  \n  "author": {\n    "@type": "Organization",\n    "name": "Trade Unlisted",\n    "url": "https://tradeunlisted.com/"\n  },  \n  "publisher": {\n    "@type": "Organization",\n    "name": "Trade Unlisted",\n    "logo": {\n      "@type": "ImageObject",\n      "url": "https://tradeunlisted.com/static/media/unlistedlogo.633ff8bf9d339671184b944bd469b977.svg"\n    }\n  },\n  "datePublished": "",\n  "dateModified": "2022-12-27"\n}\n \n{\n  "@context": "https://schema.org/", \n  "@type": "Product", \n  "name": "Metropolitan Stock Exchange Of India Ltd (MSEI) Unlisted Shares",\n  "image": "https://storage.googleapis.com/download/storage/v1/b/tradeunlisted-aef3b.appspot.com/o/images%2F277.5651239585475metropolitan-stock-exchange-msei-unlisted-share.webp?generation=1671518685121913&alt=media",\n  "description": "Buy MSEI unlisted shares at the best price.",\n  "brand": {\n    "@type": "Brand",\n    "name": "TradeUnlisted"\n  },\n  "offers": {\n    "@type": "Offer",\n    "url": "https://tradeunlisted.com/buy-indian-stocks/metropolitan-stock-exchange-of-india-limited-unlisted-shares",\n    "priceCurrency": "INR",\n    "price": "1.07",\n    "availability": "https://schema.org/InStock"\n  }\n}\n  \n{\n  "@context": "https://schema.org/", \n  "@type": "BreadcrumbList", \n  "itemListElement": [{\n    "@type": "ListItem", \n    "position": 1, \n    "name": "TradeUnlisted",\n    "item": "https://tradeunlisted.com/"  \n  },{\n    "@type": "ListItem", \n    "position": 2, \n    "name": "Unlisted Shares in India",\n    "item": "https://tradeunlisted.com/buy-indian-stocks"  \n  },{\n    "@type": "ListItem", \n    "position": 3, \n    "name": "MSE Unlisted Shares",\n    "item": "https://tradeunlisted.com/buy-indian-stocks/metropolitan-stock-exchange-of-india-limited-unlisted-shares"  \n  }]\n}\n ',
      isWatchList: false,
    },
    {
      _id: "63db5d3f8218c6f69172d068",
      logo: "https://storage.googleapis.com/download/storage/v1/b/tradeunlisted-aef3b.appspot.com/o/images%2F2568.230108615672mohan-meakin-limited-unlisted-shares.jpg?generation=1675320578512605&alt=media",
      name: "Mohan Meakin Limited (Old Monk) Unlisted Shares",
      urlName: "mohan meakin limited unlisted shares",
      sector: "Brewery",
      region: "Indian",
      pricePerShare: 0,
      brokerPrice: null,
      top: null,
      status: "Sold Out",
      isWatchList: false,
    },
    {
      _id: "62595a1a09b68f3058dc29b5",
      logo: "https://storage.googleapis.com/download/storage/v1/b/tradeunlisted-aef3b.appspot.com/o/images%2F2316.5793280015932reliance-retail-unlisted-share.webp?generation=1671518753948876&alt=media",
      name: "Reliance Retail Ltd Unlisted Shares",
      urlName: "reliance retail limited unlisted shares",
      sector: "Retail",
      region: "Indian",
      pricePerShare: 2600,
      brokerPrice: null,
      top: null,
      status: "Available",
      schemaMarkup:
        '  \n{\n  "@context": "https://schema.org",\n  "@type": "Article",\n  "mainEntityOfPage": {\n    "@type": "WebPage",\n    "@id": "https://tradeunlisted.com/buy-indian-stocks/reliance-retail-limited-unlisted-shares"\n  },\n  "headline": "Reliance Retail Share Price | Buy Sell Reliance Retail Unlisted Shares / Pre IPO Stocks",\n  "description": "Buy or Sell Reliance Retail unlisted shares, check updated prices and download detailed research reports on Company\'s growth, competitors and funds.",\n  "image": "https://storage.googleapis.com/download/storage/v1/b/tradeunlisted-aef3b.appspot.com/o/images%2F2316.5793280015932reliance-retail-unlisted-share.webp?generation=1671518753948876&alt=media",  \n  "author": {\n    "@type": "Organization",\n    "name": "Trade Unlisted",\n    "url": "https://tradeunlisted.com/"\n  },  \n  "publisher": {\n    "@type": "Organization",\n    "name": "Trade Unlisted",\n    "logo": {\n      "@type": "ImageObject",\n      "url": "https://tradeunlisted.com/static/media/unlistedlogo.633ff8bf9d339671184b944bd469b977.svg"\n    }\n  },\n  "datePublished": "",\n  "dateModified": "2022-12-27"\n}\n  \n{\n  "@context": "https://schema.org/", \n  "@type": "Product", \n  "name": "Reliance Retail Ltd Unlisted Shares",\n  "image": "https://storage.googleapis.com/download/storage/v1/b/tradeunlisted-aef3b.appspot.com/o/images%2F2316.5793280015932reliance-retail-unlisted-share.webp?generation=1671518753948876&alt=media",\n  "description": "Buy Reliance Retail unlisted shares at the best price.",\n  "brand": {\n    "@type": "Brand",\n    "name": "TradeUnlisted"\n  },\n  "offers": {\n    "@type": "Offer",\n    "url": "https://tradeunlisted.com/buy-indian-stocks/reliance-retail-limited-unlisted-shares",\n    "priceCurrency": "INR",\n    "price": "2932",\n    "availability": "https://schema.org/InStock"\n  }\n}\n  \n{\n  "@context": "https://schema.org/", \n  "@type": "BreadcrumbList", \n  "itemListElement": [{\n    "@type": "ListItem", \n    "position": 1, \n    "name": "TradeUnlisted",\n    "item": "https://tradeunlisted.com/"  \n  },{\n    "@type": "ListItem", \n    "position": 2, \n    "name": "Unlisted Shares in India",\n    "item": "https://tradeunlisted.com/buy-indian-stocks"  \n  },{\n    "@type": "ListItem", \n    "position": 3, \n    "name": "Reliance retail Unlisted Shares",\n    "item": "https://tradeunlisted.com/buy-indian-stocks/reliance-retail-limited-unlisted-shares"  \n  }]\n}\n ',
      isWatchList: false,
    },
    {
      _id: "645e10ce47affd02641d26c7",
      logo: "https://storage.googleapis.com/download/storage/v1/b/tradeunlisted-aef3b.appspot.com/o/images%2F4141.111085947635Midland-Micro-finance.png?generation=1683885470726532&alt=media",
      name: "Midland Micro Finance Unlisted Shares",
      urlName: "midland micro finance unlisted shares",
      sector: "Finance",
      region: "Indian",
      pricePerShare: 150,
      brokerPrice: null,
      top: 50,
      status: "Available",
      isWatchList: false,
    },
    {
      _id: "625d278089f5c0248bcc7238",
      logo: "https://storage.googleapis.com/download/storage/v1/b/tradeunlisted-aef3b.appspot.com/o/images%2F4062.787108069259axles-india-limited-unlisted-share.webp?generation=1671518368922657&alt=media",
      name: "Axles India Ltd Unlisted Shares",
      urlName: "axles india limited unlisted shares",
      sector: "Automotive Equipments",
      region: "Indian",
      pricePerShare: 250,
      brokerPrice: null,
      top: null,
      status: "Available",
      schemaMarkup:
        '  \n{\n  "@context": "https://schema.org",\n  "@type": "Article",\n  "mainEntityOfPage": {\n    "@type": "WebPage",\n    "@id": "https://tradeunlisted.com/buy-indian-stocks/axles-india-limited-unlisted-shares"\n  },\n  "headline": "Axles India Unlisted Share Price | Buy Sell Axles Unlisted Shares / Pre IPO",\n  "description": "Buy or sell Axles Unlisted Shares. Check updated prices and download the research report. Find the right valuation of your current holdings.",\n  "image": "https://storage.googleapis.com/download/storage/v1/b/tradeunlisted-aef3b.appspot.com/o/images%2F4062.787108069259axles-india-limited-unlisted-share.webp?generation=1671518368922657&alt=media",  \n  "author": {\n    "@type": "Organization",\n    "name": "Trade Unlisted",\n    "url": "https://tradeunlisted.com/"\n  },  \n  "publisher": {\n    "@type": "Organization",\n    "name": "Trade Unlisted",\n    "logo": {\n      "@type": "ImageObject",\n      "url": "https://tradeunlisted.com/static/media/unlistedlogo.633ff8bf9d339671184b944bd469b977.svg"\n    }\n  },\n  "datePublished": "",\n  "dateModified": "2022-12-27"\n}\n  \n{\n  "@context": "https://schema.org/", \n  "@type": "Product", \n  "name": "Axles India Ltd Unlisted Shares",\n  "image": "https://storage.googleapis.com/download/storage/v1/b/tradeunlisted-aef3b.appspot.com/o/images%2F4062.787108069259axles-india-limited-unlisted-share.webp?generation=1671518368922657&alt=media",\n  "description": "Buy Axles India unlisted shares at the best price.",\n  "brand": {\n    "@type": "Brand",\n    "name": "TradeUnlisted"\n  },\n  "offers": {\n    "@type": "Offer",\n    "url": "https://tradeunlisted.com/buy-indian-stocks/axles-india-limited-unlisted-shares",\n    "priceCurrency": "INR",\n    "price": "238",\n    "availability": "https://schema.org/InStock"\n  }\n}\n  \n{\n  "@context": "https://schema.org/", \n  "@type": "BreadcrumbList", \n  "itemListElement": [{\n    "@type": "ListItem", \n    "position": 1, \n    "name": "TradeUnlisted",\n    "item": "https://tradeunlisted.com/"  \n  },{\n    "@type": "ListItem", \n    "position": 2, \n    "name": "Unlisted Shares in India",\n    "item": "https://tradeunlisted.com/buy-indian-stocks"  \n  },{\n    "@type": "ListItem", \n    "position": 3, \n    "name": "Axles India Unlisted Shares",\n    "item": "https://tradeunlisted.com/buy-indian-stocks/axles-india-limited-unlisted-shares"  \n  }]\n}\n ',
      isWatchList: false,
    },
    {
      _id: "62f1044bfd58a9c85634d30e",
      logo: "https://storage.googleapis.com/download/storage/v1/b/tradeunlisted-aef3b.appspot.com/o/images%2F7910.696766588488signify-innovatios-unlisted%20shares.webp?generation=1671517959393522&alt=media",
      name: "Signify Innovations India Ltd Unlisted Shares",
      urlName: "signify innovations india limited",
      sector: "Lighting",
      region: "Indian",
      pricePerShare: 0,
      brokerPrice: null,
      top: 40,
      status: "Sold Out",
      schemaMarkup:
        '{\n  "@context": "https://schema.org",\n  "@type": "Article",\n  "mainEntityOfPage": {\n    "@type": "WebPage",\n    "@id": "https://tradeunlisted.com/buy-indian-stocks/signify-innovations-india-limited"\n  },\n  "headline": "Signify Unlisted Share Price | Buy Sell Signify Unlisted Shares / Pre IPO",\n  "description": "Buy or sell Signify Unlisted Shares. Check updated prices and download the research report. Find the right valuation of your current holdings.",\n  "image": "https://storage.googleapis.com/download/storage/v1/b/tradeunlisted-aef3b.appspot.com/o/images%2F7910.696766588488signify-innovatios-unlisted%20shares.webp?generation=1671517959393522&alt=media",  \n  "author": {\n    "@type": "Organization",\n    "name": "Trade Unlisted",\n    "url": "https://tradeunlisted.com/"\n  },  \n  "publisher": {\n    "@type": "Organization",\n    "name": "Trade Unlisted",\n    "logo": {\n      "@type": "ImageObject",\n      "url": "https://tradeunlisted.com/static/media/unlistedlogo.633ff8bf9d339671184b944bd469b977.svg"\n    }\n  },\n  "datePublished": "",\n  "dateModified": "2022-12-27"\n}\n \n{\n  "@context": "https://schema.org/", \n  "@type": "Product", \n  "name": "Signify Innovations Unlisted Shares",\n  "image": "https://storage.googleapis.com/download/storage/v1/b/tradeunlisted-aef3b.appspot.com/o/images%2F7910.696766588488signify-innovatios-unlisted%20shares.webp?generation=1671517959393522&alt=media",\n  "description": "Buy Signify Innovations unlisted shares at the best price.",\n  "brand": {\n    "@type": "Brand",\n    "name": "TradeUnlisted"\n  },\n  "offers": {\n    "@type": "Offer",\n    "url": "https://tradeunlisted.com/buy-indian-stocks/signify-innovations-india-limited",\n    "priceCurrency": "INR",\n    "price": "1430",\n    "availability": "https://schema.org/InStock"\n  }\n}\n  \n{\n  "@context": "https://schema.org/", \n  "@type": "BreadcrumbList", \n  "itemListElement": [{\n    "@type": "ListItem", \n    "position": 1, \n    "name": "TradeUnlisted",\n    "item": "https://tradeunlisted.com/"  \n  },{\n    "@type": "ListItem", \n    "position": 2, \n    "name": "Unlisted Shares in India",\n    "item": "https://tradeunlisted.com/buy-indian-stocks"  \n  },{\n    "@type": "ListItem", \n    "position": 3, \n    "name": "Signify Unlisted Shares",\n    "item": "https://tradeunlisted.com/buy-indian-stocks/signify-innovations-india-limited"  \n  }]\n}\n ',
      isWatchList: false,
    },
    {
      _id: "627e46c60efb7dd0eb5291a1",
      logo: "https://storage.googleapis.com/download/storage/v1/b/tradeunlisted-aef3b.appspot.com/o/images%2F2857.339320631884capital-small-finance-bank-unlisted-share.webp?generation=1671517910380890&alt=media",
      name: "Capital Small Finance Bank Ltd Unlisted Shares",
      urlName: "capital small finance bank limited unlisted shares",
      sector: "Banking & Finance",
      region: "Indian",
      pricePerShare: 410,
      brokerPrice: null,
      top: 35,
      status: "Available",
      schemaMarkup:
        '  \n{\n  "@context": "https://schema.org",\n  "@type": "Article",\n  "mainEntityOfPage": {\n    "@type": "WebPage",\n    "@id": "https://tradeunlisted.com/buy-indian-stocks/capital-small-finance-bank-limited-unlisted-shares"\n  },\n  "headline": "Capital Small Finance Bank Share Price | Buy Sell Capital Small Finance Unlisted Shares / Pre IPO Stocks",\n  "description": "Buy or Sell Capital Small Finance Bank Unlisted Stocks. Check updated prices and download the research report. Find the right valuation of your current holdings.",\n  "image": "https://storage.googleapis.com/download/storage/v1/b/tradeunlisted-aef3b.appspot.com/o/images%2F2857.339320631884capital-small-finance-bank-unlisted-share.webp?generation=1671517910380890&alt=media",  \n  "author": {\n    "@type": "Organization",\n    "name": "Trade Unlisted",\n    "url": "https://tradeunlisted.com/"\n  },  \n  "publisher": {\n    "@type": "Organization",\n    "name": "Trade Unlisted",\n    "logo": {\n      "@type": "ImageObject",\n      "url": "https://tradeunlisted.com/static/media/unlistedlogo.633ff8bf9d339671184b944bd469b977.svg"\n    }\n  },\n  "datePublished": "",\n  "dateModified": "2022-12-27"\n}\n \n{\n  "@context": "https://schema.org/", \n  "@type": "Product", \n  "name": "Capital Small Finance Bank Unlisted Shares",\n  "image": "https://storage.googleapis.com/download/storage/v1/b/tradeunlisted-aef3b.appspot.com/o/images%2F2857.339320631884capital-small-finance-bank-unlisted-share.webp?generation=1671517910380890&alt=media",\n  "description": "Buy Capital Small Finance Bank unlisted shares at the best price.",\n  "brand": {\n    "@type": "Brand",\n    "name": "TradeUnlisted"\n  },\n  "offers": {\n    "@type": "Offer",\n    "url": "https://tradeunlisted.com/buy-indian-stocks/capital-small-finance-bank-limited-unlisted-shares",\n    "priceCurrency": "INR",\n    "price": "306",\n    "availability": "https://schema.org/InStock"\n  }\n}\n  \n{\n  "@context": "https://schema.org/", \n  "@type": "BreadcrumbList", \n  "itemListElement": [{\n    "@type": "ListItem", \n    "position": 1, \n    "name": "TradeUnlisted",\n    "item": "https://tradeunlisted.com/"  \n  },{\n    "@type": "ListItem", \n    "position": 2, \n    "name": "Unlisted Shares in India",\n    "item": "https://tradeunlisted.com/buy-indian-stocks"  \n  },{\n    "@type": "ListItem", \n    "position": 3, \n    "name": "Capital Small Finance Bank Unlisted Shares",\n    "item": "https://tradeunlisted.com/buy-indian-stocks/capital-small-finance-bank-limited-unlisted-shares"  \n  }]\n}\n ',
      isWatchList: false,
    },
    {
      _id: "62614ff4c24d59737099422b",
      logo: "https://storage.googleapis.com/download/storage/v1/b/tradeunlisted-aef3b.appspot.com/o/images%2F3009.485874593729icl-fincorp-limited-icl-unlisted-share.webp?generation=1671518545053291&alt=media",
      name: "ICL Fincorp Ltd Unlisted Shares",
      urlName: "icl fincorp limited unlisted shares",
      sector: "NBFC",
      region: "Indian",
      pricePerShare: 27,
      brokerPrice: null,
      top: null,
      status: "Available",
      schemaMarkup:
        ' \n{\n  "@context": "https://schema.org",\n  "@type": "Article",\n  "mainEntityOfPage": {\n    "@type": "WebPage",\n    "@id": "https://tradeunlisted.com/buy-indian-stocks/icl-fincorp-limited-unlisted-shares"\n  },\n  "headline": "ICL Fincorp Unlisted Share Price | Buy Sell OYO ICL Fincorp Unlisted Shares / Pre IPO",\n  "description": "Buy or sell ICL Fincorp Unlisted Shares. Check updated prices and download the research report. Find the right valuation of your current holdings.",\n  "image": "https://storage.googleapis.com/download/storage/v1/b/tradeunlisted-aef3b.appspot.com/o/images%2F3009.485874593729icl-fincorp-limited-icl-unlisted-share.webp?generation=1671518545053291&alt=media",  \n  "author": {\n    "@type": "Organization",\n    "name": "Trade Unlisted",\n    "url": "https://tradeunlisted.com/"\n  },  \n  "publisher": {\n    "@type": "Organization",\n    "name": "Trade Unlisted",\n    "logo": {\n      "@type": "ImageObject",\n      "url": "https://tradeunlisted.com/static/media/unlistedlogo.633ff8bf9d339671184b944bd469b977.svg"\n    }\n  },\n  "datePublished": "",\n  "dateModified": "2022-12-27"\n}\n \n{\n  "@context": "https://schema.org/", \n  "@type": "Product", \n  "name": "ICL Fincorp Ltd Unlisted Shares",\n  "image": "https://storage.googleapis.com/download/storage/v1/b/tradeunlisted-aef3b.appspot.com/o/images%2F3009.485874593729icl-fincorp-limited-icl-unlisted-share.webp?generation=1671518545053291&alt=media",\n  "description": "Buy ICL Fincorp unlisted shares at the best price.",\n  "brand": {\n    "@type": "Brand",\n    "name": "TradeUnlisted"\n  },\n  "offers": {\n    "@type": "Offer",\n    "url": "https://tradeunlisted.com/buy-indian-stocks/icl-fincorp-limited-unlisted-shares",\n    "priceCurrency": "INR",\n    "price": "26",\n    "availability": "https://schema.org/InStock"\n  }\n}\n  \n{\n  "@context": "https://schema.org/", \n  "@type": "BreadcrumbList", \n  "itemListElement": [{\n    "@type": "ListItem", \n    "position": 1, \n    "name": "TradeUnlisted",\n    "item": "https://tradeunlisted.com/"  \n  },{\n    "@type": "ListItem", \n    "position": 2, \n    "name": "Unlisted Shares in India",\n    "item": "https://tradeunlisted.com/buy-indian-stocks"  \n  },{\n    "@type": "ListItem", \n    "position": 3, \n    "name": "ICL Fincorp Unlisted Shares",\n    "item": "https://tradeunlisted.com/buy-indian-stocks/icl-fincorp-limited-unlisted-shares"  \n  }]\n}\n ',
      isWatchList: false,
    },
    {
      _id: "633ec436aaf7fde9f112cacb",
      logo: "https://storage.googleapis.com/download/storage/v1/b/tradeunlisted-aef3b.appspot.com/o/images%2F1099.2736520733981nayara-energy-unlisted-share.webp?generation=1671518198072405&alt=media",
      name: "Nayara Energy (Formerly Essar Oil) Unlisted Shares",
      urlName: "nayara unlisted shares",
      sector: "Power & Energy",
      region: "Indian",
      pricePerShare: 230,
      brokerPrice: null,
      top: 41,
      status: "Available",
      schemaMarkup:
        '  \n{\n  "@context": "https://schema.org",\n  "@type": "Article",\n  "mainEntityOfPage": {\n    "@type": "WebPage",\n    "@id": "https://tradeunlisted.com/buy-indian-stocks/nayara-unlisted-shares"\n  },\n  "headline": "Nayara Unlisted Share Price | Buy Sell Nayara Energy Unlisted Shares / Pre IPO",\n  "description": "Buy or sell Nayara Unlisted Shares. Check updated prices and download the research report. Find the right valuation of your current holdings.",\n  "image": "https://storage.googleapis.com/download/storage/v1/b/tradeunlisted-aef3b.appspot.com/o/images%2F1099.2736520733981nayara-energy-unlisted-share.webp?generation=1671518198072405&alt=media",  \n  "author": {\n    "@type": "Organization",\n    "name": "Trade Unlisted",\n    "url": "https://tradeunlisted.com/"\n  },  \n  "publisher": {\n    "@type": "Organization",\n    "name": "Trade Unlisted",\n    "logo": {\n      "@type": "ImageObject",\n      "url": "https://tradeunlisted.com/static/media/unlistedlogo.633ff8bf9d339671184b944bd469b977.svg"\n    }\n  },\n  "datePublished": "",\n  "dateModified": "2022-12-27"\n}\n \n{\n  "@context": "https://schema.org/", \n  "@type": "Product", \n  "name": "Nayara Energy Unlisted Shares",\n  "image": "https://storage.googleapis.com/download/storage/v1/b/tradeunlisted-aef3b.appspot.com/o/images%2F1099.2736520733981nayara-energy-unlisted-share.webp?generation=1671518198072405&alt=media",\n  "description": "Buy Nayara Energy unlisted shares at the best price.",\n  "brand": {\n    "@type": "Brand",\n    "name": "TradeUnlisted"\n  },\n  "offers": {\n    "@type": "Offer",\n    "url": "https://tradeunlisted.com/buy-indian-stocks/nayara-unlisted-shares",\n    "priceCurrency": "INR",\n    "price": "201",\n    "availability": "https://schema.org/InStock"\n  }\n}\n  \n{\n  "@context": "https://schema.org/", \n  "@type": "BreadcrumbList", \n  "itemListElement": [{\n    "@type": "ListItem", \n    "position": 1, \n    "name": "TradeUnlisted",\n    "item": "https://tradeunlisted.com/"  \n  },{\n    "@type": "ListItem", \n    "position": 2, \n    "name": "Unlisted Shares in India",\n    "item": "https://tradeunlisted.com/buy-indian-stocks"  \n  },{\n    "@type": "ListItem", \n    "position": 3, \n    "name": "Nayara Unlisted Shares",\n    "item": "https://tradeunlisted.com/buy-indian-stocks/nayara-unlisted-shares"  \n  }]\n}\n ',
      isWatchList: false,
    },
    {
      _id: "6259495900d5a37b747a198f",
      logo: "https://storage.googleapis.com/download/storage/v1/b/tradeunlisted-aef3b.appspot.com/o/images%2F8535.504609197147frick-india-limited-unlisted-share.webp?generation=1671518468565811&alt=media",
      name: "Frick India Ltd Unlisted Shares",
      urlName: "frick india limited unlisted shares",
      sector: "Industrial Equipments",
      region: "Indian",
      pricePerShare: 5000,
      brokerPrice: null,
      top: null,
      status: "Available",
      schemaMarkup:
        '  \n{\n  "@context": "https://schema.org",\n  "@type": "Article",\n  "mainEntityOfPage": {\n    "@type": "WebPage",\n    "@id": "https://tradeunlisted.com/buy-indian-stocks/frick-india-limited-unlisted-shares"\n  },\n  "headline": "Frick India Share Price | Buy Sell Frick India Ltd Unlisted Shares / Pre IPO Stocks",\n  "description": "Buy or Sell Frick India Limited unlisted shares, one of the most experienced & largest industrial refrigeration equipment manufacturers. Get updated share prices here!",\n  "image": "https://storage.googleapis.com/download/storage/v1/b/tradeunlisted-aef3b.appspot.com/o/images%2F8535.504609197147frick-india-limited-unlisted-share.webp?generation=1671518468565811&alt=media",  \n  "author": {\n    "@type": "Organization",\n    "name": "Trade Unlisted",\n    "url": "https://tradeunlisted.com/"\n  },  \n  "publisher": {\n    "@type": "Organization",\n    "name": "Trade Unlisted",\n    "logo": {\n      "@type": "ImageObject",\n      "url": "https://tradeunlisted.com/static/media/unlistedlogo.633ff8bf9d339671184b944bd469b977.svg"\n    }\n  },\n  "datePublished": "",\n  "dateModified": "2022-12-27"\n}\n \n{\n  "@context": "https://schema.org/", \n  "@type": "Product", \n  "name": "Frick India Ltd Unlisted Shares",\n  "image": "https://storage.googleapis.com/download/storage/v1/b/tradeunlisted-aef3b.appspot.com/o/images%2F8535.504609197147frick-india-limited-unlisted-share.webp?generation=1671518468565811&alt=media",\n  "description": "Buy Frick India unlisted shares at the best price.",\n  "brand": {\n    "@type": "Brand",\n    "name": "TradeUnlisted"\n  },\n  "offers": {\n    "@type": "Offer",\n    "url": "https://tradeunlisted.com/buy-indian-stocks/frick-india-limited-unlisted-shares",\n    "priceCurrency": "INR",\n    "price": "5100",\n    "availability": "https://schema.org/InStock"\n  }\n}\n  \n{\n  "@context": "https://schema.org/", \n  "@type": "BreadcrumbList", \n  "itemListElement": [{\n    "@type": "ListItem", \n    "position": 1, \n    "name": "TradeUnlisted",\n    "item": "https://tradeunlisted.com/"  \n  },{\n    "@type": "ListItem", \n    "position": 2, \n    "name": "Unlisted Shares in India",\n    "item": "https://tradeunlisted.com/buy-indian-stocks"  \n  },{\n    "@type": "ListItem", \n    "position": 3, \n    "name": "Frick Unlisted Shares",\n    "item": "https://tradeunlisted.com/buy-indian-stocks/frick-india-limited-unlisted-shares"  \n  }]\n}\n ',
      isWatchList: false,
    },
    {
      _id: "63b2a2cdbdb1c35f123ed2ca",
      logo: "https://storage.googleapis.com/download/storage/v1/b/tradeunlisted-aef3b.appspot.com/o/images%2F8902.037308086434otis-unlisted-shares.jpg?generation=1672650565825591&alt=media",
      name: "Otis Elevator (India) Limited unlisted shares",
      urlName: "otis unlisted shares",
      sector: "Elevators",
      region: "Indian",
      pricePerShare: 3749,
      brokerPrice: null,
      top: 43,
      status: "Available",
      isWatchList: false,
    },
    {
      _id: "626d0963e0b6aaa29a157eb2",
      logo: "https://storage.googleapis.com/download/storage/v1/b/tradeunlisted-aef3b.appspot.com/o/images%2F8811.587359576592maharashtra-knowledge-corporation-mkcl-unlisted-share.webp?generation=1671518650058970&alt=media",
      name: "Maharashtra Knowledge Corporation Ltd (MKCL) Unlisted Shares",
      urlName: "maharashtra knowledge corporation limited unlisted shares",
      sector: "EdTech",
      region: "Indian",
      pricePerShare: 0,
      brokerPrice: null,
      top: 9,
      status: "Sold Out",
      schemaMarkup:
        '<script type="application/ld+json">\n{\n  "@context": "https://schema.org/", \n  "@type": "Product", \n  "name": "Maharashtra Knowledge Corporation Ltd (MKCL) Unlisted Shares",\n  "image": "https://storage.googleapis.com/download/storage/v1/b/tradeunlisted-aef3b.appspot.com/o/images%2F8811.587359576592maharashtra-knowledge-corporation-mkcl-unlisted-share.webp?generation=1671518650058970&alt=media",\n  "description": "Buy or Sell Maharashtra Knowledge Corporation Limited (MKCL) Unlisted Shares / Pre IPO at Best Prices at Trade Unlisted.",\n  "brand": {\n    "@type": "Brand",\n    "name": "TradeUnlisted"\n  }\n}\n{\n  "@context": "https://schema.org/", \n  "@type": "BreadcrumbList", \n  "itemListElement": [{\n    "@type": "ListItem", \n    "position": 1, \n    "name": "TradeUnlisted",\n    "item": "https://tradeunlisted.com/"  \n  },{\n    "@type": "ListItem", \n    "position": 2, \n    "name": "Unlisted Shares in India",\n    "item": "https://tradeunlisted.com/buy-indian-stocks"  \n  },{\n    "@type": "ListItem", \n    "position": 3, \n    "name": "Maharashtra Knowledge Corporation limited Unlisted Shares",\n    "item": "https://tradeunlisted.com/buy-Indian-stocks/maharashtra-knowledge-corporation-limited-unlisted-shares"  \n  }]\n}\n{\n  "@context": "https://schema.org",\n  "@type": "FAQPage",\n  "mainEntity": [{\n    "@type": "Question",\n    "name": "How to buy Maharashtra Knowledge Corporation Ltd (MKCL) unlisted shares?",\n    "acceptedAnswer": {\n      "@type": "Answer",\n      "text": "The following is the process of buying Maharashtra Knowledge Corporation Ltd unlisted shares from the TradeUnlisted platform:\n\nClick on the ‘Invest now’ button on the Maharashtra Knowledge Corporation Ltd page. The MKCL unlisted stocks will be added to your cart. \nIn the cart section, you will be required to enter the quantity of Maharashtra Knowledge Corporation Ltd unlisted shares you want to purchase. \nNext step is to select the payment method you wish to use. We accept payments via debit card, net banking and UPI. \nPayment must be made from the same account to which shares are to be transferred. Third party transactions are strictly prohibited on the platform.\nThe TradeUnlisted team will contact you and set up the whole process smoothly.  \nThe shares will then be credited in the demat account mentioned in the CML copy within the timeline mentioned in the Deal Contract Letter.\nIn case you want to buy Maharashtra Knowledge Corporation Ltd unlisted shares offline, you may call us on +91 8958 212121 or write to us at contactus@tradeunlisted.com"\n    }\n  },{\n    "@type": "Question",\n    "name": "How to sell Maharashtra Knowledge Corporation Ltd (MKCL) unlisted shares?",\n    "acceptedAnswer": {\n      "@type": "Answer",\n      "text": "The following is the process to sell Maharashtra Knowledge Corporation Ltd (MKCL) unlisted shares on TradeUnlisted platform:\n\nFill up the form on https://tradeunlisted.com/sell by choosing the Unlisted Stocks you wish to sell and enter the quantity of the shares along with an expected pricing for the shares. \nThe TradeUnlisted team will contact you to confirm the deal. \nOnce we confirm our buying price of the shares, we will share a copy of our Client Master List (CML). \nYou will then be required to transfer the shares to our demat account. \nOnce the shares are reflected in our demat account, we will transfer the funds to your bank account within the stipulated time and the same will be intimated to you. \nPayment will be made via RTGS, NEFT, IMPS, cheque or UPI. Payment will be made to the same account which is linked to your demat account. \nIn case you have any queries, you may call us on +91 8958 212121 or write to us at contactus@tradeunlisted.com."\n    }\n  },{\n    "@type": "Question",\n    "name": "What is the lock-in period of Maharashtra Knowledge Corporation Ltd (MKCL) unlisted shares?",\n    "acceptedAnswer": {\n      "@type": "Answer",\n      "text": "There is no restriction on transfer of unlisted shares until the IPO cut-off date which is generally a week before listing. However, after listing SEBI norms are applicable to these shares. As per SEBI regulations, all unlisted shares go in a lock-in period of 6 months from the date of listing of shares. \n\nIn case you have any queries, you may call us on +91 8958 212121 or write to us at contactus@tradeunlisted.com"\n    }\n  },{\n    "@type": "Question",\n    "name": "What is the tax treatment on Maharashtra Knowledge Corporation Ltd (MKCL) unlisted shares?",\n    "acceptedAnswer": {\n      "@type": "Answer",\n      "text": "If you sell the Maharashtra Knowledge Corporation Ltd (MKCL) unlisted shares within 2 years of its acquisition, then you will be required to pay tax on the short-term capital gain (STCG) as per the individual tax slab rate. Selling the shares after 2 years will attract a long-term capital gain (LTCG) which will be taxed at the rate of 20% with indexation benefit or 10% without indexation benefit.\n\nInvestors should consult with an independent third-party taxation advisor prior to making investment decisions.\nIn case you have any queries, you may call us on +91 8958 212121 or write to us at contactus@tradeunlisted.com"\n    }\n  },{\n    "@type": "Question",\n    "name": "How to check credit of Maharashtra Knowledge Corporation Ltd (MKCL) unlisted shares?",\n    "acceptedAnswer": {\n      "@type": "Answer",\n      "text": "All unlisted shares can be transferred only to Demat accounts. Unlisted shares can be checked in two ways: \n1. Option 1 \n\nDownload the NSDL or CDSL mobile application from the Google Play or App Store.\nEnter your DP ID + Client ID (total of 16 characters) \n2. Option 2\n\nYou may also check the credit of your shares, by logging in to your Demat account and checking under DP Holdings in your respective DP.  \n\nIn case you have any queries, you may call us on +91 8958 212121 or write to us at contactus@tradeunlisted.com."\n    }\n  },{\n    "@type": "Question",\n    "name": "How much time does it take to credit Maharashtra Knowledge Corporation Ltd (MKCL) unlisted shares in a demat account?",\n    "acceptedAnswer": {\n      "@type": "Answer",\n      "text": "The MKCL unlisted shares are credited in your Demat account within a maximum of two (working) days after the funds are received in our bank account. However, please note that at times there may be a slight delay in the credit of shares due to certain reasons like Bank Holidays.\n\nIn case you have any queries, you may call us on +91 8958 212121 or write to us at contactus@tradeunlisted.com."\n    }\n  },{\n    "@type": "Question",\n    "name": "What is the minimum ticket size for investment in MKCL unlisted shares?",\n    "acceptedAnswer": {\n      "@type": "Answer",\n      "text": "Investments on TradeUnlisted start from as low as INR 5,000. Please call us on +91 8958 212121  to find the company specific details pertaining to the lot size and minimum investment amount."\n    }\n  },{\n    "@type": "Question",\n    "name": "How to track daily news of MKCL unlisted shares?",\n    "acceptedAnswer": {\n      "@type": "Answer",\n      "text": "To track news and other information of MKCL unlisted shares, you can join our Telegram Channel or Facebook Community  to stay updated on all news of the unlisted space."\n    }\n  },{\n    "@type": "Question",\n    "name": "How to check daily prices of MKCL unlisted shares?",\n    "acceptedAnswer": {\n      "@type": "Answer",\n      "text": "You can track prices and access historical graphs of Unlisted Shares on both our website and mobile application. \n\nDownload our mobile App from the Google Play or App Store."\n    }\n  },{\n    "@type": "Question",\n    "name": "What are the financials of Maharashtra Knowledge Corporation Ltd (MKCL) Unlisted Shares?",\n    "acceptedAnswer": {\n      "@type": "Answer",\n      "text": "The financials are available in the Research Report, DRHP, and Annual Reports of Maharashtra Knowledge Corporation Ltd (MKCL) Unlisted Shares, which may be found under the Reports section of the company\'s specific page. You can download all the reports after logging in."\n    }\n  }]\n}\n</script>',
      isWatchList: false,
    },
    {
      _id: "63dcb1e71de36adcda830a1c",
      logo: "https://storage.googleapis.com/download/storage/v1/b/tradeunlisted-aef3b.appspot.com/o/images%2F1847.8982137592982martin-and-harris-laboratories-limited.png?generation=1675424464614983&alt=media",
      name: "Martin and Harris Laboratories Limited Unlisted Shares",
      urlName: "martin and harris unlisted shares",
      sector: "Pharma & Finance",
      region: "Indian",
      pricePerShare: 1850,
      brokerPrice: null,
      top: 12,
      status: "Available",
      isWatchList: false,
    },
    {
      _id: "62567536da850bf6ebab0d0d",
      logo: "https://storage.googleapis.com/download/storage/v1/b/tradeunlisted-aef3b.appspot.com/o/images%2F13.943427690179533pharmeasy-unlisted-share.webp?generation=1671517567588979&alt=media",
      name: "PharmEasy (API Holdings Ltd) Unlisted Shares",
      urlName: "pharmeasy api holdings ltd unlisted shares",
      sector: "Pharma",
      region: "Indian",
      pricePerShare: 24,
      brokerPrice: null,
      top: 6,
      status: "Available",
      schemaMarkup:
        '<script type="application/ld+json">\n{\n  "@context": "https://schema.org/", \n  "@type": "Product", \n  "name": "PharmEasy (API Holdings Ltd) Unlisted Shares",\n  "image": "https://storage.googleapis.com/download/storage/v1/b/tradeunlisted-aef3b.appspot.com/o/images%2F13.943427690179533pharmeasy-unlisted-share.webp?generation=1671517567588979&alt=media",\n  "description": "Buy or Sell PharmEasy shares online. We are offering the best prices on Pre IPO shares. Download the research report.",\n  "brand": {\n    "@type": "Brand",\n    "name": "TradeUnlisted"\n  }\n}\n{\n  "@context": "https://schema.org/", \n  "@type": "BreadcrumbList", \n  "itemListElement": [{\n    "@type": "ListItem", \n    "position": 1, \n    "name": "TradeUnlisted",\n    "item": "https://tradeunlisted.com/"  \n  },{\n    "@type": "ListItem", \n    "position": 2, \n    "name": "Unlisted Shares in India",\n    "item": "https://tradeunlisted.com/buy-indian-stocks"  \n  },{\n    "@type": "ListItem", \n    "position": 3, \n    "name": "PharmEasy (API Holdings Ltd) Unlisted Shares",\n    "item": "https://tradeunlisted.com/buy-indian-stocks/pharmeasy-api-holdings-ltd-unlisted-shares"  \n  }]\n}\n{\n  "@context": "https://schema.org",\n  "@type": "FAQPage",\n  "mainEntity": [{\n    "@type": "Question",\n    "name": "How to buy PharmEasy (API Holdings Ltd) unlisted shares?",\n    "acceptedAnswer": {\n      "@type": "Answer",\n      "text": "The following is the process of buying PharmEasy (API Holdings Ltd) unlisted shares from the TradeUnlisted platform:\n\nClick on the ‘Invest now’ button on the PharmEasy page. The PharmEasy unlisted stocks will be added to your cart. \nIn the cart section, you will be required to enter the quantity of PharmEasy unlisted shares you want to purchase. \nNext step is to select the payment method you wish to use. We accept payments via debit card, net banking and UPI. \nPayment must be made from the same account to which shares are to be transferred. Third party transactions are strictly prohibited on the platform.\nThe TradeUnlisted team will contact you and set up the whole process smoothly.  \nThe shares will then be credited in the demat account mentioned in the CML copy within the timeline mentioned in the Deal Contract Letter.\nIn case you want to buy PharmEasy (API Holdings Ltd) unlisted shares offline, you may call us on +91 8958 212121 or write to us at contactus@tradeunlisted.com."\n    }\n  },{\n    "@type": "Question",\n    "name": "How to sell PharmEasy (API Holdings Ltd) unlisted shares?",\n    "acceptedAnswer": {\n      "@type": "Answer",\n      "text": "The following is the process to sell unlisted shares on TradeUnlisted platform:\n\nFill up the form on https://tradeunlisted.com/sell by choosing the Unlisted Stocks you wish to sell and enter the quantity of the shares along with an expected pricing for the shares. \nThe TradeUnlisted team will contact you to confirm the deal. \nOnce we confirm our buying price of the shares, we will share a copy of our Client Master List (CML). \nYou will then be required to transfer the shares to our demat account. \nOnce the shares are reflected in our demat account, we will transfer the funds to your bank account within the stipulated time and the same will be intimated to you. \nPayment will be made via RTGS, NEFT, IMPS, cheque or UPI. Payment will be made to the same account which is linked to your demat account. \nIn case you have any queries, you may call us on +91 8958 212121 or write to us at contactus@tradeunlisted.com."\n    }\n  },{\n    "@type": "Question",\n    "name": "What is the lock-in period of PharmEasy (API Holdings Ltd) unlisted shares?",\n    "acceptedAnswer": {\n      "@type": "Answer",\n      "text": "There is no restriction on transfer of unlisted shares until the IPO cut-off date which is generally a week before listing. However, after listing SEBI norms are applicable to these shares. As per SEBI regulations, all unlisted shares go in a lock-in period of 6 months from the date of listing of shares. \n\nIn case you have any queries, you may call us on +91 8958 212121 or write to us at contactus@tradeunlisted.com"\n    }\n  },{\n    "@type": "Question",\n    "name": "What is the tax treatment on PharmEasy (API Holdings Ltd) unlisted shares?",\n    "acceptedAnswer": {\n      "@type": "Answer",\n      "text": "If you sell the PharmEasy (API Holdings Ltd) unlisted shares within 2 years of its acquisition, then you will be required to pay tax on the short-term capital gain (STCG) as per the individual tax slab rate. Selling the shares after 2 years will attract a long-term capital gain (LTCG) which will be taxed at the rate of 20% with indexation benefit or 10% without indexation benefit.\n\nInvestors should consult with an independent third-party taxation advisor prior to making investment decisions.\n\nIn case you have any queries, you may call us on +91 8958 212121 or write to us at contactus@tradeunlisted.com."\n    }\n  },{\n    "@type": "Question",\n    "name": "How to check credit of PharmEasy (API Holdings Ltd) unlisted shares?",\n    "acceptedAnswer": {\n      "@type": "Answer",\n      "text": "All unlisted shares can be transferred only to Demat accounts. Unlisted shares can be checked in two ways: \n1. Option 1 \n\nDownload the NSDL or CDSL mobile application from the Google Play or App Store.\nEnter your DP ID + Client ID (total of 16 characters) \n2. Option 2\n\nYou may also check the credit of your shares, by logging in to your Demat account and checking under DP Holdings in your respective DP.  \n\nIn case you have any queries, you may call us on +91 8958 212121 or write to us at contactus@tradeunlisted.com."\n    }\n  },{\n    "@type": "Question",\n    "name": "How much time does it take to credit PharmEasy (API Holdings Ltd) unlisted shares in a demat account?",\n    "acceptedAnswer": {\n      "@type": "Answer",\n      "text": "The PharmEasy unlisted shares are credited in your Demat account within a maximum of two (working) days after the funds are received in our bank account. However, please note that at times there may be a slight delay in the credit of shares due to certain reasons like Bank Holidays.\n\nIn case you have any queries, you may call us on +91 8958 212121 or write to us at contactus@tradeunlisted.com."\n    }\n  },{\n    "@type": "Question",\n    "name": "What is the minimum ticket size for investment in PharmEasy (API Holdings Ltd) unlisted shares?",\n    "acceptedAnswer": {\n      "@type": "Answer",\n      "text": "Investments on TradeUnlisted start from as low as INR 5,000. Please call us on +91 8958 212121  to find the company specific details pertaining to the lot size and minimum investment amount."\n    }\n  },{\n    "@type": "Question",\n    "name": "How to track daily news of PharmEasy (API Holdings Ltd) unlisted shares?",\n    "acceptedAnswer": {\n      "@type": "Answer",\n      "text": "To track news and other information of PharmEasy (API Holdings Ltd) unlisted shares, you can join our Telegram Channel or Facebook Community  to stay updated on all news of the unlisted space."\n    }\n  },{\n    "@type": "Question",\n    "name": "How to check daily prices of PharmEasy (API Holdings Ltd) unlisted shares?",\n    "acceptedAnswer": {\n      "@type": "Answer",\n      "text": "You can track prices and access historical graphs of Unlisted Shares on both our website and mobile application. \n\nDownload our mobile App from the Google Play or App Store."\n    }\n  },{\n    "@type": "Question",\n    "name": "What are the financials of PharmEasy (API Holdings Ltd) Unlisted Shares?",\n    "acceptedAnswer": {\n      "@type": "Answer",\n      "text": "The financials are available in the Research Report, DRHP, and Annual Reports of PharmEasy (API Holdings Ltd) Unlisted Shares, which may be found under the Reports section of the company\'s specific page. You can download all the reports after logging in."\n    }\n  }]\n}\n</script>',
      isWatchList: false,
    },
    {
      _id: "6452548630a2d1862a4816d8",
      logo: "https://storage.googleapis.com/download/storage/v1/b/tradeunlisted-aef3b.appspot.com/o/images%2F2798.603676356386GKN%20Automotive%20Unlisted%20shares.png?generation=1683117782553959&alt=media",
      name: "GKN Automotive Unlisted Shares",
      urlName: "gkn automotive unlisted shares",
      sector: "Automotive Equipments",
      region: "Indian",
      pricePerShare: 1230,
      brokerPrice: null,
      top: 49,
      status: "Available",
      isWatchList: false,
    },
    {
      _id: "627a14defe24c95d1e356041",
      logo: "https://storage.googleapis.com/download/storage/v1/b/tradeunlisted-aef3b.appspot.com/o/images%2F9141.544514394956capgemini-unlisted-share.webp?generation=1671517736107430&alt=media",
      name: "Capgemini Technology Services India Ltd Unlisted Shares",
      urlName: "capgemini technology unlisted shares",
      sector: "Information & Technology",
      region: "Indian",
      pricePerShare: 12154,
      brokerPrice: null,
      top: 31,
      status: "Available",
      schemaMarkup:
        '  \n{\n  "@context": "https://schema.org",\n  "@type": "Article",\n  "mainEntityOfPage": {\n    "@type": "WebPage",\n    "@id": "https://tradeunlisted.com/buy-indian-stocks/capgemini-technology-unlisted-shares"\n  },\n  "headline": "Capgemini Unlisted Share Price | Buy Sell Capgemini Unlisted Shares / Pre IPO",\n  "description": "Buy or Sell Capgemini Unlisted Shares at Best Prices. Check updated prices and download the research report. Find the right valuation of your current holdings.",\n  "image": "https://storage.googleapis.com/download/storage/v1/b/tradeunlisted-aef3b.appspot.com/o/images%2F9141.544514394956capgemini-unlisted-share.webp?generation=1671517736107430&alt=media",  \n  "author": {\n    "@type": "Organization",\n    "name": "Trade Unlisted",\n    "url": "https://tradeunlisted.com/"\n  },  \n  "publisher": {\n    "@type": "Organization",\n    "name": "Trade Unlisted",\n    "logo": {\n      "@type": "ImageObject",\n      "url": "https://tradeunlisted.com/static/media/unlistedlogo.633ff8bf9d339671184b944bd469b977.svg"\n    }\n  },\n  "datePublished": "",\n  "dateModified": "2022-12-27"\n}\n \n{\n  "@context": "https://schema.org/", \n  "@type": "Product", \n  "name": "Capgemini Unlisted Shares",\n  "image": "https://storage.googleapis.com/download/storage/v1/b/tradeunlisted-aef3b.appspot.com/o/images%2F9141.544514394956capgemini-unlisted-share.webp?generation=1671517736107430&alt=media",\n  "description": "Buy Capgemini unlisted shares at the best price.",\n  "brand": {\n    "@type": "Brand",\n    "name": "TradeUnlisted"\n  },\n  "offers": {\n    "@type": "Offer",\n    "url": "https://tradeunlisted.com/buy-indian-stocks/capgemini-technology-unlisted-shares",\n    "priceCurrency": "INR",\n    "price": "12875",\n    "availability": "https://schema.org/InStock"\n  }\n}\n  \n{\n  "@context": "https://schema.org/", \n  "@type": "BreadcrumbList", \n  "itemListElement": [{\n    "@type": "ListItem", \n    "position": 1, \n    "name": "TradeUnlisted",\n    "item": "https://tradeunlisted.com/"  \n  },{\n    "@type": "ListItem", \n    "position": 2, \n    "name": "Unlisted Shares in India",\n    "item": "https://tradeunlisted.com/buy-indian-stocks"  \n  },{\n    "@type": "ListItem", \n    "position": 3, \n    "name": "Capgemini Unlisted Shares",\n    "item": "https://tradeunlisted.com/buy-indian-stocks/capgemini-technology-unlisted-shares"  \n  }]\n}\n ',
      isWatchList: false,
    },
    {
      _id: "627cce58f97c028d006963d1",
      logo: "https://storage.googleapis.com/download/storage/v1/b/tradeunlisted-aef3b.appspot.com/o/images%2F818.5788878288403ncl-buildtek-unlisted-share.webp?generation=1671517785750042&alt=media",
      name: "NCL Buildtek Ltd Unlisted Shares",
      urlName: "ncl buildtek unlisted shares",
      sector: "Others",
      region: "Indian",
      pricePerShare: 260,
      brokerPrice: null,
      top: 32,
      status: "Available",
      schemaMarkup:
        '  \n{\n  "@context": "https://schema.org",\n  "@type": "Article",\n  "mainEntityOfPage": {\n    "@type": "WebPage",\n    "@id": "https://tradeunlisted.com/buy-indian-stocks/ncl-buildtek-unlisted-shares"\n  },\n  "headline": "NCL Buildtek Share Price | Buy Sell NCL Buildtek Ltd Unlisted Shares / Pre IPO Stocks",\n  "description": "Buy or sell  NCL Buildtek Unlisted Shares. Check updated prices and download the research report. Find the right valuation of your current holdings.",\n  "image": "https://storage.googleapis.com/download/storage/v1/b/tradeunlisted-aef3b.appspot.com/o/images%2F818.5788878288403ncl-buildtek-unlisted-share.webp?generation=1671517785750042&alt=media",  \n  "author": {\n    "@type": "Organization",\n    "name": "Trade Unlisted",\n    "url": "https://tradeunlisted.com/"\n  },  \n  "publisher": {\n    "@type": "Organization",\n    "name": "Trade Unlisted",\n    "logo": {\n      "@type": "ImageObject",\n      "url": "https://tradeunlisted.com/static/media/unlistedlogo.633ff8bf9d339671184b944bd469b977.svg"\n    }\n  },\n  "datePublished": "",\n  "dateModified": "2022-12-27"\n}\n \n{\n  "@context": "https://schema.org/", \n  "@type": "Product", \n  "name": "NCL Buidtek Unlisted Shares",\n  "image": "https://storage.googleapis.com/download/storage/v1/b/tradeunlisted-aef3b.appspot.com/o/images%2F818.5788878288403ncl-buildtek-unlisted-share.webp?generation=1671517785750042&alt=media",\n  "description": "Buy NCL Buildtek unlisted shares at the best price.",\n  "brand": {\n    "@type": "Brand",\n    "name": "TradeUnlisted"\n  },\n  "offers": {\n    "@type": "Offer",\n    "url": "https://tradeunlisted.com/buy-indian-stocks/ncl-buildtek-unlisted-shares",\n    "priceCurrency": "INR",\n    "price": "199",\n    "availability": "https://schema.org/InStock"\n  }\n}\n  \n{\n  "@context": "https://schema.org/", \n  "@type": "BreadcrumbList", \n  "itemListElement": [{\n    "@type": "ListItem", \n    "position": 1, \n    "name": "TradeUnlisted",\n    "item": "https://tradeunlisted.com/"  \n  },{\n    "@type": "ListItem", \n    "position": 2, \n    "name": "Unlisted Shares in India",\n    "item": "https://tradeunlisted.com/buy-indian-stocks"  \n  },{\n    "@type": "ListItem", \n    "position": 3, \n    "name": "NCL Buildtek Unlisted Shares",\n    "item": "https://tradeunlisted.com/buy-indian-stocks/ncl-buildtek-unlisted-shares"  \n  }]\n}\n ',
      isWatchList: false,
    },
    {
      _id: "625694b9552fd983c55d5b46",
      logo: "https://storage.googleapis.com/download/storage/v1/b/tradeunlisted-aef3b.appspot.com/o/images%2F8305.334142011623fino-unlisted-share.webp?generation=1671517621504019&alt=media",
      name: "Fino PayTech Ltd Unlisted Shares",
      urlName: "fino paytech limited unlisted shares",
      sector: "Finance",
      region: "Indian",
      pricePerShare: 0,
      brokerPrice: null,
      top: 8,
      status: "Sold Out",
      schemaMarkup:
        '<script type="application/ld+json">\n{\n  "@context": "https://schema.org/", \n  "@type": "Product", \n  "name": "Fino Paytech limited unlisted shares",\n  "image": "https://storage.googleapis.com/download/storage/v1/b/tradeunlisted-aef3b.appspot.com/o/images%2F8305.334142011623fino-unlisted-share.webp?generation=1671517621504019&alt=media",\n  "description": "Buy or Sell unlisted shares of Fino PayTech at best price. Explore our Research Report on Fino PayTech, check the valuation and estimated returns.",\n  "brand": {\n    "@type": "Brand",\n    "name": "TradeUnlisted"\n  }\n}\n{\n  "@context": "https://schema.org/", \n  "@type": "BreadcrumbList", \n  "itemListElement": [{\n    "@type": "ListItem", \n    "position": 1, \n    "name": "TradeUnlisted",\n    "item": "https://tradeunlisted.com/"  \n  },{\n    "@type": "ListItem", \n    "position": 2, \n    "name": "Unlisted Shares in India",\n    "item": "https://tradeunlisted.com/buy-indian-stocks"  \n  },{\n    "@type": "ListItem", \n    "position": 3, \n    "name": "Fino Paytech limited Unlisted Shares",\n    "item": "https://tradeunlisted.com/buy-indian-stocks/fino-paytech-limited-unlisted-shares"  \n  }]\n}\n{\n  "@context": "https://schema.org",\n  "@type": "FAQPage",\n  "mainEntity": [{\n    "@type": "Question",\n    "name": "How to buy Fino PayTech Ltd unlisted shares?",\n    "acceptedAnswer": {\n      "@type": "Answer",\n      "text": "The following is the process of buying Fino PayTech Ltd unlisted shares from the TradeUnlisted platform:\n\nClick on the ‘Invest now’ button on the Fino PayTech page. The Fino PayTech  unlisted stocks will be added to your cart. \nIn the cart section, you will be required to enter the quantity of Fino PayTech Ltd unlisted shares you want to purchase. \nNext step is to select the payment method you wish to use. We accept payments via debit card, net banking and UPI. \nPayment must be made from the same account to which shares are to be transferred. Third party transactions are strictly prohibited on the platform.\nThe TradeUnlisted team will contact you and set up the whole process smoothly.  \nThe shares will then be credited in the demat account mentioned in the CML copy within the timeline mentioned in the Deal Contract Letter.\nIn case you want to buy Fino PayTech Ltd unlisted shares offline, you may call us on +91 8958 212121 or write to us at contactus@tradeunlisted.com."\n    }\n  },{\n    "@type": "Question",\n    "name": "How to sell Fino PayTech Ltd unlisted shares?",\n    "acceptedAnswer": {\n      "@type": "Answer",\n      "text": "The following is the process to sell Fino PayTech Ltd unlisted shares on TradeUnlisted platform:\n\nFill up the form on https://tradeunlisted.com/sell by choosing the Unlisted Stocks you wish to sell and enter the quantity of the shares along with an expected pricing for the shares. \nThe TradeUnlisted team will contact you to confirm the deal. \nOnce we confirm our buying price of the shares, we will share a copy of our Client Master List (CML). \nYou will then be required to transfer the shares to our demat account. \nOnce the shares are reflected in our demat account, we will transfer the funds to your bank account within the stipulated time and the same will be intimated to you. \nPayment will be made via RTGS, NEFT, IMPS, cheque or UPI. Payment will be made to the same account which is linked to your demat account. \nIn case you have any queries, you may call us on +91 8958 212121 or write to us at contactus@tradeunlisted.com"\n    }\n  },{\n    "@type": "Question",\n    "name": "What is the lock-in period of Fino PayTech Ltd unlisted shares?",\n    "acceptedAnswer": {\n      "@type": "Answer",\n      "text": "There is no restriction on transfer of unlisted shares until the IPO cut-off date which is generally a week before listing. However, after listing SEBI norms are applicable to these shares. As per SEBI regulations, all unlisted shares go in a lock-in period of 6 months from the date of listing of shares. \n\nIn case you have any queries, you may call us on +91 8958 212121 or write to us at contactus@tradeunlisted.com"\n    }\n  },{\n    "@type": "Question",\n    "name": "What is the tax treatment on Fino PayTech Ltd unlisted shares?",\n    "acceptedAnswer": {\n      "@type": "Answer",\n      "text": "If you sell the Fino PayTech Ltd unlisted shares within 2 years of its acquisition, then you will be required to pay tax on the short-term capital gain (STCG) as per the individual tax slab rate. Selling the shares after 2 years will attract a long-term capital gain (LTCG) which will be taxed at the rate of 20% with indexation benefit or 10% without indexation benefit.\n\nInvestors should consult with an independent third-party taxation advisor prior to making investment decisions.\n\nIn case you have any queries, you may call us on +91 8958 212121 or write to us at contactus@tradeunlisted.com"\n    }\n  },{\n    "@type": "Question",\n    "name": "How to check credit of Fino PayTech Ltd unlisted shares?",\n    "acceptedAnswer": {\n      "@type": "Answer",\n      "text": "All unlisted shares can be transferred only to Demat accounts. Unlisted shares can be checked in two ways: \n1. Option 1 \n\nDownload the NSDL or CDSL mobile application from the Google Play or App Store.\nEnter your DP ID + Client ID (total of 16 characters) \n2. Option 2\n\nYou may also check the credit of your shares, by logging in to your Demat account and checking under DP Holdings in your respective DP.  \n\nIn case you have any queries, you may call us on +91 8958 212121 or write to us at contactus@tradeunlisted.com."\n    }\n  },{\n    "@type": "Question",\n    "name": "How much time does it take to credit Fino PayTech Ltd unlisted shares in a demat account?",\n    "acceptedAnswer": {\n      "@type": "Answer",\n      "text": "The Fino PayTech Ltd unlisted shares are credited in your Demat account within a maximum of two (working) days after the funds are received in our bank account. However, please note that at times there may be a slight delay in the credit of shares due to certain reasons like Bank Holidays.\n\nIn case you have any queries, you may call us on +91 8958 212121 or write to us at contactus@tradeunlisted.com."\n    }\n  },{\n    "@type": "Question",\n    "name": "What is the minimum ticket size for investment in Fino PayTech unlisted shares?",\n    "acceptedAnswer": {\n      "@type": "Answer",\n      "text": "Investments on TradeUnlisted start from as low as INR 5,000. Please call us on +91 8958 212121  to find the company specific details pertaining to the lot size and minimum investment amount."\n    }\n  },{\n    "@type": "Question",\n    "name": "How to track daily news of Fino PayTech unlisted shares?",\n    "acceptedAnswer": {\n      "@type": "Answer",\n      "text": "To track news and other information of Fino PayTech unlisted shares, you can join our Telegram Channel or Facebook Community  to stay updated on all news of the unlisted space."\n    }\n  },{\n    "@type": "Question",\n    "name": "How to check daily prices of Fino PayTech unlisted shares?",\n    "acceptedAnswer": {\n      "@type": "Answer",\n      "text": "You can track prices and access historical graphs of Unlisted Shares on both our website and mobile application. \n\nDownload our mobile App from the Google Play or App Store."\n    }\n  },{\n    "@type": "Question",\n    "name": "What are the financials of Fino PayTech Ltd Unlisted Shares?",\n    "acceptedAnswer": {\n      "@type": "Answer",\n      "text": "The financials are available in the Research Report, DRHP, and Annual Reports of Fino PayTech Ltd Unlisted Shares, which may be found under the Reports section of the company\'s specific page. You can download all the reports after logging in"\n    }\n  }]\n}\n</script>',
      isWatchList: false,
    },
    {
      _id: "627e44cf0efb7dd0eb529162",
      logo: "https://storage.googleapis.com/download/storage/v1/b/tradeunlisted-aef3b.appspot.com/o/images%2F864.8088685172239hexaware-technologies-unlisted-share.webp?generation=1671517884345287&alt=media",
      name: "Hexaware Technologies Unlisted Shares",
      urlName: "hexaware technologies unlisted shares",
      sector: "Information & Technology",
      region: "Indian",
      pricePerShare: 590,
      brokerPrice: null,
      top: 34,
      status: "Available",
      schemaMarkup:
        '  \n{\n  "@context": "https://schema.org",\n  "@type": "Article",\n  "mainEntityOfPage": {\n    "@type": "WebPage",\n    "@id": "https://tradeunlisted.com/buy-indian-stocks/hexaware-technologies-unlisted-shares"\n  },\n  "headline": "Hexaware Unlisted Share Price | Buy Sell Hexaware Technologies Unlisted Shares / Pre IPO",\n  "description": "Buy or sell Hexaware Unlisted Shares. Check updated prices, download the research report. Find the right valuation of your current holdings.",\n  "image": "https://storage.googleapis.com/download/storage/v1/b/tradeunlisted-aef3b.appspot.com/o/images%2F864.8088685172239hexaware-technologies-unlisted-share.webp?generation=1671517884345287&alt=media",  \n  "author": {\n    "@type": "Organization",\n    "name": "Trade Unlisted",\n    "url": "https://tradeunlisted.com/"\n  },  \n  "publisher": {\n    "@type": "Organization",\n    "name": "Trade Unlisted",\n    "logo": {\n      "@type": "ImageObject",\n      "url": "https://tradeunlisted.com/static/media/unlistedlogo.633ff8bf9d339671184b944bd469b977.svg"\n    }\n  },\n  "datePublished": "",\n  "dateModified": "2022-12-27"\n}\n \n{\n  "@context": "https://schema.org/", \n  "@type": "Product", \n  "name": "Hexaware Technologies Unlisted Shares",\n  "image": "https://storage.googleapis.com/download/storage/v1/b/tradeunlisted-aef3b.appspot.com/o/images%2F864.8088685172239hexaware-technologies-unlisted-share.webp?generation=1671517884345287&alt=media",\n  "description": "Buy Hexaware Technologies unlisted shares at the best price.",\n  "brand": {\n    "@type": "Brand",\n    "name": "TradeUnlisted"\n  },\n  "offers": {\n    "@type": "Offer",\n    "url": "https://tradeunlisted.com/buy-indian-stocks/hexaware-technologies-unlisted-shares",\n    "priceCurrency": "INR",\n    "price": "545",\n    "availability": "https://schema.org/InStock"\n  }\n}\n  \n{\n  "@context": "https://schema.org/", \n  "@type": "BreadcrumbList", \n  "itemListElement": [{\n    "@type": "ListItem", \n    "position": 1, \n    "name": "TradeUnlisted",\n    "item": "https://tradeunlisted.com/"  \n  },{\n    "@type": "ListItem", \n    "position": 2, \n    "name": "Unlisted Shares in India",\n    "item": "https://tradeunlisted.com/buy-indian-stocks"  \n  },{\n    "@type": "ListItem", \n    "position": 3, \n    "name": "Hexaware Unlisted Shares",\n    "item": "https://tradeunlisted.com/buy-indian-stocks/hexaware-technologies-unlisted-shares"  \n  }]\n}\n ',
      isWatchList: false,
    },
  ];

  const familyTree = [
    {
      id: "23b9dbff",
      name: "Jessie",
      age: 50,
      children: [
        {
          id: "5c0f3094",
          name: "Peter",
          age: 20,
        },
        {
          id: "c1484221",
          name: "Paul",
          age: 32,
          children: [
            {
              id: "2e6d866e",
              name: "Carol",
              age: 12,
            },
            {
              id: "e48a27ad",
              name: "Hester",
              age: 15,
            },
          ],
        },
        {
          id: "8a265c23",
          name: "Hilda",
          age: 25,
        },
      ],
    },
    {
      id: "53164b2b",
      name: "Mathew",
      age: 70,
      children: [
        {
          id: "b14a960c",
          name: "Spencer",
          age: 45,
          children: [
            {
              id: "ff3c260c",
              name: "Joseph",
              age: 22,
            },
            {
              id: "7c60920a",
              name: "Robert",
              age: 27,
              children: [
                {
                  id: "0e11874f",
                  name: "Ian",
                  age: 2,
                },
              ],
            },
          ],
        },
      ],
    },
    {
      id: "5a4bdc98",
      name: "Claire",
      age: 63,
      children: [
        {
          id: "014b62a3",
          name: "Adrian",
          age: 41,
        },
        {
          id: "a1899541",
          name: "Julie",
          age: 32,
          children: [
            {
              id: "013362a3",
              name: "Patricia",
              age: 4,
            },
          ],
        },
      ],
    },
  ];

  const funCall = (val) => {
    const dataperson = val.map((item, index) => {
      return item.name;
    });
    console.log("dataperson", dataperson);
  };

  useEffect(() => {
    funCall(familyTree);
  }, []);

  const clickOnCompony = (id, region) => {
    // console.log("data +++++==>", id, region);
    // if (region === "Indian") {
    //   navigate(`/buy-indian-stocks/${id}`);
    // } else {
    navigate(`/stocks/test-stock`);
    // }
  };

  const getNifty = async () => {
    try {
      const response = await axios.get(
        "https://priceapi.moneycontrol.com/pricefeed/notapplicable/inidicesindia/in%3BNSX"
      );
      console.log("response====>", response?.data);
      setData(response?.data);
    } catch (error) {
      console.log("errrrror", error);
    }
  };
  const getSensex = async () => {
    try {
      const response = await axios.get(
        "https://priceapi.moneycontrol.com/pricefeed/notapplicable/inidicesindia/in%3BSEN"
      );
      console.log("response====>", response?.data);
      setSensex(response?.data);
    } catch (error) {
      console.log("errrrror", error);
    }
  };

  function createGroups(arr) {
    const perGroup = Math.ceil(arr.length / 2);
    return new Array(2)
      .fill("")
      .map((_, i) => arr.slice(i * perGroup, (i + 1) * perGroup));
  }

  console.log("sensex and nifty", sensex, data);

  useEffect(() => {
    const newslitedarray = createGroups(arr);
    console.log("newslitedarray", newslitedarray);
    setSliderData(newslitedarray);
  }, []);
  useEffect(() => {
    getSensex();
    getNifty();
  }, []);
  return (
    <>
      <div className="mainCon">
        <div className="container my_custom_container slider_container px-0">
          <CRow className="w-100 main-row m-0 ">
            <CCol xl={5} className="left-block">
              <div className="left-content">
                <div className="main-title1">
                  Trusted Platform to Provide the smart opportunities for
                  <span className="prime-txt"> trading as</span> well
                  <span className="prime-txt"> as investment.</span>
                </div>
                <div className="buttons-content">
                  <button
                    className={!viceVersa ? "btn-view-outline" : "btn-view"}
                    onMouseOver={() => setViceVersa(!viceVersa)}
                    onMouseOut={() => setViceVersa(false)}
                  >
                    <Link
                      to="/stocks"
                      className={`know_link ${!viceVersa ? "sell" : "buy"}`}
                      onMouseOver={() => setViceVersa(!viceVersa)}
                      onMouseOut={() => setViceVersa(false)}
                    >
                      View Stocks
                    </Link>
                  </button>
                  <button
                    className={!viceVersa ? "btn-view" : "btn-view-outline"}
                    onMouseOver={() => setViceVersa(!viceVersa)}
                    onMouseOut={() => setViceVersa(false)}
                  >
                    <a
                      href="#strategyCard"
                      className={`know_link ${!viceVersa ? "buy" : "sell"}`}
                      onMouseOver={() => setViceVersa(!viceVersa)}
                      onMouseOut={() => setViceVersa(false)}
                    >
                      Get Insights
                    </a>
                  </button>
                </div>
                <div className="main-title">
                  Stock watch is user friendly platform where one can find an
                  automated digital signal for trader as well as investor. An
                  indicator based signal which gives you smart profit with good
                  accuracy.
                </div>
              </div>
            </CCol>
            <CCol xl={7} className="p-3 py-0 slider-view-box">
              <div className="slider_box">
                {/* Here is image */}
                {/* <img src={stockImg} height="500px" width="700px" /> */}
                <HomeSlide />
              </div>
            </CCol>
          </CRow>
        </div>
      </div>
      <div className="market_widget_cmn">
        <div className="clearfix topHead">
          <div className="mkt_lft">
            <a href="#" title="Markets Data" className="perfo-title">
              MARKET DATA
            </a>
          </div>
        </div>
        {/* <ul className="market_wrapdata">
          <li>
            <a
              href="https://www.moneycontrol.com/indian-indices/nifty-50-9.html"
              title="Nifty 50"
              className="clearfix"
            >
              <div className="mkt_dtflt">
                <p>Nifty 50</p>
              </div>
              <div className="mkt_dtrt">
                <p className="mrkt_value">
                  <span id="nifty_block_cp" className="">
                    {data?.data?.pricecurrent}
                  </span>
                </p>
                <p className="todayud_val">
                  <span id="nifty_block_change">
                    +{data?.data?.pricechange}
                  </span>{" "}
                  <span id="nifty_block_chg_pchg">
                    (+{data?.data?.pricepercentchange}%)
                  </span>
                </p>
              </div>
            </a>
          </li>
          <li>
            <a
              href="https://www.moneycontrol.com/indian-indices/sensex-4.html"
              title="Sensex"
              className="clearfix"
            >
              <div className="mkt_dtflt sens">
                <p>Sensex</p>
              </div>
              <div className="mkt_dtrt">
                <p className="mrkt_value">
                  <span id="sensex_block_cp" className="">
                    {sensex?.data?.pricecurrent}
                  </span>
                </p>
                <p className="todayud_val">
                  <span id="sensex_block_change">
                    +{sensex?.data?.pricechange}
                  </span>{" "}
                  <span id="sensex_block_chg_pchg">
                    (+{sensex?.data?.pricepercentchange}%)
                  </span>
                </p>
              </div>
            </a>
          </li>
        </ul> */}
      </div>
      {/* <CCol lg={12} md={12} xl={6}> */}
      <div className="cards-content">
        <div
          className={`${
            viceVersaCards === 1 ? "cards-view-opp" : "cards-view"
          }`}
          onMouseEnter={() => setViceVersaCards(2)}
        >
          <div className="card-icon svghover svgCard">
            <svg
              width="40"
              height="32"
              viewBox="0 0 103 103"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g clipPath="url(#clip0_8_325)">
                <path
                  d="M2.14583 104C1.57672 104 1.03092 103.774 0.6285 103.371C0.226078 102.969 0 102.423 0 101.854C0 101.285 0.226078 100.739 0.6285 100.337C1.03092 99.9343 1.57672 99.7082 2.14583 99.7082H4.29167V82.5416C4.29167 80.1726 6.21862 78.2499 8.58333 78.2499H17.1667C19.5314 78.2499 21.4583 80.1726 21.4583 82.5416V99.7082H30.0417V61.0832C30.0417 58.7142 31.9686 56.7916 34.3333 56.7916H42.9166C45.2814 56.7916 47.2083 58.7142 47.2083 61.0832V99.7082H55.7916V69.6666C55.7916 68.5284 56.2438 67.4368 57.0486 66.6319C57.8535 65.8271 58.9451 65.3749 60.0833 65.3749H68.6666C69.8049 65.3749 70.8965 65.8271 71.7013 66.6319C72.5061 67.4368 72.9583 68.5284 72.9583 69.6666V99.7082H81.5416V39.6249C81.5416 37.2602 83.4643 35.3333 85.8333 35.3333H94.4166C96.7856 35.3333 98.7083 37.2602 98.7083 39.6249V99.7082H100.854C101.423 99.7082 101.969 99.9343 102.371 100.337C102.774 100.739 103 101.285 103 101.854C103 102.423 102.774 102.969 102.371 103.371C101.969 103.774 101.423 104 100.854 104H2.14583ZM94.4166 99.7082V39.6249H85.8333V99.7082H94.4166ZM68.6666 99.7082V69.6666H60.0833V99.7082H68.6666ZM42.9166 99.7082V61.0832H34.3333V99.7082H42.9166ZM17.1667 99.7082V82.5416H8.58333V99.7082H17.1667Z"
                  fill="#0466C8"
                />
                <path
                  d="M12.5833 58.9375C7.84962 58.9375 4 55.0879 4 50.3542C4 45.6205 7.84962 41.7709 12.5833 41.7709C14.3858 41.7709 16.1325 42.3416 17.5874 43.3931L30.5826 32.5609C30.0359 31.4164 29.7515 30.1643 29.75 28.8959C29.75 24.1621 33.5996 20.3125 38.3333 20.3125C39.5096 20.314 40.673 20.5569 41.7515 21.0263C42.83 21.4957 43.8007 22.1815 44.6033 23.0413C45.406 23.9011 46.0236 24.9165 46.4178 26.0247C46.812 27.1329 46.9745 28.3103 46.8952 29.4838L56.8862 32.8141C58.022 31.0485 59.7684 29.7632 61.7919 29.2035C63.8153 28.6438 65.974 28.849 67.8557 29.7799L82.0611 13.2098C81.4468 11.9028 81.1729 10.4616 81.265 9.02039C81.357 7.57912 81.8119 6.18452 82.5874 4.96622C83.3629 3.74791 84.4339 2.74545 85.7007 2.05203C86.9675 1.3586 88.3891 0.996719 89.8333 1.00002C94.567 1.00002 98.4166 4.84965 98.4166 9.58335C98.4166 14.3171 94.567 18.1667 89.8333 18.1667C88.0308 18.1667 86.297 17.6002 84.8421 16.5573L71.1131 32.5738C72.1216 34.0072 72.6666 35.7196 72.6666 37.4792C72.6666 42.2129 68.817 46.0625 64.0833 46.0625C62.9063 46.0612 61.7421 45.818 60.663 45.3481C59.5839 44.8782 58.6128 44.1916 57.81 43.3308C57.0072 42.4701 56.3898 41.4536 55.9962 40.3444C55.6025 39.2352 55.4409 38.0569 55.5214 36.8826L45.5304 33.5523C44.9025 34.5304 44.0816 35.37 43.1179 36.0199C42.1543 36.6698 41.0682 37.1163 39.9261 37.332C38.784 37.5478 37.6099 37.5282 36.4756 37.2746C35.3413 37.0209 34.2707 36.5386 33.3292 35.8569L20.3341 46.6891C20.8834 47.835 21.1667 49.0881 21.1667 50.3542C21.1667 55.0879 17.317 58.9375 12.5833 58.9375ZM12.5833 46.0625C10.2186 46.0625 8.29167 47.9895 8.29167 50.3542C8.29167 52.7189 10.2186 54.6459 12.5833 54.6459C14.948 54.6459 16.875 52.7189 16.875 50.3542C16.875 47.9895 14.948 46.0625 12.5833 46.0625ZM64.0833 33.1875C62.9783 33.2369 61.9349 33.7107 61.1705 34.5101C60.406 35.3096 59.9793 36.3731 59.9793 37.4792C59.9793 38.5853 60.406 39.6488 61.1705 40.4482C61.9349 41.2477 62.9783 41.7214 64.0833 41.7709C65.1883 41.7214 66.2317 41.2477 66.9962 40.4482C67.7606 39.6488 68.1873 38.5853 68.1873 37.4792C68.1873 36.3731 67.7606 35.3096 66.9962 34.5101C66.2317 33.7107 65.1883 33.2369 64.0833 33.1875ZM38.3333 24.6042C35.9686 24.6042 34.0417 26.5311 34.0417 28.8959C34.0417 31.2606 35.9686 33.1875 38.3333 33.1875C40.698 33.1875 42.625 31.2606 42.625 28.8959C42.625 26.5311 40.698 24.6042 38.3333 24.6042ZM89.8333 5.29169C88.7283 5.34112 87.6849 5.81487 86.9205 6.6143C86.156 7.41374 85.7293 8.47723 85.7293 9.58335C85.7293 10.6895 86.156 11.753 86.9205 12.5524C87.6849 13.3518 88.7283 13.8256 89.8333 13.875C90.9383 13.8256 91.9817 13.3518 92.7462 12.5524C93.5106 11.753 93.9373 10.6895 93.9373 9.58335C93.9373 8.47723 93.5106 7.41374 92.7462 6.6143C91.9817 5.81487 90.9383 5.34112 89.8333 5.29169Z"
                  fill="#0466C8"
                />
              </g>
              <defs>
                <clipPath id="clip0_8_325">
                  <rect width="103" height="103" fill="white" />
                </clipPath>
              </defs>
            </svg>
            <div className="card-txt">
              <p>NIFTY 50</p>
            </div>
          </div>
          <div className="card-number"> {data?.data?.pricecurrent}</div>
          <div className="card-txt">
            {" "}
            +{data?.data?.pricechange} (+{data?.data?.pricepercentchange}%)
          </div>
        </div>
        <div
          onMouseEnter={() => setViceVersaCards(1)}
          className={viceVersaCards === 2 ? "cards-view-opp" : "cards-view"}
        >
          <div className="card-icon svghover svgCard">
            <svg
              width="40"
              height="32"
              viewBox="0 0 103 103"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g clipPath="url(#clip0_8_325)">
                <path
                  d="M2.14583 104C1.57672 104 1.03092 103.774 0.6285 103.371C0.226078 102.969 0 102.423 0 101.854C0 101.285 0.226078 100.739 0.6285 100.337C1.03092 99.9343 1.57672 99.7082 2.14583 99.7082H4.29167V82.5416C4.29167 80.1726 6.21862 78.2499 8.58333 78.2499H17.1667C19.5314 78.2499 21.4583 80.1726 21.4583 82.5416V99.7082H30.0417V61.0832C30.0417 58.7142 31.9686 56.7916 34.3333 56.7916H42.9166C45.2814 56.7916 47.2083 58.7142 47.2083 61.0832V99.7082H55.7916V69.6666C55.7916 68.5284 56.2438 67.4368 57.0486 66.6319C57.8535 65.8271 58.9451 65.3749 60.0833 65.3749H68.6666C69.8049 65.3749 70.8965 65.8271 71.7013 66.6319C72.5061 67.4368 72.9583 68.5284 72.9583 69.6666V99.7082H81.5416V39.6249C81.5416 37.2602 83.4643 35.3333 85.8333 35.3333H94.4166C96.7856 35.3333 98.7083 37.2602 98.7083 39.6249V99.7082H100.854C101.423 99.7082 101.969 99.9343 102.371 100.337C102.774 100.739 103 101.285 103 101.854C103 102.423 102.774 102.969 102.371 103.371C101.969 103.774 101.423 104 100.854 104H2.14583ZM94.4166 99.7082V39.6249H85.8333V99.7082H94.4166ZM68.6666 99.7082V69.6666H60.0833V99.7082H68.6666ZM42.9166 99.7082V61.0832H34.3333V99.7082H42.9166ZM17.1667 99.7082V82.5416H8.58333V99.7082H17.1667Z"
                  fill="#0466C8"
                />
                <path
                  d="M12.5833 58.9375C7.84962 58.9375 4 55.0879 4 50.3542C4 45.6205 7.84962 41.7709 12.5833 41.7709C14.3858 41.7709 16.1325 42.3416 17.5874 43.3931L30.5826 32.5609C30.0359 31.4164 29.7515 30.1643 29.75 28.8959C29.75 24.1621 33.5996 20.3125 38.3333 20.3125C39.5096 20.314 40.673 20.5569 41.7515 21.0263C42.83 21.4957 43.8007 22.1815 44.6033 23.0413C45.406 23.9011 46.0236 24.9165 46.4178 26.0247C46.812 27.1329 46.9745 28.3103 46.8952 29.4838L56.8862 32.8141C58.022 31.0485 59.7684 29.7632 61.7919 29.2035C63.8153 28.6438 65.974 28.849 67.8557 29.7799L82.0611 13.2098C81.4468 11.9028 81.1729 10.4616 81.265 9.02039C81.357 7.57912 81.8119 6.18452 82.5874 4.96622C83.3629 3.74791 84.4339 2.74545 85.7007 2.05203C86.9675 1.3586 88.3891 0.996719 89.8333 1.00002C94.567 1.00002 98.4166 4.84965 98.4166 9.58335C98.4166 14.3171 94.567 18.1667 89.8333 18.1667C88.0308 18.1667 86.297 17.6002 84.8421 16.5573L71.1131 32.5738C72.1216 34.0072 72.6666 35.7196 72.6666 37.4792C72.6666 42.2129 68.817 46.0625 64.0833 46.0625C62.9063 46.0612 61.7421 45.818 60.663 45.3481C59.5839 44.8782 58.6128 44.1916 57.81 43.3308C57.0072 42.4701 56.3898 41.4536 55.9962 40.3444C55.6025 39.2352 55.4409 38.0569 55.5214 36.8826L45.5304 33.5523C44.9025 34.5304 44.0816 35.37 43.1179 36.0199C42.1543 36.6698 41.0682 37.1163 39.9261 37.332C38.784 37.5478 37.6099 37.5282 36.4756 37.2746C35.3413 37.0209 34.2707 36.5386 33.3292 35.8569L20.3341 46.6891C20.8834 47.835 21.1667 49.0881 21.1667 50.3542C21.1667 55.0879 17.317 58.9375 12.5833 58.9375ZM12.5833 46.0625C10.2186 46.0625 8.29167 47.9895 8.29167 50.3542C8.29167 52.7189 10.2186 54.6459 12.5833 54.6459C14.948 54.6459 16.875 52.7189 16.875 50.3542C16.875 47.9895 14.948 46.0625 12.5833 46.0625ZM64.0833 33.1875C62.9783 33.2369 61.9349 33.7107 61.1705 34.5101C60.406 35.3096 59.9793 36.3731 59.9793 37.4792C59.9793 38.5853 60.406 39.6488 61.1705 40.4482C61.9349 41.2477 62.9783 41.7214 64.0833 41.7709C65.1883 41.7214 66.2317 41.2477 66.9962 40.4482C67.7606 39.6488 68.1873 38.5853 68.1873 37.4792C68.1873 36.3731 67.7606 35.3096 66.9962 34.5101C66.2317 33.7107 65.1883 33.2369 64.0833 33.1875ZM38.3333 24.6042C35.9686 24.6042 34.0417 26.5311 34.0417 28.8959C34.0417 31.2606 35.9686 33.1875 38.3333 33.1875C40.698 33.1875 42.625 31.2606 42.625 28.8959C42.625 26.5311 40.698 24.6042 38.3333 24.6042ZM89.8333 5.29169C88.7283 5.34112 87.6849 5.81487 86.9205 6.6143C86.156 7.41374 85.7293 8.47723 85.7293 9.58335C85.7293 10.6895 86.156 11.753 86.9205 12.5524C87.6849 13.3518 88.7283 13.8256 89.8333 13.875C90.9383 13.8256 91.9817 13.3518 92.7462 12.5524C93.5106 11.753 93.9373 10.6895 93.9373 9.58335C93.9373 8.47723 93.5106 7.41374 92.7462 6.6143C91.9817 5.81487 90.9383 5.34112 89.8333 5.29169Z"
                  fill="#0466C8"
                />
              </g>
              <defs>
                <clipPath id="clip0_8_325">
                  <rect width="103" height="103" fill="white" />
                </clipPath>
              </defs>
            </svg>
            <div className="card-txt">
              <p>SENSEX</p>
            </div>
          </div>
          <div className="card-number"> {sensex?.data?.pricecurrent}</div>
          <div className="card-txt">
            +{sensex?.data?.pricechange} (+{sensex?.data?.pricepercentchange}%)
          </div>
        </div>
      </div>
      {/* </CCol> */}
      <div className="mainCon">
        <LiveData />
      </div>
      <HomeBelow />
    </>
  );
};

export default Index;
