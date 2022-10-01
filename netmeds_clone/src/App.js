import './App.css';
import Footer from './Components/Footer/Footer';
// import Slider from './Components/HomeComponents/Slider';
import Navbar from './Components/Navbar/Navbar';
import AllRoutes from './Routes/AllRoutes';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <AllRoutes/>
      <Footer/>
    </div>
  );
}

export default App;
