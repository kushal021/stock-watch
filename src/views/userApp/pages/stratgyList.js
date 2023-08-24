import React, { useEffect, useState } from "react";
import "../../../scss/indeaninternational.scss";
import { useNavigate, useParams } from "react-router-dom";

import CIcon from "@coreui/icons-react";
import {
  cilArrowCircleTop,
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
      <Cards />
      <div class="container">
        <div class="row">
          <div class="col-md-offset-1 col-md-10">
            <div
              style={{
                display: "flex",
                justifyContent: "end",
                marginTop: "50px",
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
            <div class="panel my-3">
              {!loading ? (
                <>
                  <div class="panel-body table-responsive">
                    <h1>
                      {` ${apiSlug[0]} ${apiSlug[1]}
                      strategy data`}
                    </h1>
                    <table class="rwd-table">
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
                  </div>
                  <div class="panel-footer">
                    <div class="row">
                      {data?.data?.length && (
                        <div class="col col-sm-6 col-xs-6">
                          showing <b>{data?.Count}</b> out of{" "}
                          <b>{data?.Count}</b> entries
                        </div>
                      )}
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

export default StrategyList;
