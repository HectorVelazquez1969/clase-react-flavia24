import Header from './components/Header';
import Nav from './components/Nav';

import Footer from './components/Footer';
import './App.css';
// esto seria traeme el componente header desde ruta para llegar al js

function App() {
  return (
    <div className="App">
      {/* <Header></Header> */}
      <Header/> 
      <Nav/>
      <Footer/>


    </div>
  );
}

export default App;
