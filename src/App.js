import "./App.scss";
import Header from "./components/Header/Header";
const App = () => {
  return (
    <div className="app-container">
      <div className="header-container">
        <Header />
      </div>
      <div className="mainImg"></div>
      <div className="contentWrap topBlock1"></div>
      <div id="map-block"></div>
      <div id="footer"></div>
    </div>
  );
};
export default App;
