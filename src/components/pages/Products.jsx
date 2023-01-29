import { useNavigate } from "react-router-dom";
import "../../style/pages/products.css";
import axios from "axios";
import { useEffect, useState } from "react";
import Add from "../subcomponents/Add";
import Filter from "../subcomponents/Filter";

export default function Orders() {
  const [data, setData] = useState([{}]);
  const navigate = useNavigate();

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
        <th>
          <img src={item.image} alt="" width={50} height={50} />
        </th>
        <td>{item.name}</td>
        <td>${item.price}</td>
        <td>{item.stock}</td>
        <td>{item.sale} % </td>
        <td>{item.category}</td>
        <td>
          <img src="./download.png" alt="" width={50} height={30} />
        </td>
      </tr>
    );
  });
  return (
    <div className="products">
      <div className="add-button">
        <Add />
        <Filter />
      </div>
      <div></div>
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
        <tbody>{items}</tbody>
      </table>
    </div>
  );
}
// return (
//     <div>
//       <div>
//         <button>+ Бараа нэмэх</button>
//       </div>
//       <div className="products-head">
//         <p className="image">Зураг</p>
//         <p className="name">Барааны нэр</p>
//         <p className="price">Үнэ</p>
//         <p className="stock">Үлдэгдэл</p>
//         <p className="sale">Хямдрал</p>
//         <p className="category">Категори</p>
//       </div>
//       {datas.slice(0, 10).map((data, i) => (
//         <div
//           className="products"
//           key={i}
//           onClick={() => {
//             navigate(`/products`);
//           }}
//         >
//           <img
//             src={data.image}
//             alt="productsImage"
//             width={50}
//             height={50}
//             className="image"
//           />
//           <p className="name">{data.name}</p>
//           <p className="price">{data.price}</p>
//           <p className="stock">{data.stock}</p>
//           <p className="sale">{data.sale}</p>
//           <p className="category">{data.category}</p>
//         </div>
//       ))}
//     </div>
//   );

// return (
//   <div>
//     {data.map((item, i) => (
//       <div key={i}>{item.name}</div>
//     ))}
//   </div>
// );
