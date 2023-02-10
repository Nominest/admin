import "./App.css";
import Header from "./components/Header";
import Main from "./components/Main";
import "bootstrap/dist/css/bootstrap.min.css";
import { useEffect, useState, createContext } from "react";
import axios from "axios";

export const ProductContext = createContext();
export const UserContext = createContext();

function App() {
  const [datas, setDatas] = useState([{}]);
  const [orders, setOrders] = useState([{}]);

  //products
  useEffect(() => {
    const fetchItems = async () => {
      const response = await axios
        .get("http://localhost:2500/products")
        .then((response) => setDatas(response.data))
        .catch(() => console.log("context"));
    };
    fetchItems();
  }, []);

  //orders
  useEffect(() => {
    const fetchOrders = async () => {
      const response = await axios
        .get("http://localhost:2500/orders")
        .then((response) => setOrders(response.order))
        .catch(() => console.log("context"));
    };
    fetchOrders();
  }, []);

  return (
    <div className="App">
      <ProductContext.Provider value={{ datas: datas, setDatas: setDatas }}>
        <UserContext.Provider value={{ orders: orders, setOrders: setOrders }}>
          <Header />
          <Main />
        </UserContext.Provider>
      </ProductContext.Provider>
    </div>
  );
}

export default App;
