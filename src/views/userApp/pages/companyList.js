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
  console.log("eeeeeee paramsssss", strategyId);

  useEffect(() => {
    getAllStockData();
  }, []);

  return (
    <>
      {/* New Table */}
      <div class="container">
        <div class="row">
          <div class="col-md-offset-1 col-md-10">
            <input
              type="date"
              onChange={(e) => console.log("eeeeee", e.target.value)}
            />
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
                                    navigate(`/stocks/${strategyId}/${item}`)
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
                                    navigate(`/stocks/${strategyId}/${item}`)
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
