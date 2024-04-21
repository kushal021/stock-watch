import React, { useState } from "react";
import {
  CCol,
  CDropdown,
  CDropdownItem,
  CDropdownMenu,
  CDropdownToggle,
  CNav,
  CNavItem,
  CNavLink,
  CRow,
  CTabContent,
  CTable,
  CTableBody,
  CTableDataCell,
  CTableHead,
  CTableHeaderCell,
  CTableRow,
  CTabPane,
  CTooltip,
} from "@coreui/react";
import { Link } from "react-router-dom";
import stockImg from "../../../../assets/images/6256458.jpg";
// import stockImg from "../../assets/images/6256458.jpg";

const LiveTable = ({ data, lData }) => {
  const [activeKey, setActiveKey] = useState(1);

  return (
    <>
      {/* <div className="wrapper-live">
        <div className="tabs-wrapper">
          <span className="left scroller-btn"></span>
          <ul id="scroller" className="nav nav-tabs nav-tabs-live">
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
                  <div className="panel my-3">
                    <div className=" panel-body  table-responsive">
                      <table className="rwd-table">
                        <tbody>
                          <tr>
                            <th scope="col">Company</th>
                            <th scope="col">Value</th>
                            <th scope="col">Change</th>
                            <th scope="col">%Change</th>
                          </tr>
                          {data?.data?.map((item, index) => (
                            <tr key={index}>
                              <td>{item?.sc_comp}</td>
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
      </div> */}

      <CRow className="our-platform my-5">
        <CCol md={12}>
          {/* <div className="perfo-title">past performance</div> */}

          <CNav variant="tabs" className="home-nav" role="tablist">
            <CNavItem className="my_flex_grow">
              <CNavLink
                // href="javascript:void(0);"
                active={activeKey === 1}
                onClick={() => setActiveKey(1)}
              >
                {/* Listed Shares */}
                Top Gainers
              </CNavLink>
            </CNavItem>
            <CNavItem className="my_flex_grow">
              <CNavLink
                // href="javascript:void(0);"
                active={activeKey === 2}
                onClick={() => setActiveKey(2)}
              >
                {/* Unlisted Shares */}
                Top Losers
              </CNavLink>
            </CNavItem>
          </CNav>

          <CTabContent>
            <CTabPane
              role="tabpanel"
              aria-labelledby="home-tab"
              visible={activeKey === 1}
            >
              <div className="table-responsive-sm table_custom_responsive table-responsive-md table-responsive-lg table-responsive-xl">
                <CTable className="performance-table text-center">
                  <CTableHead className="perf-head">
                    <CTableRow className="th-view">
                      <CTableHeaderCell
                        scope="col"
                        className="home-sticky-table"
                      >
                        Company name
                      </CTableHeaderCell>
                      <CTableHeaderCell scope="col">Value</CTableHeaderCell>
                      <CTableHeaderCell scope="col">Change</CTableHeaderCell>
                      <CTableHeaderCell scope="col">% Change</CTableHeaderCell>
                    </CTableRow>
                  </CTableHead>
                  <CTableBody className="table-body-bg">
                    {data?.data?.map((item, index) => (
                      <CTableRow className="row_my_sticky" key={index}>
                        <CTableHeaderCell scope="row" className="table-cell">
                          <div className="grid-table-view">
                            {" "}
                            <div className="txt"> {item?.sc_comp}</div>
                          </div>
                        </CTableHeaderCell>
                        <CTableDataCell className="table-cell">
                          {item?.close}
                        </CTableDataCell>
                        <CTableDataCell className="table-cell">
                          ₹{item?.change}
                        </CTableDataCell>
                        <CTableDataCell className="table-cell">
                          {item?.gain}
                        </CTableDataCell>
                      </CTableRow>
                    ))}
                  </CTableBody>
                </CTable>
              </div>
            </CTabPane>
            <CTabPane
              role="tabpanel"
              aria-labelledby="profile-tab"
              visible={activeKey === 2}
            >
              <div className="table-responsive-sm table_custom_responsive table-responsive-md table-responsive-lg table-responsive-xl">
                <CTable className="performance-table text-center">
                  <CTableHead className="perf-head">
                    <CTableRow className="th-view">
                      <CTableHeaderCell
                        scope="col"
                        className="home-sticky-table"
                      >
                        Company name
                      </CTableHeaderCell>
                      <CTableHeaderCell scope="col">Value</CTableHeaderCell>
                      <CTableHeaderCell scope="col">Change</CTableHeaderCell>
                      <CTableHeaderCell scope="col">% Change</CTableHeaderCell>
                    </CTableRow>
                  </CTableHead>
                  <CTableBody className="table-body-bg">
                    {lData?.data?.map((item, index) => (
                      <CTableRow className="row_my_sticky" key={index}>
                        <CTableHeaderCell scope="row" className="table-cell">
                          <div className="grid-table-view">
                            {" "}
                            <div className="txt"> {item?.sc_comp}</div>
                          </div>
                        </CTableHeaderCell>
                        <CTableDataCell className="table-cell">
                          {item?.close}
                        </CTableDataCell>
                        <CTableDataCell className="table-cell">
                          ₹{item?.change}
                        </CTableDataCell>
                        <CTableDataCell className="table-cell">
                          {item?.loss}
                        </CTableDataCell>
                      </CTableRow>
                    ))}
                  </CTableBody>
                </CTable>
              </div>
            </CTabPane>
          </CTabContent>
        </CCol>
      </CRow>
    </>
  );
};

export default LiveTable;
