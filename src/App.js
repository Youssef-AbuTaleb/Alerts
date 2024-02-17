import { useState } from "react";
import "./App.css";
import Filters from "./components/Filters/Filters";
import Header from "./components/Layout/Header";
import Main from "./components/Layout/Main";
import SideBar from "./components/Layout/SideBar";

function App() {
  const [visibleFilters, setVisibleFilters] = useState(false);

  function showFilter() {
    setVisibleFilters(true);
  }
  function hideFilter() {
    setVisibleFilters(false);
  }

  return (
    <div className="app">
      <SideBar />

      <div className="row-container">
        <div className="col-container">
          <Header showFilter={showFilter} />
          <Main />
        </div>

        <Filters visibleFilters={visibleFilters} hideFilter={hideFilter} />
      </div>
    </div>
  );
}

export default App;
