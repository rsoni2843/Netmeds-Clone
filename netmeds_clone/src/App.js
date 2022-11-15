// import { useEffect } from 'react';
// import { getHome } from './API/api';
import "./App.css";
import Footer from "./Components/Footer/Footer";
import Navbar from "./Components/Navbar/Navbar";
import AllRoutes from "./Routes/AllRoutes";

function App() {
  // useEffect(()=>{
  //   getHome()
  //   .then(res=>console.log(res))
  // },[])
  return (
    <div style={{ backgroundColor: "#f3f3f3" }} className="App">
      <Navbar />
      <AllRoutes />
      <Footer />
    </div>
  );
}

export default App;
