import { useState, useEffect, useContext } from "react";
import axios from "axios";
import React from "react";
import "../../style/pages/orders.css";
import { UserContext } from "../../App";

export default function Orders() {
  const { orders } = useContext(UserContext);
  // const [data, setData] = useState([{}]);
  // const navigate = useNavigate();

  // useEffect(() => {
  //   const fetchDatas = async () => {
  //     const response = await axios.get("http://localhost:2500/orders");
  //     setData(response.data);
  //   };
  //   fetchDatas();
  // }, []);

  const orderList =
    orders &&
    orders.map((item, i) => {
      return (
        <tr key={i}>
          <td>{item.id}</td>
          <td>{item.date}</td>
          <td>{item.phone}</td>
          <td>{item.email}</td>
          <td>{item.address}</td>
          <td>{item.cnt} </td>
          <td>{item.amount}</td>
          <td>{item.payment}</td>
          <td>{item.status}</td>
        </tr>
      );
    });
  return (
    <div className="table-head">
      <table>
        <thead>
          <tr>
            <th>id</th>
            <th>Date</th>
            <th>Phone</th>
            <th>E-mail</th>
            <th>Address</th>
            <th>Count</th>
            <th>Amount</th>
            <th>Payment</th>
            <th>Status</th>
          </tr>
        </thead>
        {/* <tbody>{orderList}</tbody> */}
      </table>
    </div>
  );
}
