import "./App.css";
import Header from "./components/Header";
import Main from "./components/Main";
import "bootstrap/dist/css/bootstrap.min.css";
import { useEffect, useState, createContext } from "react";
import axios from "axios";

export const ProductContext = createContext();
export const OrderContext = createContext();
export const ModeratorContext = createContext();

function App() {
  const [datas, setDatas] = useState([{}]);
  const [orders, setOrders] = useState([{}]);
  const [moderators, setModerators] = useState([{}]);
  //products
  const fetchItems = async () => {
    const response = await axios
      .get("http://localhost:4500/products")
      .then((response) => setDatas(response.data))
      .catch(() => console.log("context"));
  };
  useEffect(() => {
    fetchItems();
  }, []);

  //orders
  useEffect(() => {
    const fetchOrders = async () => {
      try {
        const response = await axios.get("http://localhost:2500/orders");
        setOrders(response.data);
      } catch (error) {
        console.log("Error fetching orders:", error);
      }
    };
    fetchOrders();
  }, []);

  //moderators
  useEffect(() => {
    const fetchModerators = async () => {
      try {
        const response = await axios.get("http://localhost:2500/moderators");
        setModerators(response.data);
      } catch (error) {
        console.log("Error fetching orders:", error);
      }
    };
    fetchModerators();
  }, []);

  return (
    <div className="App">
      <ProductContext.Provider value={{ datas: datas, setDatas: setDatas }}>
        <OrderContext.Provider value={{ orders: orders, setOrders: setOrders }}>
          <ModeratorContext.Provider
            value={{ moderators: moderators, setModerators: setModerators }}
          >
            <Header />
            <Main />
          </ModeratorContext.Provider>
        </OrderContext.Provider>
      </ProductContext.Provider>
    </div>
  );
}

export default App;
