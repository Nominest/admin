import ProductAbout from "../components/ProductAbout";
import SlideMenu from "../components/SideMenu";
import "../style/main.css";
import { useContext } from "react";
export default function Main() {
  console.log("main");
  return (
    <div className="main">
      <SlideMenu />
      <ProductAbout />
    </div>
  );
}
