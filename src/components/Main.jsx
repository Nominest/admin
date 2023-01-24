import ProductAbout from "../components/ProductAbout";
import SlideMenu from "../components/SideMenu";
import "../style/main.css";

export default function Main() {
  return (
    <div className="main">
      <SlideMenu />
      <ProductAbout />
    </div>
  );
}
