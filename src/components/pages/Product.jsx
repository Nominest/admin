import { useState, useEffect } from "react";
import axios from "axios";
import Delete from "../subcomponents/Delete";

export default function Product(prop) {
  const { item, setShow, setSelectedItem } = prop;
  const [data, setData] = useState([{}]);
  const [deleteShow, setDeleteShow] = useState(false);

  //   const [show, setShow] = useState(false);
  const handleShow = () => {
    setSelectedItem(item);
    setShow(true);
  };
  // function deleteHandler(id) {
  //   axios.delete(`http://localhost:2500/products/${id}`);
  // }
  const handleDelete = () => {
    setDeleteShow(true);
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
        <button onClick={handleDelete}>
          {deleteShow ? <Delete setDeleteShow={setDeleteShow} /> : ""}
          Delete
        </button>
      </td>
    </tr>
  );
}
