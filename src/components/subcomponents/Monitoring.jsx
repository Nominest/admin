import { useNavigate } from "react-router-dom";
import "../../style/substyle/monitoring.css";
import { datas } from "../../util/data";

export default function Monitoring() {
  const navigate = useNavigate("");

  return (
    <div className="monitor">
      {datas.slice(0, 6).map((data, i) => (
        <div
          key={i}
          onClick={() => {
            navigate(`/monitoring`);
          }}
        >
          <img src={data.image} alt="" width={200} height={200} />
          <p className="price">${data.price}</p>
        </div>
      ))}
    </div>
  );
}
