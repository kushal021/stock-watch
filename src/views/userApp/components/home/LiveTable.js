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

const LiveTable = ({ data, lData }) => {
  const [top, setTop] = useState("tg");
  const [activeKey, setActiveKey] = useState(1);

  console.log("data here in table======>", data);
  return (
    <div className="wrapper-live">
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
    </div>
    // <CRow className="our-platform my-5">
    //   <CCol md={12}>
    //     <div className="perfo-title">past performance</div>

    //     <CNav variant="tabs" className="home-nav" role="tablist">
    //       <CNavItem className="my_flex_grow">
    //         <CNavLink
    //           // href="javascript:void(0);"
    //           active={activeKey === 1}
    //           onClick={() => setActiveKey(1)}
    //         >
    //           {/* Listed Shares */}
    //           Listed (Unlisted shares which got listed)
    //         </CNavLink>
    //       </CNavItem>
    //       <CNavItem className="my_flex_grow">
    //         <CNavLink
    //           // href="javascript:void(0);"
    //           active={activeKey === 2}
    //           onClick={() => setActiveKey(2)}
    //         >
    //           {/* Unlisted Shares */}
    //           Unlisted shares & Pre-IPO opportunities
    //         </CNavLink>
    //       </CNavItem>
    //     </CNav>

    //     <CTabContent>
    //       <CTabPane
    //         role="tabpanel"
    //         aria-labelledby="home-tab"
    //         visible={activeKey === 1}
    //       >
    //         <div className="table-responsive-sm table_custom_responsive table-responsive-md table-responsive-lg table-responsive-xl">
    //           <CTable className="performance-table text-center">
    //             <CTableHead className="perf-head">
    //               <CTableRow className="th-view">
    //                 <CTableHeaderCell scope="col" className="home-sticky-table">
    //                   Company name
    //                 </CTableHeaderCell>
    //                 <CTableHeaderCell scope="col">Sector</CTableHeaderCell>
    //                 <CTableHeaderCell scope="col">
    //                   Transactional Price Unlisted Shares (INR)
    //                 </CTableHeaderCell>
    //                 <CTableHeaderCell scope="col">
    //                   IPO Band (INR)
    //                 </CTableHeaderCell>
    //                 <CTableHeaderCell scope="col">
    //                   Listing Price (INR)
    //                 </CTableHeaderCell>
    //                 <CTableHeaderCell scope="col">
    //                   Current Price (INR)
    //                   <br />
    //                   <span className="txt_date">16/09/2022</span>
    //                 </CTableHeaderCell>
    //               </CTableRow>
    //             </CTableHead>
    //             <CTableBody className="table-body-bg">
    //               <CTableRow className="row_my_sticky">
    //                 <CTableHeaderCell scope="row" className="table-cell">
    //                   <div className="grid-table-view">
    //                     <div className="txt">
    //                       {" "}
    //                       Bikaji International Foods Limited
    //                     </div>
    //                   </div>
    //                 </CTableHeaderCell>
    //                 <CTableDataCell className="table-cell">FMCG</CTableDataCell>
    //                 <CTableDataCell className="table-cell">280</CTableDataCell>
    //                 <CTableDataCell className="table-cell">
    //                   285 - 300
    //                 </CTableDataCell>
    //                 <CTableDataCell className="table-cell">
    //                   421.15
    //                 </CTableDataCell>
    //                 <CTableDataCell className="table-cell"> 323</CTableDataCell>
    //                 {/* <CTableDataCell className="table-cell">
    //                           494
    //                         </CTableDataCell> */}
    //               </CTableRow>
    //               <CTableRow className="row_my_sticky">
    //                 <CTableHeaderCell scope="row" className="table-cell">
    //                   <div className="grid-table-view">
    //                     <div className="txt">
    //                       {" "}
    //                       Tamilnad Mercantile Bank Limited
    //                     </div>
    //                   </div>
    //                 </CTableHeaderCell>
    //                 <CTableDataCell className="table-cell">Bank</CTableDataCell>
    //                 <CTableDataCell className="table-cell">333</CTableDataCell>
    //                 <CTableDataCell className="table-cell">
    //                   500 - 525
    //                 </CTableDataCell>
    //                 <CTableDataCell className="table-cell"> 510</CTableDataCell>
    //                 <CTableDataCell className="table-cell">494</CTableDataCell>
    //               </CTableRow>
    //               <CTableRow className="row_my_sticky">
    //                 <CTableHeaderCell scope="row" className="table-cell">
    //                   <div className="grid-table-view">
    //                     <div className="txt"> ICICI Lombard</div>
    //                   </div>
    //                 </CTableHeaderCell>
    //                 <CTableDataCell className="table-cell">
    //                   Insurance
    //                 </CTableDataCell>
    //                 <CTableDataCell className="table-cell">400</CTableDataCell>
    //                 <CTableDataCell className="table-cell">
    //                   651 - 661
    //                 </CTableDataCell>
    //                 <CTableDataCell className="table-cell"> 661</CTableDataCell>
    //                 <CTableDataCell className="table-cell">1215</CTableDataCell>
    //               </CTableRow>
    //               <CTableRow className="row_my_sticky">
    //                 <CTableHeaderCell scope="row" className="table-cell">
    //                   <div className="grid-table-view">
    //                     <div className="txt"> HDFC Standard life</div>
    //                   </div>
    //                 </CTableHeaderCell>
    //                 <CTableDataCell className="table-cell">
    //                   Insurance
    //                 </CTableDataCell>
    //                 <CTableDataCell className="table-cell">210</CTableDataCell>
    //                 <CTableDataCell className="table-cell">
    //                   275 - 290
    //                 </CTableDataCell>
    //                 <CTableDataCell className="table-cell"> 311</CTableDataCell>
    //                 <CTableDataCell className="table-cell">547</CTableDataCell>
    //               </CTableRow>
    //               <CTableRow className="row_my_sticky">
    //                 <CTableHeaderCell scope="row" className="table-cell">
    //                   <div className="grid-table-view">
    //                     <div className="txt">
    //                       ICICI prudential life insurance
    //                     </div>
    //                   </div>
    //                 </CTableHeaderCell>
    //                 <CTableDataCell className="table-cell">
    //                   Insurance
    //                 </CTableDataCell>
    //                 <CTableDataCell className="table-cell">130</CTableDataCell>
    //                 <CTableDataCell className="table-cell">
    //                   300 - 334
    //                 </CTableDataCell>
    //                 <CTableDataCell className="table-cell"> 329</CTableDataCell>
    //                 <CTableDataCell className="table-cell">556</CTableDataCell>
    //               </CTableRow>
    //               <CTableRow className="row_my_sticky">
    //                 <CTableHeaderCell scope="row" className="table-cell">
    //                   <div className="grid-table-view">
    //                     <div className="txt">bombay stock exchange</div>
    //                   </div>
    //                 </CTableHeaderCell>
    //                 <CTableDataCell className="table-cell">
    //                   FinTech
    //                 </CTableDataCell>
    //                 <CTableDataCell className="table-cell">200</CTableDataCell>
    //                 <CTableDataCell className="table-cell">
    //                   805 - 806
    //                 </CTableDataCell>
    //                 <CTableDataCell className="table-cell">1069</CTableDataCell>
    //                 <CTableDataCell className="table-cell">663</CTableDataCell>
    //               </CTableRow>
    //               <CTableRow className="row_my_sticky">
    //                 <CTableHeaderCell scope="row" className="table-cell">
    //                   <div className="grid-table-view">
    //                     <div className="txt">ratnakar bank (RBL)</div>
    //                   </div>
    //                 </CTableHeaderCell>
    //                 <CTableDataCell className="table-cell">Bank</CTableDataCell>
    //                 <CTableDataCell className="table-cell">60</CTableDataCell>
    //                 <CTableDataCell className="table-cell">
    //                   224 - 225
    //                 </CTableDataCell>
    //                 <CTableDataCell className="table-cell"> 225</CTableDataCell>
    //                 <CTableDataCell className="table-cell">124</CTableDataCell>
    //               </CTableRow>
    //               <CTableRow className="row_my_sticky">
    //                 <CTableHeaderCell scope="row" className="table-cell">
    //                   <div className="grid-table-view">
    //                     <div className="txt">Catholic Syrian Bank</div>
    //                   </div>
    //                 </CTableHeaderCell>
    //                 <CTableDataCell className="table-cell">Bank</CTableDataCell>
    //                 <CTableDataCell className="table-cell">160</CTableDataCell>
    //                 <CTableDataCell className="table-cell">
    //                   193-195
    //                 </CTableDataCell>
    //                 <CTableDataCell className="table-cell"> 275</CTableDataCell>
    //                 <CTableDataCell className="table-cell">234</CTableDataCell>
    //               </CTableRow>
    //               <CTableRow className="row_my_sticky">
    //                 <CTableHeaderCell scope="row" className="table-cell">
    //                   <div className="grid-table-view">
    //                     <div className="txt">Nazara Technologies</div>
    //                   </div>
    //                 </CTableHeaderCell>
    //                 <CTableDataCell className="table-cell">
    //                   Gaming Tech
    //                 </CTableDataCell>
    //                 <CTableDataCell className="table-cell">450</CTableDataCell>
    //                 <CTableDataCell className="table-cell">
    //                   1100-1101
    //                 </CTableDataCell>
    //                 <CTableDataCell className="table-cell">
    //                   {" "}
    //                   1990
    //                 </CTableDataCell>
    //                 <CTableDataCell className="table-cell">725</CTableDataCell>
    //               </CTableRow>
    //               <CTableRow className="row_my_sticky">
    //                 <CTableHeaderCell scope="row" className="table-cell">
    //                   <div className="grid-table-view">
    //                     <div className="txt">Suryoday Small Finance Bank</div>
    //                   </div>
    //                 </CTableHeaderCell>
    //                 <CTableDataCell className="table-cell">
    //                   Small Finance Bank
    //                 </CTableDataCell>
    //                 <CTableDataCell className="table-cell">160</CTableDataCell>
    //                 <CTableDataCell className="table-cell">
    //                   303-305
    //                 </CTableDataCell>
    //                 <CTableDataCell className="table-cell"> 292</CTableDataCell>
    //                 <CTableDataCell className="table-cell">106</CTableDataCell>
    //               </CTableRow>

    //               <CTableRow className="row_my_sticky">
    //                 <CTableHeaderCell scope="row" className="table-cell">
    //                   <div className="grid-table-view">
    //                     <div className="txt">Barbeque Nation Hospitality</div>
    //                   </div>
    //                 </CTableHeaderCell>
    //                 <CTableDataCell className="table-cell">
    //                   Hospitality
    //                 </CTableDataCell>
    //                 <CTableDataCell className="table-cell">450</CTableDataCell>
    //                 <CTableDataCell className="table-cell">
    //                   498-500
    //                 </CTableDataCell>
    //                 <CTableDataCell className="table-cell"> 492</CTableDataCell>
    //                 <CTableDataCell className="table-cell">1056</CTableDataCell>
    //               </CTableRow>
    //             </CTableBody>
    //           </CTable>
    //         </div>
    //       </CTabPane>
    //       <CTabPane
    //         role="tabpanel"
    //         aria-labelledby="profile-tab"
    //         visible={activeKey === 2}
    //       >
    //         <div className="table-responsive-sm table_custom_responsive table-responsive-md table-responsive-lg table-responsive-xl">
    //           <CTable className="performance-table text-center">
    //             <CTableHead className="perf-head">
    //               <CTableRow className="th-view">
    //                 <CTableHeaderCell className="home-sticky-table" scope="col">
    //                   Company name
    //                 </CTableHeaderCell>
    //                 <CTableHeaderCell scope="col">2017 - 2018</CTableHeaderCell>
    //                 <CTableHeaderCell scope="col">2018 - 2019</CTableHeaderCell>
    //                 <CTableHeaderCell scope="col">2019 - 2020</CTableHeaderCell>
    //                 <CTableHeaderCell scope="col">
    //                   2020 - 2021
    //                   {/* <br />
    //                       <span className="txt_date">9 March 2022</span> */}
    //                 </CTableHeaderCell>
    //                 <CTableHeaderCell scope="col">
    //                   2021 - 2022 <br></br>
    //                   <small className="mt-3" style={{ fontSize: "13px" }}>
    //                     Updated prices - 16 sep-2022
    //                   </small>
    //                 </CTableHeaderCell>
    //               </CTableRow>
    //             </CTableHead>
    //             <CTableBody className="table-body-bg">
    //               <CTableRow className="row_my_sticky">
    //                 <CTableHeaderCell scope="row" className="table-cell">
    //                   <Link
    //                     href="/buy-indian-stocks/national-stock-exchange-unlisted-shares"
    //                     className="grid-table-view"
    //                   >
    //                     <div className="txt"> National Stock Exchange</div>
    //                   </Link>
    //                 </CTableHeaderCell>
    //                 <CTableDataCell className="table-cell">-</CTableDataCell>
    //                 <CTableDataCell className="table-cell">-</CTableDataCell>
    //                 <CTableDataCell className="table-cell"> -</CTableDataCell>
    //                 <CTableDataCell className="table-cell">1053</CTableDataCell>
    //                 <CTableDataCell className="table-cell">3400</CTableDataCell>
    //               </CTableRow>
    //               <CTableRow className="row_my_sticky">
    //                 <CTableHeaderCell scope="row" className="table-cell">
    //                   <Link
    //                     href="/buy-indian-stocks/fino-paytech-limited-unlisted-shares"
    //                     className="grid-table-view"
    //                   >
    //                     <div className="txt"> Fino PayTech Limited</div>
    //                   </Link>
    //                 </CTableHeaderCell>
    //                 <CTableDataCell className="table-cell">114</CTableDataCell>
    //                 <CTableDataCell className="table-cell">125</CTableDataCell>
    //                 <CTableDataCell className="table-cell">250</CTableDataCell>
    //                 <CTableDataCell className="table-cell">415</CTableDataCell>
    //                 <CTableDataCell className="table-cell">225</CTableDataCell>
    //               </CTableRow>
    //               <CTableRow className="row_my_sticky">
    //                 <CTableHeaderCell scope="row" className="table-cell">
    //                   <Link
    //                     href="/buy-indian-stocks/tata-technologies-unlisted-shares"
    //                     className="grid-table-view"
    //                   >
    //                     <div className="txt">Tata Technologies</div>
    //                   </Link>
    //                 </CTableHeaderCell>
    //                 <CTableDataCell className="table-cell">1950</CTableDataCell>
    //                 <CTableDataCell className="table-cell">1750</CTableDataCell>
    //                 <CTableDataCell className="table-cell">1520</CTableDataCell>
    //                 <CTableDataCell className="table-cell">1030</CTableDataCell>
    //                 <CTableDataCell className="table-cell">6140</CTableDataCell>
    //               </CTableRow>
    //               <CTableRow className="row_my_sticky">
    //                 <CTableHeaderCell scope="row" className="table-cell">
    //                   <Link
    //                     href="/buy-indian-stocks/hdb-financial-services-limited-unlisted-shares"
    //                     className="grid-table-view"
    //                   >
    //                     <div className="txt">
    //                       HDB Financial Services Limited
    //                     </div>
    //                   </Link>
    //                 </CTableHeaderCell>
    //                 <CTableDataCell className="table-cell">557</CTableDataCell>
    //                 <CTableDataCell className="table-cell">740</CTableDataCell>
    //                 <CTableDataCell className="table-cell">1015</CTableDataCell>
    //                 <CTableDataCell className="table-cell">803</CTableDataCell>
    //                 <CTableDataCell className="table-cell">635</CTableDataCell>
    //               </CTableRow>

    //               <CTableRow className="row_my_sticky">
    //                 <CTableHeaderCell scope="row" className="table-cell">
    //                   <Link
    //                     href="/buy-indian-stocks/hdfc-securities-limited-unlisted-shares"
    //                     className="grid-table-view"
    //                   >
    //                     <div className="txt">HDFC Securities Limited</div>
    //                   </Link>
    //                 </CTableHeaderCell>
    //                 <CTableDataCell className="table-cell">8950</CTableDataCell>
    //                 <CTableDataCell className="table-cell">
    //                   10600
    //                 </CTableDataCell>
    //                 <CTableDataCell className="table-cell">6750</CTableDataCell>
    //                 <CTableDataCell className="table-cell">7255</CTableDataCell>
    //                 <CTableDataCell className="table-cell">
    //                   11985
    //                 </CTableDataCell>
    //               </CTableRow>
    //               <CTableRow className="row_my_sticky">
    //                 <CTableHeaderCell scope="row" className="table-cell">
    //                   <Link href="/" className="grid-table-view">
    //                     <div className="txt"> Kurlon Enterprise Limited</div>
    //                   </Link>
    //                 </CTableHeaderCell>
    //                 <CTableDataCell className="table-cell">955</CTableDataCell>
    //                 <CTableDataCell className="table-cell">1170</CTableDataCell>
    //                 <CTableDataCell className="table-cell">810</CTableDataCell>
    //                 <CTableDataCell className="table-cell">695</CTableDataCell>
    //                 <CTableDataCell className="table-cell">695</CTableDataCell>
    //               </CTableRow>
    //               <CTableRow className="row_my_sticky">
    //                 <CTableHeaderCell scope="row" className="table-cell">
    //                   <Link href="/" className="grid-table-view">
    //                     <div className="txt">
    //                       Maharashtra Knowledge Corporation Limited (MKCL)
    //                     </div>
    //                   </Link>
    //                 </CTableHeaderCell>
    //                 <CTableDataCell className="table-cell">-</CTableDataCell>
    //                 <CTableDataCell className="table-cell">-</CTableDataCell>
    //                 <CTableDataCell className="table-cell"> -</CTableDataCell>
    //                 <CTableDataCell className="table-cell">850</CTableDataCell>
    //                 <CTableDataCell className="table-cell">670</CTableDataCell>
    //               </CTableRow>
    //               <CTableRow className="row_my_sticky">
    //                 <CTableHeaderCell scope="row" className="table-cell">
    //                   <Link
    //                     href="/buy-indian-stocks/pharmeasy-api-holdings-ltd-unlisted-shares"
    //                     className="grid-table-view"
    //                   >
    //                     <div className="txt">PharmEasy (API Holdings)</div>
    //                   </Link>
    //                 </CTableHeaderCell>
    //                 <CTableDataCell className="table-cell">-</CTableDataCell>
    //                 <CTableDataCell className="table-cell">-</CTableDataCell>
    //                 <CTableDataCell className="table-cell"> -</CTableDataCell>
    //                 <CTableDataCell className="table-cell">120</CTableDataCell>
    //                 <CTableDataCell className="table-cell">40</CTableDataCell>
    //               </CTableRow>
    //             </CTableBody>
    //           </CTable>
    //         </div>
    //       </CTabPane>
    //     </CTabContent>
    //   </CCol>
    //   <div className="py-3 pre_ipo">
    //     *Pre IPO & Unlisted Investments Are Subject To Market Risk And May
    //     Result In The Total Loss Of The Invested Capital
    //     <br />
    //     **Dates and Prices are taken on an average basis and should not be
    //     considered as an accurate representation. We do not give any assurance
    //     for the same.
    //     <br />
    //     *** Past Performance is not an accurate indicator of future growth and
    //     returns. Please take your investment decisions wisely.
    //   </div>
    // </CRow>
  );
};

export default LiveTable;
