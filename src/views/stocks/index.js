import { cilArrowThickFromTop, cilLink } from "@coreui/icons";
import CIcon from "@coreui/icons-react";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { userAxiosInstance } from "src/config";

const StockList = () => {
  const [data, setData] = useState();
  const [loading, setLoading] = useState(false);

  const navigate = useNavigate();

  const token = localStorage.getItem("aID");

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
  console.log("eeeeeee dataaaaaaaa", data);

  useEffect(() => {
    getAllStockData();
  }, []);
  return (
    <table className="table">
      <caption>List of users</caption>
      <thead>
        <tr>
          <th scope="col">Sr No.</th>
          <th scope="col">Stock Name</th>
          <th scope="col">Stock Price</th>
          <th scope="col">Link</th>
        </tr>
      </thead>
      <tbody>
        {data?.data?.map((item, index) => (
          <tr key={index}>
            <th scope="row">{index + 1}</th>
            <td>{item}</td>
            <td>{index + 3}</td>
            <td onClick={() => navigate(`/admin/stocks/${item}`)}>
              <CIcon icon={cilLink} />
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default StockList;
