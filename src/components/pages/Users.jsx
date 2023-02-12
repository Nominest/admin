import { useNavigate } from "react-router-dom";
import "../../style/pages/products.css";
import axios from "axios";
import { useContext, useEffect, useState } from "react";
import { OrderContext } from "../../App";

export default function Users() {
  const [data, setData] = useState([{}]);
  // const navigate = useNavigate();
  const { orders } = useContext(OrderContext);

  // function editProduct(id) {
  //   navigate(`/edit` + (id + 1));
  // }

  const items = orders.slice(0, 6).map((item, i) => {
    return (
      <tr key={i}>
        <td>{item.id}</td>
        <td>{item.lastname}</td>
        <td>{item.name}</td>
        <td>{item.email}</td>
        <td>{item.phone}</td>
        <td>{item.date}</td>
        <td>{item.cnt}</td>
        {/* <td onClick={() => editProduct(i)}>Edit</td> */}
        <td>Delete</td>
      </tr>
    );
  });
  return (
    <div>
      <table>
        <thead>
          <tr>
            <th>id</th>
            <th>Last Name</th>
            <th>Name</th>
            <th>E-mail</th>
            <th>Phone</th>
            <th>Date</th>
            <th>Count</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>{items}</tbody>
      </table>
    </div>
  );
}
