import { useState } from "react";
import Delete from "../subcomponents/Delete";

export default function Product(prop) {
  const { item, setShow, setSelectedItem, selectedItem } = prop;
  // const [data, setData] = useState([{}]);
  const [deleteShow, setDeleteShow] = useState(false);

  const handleShow = () => {
    setSelectedItem(item);
    setShow(true);
  };

  const handleDelete = () => {
    setDeleteShow(true);
    setSelectedItem(item);
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
      {/* <td>{item.spec}</td> */}

      <td>
        <button onClick={handleShow}>Edit</button>
        <button onClick={handleDelete}>
          {deleteShow && (
            <Delete setDeleteShow={setDeleteShow} selectedItem={selectedItem} />
          )}
          Delete
        </button>
      </td>
    </tr>
  );
}
