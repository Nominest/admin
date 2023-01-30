import { useState, useEffect } from "react";
import axios from "axios";

export default function Product(prop) {
  const { item, setShow, setSelectedItem } = prop;
  const [data, setData] = useState([{}]);
  //   const [show, setShow] = useState(false);
  const handleShow = () => {
    setSelectedItem(item);
    setShow(true);
  };
  const deleteButton = () => {
    setShow(false);
  };
  return (
    <tr>
      <th>
        <img src={item.image} alt="" width={50} height={50} />
      </th>
      <td>{item.name}</td>
      <td>${item.price}</td>
      <td>{item.stock}</td>
      <td>{item.sale} % </td>
      <td>{item.category}</td>
      <td>
        <button onClick={handleShow}>
          {/* <img src="./download.png" alt="" width={50} height={30} /> */}
          Edit
        </button>
        <button onClick={deleteButton}>Delete</button>
      </td>
    </tr>
  );
}
