import { useEffect, useState } from "react";
import "./App.css";

import Home from "./Pages/Home/Home";
import Header from "./Pages/Header/Header";
import NewFooter from "./Pages/Footer/NewFooter";
import DefaultComponentLoading from "./Components/DefaultComponentLoading/DefaultComponentLoading";
import { Route, Routes } from "react-router-dom";
import Egod from "./Pages/Egod/Egod";

function App() {
  const [loadingDiv, setLoadingDiv] = useState(true);

  useEffect(() => {
    setLoadingDiv(true);
    setTimeout(() => {
      setLoadingDiv(false);
    }, 2000);
  }, []);

  return (
    <>
      {loadingDiv ? (
        <DefaultComponentLoading />
      ) : (
        <div className="App">
          <Header />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about/egod" element={<Egod />} />
          </Routes>
          <NewFooter />
        </div>
      )}
    </>
  );
}

export default App;
