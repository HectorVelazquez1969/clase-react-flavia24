import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Nav from "./components/Nav";

import Footer from "./components/Footer";
import "./App.css";
import HomePage from './components/pages/Homepage'
import Ejemplo1 from './components/pages/Ejemplo1'
// esto seria traeme el componente header desde ruta para llegar al js

function App() {
  return (
    <div className="App">
      {/* <Header></Header> */}
      <Header />
      <BrowserRouter>
        <Nav />
        <Routes>
          <Route path="/" element={<HomePage/>} />
          <Route path="/" element={<Ejemplo1/>} />
        </Routes>
      </BrowserRouter>

      <Footer />
    </div>
  );
}

export default App;
