import { useNavigate } from "react-router-dom";
import "../../style/substyle/products.css";
import axios from "axios";
import { useEffect, useState } from "react";

export default function Users() {
  const [data, setData] = useState([{}]);
  const navigate = useNavigate();
  useEffect(() => {
    const fetchItems = async () => {
      const response = await axios.get("http://localhost:2500/users");
      setData(response.data);
    };
    fetchItems();
  }, []);
  function editProduct(id) {
    navigate(`/edit` + (id + 1));
  }
  const items = data.slice(0, 6).map((item, i) => {
    return (
      <tr key={i}>
        <td>{i + 1}</td>
        <td>{item.id}</td>
        <td>{item.lastname}</td>
        <td>{item.name}</td>
        <td>{item.email}</td>
        <td>{item.phone}</td>
        <td>{item.date}</td>
        <td>{item.cnt}</td>
        <td onClick={() => editProduct(i)}>Edit</td>
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
          </tr>
        </thead>
        <tbody>{items}</tbody>
      </table>
    </div>
  );
}
