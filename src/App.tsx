import "./App.css";

import Home from "./Pages/Home/Home";
import Header from "./Pages/Header/Header";
import NewFooter from "./Pages/Footer/NewFooter";

function App() {
  return (
    <div className="App">
      <Header />
      <Home />
      <NewFooter />
    </div>
  );
}

export default App;
