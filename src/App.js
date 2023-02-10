import "./App.css";
import Header from "./components/Header";
import Main from "./components/Main";
import "bootstrap/dist/css/bootstrap.min.css";
import { useEffect, useState, createContext } from "react";
import axios from "axios";

export const ProductContext = createContext();

function App() {
  const [datas, setDatas] = useState([{}]);

  useEffect(() => {
    const fetchItems = async () => {
      const response = await axios
        .get("http://localhost:2500/products")
        .then((response) => setDatas(response.data))
        .catch(() => console.log("context"));
    };
    fetchItems();
  }, []);

  return (
    <div className="App">
      <ProductContext.Provider value={{ datas: datas, setDatas: setDatas }}>
        <Header />
        <Main />
      </ProductContext.Provider>
    </div>
  );
}

export default App;
