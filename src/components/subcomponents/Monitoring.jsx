import { useNavigate } from "react-router-dom";
import "../../style/substyle/monitoring.css";
import { useEffect, useState } from "react";
import axios from "axios";
export default function Monitoring() {
  const navigate = useNavigate("");
  const [data, setData] = useState([{}]);

  useEffect(() => {
    const fetchItems = async () => {
      const response = await axios.get("http://localhost:2500/products");
      setData(response.data);
    };
    fetchItems();
  }, []);
  return (
    <div className="monitor">
      {data.slice(0, 6).map((item, i) => (
        <div
          key={i}
          onClick={() => {
            navigate(`/monitoring`);
          }}
        >
          <img src={item.image} alt="" width={200} height={200} />
          <p className="price">${item.price}</p>
        </div>
      ))}
    </div>
  );
}
