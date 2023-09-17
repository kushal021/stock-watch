import React, { useEffect, useState } from "react";
import "../../../scss/indeaninternational.scss";
import { useNavigate, useParams } from "react-router-dom";

import CIcon from "@coreui/icons-react";
import {
  cilArrowCircleLeft,
  cilArrowCircleTop,
  cilArrowLeft,
  cilArrowThickFromLeft,
  cilArrowThickToLeft,
  cilBarChart,
  cilChart,
  cilChartLine,
  cilChartPie,
  cilEyedropper,
  cilLink,
} from "@coreui/icons";
import { userAxiosInstance } from "src/config";
import Cards from "../components/home/Cards";
import { CChart } from "@coreui/react-chartjs";

const StrategyList = () => {
  const [data, setData] = useState();
  const [loading, setLoading] = useState(false);
  const [filterData, setFilterData] = useState([]);
  const navigate = useNavigate();
  const { id } = useParams();
  let token = "";
  let apiSlug = id.split("-");
  console.log("api slugg", apiSlug);
  let api = {
    breakfast: "getBreakfastStrategy",
    positional: "getPositionalStrategy",
    optimised: "getinvestmentOptimisedStrategy",
    investment: "getinvestmentExistingStrategy",
    best: "getBestBuyStrategy",
  };
  //2021-01-01
  //2023-05-18

  const strategyArray = [
    {
      strategy: "Bullish",
      name: "Breakfast bullish",
      slug: "breakfast-bullish-strategy",
    },
    {
      strategy: "Bearish",
      name: "Breakfast bearish",
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

  const getAllStockData = async (page, limit, date) => {
    console.log("appppppppppppp", apiSlug[0]);
    setLoading(true);
    let url = `/dayWiseData/${
      api?.[apiSlug[0]]
    }?page=${page}&limit=${limit}&date=${date}`;
    if (apiSlug[0] === "breakfast") {
      url = url + "&type=" + apiSlug[1];
    }

    try {
      const response = await userAxiosInstance.get(url, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      setData(response?.data?.data);
    } catch (error) {
      console.log("eeeeeee", error);
    }
    setLoading(false);
  };
  console.log("eeeeeee paramsssss", data);

  useEffect(() => {
    getAllStockData(1, 100, "2023-05-18");
  }, []);

  return (
    <>
      {/* New Table */}
      <div className="container">
        <div
          style={{
            display: "flex",
            justifyContent: "start",
            cursor: "pointer",
            marginTop: "9px",
          }}
          onClick={() => navigate(-1)}
        >
          <CIcon icon={cilArrowCircleLeft} size="xxl" />
        </div>
        {/* <Cards /> */}
        <div class="card card-tabsClass">
          <div class="card-header card-header-tabsClass">
            <ul
              class="nav nav-tabsClass nav-tabs nav-tabs-tabsClass justify-content-center"
              role="tablist"
            >
              {strategyArray?.map((item, index) => (
                <li class=" nav-item nav-item-tabsClass" key={index}>
                  <a
                    class={`nav-link nav-link-tabsClass ${
                      apiSlug[0]?.toLowerCase() + apiSlug[1]?.toLowerCase() ===
                        item?.slug?.split("-")[0]?.toLowerCase() +
                          item?.slug?.split("-")[1]?.toLowerCase() && "active"
                    }`}
                    data-toggle="tab"
                    href={`/strategy/${item?.slug}`}
                    target="_blank"
                    role="tab"
                  >
                    {item?.name}
                  </a>
                  {console.log(
                    "ffff",
                    apiSlug[0]?.toLowerCase(),
                    "and",
                    item?.slug?.split("-")[0]?.toLowerCase()
                  )}
                </li>
              ))}
            </ul>
          </div>
          {/* <div class="card-body-tabsClass">
              <div class="tab-content tab-content-tabsClass text-center text-center-tabsClass">
                <div
                  class="tab-pane tab-pane-tabsClass active"
                  id="home"
                  role="tabpanel"
                >
                  <p>
                    I think that’s a responsibility that I have, to push
                    possibilities, to show people, this is the level that things
                    could be at. So when you get something that has the name
                    Kanye West on it, it’s supposed to be pushing the furthest
                    possibilities. I will be the leader of a company that ends
                    up being worth billions of dollars, because I got the
                    answers. I understand culture. I am the nucleus.
                  </p>
                </div>
                <div
                  class="tab-pane tab-pane-tabsClass"
                  id="profile"
                  role="tabpanel"
                >
                  <p>
                    {" "}
                    I will be the leader of a company that ends up being worth
                    billions of dollars, because I got the answers. I understand
                    culture. I am the nucleus. I think that’s a responsibility
                    that I have, to push possibilities, to show people, this is
                    the level that things could be at. I think that’s a
                    responsibility that I have, to push possibilities, to show
                    people, this is the level that things could be at.{" "}
                  </p>
                </div>
                <div
                  class="tab-pane tab-pane-tabsClass"
                  id="messages"
                  role="tabpanel"
                >
                  <p>
                    I think that’s a responsibility that I have, to push
                    possibilities, to show people, this is the level that things
                    could be at. So when you get something that has the name
                    Kanye West on it, it’s supposed to be pushing the furthest
                    possibilities. I will be the leader of a company that ends
                    up being worth billions of dollars, because I got the
                    answers. I understand culture. I am the nucleus.
                  </p>
                </div>
                <div
                  class="tab-pane tab-pane-tabsClass"
                  id="settings"
                  role="tabpanel"
                >
                  <p>
                    "I will be the leader of a company that ends up being worth
                    billions of dollars, because I got the answers. I understand
                    culture. I am the nucleus. I think that’s a responsibility
                    that I have, to push possibilities, to show people, this is
                    the level that things could be at."
                  </p>
                </div>
              </div>
            </div> */}
        </div>
        <div className="row">
          <div className="col-md-offset-1">
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                marginTop: "50px",
              }}
            >
              <div>
                <h1 style={{ textTransform: "capitalize" }}>
                  {` ${apiSlug[0]} ${apiSlug[1]}
                      strategy data`}
                </h1>
              </div>
            </div>
            <div className="panel my-3">
              <div className="panel-body table-responsive">
                {/* <h1>
                      {` ${apiSlug[0]} ${apiSlug[1]}
                      strategy data`}
                    </h1> */}
                <div
                  style={{
                    display: "flex",
                    justifyContent: "end",
                    margin: "10px 27px",
                  }}
                >
                  <input
                    type="date"
                    onChange={(e) => getAllStockData(1, 100, e.target.value)}
                    min="2021-01-01"
                    max="2023-05-18"
                    defaultValue="2023-05-18"
                    className="cal"
                  />
                </div>
                {!loading ? (
                  <>
                    <table className="rwd-table">
                      <tbody>
                        {data?.data?.length ? (
                          <>
                            <tr>
                              <th>No.</th>
                              <th>Stock Name</th>
                              {/* <th>Open</th>
                              <th>Close</th> */}
                              <th>Date</th>
                              <th>Signal</th>
                              <th>Open</th>
                              <th>Target Value</th>
                              <th>Target achieve</th>
                              {(`${apiSlug[0]}` === "best" ||
                                `${apiSlug[0]}` === "positional" ||
                                `${apiSlug[0]}` === "investment" ||
                                `${apiSlug[0]}` === "optimised") && (
                                <th>Target achieved Date</th>
                              )}
                              <th>Chart</th>
                            </tr>

                            {data?.data?.map((item, index) => (
                              <tr key={index}>
                                <td data-th="No.">{index + 1}</td>
                                <td data-th="Stock Name">{item?.name}</td>
                                {/* <td data-th="Open">{item?.open}</td>
                                <td data-th="High">{item?.close}</td> */}
                                <td data-th="Date">
                                  {new Date(item?.date)
                                    .toISOString()
                                    .replace(/T.*/, "")
                                    .split("-")
                                    .reverse()
                                    .join("-")}
                                </td>
                                <td data-th="Signal">
                                  <div
                                    class={`chip chip--${
                                      item?.signal === "buy"
                                        ? "success"
                                        : "warning"
                                    }`}
                                  >
                                    {item?.signal}
                                  </div>
                                </td>
                                <td data-th="Target Value">
                                  {item?.open?.toFixed(2)}
                                </td>
                                <td data-th="Target Value">
                                  {item?.targetvalue?.toFixed(2)}
                                </td>
                                <td data-th="Target acieve">
                                  {item?.target ? "Achieved" : "Pending"}
                                </td>
                                {(`${apiSlug[0]}` === "best" ||
                                  `${apiSlug[0]}` === "positional" ||
                                  `${apiSlug[0]}` === "investment" ||
                                  `${apiSlug[0]}` === "optimised") && (
                                  <td data-th="Target achieved Date">
                                    {(item?.target?.date &&
                                      new Date(item?.target?.date)
                                        .toISOString()
                                        .replace(/T.*/, "")
                                        .split("-")
                                        .reverse()
                                        .join("-")) ||
                                      "-"}
                                  </td>
                                )}
                                <td data-th="Chart">
                                  <a
                                    style={{ cursor: "pointer" }}
                                    href={`/stocks/${id}/${item?.name}`}
                                    target="_blank"
                                  >
                                    <CIcon icon={cilChartLine} />
                                  </a>
                                </td>
                              </tr>
                            ))}
                          </>
                        ) : (
                          <p
                            style={{
                              color: "white",
                              display: "flex",
                              alignItems: "center",
                              justifyContent: "center",
                              marginTop: "15px",
                            }}
                          >
                            There is no Data for this Date
                          </p>
                        )}
                      </tbody>
                    </table>
                  </>
                ) : (
                  <div className="d-flex justify-content-center text-primary">
                    <div className="spinner-border" role="status">
                      {/* <span className="sr-only">Loading...</span> */}
                    </div>
                  </div>
                )}
              </div>
              <div className="panel-footer">
                <div className="row">
                  {data?.data?.length && (
                    <div className="col col-sm-6 col-xs-6">
                      showing <b>{data?.Count}</b> out of <b>{data?.Count}</b>{" "}
                      entries
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default StrategyList;
