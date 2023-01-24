import "../style/sidemenu.css";
import { datas, MENUS } from "../util/data";
import { useNavigate } from "react-router-dom";

export default function SlideMenu() {
  const navigate = useNavigate();
  return (
    <div className="sidemenu">
      {MENUS &&
        MENUS.map((type, i) => (
          <button
            key={i}
            value={type.value}
            onClick={() => {
              navigate(`${type.url}`);
            }}
          >
            {type.name}
          </button>
        ))}
    </div>
  );
}
