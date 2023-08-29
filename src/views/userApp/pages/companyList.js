import React, { useEffect, useState } from "react";
import "../../../scss/indeaninternational.scss";
import { useNavigate, useParams } from "react-router-dom";

import CIcon from "@coreui/icons-react";
import {
  cilArrowCircleLeft,
  cilArrowCircleTop,
  cilChartLine,
  cilEyedropper,
  cilLink,
} from "@coreui/icons";
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
        "/shareWiseData/getInvestmentShareNames?page=1&limit=10",
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
  console.log("eeeeeee paramsssss ===>", strategyId);

  useEffect(() => {
    getAllStockData();
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
            marginTop: "6px",
          }}
          onClick={() => navigate(-1)}
        >
          <CIcon icon={cilArrowCircleLeft} size="xxl" />
        </div>
        <div className="row">
          <div className="col-md-offset-1 col-md-10">
            {/* <input
              type="date"
              onChange={(e) => console.log("eeeeee", e.target.value)}
            /> */}
            <div className="panel my-5">
              <div className="panel-heading">
                <div className="row">
                  <div className="col col-sm-3 col-xs-12">
                    <h4 className="title">
                      Stock <span>List</span>
                    </h4>
                  </div>
                  <div className="col-sm-9 col-xs-12 text-right">
                    <div className="btn_group  d-flex justify-content-end">
                      <input
                        type="text"
                        className="form-control"
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
                      {/* <button className="btn btn-default" title="Reload">
                        <i className="fa fa-sync-alt"></i>
                      </button>
                      <button className="btn btn-default" title="Pdf">
                        <i className="fa fa-file-pdf"></i>
                      </button>
                      <button className="btn btn-default" title="Excel">
                        <i className="fas fa-file-excel"></i>
                      </button> */}
                    </div>
                  </div>
                </div>
              </div>
              {!loading ? (
                <>
                  <div className="panel-body table-responsive">
                    <table className="table">
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
                                <td data-th="Chart">
                                  <a
                                    style={{
                                      cursor: "pointer",
                                      color: "inherit",
                                    }}
                                    href={`/stocks/chart-data/${item}`}
                                    target="_blank"
                                  >
                                    <CIcon icon={cilChartLine} />
                                  </a>
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

                                <td data-th="Chart">
                                  <a
                                    style={{
                                      cursor: "pointer",
                                      color: "inherit",
                                    }}
                                    href={`/stocks/chart-data/${item}`}
                                    target="_blank"
                                  >
                                    <CIcon icon={cilChartLine} />
                                  </a>
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
                        <ul className="action-list">
                          <li>
                            <a href="#" data-tip="edit">
                              <i className="fa fa-edit"></i>
                            </a>
                          </li>
                          <li>
                            <a href="#" data-tip="delete">
                              <i className="fa fa-trash"></i>
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
                        <ul className="action-list">
                          <li>
                            <a href="#" data-tip="edit">
                              <i className="fa fa-edit"></i>
                            </a>
                          </li>
                          <li>
                            <a href="#" data-tip="delete">
                              <i className="fa fa-trash"></i>
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
                        <ul className="action-list">
                          <li>
                            <a href="#" data-tip="edit">
                              <i className="fa fa-edit"></i>
                            </a>
                          </li>
                          <li>
                            <a href="#" data-tip="delete">
                              <i className="fa fa-trash"></i>
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
                        <ul className="action-list">
                          <li>
                            <a href="#" data-tip="edit">
                              <i className="fa fa-edit"></i>
                            </a>
                          </li>
                          <li>
                            <a href="#" data-tip="delete">
                              <i className="fa fa-trash"></i>
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
                        <ul className="action-list">
                          <li>
                            <a href="#" data-tip="edit">
                              <i className="fa fa-edit"></i>
                            </a>
                          </li>
                          <li>
                            <a href="#" data-tip="delete">
                              <i className="fa fa-trash"></i>
                            </a>
                          </li>
                        </ul>
                      </td>
                    </tr> */}
                      </tbody>
                    </table>
                  </div>
                  <div className="panel-footer">
                    <div className="row">
                      <div className="col col-sm-6 col-xs-6">
                        showing <b>{filterData?.length || data?.Count}</b> out
                        of <b>{data?.Count}</b> entries
                      </div>
                      {/* <div className="col-sm-6 col-xs-6">
                    <ul className="pagination hidden-xs pull-right">
                      <li>
                        <a href="#"></a>
                      </li>
                      <li className="active">
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
                    <ul className="pagination visible-xs pull-right">
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
                <div className="d-flex justify-content-center text-primary">
                  <div className="spinner-border" role="status">
                    {/* <span className="sr-only">Loading...</span> */}
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
