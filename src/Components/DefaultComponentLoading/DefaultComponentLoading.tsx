import MoonLoader from "react-spinners/MoonLoader";
import "./defaultCompLoader.css";

const DefaultComponentLoading = () => {
  return (
    <div className="loading_div_area">
      <div className="loading_div_area_cont">
        <MoonLoader
          color="#fff"
          aria-label="Loading Spinner"
          data-testid="loader"
          className="loading_div_area_cont_icon"
          size={80}
          speedMultiplier={0.5}
        />
        <MoonLoader
          color="#fff"
          aria-label="Loading Spinner"
          data-testid="loader"
          className="loading_div_area_cont_icon2"
          size={80}
          speedMultiplier={0.5}
        />
        <MoonLoader
          color="#fff"
          aria-label="Loading Spinner"
          data-testid="loader"
          className="loading_div_area_cont_icon2"
          size={80}
          speedMultiplier={0.5}
        />
        <img
          src="/egoras_logo_icon.svg"
          alt=""
          className="loading_div_area_img"
        />
      </div>
      <div className="loading_div_area_text">loading User Experience...</div>
      <img src="/img/whiteSilk.jpg" alt="" className="HomeDiv_section1_img2" />
    </div>
  );
};

export default DefaultComponentLoading;
