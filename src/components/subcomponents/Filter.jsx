import { useState, useEffect } from "react";
import axios from "axios";
export default function Filter() {
  const [data, setData] = useState([{}]);

  useEffect(() => {
    const fetchItems = async () => {
      const response = await axios.get("http://localhost:2500/products");
      setData(response.data);
    };
    fetchItems();
  }, []);

  const items = data.map((item, i) => {
    return (
      <tr key={i}>
        <td>{item.category}</td>
      </tr>
    );
  });
}
