import Monitoring from "./subcomponents/Monitoring";
import "../style/productabout.css";
import { Route, Routes } from "react-router-dom";
import { MENUS } from "../util/data";
import Products from "./subcomponents/Products";
import Orders from "./subcomponents/Orders";
import Users from "./subcomponents/Users";
import Moderator from "./subcomponents/Moderator";
import Settings from "./subcomponents/Settings";
import SlideMenu from "./SideMenu";

export default function ProductAbout() {
  return (
    <div className="product-about">
      <Routes>
        <Route path={MENUS[0].url} element={<Monitoring />}></Route>
        <Route path={MENUS[1].url} element={<Products />}></Route>
        <Route path={MENUS[2].url} element={<Orders />}></Route>
        <Route path={MENUS[3].url} element={<Users />}></Route>
        <Route path={MENUS[4].url} element={<Moderator />}></Route>
        <Route path={MENUS[5].url} element={<Settings />}></Route>
        {/* <Route path={`/add`} element={<Add />}></Route> */}
      </Routes>
    </div>
  );
}
