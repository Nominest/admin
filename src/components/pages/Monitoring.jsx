import { useNavigate } from "react-router-dom";
import "../../style/pages/monitoring.css";
import { useContext } from "react";
import { ProductContext } from "../../App";

export default function Monitoring() {
  const navigate = useNavigate("");
  const { datas } = useContext(ProductContext);

  return (
    <div className="monitor">
      {datas.slice(0, 6).map((item, i) => (
        <div
          className="monitor-product"
          key={i}
          onClick={() => {
            navigate(`/monitoring`);
          }}
        >
          <img src={item.image} alt="" width={250} height={200} />
          <p className="price">{item.name}</p>
        </div>
      ))}
    </div>
  );
}
