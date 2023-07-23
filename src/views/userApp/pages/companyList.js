import React, { useEffect, useState } from "react";
import "../../../scss/indeaninternational.scss";
import { useNavigate, useParams } from "react-router-dom";

import CIcon from "@coreui/icons-react";
import { cilArrowCircleTop, cilEyedropper, cilLink } from "@coreui/icons";
import { userAxiosInstance } from "src/config";

const CompanyList = () => {
  const [data, setData] = useState();
  const [loading, setLoading] = useState(false);
  const [filterData, setFilterData] = useState([]);
  const navigate = useNavigate();
  const { strategyId } = useParams();
  let token = "";

  const getAllStockData = async () => {
    setLoading(true);
    try {
      const response = await userAxiosInstance.get(
        "/investment/getInvestmentShareNames?page=1&limit=10",
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      setData(response?.data?.data);
    } catch (error) {
      console.log("eeeeeee", error);
    }
    setLoading(false);
  };
  console.log("eeeeeee paramsssss", strategyId);

  useEffect(() => {
    getAllStockData();
  }, []);

  const shareData = [
    "21STCENMGM",
    "360ONE",
    "20MICRONS",
    "3IINFOLTD",
    "3PLAND",
    "4THDIM",
    "63MOONS",
    "5PAISA",
    "8KMILES",
    "A2ZINFRA",
    "AAATECH",
    "AAKASH",
    "AAREYDRUGS",
    "AARON",
    "AARTI-RE",
    "AARTIDRUGS",
    "AARTIIND",
    "AARTIPHARM",
    "AARTISURF",
    "AARVEEDEN",
    "AARVI",
  ];

  const allData = [
    {
      _id: "625fc7575e56873c7738aaee",
      logo: "https://storage.googleapis.com/download/storage/v1/b/tradeunlisted-aef3b.appspot.com/o/images%2F7224.757801977737chennai-super-kings-csk-unlisted-share.webp?generation=1671517314993727&alt=media",
      name: "Chennai Super Kings (CSK) Unlisted Shares",
      urlName: "chennai super kings unlisted shares",
      sector: "Sports & Entertainment",
      pricePerShare: 0,
      brokerPrice: null,
      availableShare: 0,
      top: 1,
      status: "Sold Out",
      isinCode: "INE852S01026",
      schemaMarkup:
        '{\n  "@context": "https://schema.org/", \n  "@type": "Product", \n  "name": "CSK Unlisted Shares",\n  "image": "https://storage.googleapis.com/download/storage/v1/b/tradeunlisted-aef3b.appspot.com/o/images%2F7224.757801977737chennai-super-kings-csk-unlisted-share.webp?generation=1671517314993727&alt=media",\n  "description": "Buy CSK unlisted shares at the best price.",\n  "brand": {\n    "@type": "Brand",\n    "name": "TradeUnlisted"\n  },\n}\n{\n  "@context": "https://schema.org/", \n  "@type": "BreadcrumbList", \n  "itemListElement": [{\n    "@type": "ListItem", \n    "position": 1, \n    "name": "TradeUnlisted",\n    "item": "https://tradeunlisted.com/"  \n  },{\n    "@type": "ListItem", \n    "position": 2, \n    "name": "Unlisted Shares in India",\n    "item": "https://tradeunlisted.com/buy-indian-stocks"  \n  },{\n    "@type": "ListItem", \n    "position": 3, \n    "name": "CSK Unlisted Shares",\n    "item": "https://tradeunlisted.com/buy-indian-stocks/chennai-super-kings-unlisted-shares"  \n  }]\n}\n{\n  "@context": "https://schema.org",\n  "@type": "FAQPage",\n  "mainEntity": [{\n    "@type": "Question",\n    "name": "How to buy Chennai Super Kings (CSK) unlisted shares",\n    "acceptedAnswer": {\n      "@type": "Answer",\n      "text": "The following is the process of buying Chennai Super Kings unlisted shares from the TradeUnlisted platform:\n\nClick on the ‘Invest now’ button on the CSK page. The Chennai Super Kings unlisted stocks will be added to your cart. \nIn the cart section, you will be required to enter the quantity of CSK unlisted shares you want to purchase. \nNext step is to select the payment method you wish to use. We accept payments via debit card, net banking and UPI. \nPayment must be made from the same account to which shares are to be transferred. Third party transactions are strictly prohibited on the platform.\nThe TradeUnlisted team will contact you and set up the whole process smoothly.  \nThe shares will then be credited in the demat account mentioned in the CML copy within the timeline mentioned in the Deal Contract Letter.\nIn case you want to buy Chennai Super Kings (CSK) unlisted shares offline, you may call us on +91 8958 212121 or write to us at contactus@tradeunlisted.com."\n    }\n  },{\n    "@type": "Question",\n    "name": "How to sell Chennai Super Kings (CSK) unlisted shares?",\n    "acceptedAnswer": {\n      "@type": "Answer",\n      "text": "The following is the process to sell Chennai Super Kings (CSK) unlisted shares on TradeUnlisted platform:\n\nFill up the form on https://tradeunlisted.com/sell by choosing the Unlisted Stocks you wish to sell and enter the quantity of the shares along with an expected pricing for the shares. \nThe TradeUnlisted team will contact you to confirm the deal. \nOnce we confirm our buying price of the shares, we will share a copy of our Client Master List (CML). \nYou will then be required to transfer the shares to our demat account. \nOnce the shares are reflected in our demat account, we will transfer the funds to your bank account within the stipulated time and the same will be intimated to you. \nPayment will be made via RTGS, NEFT, IMPS, cheque or UPI. Payment will be made to the same account which is linked to your demat account. \nIn case you have any queries, you may call us on +91 8958 212121 or write to us at contactus@tradeunlisted.com."\n    }\n  },{\n    "@type": "Question",\n    "name": "What is the lock-in period of Chennai Super Kings (CSK) unlisted shares?",\n    "acceptedAnswer": {\n      "@type": "Answer",\n      "text": "There is no restriction on transfer of unlisted shares until the IPO cut-off date which is generally a week before listing. However, after listing SEBI norms are applicable to these shares. As per SEBI regulations, all unlisted shares go in a lock-in period of 6 months from the date of listing of shares. \n\nIn case you have any queries, you may call us on +91 8958 212121 or write to us at contactus@tradeunlisted.com"\n    }\n  },{\n    "@type": "Question",\n    "name": "What is the tax treatment on Chennai Super Kings (CSK) unlisted shares?",\n    "acceptedAnswer": {\n      "@type": "Answer",\n      "text": "If you sell the Chennai Super Kings (CSK) unlisted shares within 2 years of its acquisition, then you will be required to pay tax on the short-term capital gain (STCG) as per the individual tax slab rate. Selling the shares after 2 years will attract a long-term capital gain (LTCG) which will be taxed at the rate of 20% with indexation benefit or 10% without indexation benefit.\n\nInvestors should consult with an independent third-party taxation advisor prior to making investment decisions.\n\nIn case you have any queries, you may call us on +91 8958 212121 or write to us at contactus@tradeunlisted.com"\n    }\n  },{\n    "@type": "Question",\n    "name": "How to check credit of Chennai Super Kings (CSK) unlisted shares?",\n    "acceptedAnswer": {\n      "@type": "Answer",\n      "text": "All unlisted shares can be transferred only to Demat accounts. Unlisted shares can be checked in two ways: \n1. Option 1 \n\nDownload the NSDL or CDSL mobile application from the Google Play or App Store.\nEnter your DP ID + Client ID (total of 16 characters) \n2. Option 2\n\nYou may also check the credit of your shares, by logging in to your Demat account and checking under DP Holdings in your respective DP.  \n\nIn case you have any queries, you may call us on +91 8958 212121 or write to us at contactus@tradeunlisted.com."\n    },\n{\n    "@type": "Question",\n    "name": "How do I check whether my demat account is in CDSL or NSDL?",\n    "acceptedAnswer": {\n      "@type": "Answer",\n      "text": "In the case of CDSL, the first 8 digits of your Demat Account Number are depository participant ID and the last 8 digits are your customer ID with the depository participant. The same goes for NSDL where ‘IN’, the 6 digits are depository participant ID and the rest of the numbers reflect your customer ID with a depository participant.\n\nNational Securities Depository Limited (NSDL): The Demat account number of NSDL starts with alphabets ‘IN’ followed by 14 numeric digits.\n\nFor e.g. IN30000012345678.\nCentral Depository Service Limited (CDSL) : The entire DEMAT account number of CDSL is numeric.\n\nFor e.g.1234567800001234\n\nIn case you have any queries, you may call us on +91 8958 212121 or write to us at contactus@tradeunlisted.com. "\n    },\n{\n    "@type": "Question",\n    "name": "What is the minimum ticket size for investment in CSK unlisted shares?",\n    "acceptedAnswer": {\n      "@type": "Answer",\n      "text": "Investments on TradeUnlisted start from as low as INR 5,000. Please call us on +91 8958 212121  to find the company specific details pertaining to the lot size and minimum investment amount."\n    },\n{\n    "@type": "Question",\n    "name": "How to sell Chennai Super Kings (CSK) unlisted shares?",\n    "acceptedAnswer": {\n      "@type": "Answer",\n      "text": "The following is the process to sell Chennai Super Kings (CSK) unlisted shares on TradeUnlisted platform:\n\nFill up the form on https://tradeunlisted.com/Liquidate-Investments by choosing the Unlisted Stocks you wish to sell and enter the quantity of the shares along with an expected pricing for the shares. \nThe TradeUnlisted team will contact you to confirm the deal. \nOnce we confirm our buying price of the shares, we will share a copy of our Client Master List (CML). \nYou will then be required to transfer the shares to our demat account. \nOnce the shares are reflected in our demat account, we will transfer the funds to your bank account within the stipulated time and the same will be intimated to you. \nPayment will be made via RTGS, NEFT, IMPS, cheque or UPI. Payment will be made to the same account which is linked to your demat account. \nIn case you have any queries, you may call us on +91 8958 212121 or write to us at contactus@tradeunlisted.com."\n    },\n{\n    "@type": "Question",\n    "name": "What are the financials of Chennai Super Kings (CSK) Unlisted Shares?",\n    "acceptedAnswer": {\n      "@type": "Answer",\n      "text": "The financials are available in the Research Report, DRHP, and Annual Reports of Chennai Super Kings (CSK) Unlisted Shares, which may be found under the Reports section of the company\'s specific page. You can download all the reports after logging in."\n    }\n  }]\n}\n</script>',
      minQuantity: null,
      isWatchList: false,
      index: 51,
    },
    {
      _id: "628f323199c7032c003398d6",
      logo: "https://storage.googleapis.com/download/storage/v1/b/tradeunlisted-aef3b.appspot.com/o/images%2F7915.795694621357oyo-unlisted-share.webp?generation=1671449613588352&alt=media",
      name: "OYO (Oravel Stays Ltd) Unlisted Shares",
      urlName: "oyo unlisted shares",
      sector: "HospitalityTech",
      pricePerShare: 63,
      brokerPrice: null,
      availableShare: 28389,
      top: 2,
      status: "Available",
      isinCode: "INE561T01021",
      schemaMarkup:
        '{\n  "@context": "https://schema.org/", \n  "@type": "Product", \n  "name": "OYO unlisted shares",\n  "image": "https://storage.googleapis.com/download/storage/v1/b/tradeunlisted-aef3b.appspot.com/o/images%2F7915.795694621357oyo-unlisted-share.webp?generation=1671449613588352&alt=media",\n  "description": "Buy or sell Oravel Stays Ltd Unlisted Shares. Check updated prices and download the research report.",\n  "brand": {\n    "@type": "Brand",\n    "name": "TradeUnlisted"\n  }\n}\n{\n  "@context": "https://schema.org/", \n  "@type": "BreadcrumbList", \n  "itemListElement": [{\n    "@type": "ListItem", \n    "position": 1, \n    "name": "TradeUnlisted",\n    "item": "https://tradeunlisted.com/"  \n  },{\n    "@type": "ListItem", \n    "position": 2, \n    "name": "Unlisted Shares in India",\n    "item": "https://tradeunlisted.com/buy-indian-stocks"  \n  },{\n    "@type": "ListItem", \n    "position": 3, \n    "name": "OYO Unlisted Shares",\n    "item": "https://tradeunlisted.com/buy-indian-stocks/oyo-unlisted-shares"  \n  }]\n}\n{\n  "@context": "https://schema.org",\n  "@type": "FAQPage",\n  "mainEntity": [{\n    "@type": "Question",\n    "name": "How much time does it take to credit Oravel Stays Ltd unlisted shares in a demat account?",\n    "acceptedAnswer": {\n      "@type": "Answer",\n      "text": "The Oravel Stays Ltd unlisted shares are credited in your Demat account within a maximum of two (working) days after the funds are received in our bank account. However, please note that at times there may be a slight delay in the credit of shares due to certain reasons like Bank Holidays.\n\nIn case you have any queries, you may call us on +91 8958 212121 or write to us at contactus@tradeunlisted.com."\n    }\n  },{\n    "@type": "Question",\n    "name": "How to sell OYO (Oravel Stays Ltd) unlisted shares?",\n    "acceptedAnswer": {\n      "@type": "Answer",\n      "text": "The following is the process to sell OYO (Oravel Stays Ltd) unlisted shares on TradeUnlisted platform:\n\nFill up the form on https://tradeunlisted.com/sell by choosing the Unlisted Stocks you wish to sell and enter the quantity of the shares along with an expected pricing for the shares. \nThe TradeUnlisted team will contact you to confirm the deal. \nOnce we confirm our buying price of the shares, we will share a copy of our Client Master List (CML). \nYou will then be required to transfer the shares to our demat account. \nOnce the shares are reflected in our demat account, we will transfer the funds to your bank account within the stipulated time and the same will be intimated to you. \nPayment will be made via RTGS, NEFT, IMPS, cheque or UPI. Payment will be made to the same account which is linked to your demat account. \nIn case you have any queries, you may call us on +91 8958 212121 or write to us at contactus@tradeunlisted.com."\n    }\n  },{\n    "@type": "Question",\n    "name": "What is the minimum ticket size for investment in OYO (Oravel Stays Ltd) unlisted shares?",\n    "acceptedAnswer": {\n      "@type": "Answer",\n      "text": "Investments on TradeUnlisted start from as low as INR 5,000. Please call us on +91 8958 212121  to find the company specific details pertaining to the lot size and minimum investment amount."\n    }\n  },{\n    "@type": "Question",\n    "name": "What is the tax treatment on OYO (Oravel Stays Ltd) unlisted shares?",\n    "acceptedAnswer": {\n      "@type": "Answer",\n      "text": "If you sell the OYO (Oravel Stays Ltd) unlisted shares within 2 years of its acquisition, then you will be required to pay tax on the short-term capital gain (STCG) as per the individual tax slab rate. Selling the shares after 2 years will attract a long-term capital gain (LTCG) which will be taxed at the rate of 20% with indexation benefit or 10% without indexation benefit.\n\nInvestors should consult with an independent third-party taxation advisor prior to making investment decisions.\n\nIn case you have any queries, you may call us on +91 8958 212121 or write to us at contactus@tradeunlisted.com"\n    }\n  },{\n    "@type": "Question",\n    "name": "What are the financials of OYO (Oravel Stays Ltd) Unlisted Shares?",\n    "acceptedAnswer": {\n      "@type": "Answer",\n      "text": "The financials are available in the Research Report, DRHP, and Annual Reports of OYO (Oravel Stays Ltd) Unlisted Shares, which may be found under the Reports section of the company\'s specific page. You can download all the reports after logging in"\n    }\n  }]\n}\n</script>',
      minQuantity: null,
      isWatchList: false,
      index: 50,
    },
    {
      _id: "62974827c8e440e27dd420a7",
      logo: "https://storage.googleapis.com/download/storage/v1/b/tradeunlisted-aef3b.appspot.com/o/images%2F7232.297543137584bira-91-unlisted-share.webp?generation=1671517596575160&alt=media",
      name: "Bira91 (B9 Beverages Pvt Ltd) Unlisted Shares",
      urlName: "bira91 unlisted shares",
      sector: "Brewery",
      pricePerShare: 670,
      brokerPrice: null,
      availableShare: 427,
      top: 3,
      status: "Available",
      isinCode: "INE833U01014",
      schemaMarkup:
        '{\n  "@context": "https://schema.org/", \n  "@type": "Product", \n  "name": "Bira91 unlisted shares",\n  "image": "https://storage.googleapis.com/download/storage/v1/b/tradeunlisted-aef3b.appspot.com/o/images%2F7232.297543137584bira-91-unlisted-share.webp?generation=1671517596575160&alt=media",\n  "description": "Buy or Sell Bira 91 Unlisted Shares online. Check updated prices and download the research report",\n  "brand": {\n    "@type": "Brand",\n    "name": "TradeUnlisted"\n  }\n}\n<script type="application/ld+json">\n{\n  "@context": "https://schema.org/", \n  "@type": "BreadcrumbList", \n  "itemListElement": [{\n    "@type": "ListItem", \n    "position": 1, \n    "name": "TradeUnlisted",\n    "item": "https://tradeunlisted.com/"  \n  },{\n    "@type": "ListItem", \n    "position": 2, \n    "name": "Unlisted Shares in India",\n    "item": "https://tradeunlisted.com/buy-indian-stocks"  \n  },{\n    "@type": "ListItem", \n    "position": 3, \n    "name": "Bira91Unlisted Shares",\n    "item": "https://tradeunlisted.com/buy-indian-stocks/bira91-unlisted-shares"  \n  }]\n}\n{\n  "@context": "https://schema.org",\n  "@type": "FAQPage",\n  "mainEntity": [{\n    "@type": "Question",\n    "name": "How to buy Bira91 (B9 Beverages Pvt Ltd) unlisted shares?",\n    "acceptedAnswer": {\n      "@type": "Answer",\n      "text": "The following is the process of buying Bira91 (B9 Beverages Pvt Ltd) unlisted shares from the TradeUnlisted platform:\n\nClick on the ‘Invest now’ button on the Bira91 page. The Bira91 unlisted stocks will be added to your cart. \nIn the cart section, you will be required to enter the quantity of Bira91 unlisted shares you want to purchase. \nNext step is to select the payment method you wish to use. We accept payments via debit card, net banking and UPI. \nPayment must be made from the same account to which shares are to be transferred. Third party transactions are strictly prohibited on the platform.\nThe TradeUnlisted team will contact you and set up the whole process smoothly.  \nThe shares will then be credited in the demat account mentioned in the CML copy within the timeline mentioned in the Deal Contract Letter.\nIn case you want to buy Bira91 (B9 Beverages Pvt Ltd) unlisted shares offline, you may call us on +91 8958 212121 or write to us at contactus@tradeunlisted.com."\n    }\n  },{\n    "@type": "Question",\n    "name": "How to sell Bira91 (B9 Beverages Pvt Ltd) unlisted shares?",\n    "acceptedAnswer": {\n      "@type": "Answer",\n      "text": "The following is the process to sell Bira91 (B9 Beverages Pvt Ltd) unlisted shares on TradeUnlisted platform:\n\nFill up the form on https://tradeunlisted.com/sell by choosing the Unlisted Stocks you wish to sell and enter the quantity of the shares along with an expected pricing for the shares. \nThe TradeUnlisted team will contact you to confirm the deal. \nOnce we confirm our buying price of the shares, we will share a copy of our Client Master List (CML). \nYou will then be required to transfer the shares to our demat account. \nOnce the shares are reflected in our demat account, we will transfer the funds to your bank account within the stipulated time and the same will be intimated to you. \nPayment will be made via RTGS, NEFT, IMPS, cheque or UPI. Payment will be made to the same account which is linked to your demat account. \nIn case you have any queries, you may call us on +91 8958 212121 or write to us at contactus@tradeunlisted.com"\n    }\n  },{\n    "@type": "Question",\n    "name": "What is the lock-in period of Bira91 (B9 Beverages Pvt Ltd) unlisted shares?",\n    "acceptedAnswer": {\n      "@type": "Answer",\n      "text": "There is no restriction on transfer of unlisted shares until the IPO cut-off date which is generally a week before listing. However, after listing SEBI norms are applicable to these shares. As per SEBI regulations, all unlisted shares go in a lock-in period of 6 months from the date of listing of shares. \n\nIn case you have any queries, you may call us on +91 8958 212121 or write to us at contactus@tradeunlisted.com"\n    }\n  },{\n    "@type": "Question",\n    "name": "What is the tax treatment on Bira91 (B9 Beverages Pvt Ltd) unlisted shares?",\n    "acceptedAnswer": {\n      "@type": "Answer",\n      "text": "If you sell the Bira91 (B9 Beverages Pvt Ltd) unlisted shares within 2 years of its acquisition, then you will be required to pay tax on the short-term capital gain (STCG) as per the individual tax slab rate. Selling the shares after 2 years will attract a long-term capital gain (LTCG) which will be taxed at the rate of 20% with indexation benefit or 10% without indexation benefit.\n\nInvestors should consult with an independent third-party taxation advisor prior to making investment decisions.\n\nIn case you have any queries, you may call us on +91 8958 212121 or write to us at contactus@tradeunlisted.com"\n    }\n  },{\n    "@type": "Question",\n    "name": "How to check credit of Bira91 (B9 Beverages Pvt Ltd) unlisted shares?",\n    "acceptedAnswer": {\n      "@type": "Answer",\n      "text": "All unlisted shares can be transferred only to Demat accounts. Unlisted shares can be checked in two ways: \n1. Option 1 \n\nDownload the NSDL or CDSL mobile application from the Google Play or App Store.\nEnter your DP ID + Client ID (total of 16 characters) \n2. Option 2\n\nYou may also check the credit of your shares, by logging in to your Demat account and checking under DP Holdings in your respective DP.  \n\nIn case you have any queries, you may call us on +91 8958 212121 or write to us at contactus@tradeunlisted.com."\n    }\n  },{\n    "@type": "Question",\n    "name": "How much time does it take to credit Bira91 unlisted shares in a demat account?",\n    "acceptedAnswer": {\n      "@type": "Answer",\n      "text": "The Bira91 unlisted shares are credited in your Demat account within a maximum of two (working) days after the funds are received in our bank account. However, please note that at times there may be a slight delay in the credit of shares due to certain reasons like Bank Holidays.\n\nIn case you have any queries, you may call us on +91 8958 212121 or write to us at contactus@tradeunlisted.com."\n    }\n  },{\n    "@type": "Question",\n    "name": "What is the minimum ticket size for investment in Bira91 unlisted shares?",\n    "acceptedAnswer": {\n      "@type": "Answer",\n      "text": "Investments on TradeUnlisted start from as low as INR 5,000. Please call us on +91 8958 212121  to find the company specific details pertaining to the lot size and minimum investment amount."\n    }\n  },{\n    "@type": "Question",\n    "name": "What are the financials of Bira91 (B9 Beverages Pvt Ltd) Unlisted Shares?",\n    "acceptedAnswer": {\n      "@type": "Answer",\n      "text": "The financials are available in the Research Report, DRHP, and Annual Reports of Bira91 (B9 Beverages Pvt Ltd) Unlisted Shares, which may be found under the Reports section of the company\'s specific page. You can download all the reports after logging in."\n    }\n  }]\n}\n\n</script>',
      isWatchList: false,
      index: 49,
    },
    {
      _id: "63fc3e251d06855848935079",
      logo: "https://storage.googleapis.com/download/storage/v1/b/tradeunlisted-aef3b.appspot.com/o/images%2F2669.9735334219476Sbi-logo-2.png?generation=1677475530422358&alt=media",
      name: "SBI Funds Management Limited Unlisted Shares",
      urlName: "sbi mutual fund unlisted shares",
      sector: "Finance",
      pricePerShare: 927,
      brokerPrice: null,
      availableShare: 74,
      top: 4,
      status: "Available",
      isinCode: "INE640G01020",
      minQuantity: null,
      schemaMarkup:
        '<script type="application/ld+json">\n{\n  "@context": "https://schema.org/", \n  "@type": "Product", \n  "name": "SBI Funds Management Limited Unlisted Shares",\n  "image": "https://storage.googleapis.com/download/storage/v1/b/tradeunlisted-aef3b.appspot.com/o/images%2F2669.9735334219476Sbi-logo-2.png?generation=1677475530422358&alt=media",\n  "description": "Buy or Sell SBI Mutual Fund unlisted shares online. Check updated prices and download the research report.",\n  "brand": {\n    "@type": "Brand",\n    "name": "TradeUnlisted"\n  }\n}\n{\n  "@context": "https://schema.org/", \n  "@type": "BreadcrumbList", \n  "itemListElement": [{\n    "@type": "ListItem", \n    "position": 1, \n    "name": "TradeUnlisted",\n    "item": "https://tradeunlisted.com/"  \n  },{\n    "@type": "ListItem", \n    "position": 2, \n    "name": "Unlisted Shares in India",\n    "item": "https://tradeunlisted.com/buy-indian-stocks"  \n  },{\n    "@type": "ListItem", \n    "position": 3, \n    "name": "SBI Funds Management Limited Unlisted Shares",\n    "item": "https://tradeunlisted.com/buy-indian-stocks/sbi-mutual-fund-unlisted-shares"  \n  }]\n}\n{\n  "@context": "https://schema.org",\n  "@type": "FAQPage",\n  "mainEntity": [{\n    "@type": "Question",\n    "name": "How to buy SBI Funds Management Ltd unlisted shares?",\n    "acceptedAnswer": {\n      "@type": "Answer",\n      "text": "The following is the process of buying SBI Funds Management Ltd unlisted shares on www.tradeunlisted.com. \n\nClick on the ‘Invest now’ button on the SBI Funds Management Ltd page The SBI Funds Management Ltd unlisted stocks will be added to your cart. \nIn the cart section, you will be required to enter the quantity of SBI Funds Management Ltd unlisted shares you want to purchase. \nNext step is to select the payment method you wish to use. We accept payments via debit card, net banking and UPI. \nPayment must be made from the same account to which shares are to be transferred. Third party transactions are strictly prohibited on the platform.\nThe TradeUnlisted team will contact you and set up the whole process smoothly.  \nThe shares will then be credited in the demat account mentioned in the CML copy within the timeline mentioned in the Deal Contract Letter.\nIn case you want to buy SBI Funds Management Ltd unlisted shares offline, you may call us on +91 8958 212121 or write to us at contactus@tradeunlisted.com."\n    }\n  },{\n    "@type": "Question",\n    "name": "How to sell SBI Funds Management Ltd unlisted shares?",\n    "acceptedAnswer": {\n      "@type": "Answer",\n      "text": "The following is the process to sell SBI Funds Management Ltd unlisted shares on www.tradeunlisted.com. \n\nFill up the form on https://tradeunlisted.com/sell by choosing the Unlisted Stocks you wish to sell and enter the quantity of the shares along with an expected pricing for the shares. \nThe TradeUnlisted team will contact you to confirm the deal. \nOnce we confirm our buying price of the shares, we will share a copy of our Client Master List (CML). \nYou will then be required to transfer the shares to our demat account. \nOnce the shares are reflected in our demat account, we will transfer the funds to your bank account within the stipulated time and the same will be intimated to you. \nPayment will be made via RTGS, NEFT, IMPS, Cheque or UPI. Payment will be made to the same account which is linked to your demat account."\n    }\n  },{\n    "@type": "Question",\n    "name": "What is the lock-in period of SBI Funds Management Ltd unlisted shares?",\n    "acceptedAnswer": {\n      "@type": "Answer",\n      "text": "There is no restriction on transfer of unlisted shares until the IPO cut-off date which is generally a week before listing. However, after listing SEBI norms are applicable to these shares. As per SEBI regulations, all unlisted shares go in a lock-in period of 6 months from the date of listing of shares. \n\nIn case you have any queries, you may call us on +91 8958 212121 or write to us at contactus@tradeunlisted.com"\n    }\n  },{\n    "@type": "Question",\n    "name": "What is the tax treatment on SBI Funds Management Ltd unlisted shares?",\n    "acceptedAnswer": {\n      "@type": "Answer",\n      "text": "If you sell the SBI Funds Management Ltd unlisted shares within 2 years of its acquisition, then you will be required to pay tax on the short-term capital gain (STCG) as per the individual tax slab rate. Selling the shares after 2 years will attract a long-term capital gain (LTCG) which will be taxed at the rate of 20% with indexation benefit or 10% without indexation benefit.\n\nInvestors should consult with an independent third-party taxation advisor prior to making investment decisions.\n\nIn case you have any queries, you may call us on +91 8958 212121 or write to us at contactus@tradeunlisted.com"\n    }\n  },{\n    "@type": "Question",\n    "name": "How to check credit of SBI Funds Management Ltd unlisted shares?",\n    "acceptedAnswer": {\n      "@type": "Answer",\n      "text": "All unlisted shares can be transferred only to Demat accounts. Unlisted shares can be checked in two ways: \n1. Option 1 \n\nDownload the NSDL or CDSL mobile application from the Google Play or App Store.\nEnter your DP ID + Client ID (total of 16 characters) \n2. Option 2\n\nYou may also check the credit of your shares, by logging in to your Demat account and checking under DP Holdings in your respective DP.  \n\nIn case you have any queries, you may call us on +91 8958 212121 or write to us at contactus@tradeunlisted.com."\n    }\n  },{\n    "@type": "Question",\n    "name": "How much time does it take to credit SBI Funds Management unlisted shares in a demat account?",\n    "acceptedAnswer": {\n      "@type": "Answer",\n      "text": "The SBI Funds Management unlisted shares are credited in your Demat account within a maximum of two (working) days after the funds are received in our bank account. However, please note that at times there may be a slight delay in the credit of shares due to certain reasons like Bank Holidays.\n\nIn case you have any queries, you may call us on +91 8958 212121 or write to us at contactus@tradeunlisted.com."\n    }\n  },{\n    "@type": "Question",\n    "name": "What is the minimum ticket size for investment in SBI Funds Management Ltd unlisted shares?",\n    "acceptedAnswer": {\n      "@type": "Answer",\n      "text": "Investments on TradeUnlisted start from as low as INR 5,000. Please call us on +91 8958 212121  to find the company specific details pertaining to the lot size and minimum investment amount."\n    }\n  },{\n    "@type": "Question",\n    "name": "What are the financials of SBI Funds Management Ltd Unlisted Shares?",\n    "acceptedAnswer": {\n      "@type": "Answer",\n      "text": "The financials are available in the Research Report, DRHP, and Annual Reports of SBI Funds Management Ltd Unlisted Shares, which may be found under the Reports section of the company\'s specific page. You can download all the reports after logging in."\n    }\n  }]\n}\n</script>',
      isWatchList: false,
      index: 48,
    },
    {
      _id: "625406b2e14bb9ba86e6ecfa",
      logo: "https://storage.googleapis.com/download/storage/v1/b/tradeunlisted-aef3b.appspot.com/o/images%2F8053.936207713772nse-unlisted-shares.webp?generation=1671516923087511&alt=media",
      name: "National Stock Exchange (NSE) Unlisted Shares",
      sector: "Exchanges",
      pricePerShare: 0,
      brokerPrice: null,
      availableShare: 0,
      top: 5,
      status: "Sold Out",
      isinCode: "INE721I01024 ",
      urlName: "national stock exchange unlisted shares",
      schemaMarkup:
        '{\n  "@context": "https://schema.org/", \n  "@type": "Product", \n  "name": "National Stock Exchange (NSE) Unlisted Shares",\n  "image": "https://storage.googleapis.com/download/storage/v1/b/tradeunlisted-aef3b.appspot.com/o/images%2F8053.936207713772nse-unlisted-shares.webp?generation=1671516923087511&alt=media",\n  "description": "Buy and Sell NSE Unlisted Shares at Best Prices. Check NSE share Price and download research reports.",\n  "brand": {\n    "@type": "Brand",\n    "name": "TradeUnlisted"\n  }\n}\n{\n  "@context": "https://schema.org/", \n  "@type": "BreadcrumbList", \n  "itemListElement": [{\n    "@type": "ListItem", \n    "position": 1, \n    "name": "TradeUnlisted",\n    "item": "https://tradeunlisted.com/"  \n  },{\n    "@type": "ListItem", \n    "position": 2, \n    "name": "Unlisted Shares in India",\n    "item": "https://tradeunlisted.com/buy-indian-stocks"  \n  },{\n    "@type": "ListItem", \n    "position": 3, \n    "name": "National Stock Exchange (NSE) Unlisted Shares",\n    "item": "https://tradeunlisted.com/buy-indian-stocks/national-stock-exchange-unlisted-shares"  \n  }]\n\n{\n  "@context": "https://schema.org",\n  "@type": "FAQPage",\n  "mainEntity": {\n    "@type": "Question",\n    "name": "What is the lock-in period of National Stock Exchange (NSE) unlisted shares?",\n    "acceptedAnswer": {\n      "@type": "Answer",\n      "text": "There is no restriction on transfer of unlisted shares until the IPO cut-off date which is generally a week before listing. However, after listing SEBI norms are applicable to these shares. As per SEBI regulations, all unlisted shares go in a lock-in period of 6 months from the date of listing of shares. \n\nIn case you have any queries, you may call us on +91 8958 212121 or write to us at contactus@tradeunlisted.com\n\nClick on the ‘Invest now’ button on the SBI Funds Management Ltd page The SBI Funds Management Ltd unlisted stocks will be added to your cart. \nIn the cart section, you will be required to enter the quantity of SBI Funds Management Ltd unlisted shares you want to purchase. \nNext step is to select the payment method you wish to use. We accept payments via debit card, net banking and UPI. \nPayment must be made from the same account to which shares are to be transferred. Third party transactions are strictly prohibited on the platform.\nThe TradeUnlisted team will contact you and set up the whole process smoothly.  \nThe shares will then be credited in the demat account mentioned in the CML copy within the timeline mentioned in the Deal Contract Letter.\nIn case you want to buy SBI Funds Management Ltd unlisted shares offline, you may call us on +91 8958 212121 or write to us at contactus@tradeunlisted.com."\n    }\n  }\n}\n}\n\n</script>',
      minQuantity: null,
      isWatchList: false,
      index: 47,
    },
    {
      _id: "62567536da850bf6ebab0d0d",
      logo: "https://storage.googleapis.com/download/storage/v1/b/tradeunlisted-aef3b.appspot.com/o/images%2F13.943427690179533pharmeasy-unlisted-share.webp?generation=1671517567588979&alt=media",
      name: "PharmEasy (API Holdings Ltd) Unlisted Shares",
      urlName: "pharmeasy api holdings ltd unlisted shares",
      sector: "Pharma",
      pricePerShare: 24,
      brokerPrice: null,
      availableShare: 24580,
      top: 6,
      status: "Available",
      isinCode: "INE0DJ201029",
      schemaMarkup:
        '{\n  "@context": "https://schema.org/", \n  "@type": "Product", \n  "name": "PharmEasy (API Holdings Ltd) Unlisted Shares",\n  "image": "https://storage.googleapis.com/download/storage/v1/b/tradeunlisted-aef3b.appspot.com/o/images%2F13.943427690179533pharmeasy-unlisted-share.webp?generation=1671517567588979&alt=media",\n  "description": "Buy or Sell PharmEasy shares online. We are offering the best prices on Pre IPO shares. Download the research report.",\n  "brand": {\n    "@type": "Brand",\n    "name": "TradeUnlisted"\n  }\n}\n{\n  "@context": "https://schema.org/", \n  "@type": "BreadcrumbList", \n  "itemListElement": [{\n    "@type": "ListItem", \n    "position": 1, \n    "name": "TradeUnlisted",\n    "item": "https://tradeunlisted.com/"  \n  },{\n    "@type": "ListItem", \n    "position": 2, \n    "name": "Unlisted Shares in India",\n    "item": "https://tradeunlisted.com/buy-indian-stocks"  \n  },{\n    "@type": "ListItem", \n    "position": 3, \n    "name": "PharmEasy (API Holdings Ltd) Unlisted Shares",\n    "item": "https://tradeunlisted.com/buy-indian-stocks/pharmeasy-api-holdings-ltd-unlisted-shares"  \n  }]\n}\n{\n  "@context": "https://schema.org",\n  "@type": "FAQPage",\n  "mainEntity": [{\n    "@type": "Question",\n    "name": "How to buy PharmEasy (API Holdings Ltd) unlisted shares?",\n    "acceptedAnswer": {\n      "@type": "Answer",\n      "text": "The following is the process of buying PharmEasy (API Holdings Ltd) unlisted shares from the TradeUnlisted platform:\n\nClick on the ‘Invest now’ button on the PharmEasy page. The PharmEasy unlisted stocks will be added to your cart. \nIn the cart section, you will be required to enter the quantity of PharmEasy unlisted shares you want to purchase. \nNext step is to select the payment method you wish to use. We accept payments via debit card, net banking and UPI. \nPayment must be made from the same account to which shares are to be transferred. Third party transactions are strictly prohibited on the platform.\nThe TradeUnlisted team will contact you and set up the whole process smoothly.  \nThe shares will then be credited in the demat account mentioned in the CML copy within the timeline mentioned in the Deal Contract Letter.\nIn case you want to buy PharmEasy (API Holdings Ltd) unlisted shares offline, you may call us on +91 8958 212121 or write to us at contactus@tradeunlisted.com."\n    }\n  },{\n    "@type": "Question",\n    "name": "How to sell PharmEasy (API Holdings Ltd) unlisted shares?",\n    "acceptedAnswer": {\n      "@type": "Answer",\n      "text": "The following is the process to sell unlisted shares on TradeUnlisted platform:\n\nFill up the form on https://tradeunlisted.com/sell by choosing the Unlisted Stocks you wish to sell and enter the quantity of the shares along with an expected pricing for the shares. \nThe TradeUnlisted team will contact you to confirm the deal. \nOnce we confirm our buying price of the shares, we will share a copy of our Client Master List (CML). \nYou will then be required to transfer the shares to our demat account. \nOnce the shares are reflected in our demat account, we will transfer the funds to your bank account within the stipulated time and the same will be intimated to you. \nPayment will be made via RTGS, NEFT, IMPS, cheque or UPI. Payment will be made to the same account which is linked to your demat account. \nIn case you have any queries, you may call us on +91 8958 212121 or write to us at contactus@tradeunlisted.com."\n    }\n  },{\n    "@type": "Question",\n    "name": "What is the lock-in period of PharmEasy (API Holdings Ltd) unlisted shares?",\n    "acceptedAnswer": {\n      "@type": "Answer",\n      "text": "There is no restriction on transfer of unlisted shares until the IPO cut-off date which is generally a week before listing. However, after listing SEBI norms are applicable to these shares. As per SEBI regulations, all unlisted shares go in a lock-in period of 6 months from the date of listing of shares. \n\nIn case you have any queries, you may call us on +91 8958 212121 or write to us at contactus@tradeunlisted.com"\n    }\n  },{\n    "@type": "Question",\n    "name": "What is the tax treatment on PharmEasy (API Holdings Ltd) unlisted shares?",\n    "acceptedAnswer": {\n      "@type": "Answer",\n      "text": "If you sell the PharmEasy (API Holdings Ltd) unlisted shares within 2 years of its acquisition, then you will be required to pay tax on the short-term capital gain (STCG) as per the individual tax slab rate. Selling the shares after 2 years will attract a long-term capital gain (LTCG) which will be taxed at the rate of 20% with indexation benefit or 10% without indexation benefit.\n\nInvestors should consult with an independent third-party taxation advisor prior to making investment decisions.\n\nIn case you have any queries, you may call us on +91 8958 212121 or write to us at contactus@tradeunlisted.com."\n    }\n  },{\n    "@type": "Question",\n    "name": "How to check credit of PharmEasy (API Holdings Ltd) unlisted shares?",\n    "acceptedAnswer": {\n      "@type": "Answer",\n      "text": "All unlisted shares can be transferred only to Demat accounts. Unlisted shares can be checked in two ways: \n1. Option 1 \n\nDownload the NSDL or CDSL mobile application from the Google Play or App Store.\nEnter your DP ID + Client ID (total of 16 characters) \n2. Option 2\n\nYou may also check the credit of your shares, by logging in to your Demat account and checking under DP Holdings in your respective DP.  \n\nIn case you have any queries, you may call us on +91 8958 212121 or write to us at contactus@tradeunlisted.com."\n    }\n  },{\n    "@type": "Question",\n    "name": "How much time does it take to credit PharmEasy (API Holdings Ltd) unlisted shares in a demat account?",\n    "acceptedAnswer": {\n      "@type": "Answer",\n      "text": "The PharmEasy unlisted shares are credited in your Demat account within a maximum of two (working) days after the funds are received in our bank account. However, please note that at times there may be a slight delay in the credit of shares due to certain reasons like Bank Holidays.\n\nIn case you have any queries, you may call us on +91 8958 212121 or write to us at contactus@tradeunlisted.com."\n    }\n  },{\n    "@type": "Question",\n    "name": "What is the minimum ticket size for investment in PharmEasy (API Holdings Ltd) unlisted shares?",\n    "acceptedAnswer": {\n      "@type": "Answer",\n      "text": "Investments on TradeUnlisted start from as low as INR 5,000. Please call us on +91 8958 212121  to find the company specific details pertaining to the lot size and minimum investment amount."\n    }\n  },{\n    "@type": "Question",\n    "name": "How to track daily news of PharmEasy (API Holdings Ltd) unlisted shares?",\n    "acceptedAnswer": {\n      "@type": "Answer",\n      "text": "To track news and other information of PharmEasy (API Holdings Ltd) unlisted shares, you can join our Telegram Channel or Facebook Community  to stay updated on all news of the unlisted space."\n    }\n  },{\n    "@type": "Question",\n    "name": "How to check daily prices of PharmEasy (API Holdings Ltd) unlisted shares?",\n    "acceptedAnswer": {\n      "@type": "Answer",\n      "text": "You can track prices and access historical graphs of Unlisted Shares on both our website and mobile application. \n\nDownload our mobile App from the Google Play or App Store."\n    }\n  },{\n    "@type": "Question",\n    "name": "What are the financials of PharmEasy (API Holdings Ltd) Unlisted Shares?",\n    "acceptedAnswer": {\n      "@type": "Answer",\n      "text": "The financials are available in the Research Report, DRHP, and Annual Reports of PharmEasy (API Holdings Ltd) Unlisted Shares, which may be found under the Reports section of the company\'s specific page. You can download all the reports after logging in."\n    }\n  }]\n}\n</script>',
      isWatchList: false,
      index: 46,
    },
    {
      _id: "6253f2adcaa81c3e3f3d6e4f",
      logo: "https://storage.googleapis.com/download/storage/v1/b/tradeunlisted-aef3b.appspot.com/o/images%2F2226.09852583324hdb-financial-services-unlisted-share.webp?generation=1671518495330111&alt=media",
      name: "HDB Financial Services Ltd (HDBFS) Unlisted Shares",
      sector: "NBFC",
      pricePerShare: 660,
      brokerPrice: null,
      availableShare: 470,
      top: 7,
      status: "Available",
      isinCode: "INE756I01012",
      urlName: "hdb financial services limited unlisted shares",
      schemaMarkup:
        '{\n  "@context": "https://schema.org/", \n  "@type": "Product", \n  "name": "HDB Financial Services Ltd (HDBFS) Unlisted Shares",\n  "image": "https://storage.googleapis.com/download/storage/v1/b/tradeunlisted-aef3b.appspot.com/o/images%2F2226.09852583324hdb-financial-services-unlisted-share.webp?generation=1671518495330111&alt=media",\n  "description": "Buy or Sell HDB Financial shares online. We are offering the best prices on Pre IPO shares. Download the research report.",\n  "brand": {\n    "@type": "Brand",\n    "name": "TradeUnlisted"\n  }\n}\n{\n  "@context": "https://schema.org/", \n  "@type": "BreadcrumbList", \n  "itemListElement": [{\n    "@type": "ListItem", \n    "position": 1, \n    "name": "TradeUnlisted",\n    "item": "https://tradeunlisted.com/"  \n  },{\n    "@type": "ListItem", \n    "position": 2, \n    "name": "Unlisted Shares in India",\n    "item": "https://tradeunlisted.com/buy-indian-stocks"  \n  },{\n    "@type": "ListItem", \n    "position": 3, \n    "name": "HDB Financial Services Ltd (HDBFS)",\n    "item": "https://tradeunlisted.com/buy-indian-stocks/hdb-financial-services-limited-unlisted-shares"  \n  }]\n}\n{\n  "@context": "https://schema.org",\n  "@type": "FAQPage",\n  "mainEntity": [{\n    "@type": "Question",\n    "name": "How to buy HDB Financial Services Ltd (HDBFS) unlisted shares?",\n    "acceptedAnswer": {\n      "@type": "Answer",\n      "text": "The following is the process of buying HDB Financial Services Ltd unlisted shares from the TradeUnlisted platform:\n\nClick on the ‘Invest now’ button on the HDB Financial Services Ltd page. The HDB Financial Services Ltd unlisted stocks will be added to your cart. \nIn the cart section, you will be required to enter the quantity of HDB Financial Services Ltd unlisted shares you want to purchase. \nNext step is to select the payment method you wish to use. We accept payments via debit card, net banking and UPI. \nPayment must be made from the same account to which shares are to be transferred. Third party transactions are strictly prohibited on the platform.\nThe TradeUnlisted team will contact you and set up the whole process smoothly.  \nThe shares will then be credited in the demat account mentioned in the CML copy within the timeline mentioned in the Deal Contract Letter.\nIn case you want to buy HDB Financial Services Ltd unlisted shares offline, you may call us on +91 8958 212121 or write to us at contactus@tradeunlisted.com"\n    }\n  },{\n    "@type": "Question",\n    "name": "How to sell HDB Financial Services Ltd(HDBFS) unlisted shares?",\n    "acceptedAnswer": {\n      "@type": "Answer",\n      "text": "The following is the process to sell HDB Financial Services Ltd(HDBFS) unlisted shares on TradeUnlisted platform:\n\nFill up the form on https://tradeunlisted.com/sell by choosing the Unlisted Stocks you wish to sell and enter the quantity of the shares along with an expected pricing for the shares. \nThe TradeUnlisted team will contact you to confirm the deal. \nOnce we confirm our buying price of the shares, we will share a copy of our Client Master List (CML). \nYou will then be required to transfer the shares to our demat account. \nOnce the shares are reflected in our demat account, we will transfer the funds to your bank account within the stipulated time and the same will be intimated to you. \nPayment will be made via RTGS, NEFT, IMPS, cheque or UPI. Payment will be made to the same account which is linked to your demat account. \nIn case you have any queries, you may call us on +91 8958 212121 or write to us at contactus@tradeunlisted.com."\n    }\n  },{\n    "@type": "Question",\n    "name": "What is the lock-in period of HDB Financial Services Ltd(HDBFS) unlisted shares?",\n    "acceptedAnswer": {\n      "@type": "Answer",\n      "text": "There is no restriction on transfer of unlisted shares until the IPO cut-off date which is generally a week before listing. However, after listing SEBI norms are applicable to these shares. As per SEBI regulations, all unlisted shares go in a lock-in period of 6 months from the date of listing of shares. \n\nIn case you have any queries, you may call us on +91 8958 212121 or write to us at contactus@tradeunlisted.com"\n    }\n  },{\n    "@type": "Question",\n    "name": "What is the tax treatment on HDB Financial Services Ltd (HDBFS) unlisted shares?",\n    "acceptedAnswer": {\n      "@type": "Answer",\n      "text": "If you sell the HDB Financial Services Ltd (HDBFS) unlisted shares within 2 years of its acquisition, then you will be required to pay tax on the short-term capital gain (STCG) as per the individual tax slab rate. Selling the shares after 2 years will attract a long-term capital gain (LTCG) which will be taxed at the rate of 20% with indexation benefit or 10% without indexation benefit.\n\nInvestors should consult with an independent third-party taxation advisor prior to making investment decisions.\n\nIn case you have any queries, you may call us on +91 8958 212121 or write to us at contactus@tradeunlisted.com"\n    }\n  },{\n    "@type": "Question",\n    "name": "How to check credit of HDB Financial Services Ltd (HDBFS) unlisted shares?",\n    "acceptedAnswer": {\n      "@type": "Answer",\n      "text": "All unlisted shares can be transferred only to Demat accounts. Unlisted shares can be checked in two ways: \n1. Option 1 \n\nDownload the NSDL or CDSL mobile application from the Google Play or App Store.\nEnter your DP ID + Client ID (total of 16 characters) \n2. Option 2\n\nYou may also check the credit of your shares, by logging in to your Demat account and checking under DP Holdings in your respective DP.  \n\nIn case you have any queries, you may call us on +91 8958 212121 or write to us at contactus@tradeunlisted.com."\n    }\n  },{\n    "@type": "Question",\n    "name": "How much time does it take to credit HDB Financial Services Ltd (HDBFS) unlisted shares in a demat account?",\n    "acceptedAnswer": {\n      "@type": "Answer",\n      "text": "How much time does it take to credit HDB Financial Services Ltd (HDBFS) unlisted shares in a demat account?"\n    }\n  },{\n    "@type": "Question",\n    "name": "What is the minimum ticket size for investment in HDB Financial unlisted shares?",\n    "acceptedAnswer": {\n      "@type": "Answer",\n      "text": "Investments on TradeUnlisted start from as low as INR 5,000. Please call us on +91 8958 212121  to find the company specific details pertaining to the lot size and minimum investment amount."\n    }\n  },{\n    "@type": "Question",\n    "name": "What are the financials of HDB Financial Services Ltd (HDBFS)Unlisted Shares?",\n    "acceptedAnswer": {\n      "@type": "Answer",\n      "text": "The financials are available in the Research Report, DRHP, and Annual Reports of HDB Financial Services Ltd (HDBFS) Unlisted Shares, which may be found under the Reports section of the company\'s specific page. You can download all the reports after logging in."\n    }\n  },{\n    "@type": "Question",\n    "name": "How to check daily prices of HDB Financial unlisted shares?",\n    "acceptedAnswer": {\n      "@type": "Answer",\n      "text": "You can track prices and access historical graphs of Unlisted Shares on both our website and mobile application. \n\nDownload our mobile App from the Google Play or App Store."\n    }\n  },{\n    "@type": "Question",\n    "name": "How to track daily news of HDB Financial unlisted shares?",\n    "acceptedAnswer": {\n      "@type": "Answer",\n      "text": "To track news and other information of HDB Financial unlisted shares, you can join our Telegram Channel or Facebook Community  to stay updated on all news of the unlisted space."\n    }\n  }]\n}\n</script>',
      isWatchList: false,
      index: 45,
    },
    {
      _id: "626d06ede0b6aaa29a157e22",
      logo: "https://storage.googleapis.com/download/storage/v1/b/tradeunlisted-aef3b.appspot.com/o/images%2F8503.919723885343cochin-international-airport-limited-cial-unlisted-share.webp?generation=1671518420323951&alt=media",
      name: "Cochin International Airport Ltd (CIAL) Unlisted Shares",
      urlName: "cochin international airport limited unlisted shares",
      sector: "Airports",
      pricePerShare: 170,
      brokerPrice: null,
      availableShare: 70,
      top: 8,
      status: "Available",
      isinCode: "INE02KH01019",
      schemaMarkup:
        '{\n  "@context": "https://schema.org/", \n  "@type": "Product", \n  "name": "TradeUnlisted",\n  "image": "https://storage.googleapis.com/download/storage/v1/b/tradeunlisted-aef3b.appspot.com/o/images%2F8503.919723885343cochin-international-airport-limited-cial-unlisted-share.webp?generation=1671518420323951&alt=media",\n  "description": "Buy or Sell Cochin International Airport shares online. We are offering the best prices on Pre IPO shares. Download the research report.",\n  "brand": {\n    "@type": "Brand",\n    "name": "Cochin International Airport Ltd (CIAL) Unlisted Shares"\n  }\n}\n{\n  "@context": "https://schema.org/", \n  "@type": "BreadcrumbList", \n  "itemListElement": [{\n    "@type": "ListItem", \n    "position": 1, \n    "name": "TradeUnlisted",\n    "item": "https://tradeunlisted.com/"  \n  },{\n    "@type": "ListItem", \n    "position": 2, \n    "name": "Unlisted Shares in India",\n    "item": "https://tradeunlisted.com/buy-indian-stocks"  \n  },{\n    "@type": "ListItem", \n    "position": 3, \n    "name": "Cochin International Airport Ltd",\n    "item": "https://tradeunlisted.com/buy-indian-stocks/cochin-international-airport-limited-unlisted-shares"  \n  }]\n}\n{\n  "@context": "https://schema.org",\n  "@type": "FAQPage",\n  "mainEntity": [{\n    "@type": "Question",\n    "name": "How to buy Cochin International Airport Ltd (CIAL) unlisted shares?",\n    "acceptedAnswer": {\n      "@type": "Answer",\n      "text": "The following is the process of buying Cochin International Airport Ltd shares from the TradeUnlisted platform:\n\nClick on the ‘Invest now’ button on the Cochin International Airport Ltd page. The Cochin International Airport Ltd unlisted stocks will be added to your cart. \nIn the cart section, you will be required to enter the quantity of Cochin International Airport Ltd unlisted shares you want to purchase. \nNext step is to select the payment method you wish to use. We accept payments via debit card, net banking and UPI. \nPayment must be made from the same account to which shares are to be transferred. Third party transactions are strictly prohibited on the platform.\nThe TradeUnlisted team will contact you and set up the whole process smoothly.  \nThe shares will then be credited in the demat account mentioned in the CML copy within the timeline mentioned in the Deal Contract Letter.\nIn case you want to buy Cochin International Airport Ltd unlisted shares offline, you may call us on +91 8958 212121 or write to us at contactus@tradeunlisted.com"\n    }\n  },{\n    "@type": "Question",\n    "name": "How to sell Cochin International Airport Ltd (CIAL) unlisted shares?",\n    "acceptedAnswer": {\n      "@type": "Answer",\n      "text": "The following is the process to sell Cochin International Airport Ltd (CIAL) unlisted shares on TradeUnlisted platform:\n\nFill up the form on https://tradeunlisted.com/sell by choosing the Unlisted Stocks you wish to sell and enter the quantity of the shares along with an expected pricing for the shares. \nThe TradeUnlisted team will contact you to confirm the deal. \nOnce we confirm our buying price of the shares, we will share a copy of our Client Master List (CML). \nYou will then be required to transfer the shares to our demat account. \nOnce the shares are reflected in our demat account, we will transfer the funds to your bank account within the stipulated time and the same will be intimated to you. \nPayment will be made via RTGS, NEFT, IMPS, cheque or UPI. Payment will be made to the same account which is linked to your demat account. \nIn case you have any queries, you may call us on +91 8958 212121 or write to us at contactus@tradeunlisted.com."\n    }\n  },{\n    "@type": "Question",\n    "name": "What is the lock-in period of Cochin International Airport Ltd (CIAL) unlisted shares?",\n    "acceptedAnswer": {\n      "@type": "Answer",\n      "text": "There is no restriction on transfer of unlisted shares until the IPO cut-off date which is generally a week before listing. However, after listing SEBI norms are applicable to these shares. As per SEBI regulations, all unlisted shares go in a lock-in period of 6 months from the date of listing of shares. \n\nIn case you have any queries, you may call us on +91 8958 212121 or write to us at contactus@tradeunlisted.com"\n    }\n  },{\n    "@type": "Question",\n    "name": "What is the tax treatment on Cochin International Airport Ltd (CIAL) unlisted shares?",\n    "acceptedAnswer": {\n      "@type": "Answer",\n      "text": "If you sell the Cochin International Airport Ltd (CIAL) unlisted shares within 2 years of its acquisition, then you will be required to pay tax on the short-term capital gain (STCG) as per the individual tax slab rate. Selling the shares after 2 years will attract a long-term capital gain (LTCG) which will be taxed at the rate of 20% with indexation benefit or 10% without indexation benefit.\n\nInvestors should consult with an independent third-party taxation advisor prior to making investment decisions.\n\nIn case you have any queries, you may call us on +91 8958 212121 or write to us at contactus@tradeunlisted.com"\n    }\n  },{\n    "@type": "Question",\n    "name": "How to check credit of Cochin International Airport Ltd (CIAL) unlisted shares?",\n    "acceptedAnswer": {\n      "@type": "Answer",\n      "text": "All unlisted shares can be transferred only to Demat accounts. Unlisted shares can be checked in two ways: \n1. Option 1 \n\nDownload the NSDL or CDSL mobile application from the Google Play or App Store.\nEnter your DP ID + Client ID (total of 16 characters) \n2. Option 2\n\nYou may also check the credit of your shares, by logging in to your Demat account and checking under DP Holdings in your respective DP.  \n\nIn case you have any queries, you may call us on +91 8958 212121 or write to us at contactus@tradeunlisted.com."\n    }\n  },{\n    "@type": "Question",\n    "name": "How much time does it take to credit Cochin International Airport Ltd (CIAL) unlisted shares in a demat account?",\n    "acceptedAnswer": {\n      "@type": "Answer",\n      "text": "The Cochin International Airport Ltd (CIAL) unlisted shares are credited in your Demat account within a maximum of two (working) days after the funds are received in our bank account. However, please note that at times there may be a slight delay in the credit of shares due to certain reasons like Bank Holidays.\n\nIn case you have any queries, you may call us on +91 8958 212121 or write to us at contactus@tradeunlisted.com."\n    }\n  },{\n    "@type": "Question",\n    "name": "What is the minimum ticket size for investment in Cochin International Airport unlisted shares?",\n    "acceptedAnswer": {\n      "@type": "Answer",\n      "text": "Investments on TradeUnlisted start from as low as INR 5,000. Please call us on +91 8958 212121  to find the company specific details pertaining to the lot size and minimum investment amount."\n    }\n  },{\n    "@type": "Question",\n    "name": "How to track daily news of Cochin International unlisted shares?",\n    "acceptedAnswer": {\n      "@type": "Answer",\n      "text": "To track news and other information of Cochin International unlisted shares, you can join our Telegram Channel or Facebook Community  to stay updated on all news of the unlisted space."\n    }\n  },{\n    "@type": "Question",\n    "name": "How to check daily prices of Cochin International unlisted shares?",\n    "acceptedAnswer": {\n      "@type": "Answer",\n      "text": "You can track prices and access historical graphs of Unlisted Shares on both our website and mobile application. \nDownload our mobile App from the Google Play or App Store."\n    }\n  },{\n    "@type": "Question",\n    "name": "What are the financials of Cochin International Airport Ltd (CIAL) Unlisted Shares?",\n    "acceptedAnswer": {\n      "@type": "Answer",\n      "text": "The financials are available in the Research Report, DRHP, and Annual Reports of Cochin International Airport Ltd (CIAL) Unlisted Shares, which may be found under the Reports section of the company\'s specific page. You can download all the reports after logging in."\n    }\n  }]\n}\n</script>',
      isWatchList: false,
      index: 44,
    },
    {
      _id: "625694b9552fd983c55d5b46",
      logo: "https://storage.googleapis.com/download/storage/v1/b/tradeunlisted-aef3b.appspot.com/o/images%2F8305.334142011623fino-unlisted-share.webp?generation=1671517621504019&alt=media",
      name: "Fino PayTech Ltd Unlisted Shares",
      urlName: "fino paytech limited unlisted shares",
      sector: "Finance",
      pricePerShare: 0,
      brokerPrice: null,
      availableShare: 0,
      top: 8,
      status: "Sold Out",
      isinCode: "INE511I01011",
      schemaMarkup:
        '{\n  "@context": "https://schema.org/", \n  "@type": "Product", \n  "name": "Fino Paytech limited unlisted shares",\n  "image": "https://storage.googleapis.com/download/storage/v1/b/tradeunlisted-aef3b.appspot.com/o/images%2F8305.334142011623fino-unlisted-share.webp?generation=1671517621504019&alt=media",\n  "description": "Buy or Sell unlisted shares of Fino PayTech at best price. Explore our Research Report on Fino PayTech, check the valuation and estimated returns.",\n  "brand": {\n    "@type": "Brand",\n    "name": "TradeUnlisted"\n  }\n}\n{\n  "@context": "https://schema.org/", \n  "@type": "BreadcrumbList", \n  "itemListElement": [{\n    "@type": "ListItem", \n    "position": 1, \n    "name": "TradeUnlisted",\n    "item": "https://tradeunlisted.com/"  \n  },{\n    "@type": "ListItem", \n    "position": 2, \n    "name": "Unlisted Shares in India",\n    "item": "https://tradeunlisted.com/buy-indian-stocks"  \n  },{\n    "@type": "ListItem", \n    "position": 3, \n    "name": "Fino Paytech limited Unlisted Shares",\n    "item": "https://tradeunlisted.com/buy-indian-stocks/fino-paytech-limited-unlisted-shares"  \n  }]\n}\n{\n  "@context": "https://schema.org",\n  "@type": "FAQPage",\n  "mainEntity": [{\n    "@type": "Question",\n    "name": "How to buy Fino PayTech Ltd unlisted shares?",\n    "acceptedAnswer": {\n      "@type": "Answer",\n      "text": "The following is the process of buying Fino PayTech Ltd unlisted shares from the TradeUnlisted platform:\n\nClick on the ‘Invest now’ button on the Fino PayTech page. The Fino PayTech  unlisted stocks will be added to your cart. \nIn the cart section, you will be required to enter the quantity of Fino PayTech Ltd unlisted shares you want to purchase. \nNext step is to select the payment method you wish to use. We accept payments via debit card, net banking and UPI. \nPayment must be made from the same account to which shares are to be transferred. Third party transactions are strictly prohibited on the platform.\nThe TradeUnlisted team will contact you and set up the whole process smoothly.  \nThe shares will then be credited in the demat account mentioned in the CML copy within the timeline mentioned in the Deal Contract Letter.\nIn case you want to buy Fino PayTech Ltd unlisted shares offline, you may call us on +91 8958 212121 or write to us at contactus@tradeunlisted.com."\n    }\n  },{\n    "@type": "Question",\n    "name": "How to sell Fino PayTech Ltd unlisted shares?",\n    "acceptedAnswer": {\n      "@type": "Answer",\n      "text": "The following is the process to sell Fino PayTech Ltd unlisted shares on TradeUnlisted platform:\n\nFill up the form on https://tradeunlisted.com/sell by choosing the Unlisted Stocks you wish to sell and enter the quantity of the shares along with an expected pricing for the shares. \nThe TradeUnlisted team will contact you to confirm the deal. \nOnce we confirm our buying price of the shares, we will share a copy of our Client Master List (CML). \nYou will then be required to transfer the shares to our demat account. \nOnce the shares are reflected in our demat account, we will transfer the funds to your bank account within the stipulated time and the same will be intimated to you. \nPayment will be made via RTGS, NEFT, IMPS, cheque or UPI. Payment will be made to the same account which is linked to your demat account. \nIn case you have any queries, you may call us on +91 8958 212121 or write to us at contactus@tradeunlisted.com"\n    }\n  },{\n    "@type": "Question",\n    "name": "What is the lock-in period of Fino PayTech Ltd unlisted shares?",\n    "acceptedAnswer": {\n      "@type": "Answer",\n      "text": "There is no restriction on transfer of unlisted shares until the IPO cut-off date which is generally a week before listing. However, after listing SEBI norms are applicable to these shares. As per SEBI regulations, all unlisted shares go in a lock-in period of 6 months from the date of listing of shares. \n\nIn case you have any queries, you may call us on +91 8958 212121 or write to us at contactus@tradeunlisted.com"\n    }\n  },{\n    "@type": "Question",\n    "name": "What is the tax treatment on Fino PayTech Ltd unlisted shares?",\n    "acceptedAnswer": {\n      "@type": "Answer",\n      "text": "If you sell the Fino PayTech Ltd unlisted shares within 2 years of its acquisition, then you will be required to pay tax on the short-term capital gain (STCG) as per the individual tax slab rate. Selling the shares after 2 years will attract a long-term capital gain (LTCG) which will be taxed at the rate of 20% with indexation benefit or 10% without indexation benefit.\n\nInvestors should consult with an independent third-party taxation advisor prior to making investment decisions.\n\nIn case you have any queries, you may call us on +91 8958 212121 or write to us at contactus@tradeunlisted.com"\n    }\n  },{\n    "@type": "Question",\n    "name": "How to check credit of Fino PayTech Ltd unlisted shares?",\n    "acceptedAnswer": {\n      "@type": "Answer",\n      "text": "All unlisted shares can be transferred only to Demat accounts. Unlisted shares can be checked in two ways: \n1. Option 1 \n\nDownload the NSDL or CDSL mobile application from the Google Play or App Store.\nEnter your DP ID + Client ID (total of 16 characters) \n2. Option 2\n\nYou may also check the credit of your shares, by logging in to your Demat account and checking under DP Holdings in your respective DP.  \n\nIn case you have any queries, you may call us on +91 8958 212121 or write to us at contactus@tradeunlisted.com."\n    }\n  },{\n    "@type": "Question",\n    "name": "How much time does it take to credit Fino PayTech Ltd unlisted shares in a demat account?",\n    "acceptedAnswer": {\n      "@type": "Answer",\n      "text": "The Fino PayTech Ltd unlisted shares are credited in your Demat account within a maximum of two (working) days after the funds are received in our bank account. However, please note that at times there may be a slight delay in the credit of shares due to certain reasons like Bank Holidays.\n\nIn case you have any queries, you may call us on +91 8958 212121 or write to us at contactus@tradeunlisted.com."\n    }\n  },{\n    "@type": "Question",\n    "name": "What is the minimum ticket size for investment in Fino PayTech unlisted shares?",\n    "acceptedAnswer": {\n      "@type": "Answer",\n      "text": "Investments on TradeUnlisted start from as low as INR 5,000. Please call us on +91 8958 212121  to find the company specific details pertaining to the lot size and minimum investment amount."\n    }\n  },{\n    "@type": "Question",\n    "name": "How to track daily news of Fino PayTech unlisted shares?",\n    "acceptedAnswer": {\n      "@type": "Answer",\n      "text": "To track news and other information of Fino PayTech unlisted shares, you can join our Telegram Channel or Facebook Community  to stay updated on all news of the unlisted space."\n    }\n  },{\n    "@type": "Question",\n    "name": "How to check daily prices of Fino PayTech unlisted shares?",\n    "acceptedAnswer": {\n      "@type": "Answer",\n      "text": "You can track prices and access historical graphs of Unlisted Shares on both our website and mobile application. \n\nDownload our mobile App from the Google Play or App Store."\n    }\n  },{\n    "@type": "Question",\n    "name": "What are the financials of Fino PayTech Ltd Unlisted Shares?",\n    "acceptedAnswer": {\n      "@type": "Answer",\n      "text": "The financials are available in the Research Report, DRHP, and Annual Reports of Fino PayTech Ltd Unlisted Shares, which may be found under the Reports section of the company\'s specific page. You can download all the reports after logging in"\n    }\n  }]\n}\n</script>',
      isWatchList: false,
      index: 43,
    },
    {
      _id: "626d0963e0b6aaa29a157eb2",
      logo: "https://storage.googleapis.com/download/storage/v1/b/tradeunlisted-aef3b.appspot.com/o/images%2F8811.587359576592maharashtra-knowledge-corporation-mkcl-unlisted-share.webp?generation=1671518650058970&alt=media",
      name: "Maharashtra Knowledge Corporation Ltd (MKCL) Unlisted Shares",
      urlName: "maharashtra knowledge corporation limited unlisted shares",
      sector: "EdTech",
      pricePerShare: 0,
      brokerPrice: null,
      availableShare: 0,
      top: 9,
      status: "Sold Out",
      isinCode: "INE03KR01016",
      schemaMarkup: "",
      minQuantity: null,
      isWatchList: false,
      index: 42,
    },
    {
      _id: "6253f3276945897dc3b08ca2",
      logo: "https://storage.googleapis.com/download/storage/v1/b/tradeunlisted-aef3b.appspot.com/o/images%2F7375.477623355638tata-technologies-unlisted-share.webp?generation=1671518799813871&alt=media",
      name: "Tata Technologies Limited Unlisted Shares",
      sector: "Engineering & Manufacturing",
      pricePerShare: 0,
      brokerPrice: null,
      availableShare: 0,
      top: 10,
      status: "Sold Out",
      isinCode: "INE142M01017",
      urlName: "tata technologies unlisted shares",
      schemaMarkup: "",
      isWatchList: false,
      index: 41,
    },
    {
      _id: "62595bba09b68f3058dc29ec",
      logo: "https://storage.googleapis.com/download/storage/v1/b/tradeunlisted-aef3b.appspot.com/o/images%2F5272.741137301511lava-international-limited-unlisted-share.webp?generation=1671518624694829&alt=media",
      name: "Lava International Ltd Unlisted Shares",
      urlName: "lava international limited unlisted shares",
      sector: "Consumer Electronics",
      pricePerShare: 125,
      brokerPrice: null,
      availableShare: 2000,
      top: 11,
      status: "Available",
      isinCode: "INE745X01022",
      schemaMarkup:
        '  \n{\n  "@context": "https://schema.org",\n  "@type": "Article",\n  "mainEntityOfPage": {\n    "@type": "WebPage",\n    "@id": "https://tradeunlisted.com/buy-indian-stocks/lava-international-limited-unlisted-shares"\n  },\n  "headline": "LAVA Share Price | Buy Sell LAVA International Limited Unlisted Shares / Pre IPO Stocks",\n  "description": "Buy or Sell LAVA International Unlisted Shares. Check the Latest Prices and download the research report.",\n  "image": "https://storage.googleapis.com/download/storage/v1/b/tradeunlisted-aef3b.appspot.com/o/images%2F5272.741137301511lava-international-limited-unlisted-share.webp?generation=1671518624694829&alt=media",  \n  "author": {\n    "@type": "Organization",\n    "name": "Trade Unlisted",\n    "url": "https://tradeunlisted.com/"\n  },  \n  "publisher": {\n    "@type": "Organization",\n    "name": "Trade Unlisted",\n    "logo": {\n      "@type": "ImageObject",\n      "url": "https://tradeunlisted.com/static/media/unlistedlogo.633ff8bf9d339671184b944bd469b977.svg"\n    }\n  },\n  "datePublished": "",\n  "dateModified": "2022-12-27"\n}\n \n{\n  "@context": "https://schema.org/", \n  "@type": "Product", \n  "name": "Lava International Ltd Unlisted Shares",\n  "image": "https://storage.googleapis.com/download/storage/v1/b/tradeunlisted-aef3b.appspot.com/o/images%2F5272.741137301511lava-international-limited-unlisted-share.webp?generation=1671518624694829&alt=media",\n  "description": "Buy Lava unlisted shares at the best price.",\n  "brand": {\n    "@type": "Brand",\n    "name": "TradeUnlisted"\n  },\n  "offers": {\n    "@type": "Offer",\n    "url": "https://tradeunlisted.com/buy-indian-stocks/lava-international-limited-unlisted-shares",\n    "priceCurrency": "INR",\n    "price": "133",\n    "availability": "https://schema.org/InStock"\n  }\n}\n  \n{\n  "@context": "https://schema.org/", \n  "@type": "BreadcrumbList", \n  "itemListElement": [{\n    "@type": "ListItem", \n    "position": 1, \n    "name": "TradeUnlisted",\n    "item": "https://tradeunlisted.com/"  \n  },{\n    "@type": "ListItem", \n    "position": 2, \n    "name": "Unlisted Shares in India",\n    "item": "https://tradeunlisted.com/buy-indian-stocks"  \n  },{\n    "@type": "ListItem", \n    "position": 3, \n    "name": "Lava Unlisted Shares",\n    "item": "https://tradeunlisted.com/buy-indian-stocks/lava-international-limited-unlisted-shares"  \n  }]\n}\n ',
      isWatchList: false,
      index: 40,
    },
    {
      _id: "63dcb1e71de36adcda830a1c",
      logo: "https://storage.googleapis.com/download/storage/v1/b/tradeunlisted-aef3b.appspot.com/o/images%2F1847.8982137592982martin-and-harris-laboratories-limited.png?generation=1675424464614983&alt=media",
      name: "Martin and Harris Laboratories Limited Unlisted Shares",
      urlName: "martin and harris unlisted shares",
      sector: "Pharma & Finance",
      pricePerShare: 1850,
      brokerPrice: null,
      availableShare: 500,
      top: 12,
      status: "Available",
      isinCode: "INE03VV01015",
      isWatchList: false,
      index: 39,
    },
    {
      _id: "626d0fd0e0b6aaa29a15802e",
      logo: "https://storage.googleapis.com/download/storage/v1/b/tradeunlisted-aef3b.appspot.com/o/images%2F6461.46147971888kurl-on-unlisted-share.webp?generation=1671517694758696&alt=media",
      name: "Kurlon Enterprise Ltd Unlisted Shares",
      urlName: "kurlon enterprise limited unlisted shares",
      sector: "Home Decor",
      pricePerShare: 695,
      brokerPrice: null,
      availableShare: 1000,
      top: 28,
      status: "Available",
      isinCode: "INE387W01025",
      schemaMarkup:
        '  \n{\n  "@context": "https://schema.org",\n  "@type": "Article",\n  "mainEntityOfPage": {\n    "@type": "WebPage",\n    "@id": "https://tradeunlisted.com/buy-indian-stocks/kurlon-enterprise-limited-unlisted-shares"\n  },\n  "headline": "Buy Sell Kurlon Unlisted Shares | Kurlon IPO | Kurlon Enterprise Limited Share Price",\n  "description": "Buy or Sell Kurlon Enterprise unlisted shares, India\'s best selling mattress company. Check updated prices and download the research report of Kurl-on.",\n  "image": "https://storage.googleapis.com/download/storage/v1/b/tradeunlisted-aef3b.appspot.com/o/images%2F6461.46147971888kurl-on-unlisted-share.webp?generation=1671517694758696&alt=media",  \n  "author": {\n    "@type": "Organization",\n    "name": "Trade Unlisted",\n    "url": "https://tradeunlisted.com/"\n  },  \n  "publisher": {\n    "@type": "Organization",\n    "name": "Trade Unlisted",\n    "logo": {\n      "@type": "ImageObject",\n      "url": "https://tradeunlisted.com/static/media/unlistedlogo.633ff8bf9d339671184b944bd469b977.svg"\n    }\n  },\n  "datePublished": "",\n  "dateModified": "2022-12-27"\n}\n \n{\n  "@context": "https://schema.org/", \n  "@type": "Product", \n  "name": "Kurlon Unlisted Shares",\n  "image": "https://storage.googleapis.com/download/storage/v1/b/tradeunlisted-aef3b.appspot.com/o/images%2F6461.46147971888kurl-on-unlisted-share.webp?generation=1671517694758696&alt=media",\n  "description": "Buy Kurlon unlisted shares at the best price.",\n  "brand": {\n    "@type": "Brand",\n    "name": "TradeUnlisted"\n  },\n  "offers": {\n    "@type": "Offer",\n    "url": "https://tradeunlisted.com/buy-indian-stocks/kurlon-enterprise-limited-unlisted-shares",\n    "priceCurrency": "INR",\n    "price": "675",\n    "availability": "https://schema.org/InStock"\n  }\n}\n  \n{\n  "@context": "https://schema.org/", \n  "@type": "BreadcrumbList", \n  "itemListElement": [{\n    "@type": "ListItem", \n    "position": 1, \n    "name": "TradeUnlisted",\n    "item": "https://tradeunlisted.com/"  \n  },{\n    "@type": "ListItem", \n    "position": 2, \n    "name": "Unlisted Shares in India",\n    "item": "https://tradeunlisted.com/buy-indian-stocks"  \n  },{\n    "@type": "ListItem", \n    "position": 3, \n    "name": "Kurlon Unlisted Shares",\n    "item": "https://tradeunlisted.com/buy-indian-stocks/kurlon-enterprise-limited-unlisted-shares"  \n  }]\n}\n ',
      isWatchList: false,
      index: 38,
    },
    {
      _id: "627a14defe24c95d1e356041",
      logo: "https://storage.googleapis.com/download/storage/v1/b/tradeunlisted-aef3b.appspot.com/o/images%2F9141.544514394956capgemini-unlisted-share.webp?generation=1671517736107430&alt=media",
      name: "Capgemini Technology Services India Ltd Unlisted Shares",
      urlName: "capgemini technology unlisted shares",
      sector: "Information & Technology",
      pricePerShare: 12454,
      brokerPrice: null,
      availableShare: 50,
      top: 31,
      status: "Available",
      isinCode: "INE177B01032",
      schemaMarkup:
        '  \n{\n  "@context": "https://schema.org",\n  "@type": "Article",\n  "mainEntityOfPage": {\n    "@type": "WebPage",\n    "@id": "https://tradeunlisted.com/buy-indian-stocks/capgemini-technology-unlisted-shares"\n  },\n  "headline": "Capgemini Unlisted Share Price | Buy Sell Capgemini Unlisted Shares / Pre IPO",\n  "description": "Buy or Sell Capgemini Unlisted Shares at Best Prices. Check updated prices and download the research report. Find the right valuation of your current holdings.",\n  "image": "https://storage.googleapis.com/download/storage/v1/b/tradeunlisted-aef3b.appspot.com/o/images%2F9141.544514394956capgemini-unlisted-share.webp?generation=1671517736107430&alt=media",  \n  "author": {\n    "@type": "Organization",\n    "name": "Trade Unlisted",\n    "url": "https://tradeunlisted.com/"\n  },  \n  "publisher": {\n    "@type": "Organization",\n    "name": "Trade Unlisted",\n    "logo": {\n      "@type": "ImageObject",\n      "url": "https://tradeunlisted.com/static/media/unlistedlogo.633ff8bf9d339671184b944bd469b977.svg"\n    }\n  },\n  "datePublished": "",\n  "dateModified": "2022-12-27"\n}\n \n{\n  "@context": "https://schema.org/", \n  "@type": "Product", \n  "name": "Capgemini Unlisted Shares",\n  "image": "https://storage.googleapis.com/download/storage/v1/b/tradeunlisted-aef3b.appspot.com/o/images%2F9141.544514394956capgemini-unlisted-share.webp?generation=1671517736107430&alt=media",\n  "description": "Buy Capgemini unlisted shares at the best price.",\n  "brand": {\n    "@type": "Brand",\n    "name": "TradeUnlisted"\n  },\n  "offers": {\n    "@type": "Offer",\n    "url": "https://tradeunlisted.com/buy-indian-stocks/capgemini-technology-unlisted-shares",\n    "priceCurrency": "INR",\n    "price": "12875",\n    "availability": "https://schema.org/InStock"\n  }\n}\n  \n{\n  "@context": "https://schema.org/", \n  "@type": "BreadcrumbList", \n  "itemListElement": [{\n    "@type": "ListItem", \n    "position": 1, \n    "name": "TradeUnlisted",\n    "item": "https://tradeunlisted.com/"  \n  },{\n    "@type": "ListItem", \n    "position": 2, \n    "name": "Unlisted Shares in India",\n    "item": "https://tradeunlisted.com/buy-indian-stocks"  \n  },{\n    "@type": "ListItem", \n    "position": 3, \n    "name": "Capgemini Unlisted Shares",\n    "item": "https://tradeunlisted.com/buy-indian-stocks/capgemini-technology-unlisted-shares"  \n  }]\n}\n ',
      isWatchList: false,
      index: 37,
    },
    {
      _id: "627cce58f97c028d006963d1",
      logo: "https://storage.googleapis.com/download/storage/v1/b/tradeunlisted-aef3b.appspot.com/o/images%2F818.5788878288403ncl-buildtek-unlisted-share.webp?generation=1671517785750042&alt=media",
      name: "NCL Buildtek Ltd Unlisted Shares",
      urlName: "ncl buildtek unlisted shares",
      sector: "Others",
      pricePerShare: 260,
      brokerPrice: null,
      availableShare: 50,
      top: 32,
      status: "Available",
      isinCode: "INE243S01010",
      schemaMarkup:
        '  \n{\n  "@context": "https://schema.org",\n  "@type": "Article",\n  "mainEntityOfPage": {\n    "@type": "WebPage",\n    "@id": "https://tradeunlisted.com/buy-indian-stocks/ncl-buildtek-unlisted-shares"\n  },\n  "headline": "NCL Buildtek Share Price | Buy Sell NCL Buildtek Ltd Unlisted Shares / Pre IPO Stocks",\n  "description": "Buy or sell  NCL Buildtek Unlisted Shares. Check updated prices and download the research report. Find the right valuation of your current holdings.",\n  "image": "https://storage.googleapis.com/download/storage/v1/b/tradeunlisted-aef3b.appspot.com/o/images%2F818.5788878288403ncl-buildtek-unlisted-share.webp?generation=1671517785750042&alt=media",  \n  "author": {\n    "@type": "Organization",\n    "name": "Trade Unlisted",\n    "url": "https://tradeunlisted.com/"\n  },  \n  "publisher": {\n    "@type": "Organization",\n    "name": "Trade Unlisted",\n    "logo": {\n      "@type": "ImageObject",\n      "url": "https://tradeunlisted.com/static/media/unlistedlogo.633ff8bf9d339671184b944bd469b977.svg"\n    }\n  },\n  "datePublished": "",\n  "dateModified": "2022-12-27"\n}\n \n{\n  "@context": "https://schema.org/", \n  "@type": "Product", \n  "name": "NCL Buidtek Unlisted Shares",\n  "image": "https://storage.googleapis.com/download/storage/v1/b/tradeunlisted-aef3b.appspot.com/o/images%2F818.5788878288403ncl-buildtek-unlisted-share.webp?generation=1671517785750042&alt=media",\n  "description": "Buy NCL Buildtek unlisted shares at the best price.",\n  "brand": {\n    "@type": "Brand",\n    "name": "TradeUnlisted"\n  },\n  "offers": {\n    "@type": "Offer",\n    "url": "https://tradeunlisted.com/buy-indian-stocks/ncl-buildtek-unlisted-shares",\n    "priceCurrency": "INR",\n    "price": "199",\n    "availability": "https://schema.org/InStock"\n  }\n}\n  \n{\n  "@context": "https://schema.org/", \n  "@type": "BreadcrumbList", \n  "itemListElement": [{\n    "@type": "ListItem", \n    "position": 1, \n    "name": "TradeUnlisted",\n    "item": "https://tradeunlisted.com/"  \n  },{\n    "@type": "ListItem", \n    "position": 2, \n    "name": "Unlisted Shares in India",\n    "item": "https://tradeunlisted.com/buy-indian-stocks"  \n  },{\n    "@type": "ListItem", \n    "position": 3, \n    "name": "NCL Buildtek Unlisted Shares",\n    "item": "https://tradeunlisted.com/buy-indian-stocks/ncl-buildtek-unlisted-shares"  \n  }]\n}\n ',
      isWatchList: false,
      index: 36,
    },
    {
      _id: "627cd23ff97c028d0069640c",
      logo: "https://storage.googleapis.com/download/storage/v1/b/tradeunlisted-aef3b.appspot.com/o/images%2F3097.354294149672merino-unlisted-share.webp?generation=1671517856689239&alt=media",
      name: "Merino Industries Ltd Unlisted Shares",
      urlName: "merino industries unlisted shares",
      sector: "Laminates",
      pricePerShare: 2800,
      brokerPrice: null,
      availableShare: 50,
      top: 33,
      status: "Available",
      isinCode: "INE662B01017 ",
      schemaMarkup:
        '  \n{\n  "@context": "https://schema.org",\n  "@type": "Article",\n  "mainEntityOfPage": {\n    "@type": "WebPage",\n    "@id": "https://tradeunlisted.com/buy-indian-stocks/merino-industries-unlisted-shares"\n  },\n  "headline": "Merino Laminates Share Price | Buy Sell Merino Industries Unlisted Shares / Pre IPO Stocks",\n  "description": "Buy or sell Merino Unlisted Shares. Check updated prices and download the research report. Find the right valuation of your current holdings.",\n  "image": "https://storage.googleapis.com/download/storage/v1/b/tradeunlisted-aef3b.appspot.com/o/images%2F3097.354294149672merino-unlisted-share.webp?generation=1671517856689239&alt=media",  \n  "author": {\n    "@type": "Organization",\n    "name": "Trade Unlisted",\n    "url": "https://tradeunlisted.com/"\n  },  \n  "publisher": {\n    "@type": "Organization",\n    "name": "Trade Unlisted",\n    "logo": {\n      "@type": "ImageObject",\n      "url": "https://tradeunlisted.com/static/media/unlistedlogo.633ff8bf9d339671184b944bd469b977.svg"\n    }\n  },\n  "datePublished": "",\n  "dateModified": "2022-12-27"\n}\n \n{\n  "@context": "https://schema.org/", \n  "@type": "Product", \n  "name": "Merino Industries Unlisted Shares",\n  "image": "https://storage.googleapis.com/download/storage/v1/b/tradeunlisted-aef3b.appspot.com/o/images%2F3097.354294149672merino-unlisted-share.webp?generation=1671517856689239&alt=media",\n  "description": "Buy Merino unlisted shares at the best price.",\n  "brand": {\n    "@type": "Brand",\n    "name": "TradeUnlisted"\n  },\n  "offers": {\n    "@type": "Offer",\n    "url": "https://tradeunlisted.com/buy-indian-stocks/merino-industries-unlisted-shares",\n    "priceCurrency": "INR",\n    "price": "3060",\n    "availability": "https://schema.org/InStock"\n  }\n}\n  \n{\n  "@context": "https://schema.org/", \n  "@type": "BreadcrumbList", \n  "itemListElement": [{\n    "@type": "ListItem", \n    "position": 1, \n    "name": "TradeUnlisted",\n    "item": "https://tradeunlisted.com/"  \n  },{\n    "@type": "ListItem", \n    "position": 2, \n    "name": "Unlisted Shares in India",\n    "item": "https://tradeunlisted.com/buy-indian-stocks"  \n  },{\n    "@type": "ListItem", \n    "position": 3, \n    "name": "Merino Unlisted Shares",\n    "item": "https://tradeunlisted.com/buy-indian-stocks/merino-industries-unlisted-shares"  \n  }]\n}\n ',
      isWatchList: false,
      index: 35,
    },
    {
      _id: "627e44cf0efb7dd0eb529162",
      logo: "https://storage.googleapis.com/download/storage/v1/b/tradeunlisted-aef3b.appspot.com/o/images%2F864.8088685172239hexaware-technologies-unlisted-share.webp?generation=1671517884345287&alt=media",
      name: "Hexaware Technologies Unlisted Shares",
      urlName: "hexaware technologies unlisted shares",
      sector: "Information & Technology",
      pricePerShare: 590,
      brokerPrice: null,
      availableShare: 50,
      top: 34,
      status: "Available",
      isinCode: "INE093A01033",
      schemaMarkup:
        '  \n{\n  "@context": "https://schema.org",\n  "@type": "Article",\n  "mainEntityOfPage": {\n    "@type": "WebPage",\n    "@id": "https://tradeunlisted.com/buy-indian-stocks/hexaware-technologies-unlisted-shares"\n  },\n  "headline": "Hexaware Unlisted Share Price | Buy Sell Hexaware Technologies Unlisted Shares / Pre IPO",\n  "description": "Buy or sell Hexaware Unlisted Shares. Check updated prices, download the research report. Find the right valuation of your current holdings.",\n  "image": "https://storage.googleapis.com/download/storage/v1/b/tradeunlisted-aef3b.appspot.com/o/images%2F864.8088685172239hexaware-technologies-unlisted-share.webp?generation=1671517884345287&alt=media",  \n  "author": {\n    "@type": "Organization",\n    "name": "Trade Unlisted",\n    "url": "https://tradeunlisted.com/"\n  },  \n  "publisher": {\n    "@type": "Organization",\n    "name": "Trade Unlisted",\n    "logo": {\n      "@type": "ImageObject",\n      "url": "https://tradeunlisted.com/static/media/unlistedlogo.633ff8bf9d339671184b944bd469b977.svg"\n    }\n  },\n  "datePublished": "",\n  "dateModified": "2022-12-27"\n}\n \n{\n  "@context": "https://schema.org/", \n  "@type": "Product", \n  "name": "Hexaware Technologies Unlisted Shares",\n  "image": "https://storage.googleapis.com/download/storage/v1/b/tradeunlisted-aef3b.appspot.com/o/images%2F864.8088685172239hexaware-technologies-unlisted-share.webp?generation=1671517884345287&alt=media",\n  "description": "Buy Hexaware Technologies unlisted shares at the best price.",\n  "brand": {\n    "@type": "Brand",\n    "name": "TradeUnlisted"\n  },\n  "offers": {\n    "@type": "Offer",\n    "url": "https://tradeunlisted.com/buy-indian-stocks/hexaware-technologies-unlisted-shares",\n    "priceCurrency": "INR",\n    "price": "545",\n    "availability": "https://schema.org/InStock"\n  }\n}\n  \n{\n  "@context": "https://schema.org/", \n  "@type": "BreadcrumbList", \n  "itemListElement": [{\n    "@type": "ListItem", \n    "position": 1, \n    "name": "TradeUnlisted",\n    "item": "https://tradeunlisted.com/"  \n  },{\n    "@type": "ListItem", \n    "position": 2, \n    "name": "Unlisted Shares in India",\n    "item": "https://tradeunlisted.com/buy-indian-stocks"  \n  },{\n    "@type": "ListItem", \n    "position": 3, \n    "name": "Hexaware Unlisted Shares",\n    "item": "https://tradeunlisted.com/buy-indian-stocks/hexaware-technologies-unlisted-shares"  \n  }]\n}\n ',
      isWatchList: false,
      index: 34,
    },
    {
      _id: "627e46c60efb7dd0eb5291a1",
      logo: "https://storage.googleapis.com/download/storage/v1/b/tradeunlisted-aef3b.appspot.com/o/images%2F2857.339320631884capital-small-finance-bank-unlisted-share.webp?generation=1671517910380890&alt=media",
      name: "Capital Small Finance Bank Ltd Unlisted Shares",
      urlName: "capital small finance bank limited unlisted shares",
      sector: "Banking & Finance",
      pricePerShare: 388,
      brokerPrice: null,
      availableShare: 100,
      top: 35,
      status: "Available",
      isinCode: "INE646H01017",
      schemaMarkup:
        '  \n{\n  "@context": "https://schema.org",\n  "@type": "Article",\n  "mainEntityOfPage": {\n    "@type": "WebPage",\n    "@id": "https://tradeunlisted.com/buy-indian-stocks/capital-small-finance-bank-limited-unlisted-shares"\n  },\n  "headline": "Capital Small Finance Bank Share Price | Buy Sell Capital Small Finance Unlisted Shares / Pre IPO Stocks",\n  "description": "Buy or Sell Capital Small Finance Bank Unlisted Stocks. Check updated prices and download the research report. Find the right valuation of your current holdings.",\n  "image": "https://storage.googleapis.com/download/storage/v1/b/tradeunlisted-aef3b.appspot.com/o/images%2F2857.339320631884capital-small-finance-bank-unlisted-share.webp?generation=1671517910380890&alt=media",  \n  "author": {\n    "@type": "Organization",\n    "name": "Trade Unlisted",\n    "url": "https://tradeunlisted.com/"\n  },  \n  "publisher": {\n    "@type": "Organization",\n    "name": "Trade Unlisted",\n    "logo": {\n      "@type": "ImageObject",\n      "url": "https://tradeunlisted.com/static/media/unlistedlogo.633ff8bf9d339671184b944bd469b977.svg"\n    }\n  },\n  "datePublished": "",\n  "dateModified": "2022-12-27"\n}\n \n{\n  "@context": "https://schema.org/", \n  "@type": "Product", \n  "name": "Capital Small Finance Bank Unlisted Shares",\n  "image": "https://storage.googleapis.com/download/storage/v1/b/tradeunlisted-aef3b.appspot.com/o/images%2F2857.339320631884capital-small-finance-bank-unlisted-share.webp?generation=1671517910380890&alt=media",\n  "description": "Buy Capital Small Finance Bank unlisted shares at the best price.",\n  "brand": {\n    "@type": "Brand",\n    "name": "TradeUnlisted"\n  },\n  "offers": {\n    "@type": "Offer",\n    "url": "https://tradeunlisted.com/buy-indian-stocks/capital-small-finance-bank-limited-unlisted-shares",\n    "priceCurrency": "INR",\n    "price": "306",\n    "availability": "https://schema.org/InStock"\n  }\n}\n  \n{\n  "@context": "https://schema.org/", \n  "@type": "BreadcrumbList", \n  "itemListElement": [{\n    "@type": "ListItem", \n    "position": 1, \n    "name": "TradeUnlisted",\n    "item": "https://tradeunlisted.com/"  \n  },{\n    "@type": "ListItem", \n    "position": 2, \n    "name": "Unlisted Shares in India",\n    "item": "https://tradeunlisted.com/buy-indian-stocks"  \n  },{\n    "@type": "ListItem", \n    "position": 3, \n    "name": "Capital Small Finance Bank Unlisted Shares",\n    "item": "https://tradeunlisted.com/buy-indian-stocks/capital-small-finance-bank-limited-unlisted-shares"  \n  }]\n}\n ',
      isWatchList: false,
      index: 33,
    },
    {
      _id: "6256621cc520226a50e15bcc",
      logo: "https://storage.googleapis.com/download/storage/v1/b/tradeunlisted-aef3b.appspot.com/o/images%2F6048.616431047844hdfc-securities-unlisted-share.webp?generation=1671517674722871&alt=media",
      name: "HDFC Securities Ltd Unlisted Shares",
      urlName: "hdfc securities limited unlisted shares",
      sector: "Securities",
      pricePerShare: 11016,
      brokerPrice: null,
      availableShare: 200,
      top: 35,
      status: "Available",
      isinCode: "INE700G01014",
      schemaMarkup:
        '  \n{\n  "@context": "https://schema.org",\n  "@type": "Article",\n  "mainEntityOfPage": {\n    "@type": "WebPage",\n    "@id": "https://tradeunlisted.com/buy-indian-stocks/hdfc-securities-limited-unlisted-shares"\n  },\n  "headline": "HDFC Securities Unlisted share price | Buy Sell HDFC Securities Unlisted Shares / Pre IPO Stocks",\n  "description": "Buy or Sell HDFC Securities unlisted shares. Check the annual report, latest updates and prices. Explore detailed research reports of HDFC Securities.",\n  "image": "https://storage.googleapis.com/download/storage/v1/b/tradeunlisted-aef3b.appspot.com/o/images%2F6048.616431047844hdfc-securities-unlisted-share.webp?generation=1671517674722871&alt=media",  \n  "author": {\n    "@type": "Organization",\n    "name": "Trade Unlisted",\n    "url": "https://tradeunlisted.com/"\n  },  \n  "publisher": {\n    "@type": "Organization",\n    "name": "Trade Unlisted",\n    "logo": {\n      "@type": "ImageObject",\n      "url": "https://tradeunlisted.com/static/media/unlistedlogo.633ff8bf9d339671184b944bd469b977.svg"\n    }\n  },\n  "datePublished": "",\n  "dateModified": "2022-12-27"\n}\n \n{\n  "@context": "https://schema.org/", \n  "@type": "Product", \n  "name": "HDFC Securities Ltd Unlisted Shares",\n  "image": "https://storage.googleapis.com/download/storage/v1/b/tradeunlisted-aef3b.appspot.com/o/images%2F6048.616431047844hdfc-securities-unlisted-share.webp?generation=1671517674722871&alt=media",\n  "description": "Buy HDFC Securities Ltd unlisted shares at the best price.",\n  "brand": {\n    "@type": "Brand",\n    "name": "TradeUnlisted"\n  },\n  "offers": {\n    "@type": "Offer",\n    "url": "https://tradeunlisted.com/buy-indian-stocks/hdfc-securities-limited-unlisted-shares",\n    "priceCurrency": "INR",\n    "price": "11700",\n    "availability": "https://schema.org/InStock"\n  }\n}\n  \n{\n  "@context": "https://schema.org/", \n  "@type": "BreadcrumbList", \n  "itemListElement": [{\n    "@type": "ListItem", \n    "position": 1, \n    "name": "TradeUnlisted",\n    "item": "https://tradeunlisted.com/"  \n  },{\n    "@type": "ListItem", \n    "position": 2, \n    "name": "Unlisted Shares in India",\n    "item": "https://tradeunlisted.com/buy-indian-stocks"  \n  },{\n    "@type": "ListItem", \n    "position": 3, \n    "name": "HDFC Securities Unlisted Shares",\n    "item": "https://tradeunlisted.com/buy-indian-stocks/hdfc-securities-limited-unlisted-shares"  \n  }]\n}\n <script type="application/ld+json">\n{\n  "@context": "https://schema.org",\n  "@type": "FAQPage",\n  "mainEntity": [{\n    "@type": "Question",\n    "name": "How to buy HDFC securities unlisted shares?",\n    "acceptedAnswer": {\n      "@type": "Answer",\n      "text": "The following is the process of buying HDFC securities unlisted shares from the TradeUnlisted platform:\n\nClick on the ‘Invest now’ button on the HDFC securities page. The HDFC securities unlisted stocks will be added to your cart. \nIn the cart section, you will be required to enter the quantity of HDFC securities unlisted shares you want to purchase. \nNext step is to select the payment method you wish to use. We accept payments via debit card, net banking and UPI. \nPayment must be made from the same account to which shares are to be transferred. Third party transactions are strictly prohibited on the platform.\nThe TradeUnlisted team will contact you and set up the whole process smoothly.  \nThe shares will then be credited in the demat account mentioned in the CML copy within the timeline mentioned in the Deal Contract Letter.\nIn case you want to buy HDFC securities unlisted shares offline, you may call us on +91 8958 212121 or write to us at contactus@tradeunlisted.com."\n    }\n  },{\n    "@type": "Question",\n    "name": "How to sell HDFC Securities Ltd unlisted shares?",\n    "acceptedAnswer": {\n      "@type": "Answer",\n      "text": "The following is the process to sell HDFC Securities Ltd unlisted shares on TradeUnlisted platform:\n\nFill up the form on https://tradeunlisted.com/sell by choosing the Unlisted Stocks you wish to sell and enter the quantity of the shares along with an expected pricing for the shares. \nThe TradeUnlisted team will contact you to confirm the deal. \nOnce we confirm our buying price of the shares, we will share a copy of our Client Master List (CML). \nYou will then be required to transfer the shares to our demat account. \nOnce the shares are reflected in our demat account, we will transfer the funds to your bank account within the stipulated time and the same will be intimated to you. \nPayment will be made via RTGS, NEFT, IMPS, cheque or UPI. Payment will be made to the same account which is linked to your demat account. \nIn case you have any queries, you may call us on +91 8958 212121 or write to us at contactus@tradeunlisted.com"\n    }\n  },{\n    "@type": "Question",\n    "name": "What is the lock-in period of HDFC Securities Ltd unlisted shares?",\n    "acceptedAnswer": {\n      "@type": "Answer",\n      "text": "There is no restriction on transfer of unlisted shares until the IPO cut-off date which is generally a week before listing. However, after listing SEBI norms are applicable to these shares. As per SEBI regulations, all unlisted shares go in a lock-in period of 6 months from the date of listing of shares. \n\nIn case you have any queries, you may call us on +91 8958 212121 or write to us at contactus@tradeunlisted.com"\n    }\n  },{\n    "@type": "Question",\n    "name": "How to check credit of HDFC Securities Ltd unlisted shares?",\n    "acceptedAnswer": {\n      "@type": "Answer",\n      "text": "All unlisted shares can be transferred only to Demat accounts. Unlisted shares can be checked in two ways: \n1. Option 1 \n\nDownload the NSDL or CDSL mobile application from the Google Play or App Store.\nEnter your DP ID + Client ID (total of 16 characters) \n2. Option 2\n\nYou may also check the credit of your shares, by logging in to your Demat account and checking under DP Holdings in your respective DP.  \n\nIn case you have any queries, you may call us on +91 8958 212121 or write to us at contactus@tradeunlisted.com."\n    }\n  }]\n}\n</script>',
      isWatchList: false,
      index: 32,
    },
  ];
  return (
    <>
      {/* New Table */}
      <div class="container">
        <div class="row">
          <div class="col-md-offset-1 col-md-10">
            <div class="panel my-5">
              <div class="panel-heading">
                <div class="row">
                  <div class="col col-sm-3 col-xs-12">
                    <h4 class="title">
                      Stock <span>List</span>
                    </h4>
                  </div>
                  <div class="col-sm-9 col-xs-12 text-right">
                    <div class="btn_group  d-flex justify-content-end">
                      <input
                        type="text"
                        class="form-control"
                        placeholder="Search"
                        onChange={
                          (e) => {
                            let newData = data?.data?.filter((ele) =>
                              ele
                                ?.toLowerCase()
                                ?.includes(e.target.value?.toLowerCase())
                            );
                            console.log("neeeessssss", newData, e.target.value);
                            setFilterData(newData);
                          }
                          // setData((prev) =>
                          //   prev?.filter((ele) => ele?.includes(e.target.value))
                          // )
                        }
                      />
                      {/* <button class="btn btn-default" title="Reload">
                        <i class="fa fa-sync-alt"></i>
                      </button>
                      <button class="btn btn-default" title="Pdf">
                        <i class="fa fa-file-pdf"></i>
                      </button>
                      <button class="btn btn-default" title="Excel">
                        <i class="fas fa-file-excel"></i>
                      </button> */}
                    </div>
                  </div>
                </div>
              </div>
              {!loading ? (
                <>
                  <div class="panel-body table-responsive">
                    <table class="table">
                      <thead>
                        <tr>
                          <th scope="col">No.</th>
                          <th scope="col">Share Name</th>
                          <th scope="col">Share Price</th>
                          <th scope="col">Action</th>
                        </tr>
                      </thead>
                      <tbody>
                        {filterData?.length === 0
                          ? data?.data?.map((item, index) => (
                              <tr key={index}>
                                <td scope="row">{index + 1}</td>
                                <td>{item}</td>
                                <td>
                                  {index + 21}
                                  {/* {Math.floor(Math.random() * 350) + 1} */}
                                </td>
                                <td
                                  className="pe-auto cursor-pointer"
                                  onClick={() =>
                                    navigate(`/${strategyId}/${item}`)
                                  }
                                >
                                  <CIcon icon={cilLink} className="me-2" />
                                </td>
                              </tr>
                            ))
                          : filterData?.map((item, index) => (
                              <tr key={index}>
                                <td scope="row">{index + 1}</td>
                                <td>{item}</td>
                                <td>
                                  {index + 21}
                                  {/* {Math.floor(Math.random() * 350) + 1} */}
                                </td>
                                <td
                                  className="pe-auto cursor-pointer"
                                  onClick={() =>
                                    navigate(`/${strategyId}/${item}`)
                                  }
                                >
                                  <CIcon icon={cilLink} className="me-2" />
                                </td>
                              </tr>
                            ))}
                        {/* <tr>
                      <td>1</td>
                      <td>Vincent Williamson</td>
                      <td>31</td>
                      <td>iOS Developer</td>
                      <td>Sinaai-Waas</td>
                      <td>
                        <ul class="action-list">
                          <li>
                            <a href="#" data-tip="edit">
                              <i class="fa fa-edit"></i>
                            </a>
                          </li>
                          <li>
                            <a href="#" data-tip="delete">
                              <i class="fa fa-trash"></i>
                            </a>
                          </li>
                        </ul>
                      </td>
                    </tr>
                    <tr>
                      <td>2</td>
                      <td>Taylor Reyes</td>
                      <td>22</td>
                      <td>UI/UX Developer</td>
                      <td>Baileux</td>
                      <td>
                        <ul class="action-list">
                          <li>
                            <a href="#" data-tip="edit">
                              <i class="fa fa-edit"></i>
                            </a>
                          </li>
                          <li>
                            <a href="#" data-tip="delete">
                              <i class="fa fa-trash"></i>
                            </a>
                          </li>
                        </ul>
                      </td>
                    </tr>
                    <tr>
                      <td>3</td>
                      <td>Justin Block</td>
                      <td>26</td>
                      <td>Frontend Developer</td>
                      <td>Overland Park</td>
                      <td>
                        <ul class="action-list">
                          <li>
                            <a href="#" data-tip="edit">
                              <i class="fa fa-edit"></i>
                            </a>
                          </li>
                          <li>
                            <a href="#" data-tip="delete">
                              <i class="fa fa-trash"></i>
                            </a>
                          </li>
                        </ul>
                      </td>
                    </tr>
                    <tr>
                      <td>4</td>
                      <td>Sean Guzman</td>
                      <td>26</td>
                      <td>Web Designer</td>
                      <td>Gloucester</td>
                      <td>
                        <ul class="action-list">
                          <li>
                            <a href="#" data-tip="edit">
                              <i class="fa fa-edit"></i>
                            </a>
                          </li>
                          <li>
                            <a href="#" data-tip="delete">
                              <i class="fa fa-trash"></i>
                            </a>
                          </li>
                        </ul>
                      </td>
                    </tr>
                    <tr>
                      <td>5</td>
                      <td>Keith Carter</td>
                      <td>20</td>
                      <td>Graphic Designer</td>
                      <td>Oud-Turnhout</td>
                      <td>
                        <ul class="action-list">
                          <li>
                            <a href="#" data-tip="edit">
                              <i class="fa fa-edit"></i>
                            </a>
                          </li>
                          <li>
                            <a href="#" data-tip="delete">
                              <i class="fa fa-trash"></i>
                            </a>
                          </li>
                        </ul>
                      </td>
                    </tr> */}
                      </tbody>
                    </table>
                  </div>
                  <div class="panel-footer">
                    <div class="row">
                      <div class="col col-sm-6 col-xs-6">
                        showing <b>{data?.Count}</b> out of <b>{data?.Count}</b>{" "}
                        entries
                      </div>
                      {/* <div class="col-sm-6 col-xs-6">
                    <ul class="pagination hidden-xs pull-right">
                      <li>
                        <a href="#"></a>
                      </li>
                      <li class="active">
                        <a href="#">1</a>
                      </li>
                      <li>
                        <a href="#">2</a>
                      </li>
                      <li>
                        <a href="#">3</a>
                      </li>
                      <li>
                        <a href="#">4</a>
                      </li>
                      <li>
                        <a href="#">5</a>
                      </li>
                      <li>
                        <a href="#"></a>
                      </li>
                    </ul>
                    <ul class="pagination visible-xs pull-right">
                      <li>
                        <a href="#"></a>
                      </li>
                      <li>
                        <a href="#"></a>
                      </li>
                    </ul>
                  </div> */}
                    </div>
                  </div>
                </>
              ) : (
                <div class="d-flex justify-content-center text-primary">
                  <div class="spinner-border" role="status">
                    {/* <span class="sr-only">Loading...</span> */}
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CompanyList;
