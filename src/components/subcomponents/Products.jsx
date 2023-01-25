import { useNavigate } from "react-router-dom";
// import { datas } from "../../util/data";
import "../../style/substyle/products.css";
import Add from "../subcomponents/Add";
import axios from "axios";
import { useEffect, useState } from "react";

export default function Orders() {
  const navigate = useNavigate("");
  const [data, setData] = useState([{}]);

  useEffect(() => {
    const fetchItems = async () => {
      const response = await axios.get("http://localhost:2500/products");
      setData(response.data);
    };
    fetchItems();
  }, []);

  // return (
  //   <div>
  //     {data.map((item, i) => (
  //       <div key={i}>{item.name}</div>
  //     ))}
  //   </div>
  // );

  const items = data.slice(0, 6).map((item, i) => {
    return (
      <tr key={i}>
        <th>
          <img src={item.image} alt="" width={50} height={50} />
        </th>
        <th>{item.name}</th>
        <th>${item.price}</th>
        <th>{item.stock}</th>
        <th>{item.sale} % </th>
        <th>{item.category}</th>
      </tr>
    );
  });
  return (
    <div>
      <Add />

      <table>
        <thead>
          <tr>
            <th>Image</th>
            <th>Name</th>
            <th>Price</th>
            <th>Stock</th>
            <th>Sale</th>
            <th>Category</th>
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
