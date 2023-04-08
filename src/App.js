import Header from "./components/header/Header";
import "./App.css";
import Fourapi from "./components/four/Fourapi";

function App() {
  return (
    <div className="App">
      <Header title="Тестируй api с Илюхой" />
      <div className="app-container">
        {/* <Oneapi /> */}
        {/* <Twoapi /> */}
        {/* <Threeapi /> */}
        <Fourapi />
      </div>
    </div>
  );
}

export default App;
