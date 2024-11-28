import { useState } from "react";
import "./index.css";
import { Menu01Icon } from "hugeicons-react";
const Header = () => {
  const [fixed, setFixed] = useState(false);
  const handleScroll = () => {
    if (window.scrollY >= 100) {
      setFixed(true);
    } else {
      setFixed(false);
    }
  };
  window.addEventListener("scroll", handleScroll);
  return (
    <div className={fixed ? "HeaderDiv_fixed" : "HeaderDiv"}>
      <div className="container" style={{ maxWidth: "1400px" }}>
        <div className="HeaderDiv_area">
          <div className="HeaderDiv_area_cont1">
            <img
              src="/egoras-logo.png"
              alt=""
              className="HeaderDiv_area_cont1_img"
            />
          </div>
          <div className="HeaderDiv_area_cont2">
            <div className="HeaderDiv_area_cont2_cont1">EGOD</div>
            <div className="HeaderDiv_area_cont2_cont1">Products</div>
            <div className="HeaderDiv_area_cont2_cont1">Developers</div>
            <div className="HeaderDiv_area_cont2_cont1">Company</div>
          </div>
          <div className="HeaderDiv_area_cont3">
            {" "}
            <button className="HomeDiv_section1_area_btn">Get Started</button>
            <Menu01Icon className="menuIcon" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
