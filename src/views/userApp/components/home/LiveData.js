import React, { useEffect, useState } from "react";
import LiveTable from "./LiveTable";
import axios from "axios";

const LiveData = () => {
  const [mainTab, setMainTab] = useState("bse");
  const [data, setData] = useState();
  const [loserData, setLoserData] = useState();

  const getDataGainer = async () => {
    try {
      const response = await axios.get(
        "https://www.cnbctv18.com/api/v1/market-movers/?section=top_gainers&limit=5"
      );
      console.log("response====>", response?.data);
      setData(response?.data);
    } catch (error) {
      console.log("errrrror", error);
    }
  };
  const getDataLoser = async () => {
    try {
      const response = await axios.get(
        "https://www.cnbctv18.com/api/v1/market-movers/?section=top_losers&limit=5"
      );
      console.log("response====>", response?.data);
      setLoserData(response?.data);
    } catch (error) {
      console.log("errrrror", error);
    }
  };

  useEffect(() => {
    getDataGainer();
    getDataLoser();
  }, []);
  return (
    <>
      <div className="row p-5">
        <div className="col-md-2 mb-3">
          <ul
            className="navs navs-pills flex-column"
            id="experienceTab"
            role="tablist"
          >
            <li className="navs-item mb-3" onClick={() => setMainTab("bse")}>
              <a
                className={`navs-link ${mainTab === "bse" && "active"}`}
                id="home-tab"
              >
                BSE
              </a>
            </li>
            <li className="navs-item  mb-3" onClick={() => setMainTab("nse")}>
              <a
                className={`navs-link ${mainTab === "nse" && "active"}`}
                id="profile-tab"
              >
                NSE
              </a>
            </li>
          </ul>
        </div>
        <div className="col-md-10">
          <div className="tab-content" id="experienceTabContent">
            {mainTab === "bse" ? (
              <LiveTable data={data?.bse} lData={loserData?.bse} />
            ) : mainTab === "nse" ? (
              <LiveTable data={data?.nse} lData={loserData?.nse} />
            ) : (
              ""
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default LiveData;
