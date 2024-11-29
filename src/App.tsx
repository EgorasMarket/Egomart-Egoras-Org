import { useEffect, useState } from "react";
import "./App.css";

import Home from "./Pages/Home/Home";
import Header from "./Pages/Header/Header";
import NewFooter from "./Pages/Footer/NewFooter";
import DefaultComponentLoading from "./Components/DefaultComponentLoading/DefaultComponentLoading";

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
          <Home />
          <NewFooter />
        </div>
      )}
    </>
  );
}

export default App;
