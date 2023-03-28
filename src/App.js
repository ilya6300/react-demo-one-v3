import Header from "./components/header/Header";
import Oneapi from "./components/one/Oneapi";
import Twoapi from "./components/two/Twoapi";

import "./App.css";
import Threeapi from "./components/three/Threeapi";
import Fourapi from "./components/four/Fourapi";

function App() {
  return (
    <div className="App">
      <Header title="Тестируй api с Илюхой" />
      <div className="app-container">
        <p>тест 5</p>
        {/* <Oneapi />
        <Twoapi />
        <Threeapi /> */}
        <Fourapi />
      </div>
    </div>
  );
}

export default App;
