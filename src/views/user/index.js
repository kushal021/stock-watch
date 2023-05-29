import {
  CTable,
  CTableBody,
  CTableDataCell,
  CTableHead,
  CTableHeaderCell,
  CTableRow,
} from "@coreui/react";
import React, { useEffect, useState } from "react";
import { adminAxiosInstance } from "src/config";

const UserList = () => {
  const [data, setData] = useState([]);

  const token = localStorage.getItem("aID");

  const getData = async () => {
    try {
      const response = await adminAxiosInstance.get(
        "userManage/getAll?page=1&limit=10",
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      setData(response.data?.data?.result);
    } catch (error) {
      console.log("eeeeeee", error);
    }
  };

  useEffect(() => {
    getData();
  }, []);
  return (
    <>
      <CTable>
        <CTableHead>
          <CTableRow>
            <CTableHeaderCell scope="col">Sr.</CTableHeaderCell>
            <CTableHeaderCell scope="col">Firstname</CTableHeaderCell>
            <CTableHeaderCell scope="col">Lastname</CTableHeaderCell>
            <CTableHeaderCell scope="col">Display name</CTableHeaderCell>
            <CTableHeaderCell scope="col">Email</CTableHeaderCell>
            <CTableHeaderCell scope="col">Mobile</CTableHeaderCell>
          </CTableRow>
        </CTableHead>
        {console.log("DDDDDDD", data)}
        <CTableBody>
          {data &&
            data?.map((item, index) => {
              <CTableRow key={index}>
                <CTableHeaderCell scope="row">1</CTableHeaderCell>
                <CTableDataCell>{item?.firstName}</CTableDataCell>
                <CTableDataCell>{item?.lastName}</CTableDataCell>
                <CTableDataCell>{item?.displayName}</CTableDataCell>
                <CTableDataCell>{item?.email}</CTableDataCell>
                <CTableDataCell>{item?.mobile}</CTableDataCell>
              </CTableRow>;
            })}
          <CTableRow>
            <CTableHeaderCell scope="row">3</CTableHeaderCell>
            <CTableDataCell colSpan={2}>Larry the Bird</CTableDataCell>
            <CTableDataCell>@twitter</CTableDataCell>
          </CTableRow>
        </CTableBody>
      </CTable>
    </>
  );
};

export default UserList;
