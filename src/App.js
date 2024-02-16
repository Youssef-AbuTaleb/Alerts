import "./App.css";
import Header from "./components/Layout/Header";
import Main from "./components/Layout/Main";
import SideBar from "./components/Layout/SideBar";

function App() {
  return (
    <div className="app">
      <SideBar />
      <Header />
      <Main />
    </div>
  );
}

export default App;
