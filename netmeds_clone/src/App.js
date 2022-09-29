import './App.css';
import Slider from './Components/HomeComponents/Slider';
import Navbar from './Components/Navbar/Navbar';
import AllRoutes from './Routes/AllRoutes';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <AllRoutes/>
    </div>
  );
}

export default App;
