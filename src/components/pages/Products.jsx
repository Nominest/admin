// import { useNavigate } from "react-router-dom";
import "../../style/pages/products.css";
// import axios from "axios";
import { useContext, useState } from "react";
import Add from "../subcomponents/Add";
import Product from "./Product";
import Dropdown from "../subcomponents/Dropdown";
import { ProductContext } from "../../App";

export default function Orders() {
  const [show, setShow] = useState(false);
  // const navigate = useNavigate();
  // const handleShow = () => setShow(true);
  const [selectedItem, setSelectedItem] = useState();
  // const [deleteShow, setDeleteShow] = useState(false);
  const { datas } = useContext(ProductContext);

  // useEffect(() => {
  //   const fetchItems = async () => {
  //     const response = await axios.get("http://localhost:2500/products");
  //     setData(response.data);
  //   };
  //   fetchItems();
  // }, []);

  return (
    <div className="products">
      <div className="add-button">
        {show && <Add setShow={setShow} selectedItem={selectedItem} />}
        <button
          variant="primary"
          onClick={() => {
            setShow(true);
            setSelectedItem("");
          }}
        >
          + Add data
        </button>
      </div>
      <div>
        <Dropdown />
      </div>
      <table>
        <thead>
          <tr>
            <th>Image</th>
            <th>Name</th>
            <th>Price</th>
            <th>Stock</th>
            <th>Sale</th>
            <th>Category</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {datas.map((item, i) => {
            return (
              <Product
                key={i}
                item={item}
                setShow={setShow}
                setSelectedItem={setSelectedItem}
                selectedItem={selectedItem}
                // setDeleteShow={setDeleteShow}
              />
            );
          })}
        </tbody>
      </table>
    </div>
  );
}
