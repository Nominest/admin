import React, { useState } from "react";
import Delete from "../subcomponents/Delete";

export default function Product(props) {
  const { item, setShow, setSelectedItem, selectedItem } = props;

  const [deleteShow, setDeleteShow] = useState(false);

  const handleShow = () => {
    setSelectedItem(item);
    setShow(true);
  };

  const handleDelete = () => {
    setSelectedItem(item);
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
        <button onClick={handleShow}>Edit</button>
        <button onClick={handleDelete}>Delete</button>
        {deleteShow && (
          <Delete
            setDeleteShow={setDeleteShow}
            selectedItem={selectedItem}
            deleteShow={deleteShow}
          />
        )}
      </td>
    </tr>
  );
}
