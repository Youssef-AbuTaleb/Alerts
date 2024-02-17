import "./App.css";
import Filters from "./components/Filters/Filters";
import Header from "./components/Layout/Header";
import Main from "./components/Layout/Main";
import SideBar from "./components/Layout/SideBar";

function App() {
  return (
    <div className="app">
      <SideBar />

      <div className="row-container">
        <div className="col-container">
          <Header />
          <Main />
        </div>

        <Filters />
      </div>
    </div>
  );
}

export default App;
