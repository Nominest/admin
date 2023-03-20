import "../../style/pages/products.css";
import { useContext, useState } from "react";
import Add from "../subcomponents/Add";
import Product from "./Product";
import Dropdown from "../subcomponents/Dropdown";
import { ProductContext } from "../../App";

export default function Orders() {
  const [show, setShow] = useState(false);
  const [selectedItem, setSelectedItem] = useState();
  const { datas,setDatas } = useContext(ProductContext);
  // console.log(datas,"asdasda")
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
        {show && <Add setShow={setShow} selectedItem={selectedItem} setDatas={setDatas} datas={datas}/>}
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
              />
            );
          })}
        </tbody>
      </table>
    </div>
  );
}
