import Dropdown from "react-bootstrap/Dropdown";
import DropdownButton from "react-bootstrap/DropdownButton";
import { useContext } from "react";
import { ProductContext } from "../../App";
import { useParams } from "react-router-dom";
import "../../style/sub/dropdown.css";
function BasicButtonExample() {
  const { id } = useParams();
  const { datas } = useContext(ProductContext);

  function filterData(dataType) {
    let filtredData = datas().filter((type) => type.category === dataType);
  }
  const filtredData = datas.find((prod) => prod.id === id);
  return (
    <DropdownButton id="dropdown-basic-button" title="All Products">
      {datas.map((data, i) => (
        <Dropdown.Item href="#/action-2" key={i}>
          {data.category}
        </Dropdown.Item>
      ))}
    </DropdownButton>
  );
}

export default BasicButtonExample;
