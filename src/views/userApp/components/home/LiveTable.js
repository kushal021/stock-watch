import React, { useState } from "react";

const LiveTable = ({ data, lData }) => {
  const [top, setTop] = useState("tg");
  console.log("data here in table======>", data);
  return (
    <div className="wrapper">
      <div className="tabs-wrapper">
        <span className="left scroller-btn"></span>
        <ul id="scroller" className="nav nav-tabs">
          <li
            className={` ${top === "tg" && "active"}`}
            onClick={() => setTop("tg")}
          >
            <p>Top Gainers</p>
          </li>
          <li
            className={` ${top === "tl" && "active"}`}
            onClick={() => setTop("tl")}
          >
            <p>Top Losers</p>
          </li>
        </ul>
        <span id="right" className="right scroller-btn"></span>
      </div>
      <div className="tab-content">
        {top === "tg" ? (
          <>
            <div className="row">
              <div className="col-lg-12">
                <div className="">
                  <div className="table-responsive">
                    <table className="table project-list-table table-nowrap align-middle table-borderless">
                      <thead>
                        <tr>
                          <th scope="col">Company</th>
                          <th scope="col">Value</th>
                          <th scope="col">Change</th>
                          <th scope="col">%Change</th>
                        </tr>
                      </thead>
                      <tbody>
                        {data?.data?.map((item, index) => (
                          <tr key={index}>
                            <td>
                              <a className="text-body">{item?.sc_comp}</a>
                            </td>
                            <td>{item?.close}</td>
                            <td>
                              <span className="badge badge-soft-success mb-0">
                                ₹{item?.change}
                              </span>
                            </td>
                            <td>
                              <span className="badge badge-soft-success mb-0">
                                {item?.gain}
                              </span>
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            </div>
          </>
        ) : (
          <div className="row">
            <div className="col-lg-12">
              <div className="">
                <div className="table-responsive">
                  <table className="table project-list-table table-nowrap align-middle table-borderless">
                    <thead>
                      <tr>
                        <th scope="col">Company</th>
                        <th scope="col">Value</th>
                        <th scope="col">Change</th>
                        <th scope="col">%Change</th>
                      </tr>
                    </thead>
                    <tbody>
                      {lData?.data?.map((item, index) => (
                        <tr key={index}>
                          <td>
                            <a className="text-body">{item?.sc_comp}</a>
                          </td>
                          <td>{item?.close}</td>
                          <td>
                            <span className="badge badge-soft-danger mb-0">
                              ₹{item?.change}
                            </span>
                          </td>
                          <td>
                            <span className="badge badge-soft-danger mb-0">
                              {item?.loss}
                            </span>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default LiveTable;
