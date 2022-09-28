import React from 'react'
import {Routes,Route} from 'react-router-dom' ; 
import Home from './Home' ; 
import Login from './Login';
import Checkout from './Checkout';
import Medicine from './Medicine';
import Result from './Result';

function AllRoutes() {
  return (
    <div>
        <Routes>
            <Route path={'/'} element={<Home/>}/>
            <Route path={'/checkout'} element={<Checkout/>}/>
            <Route path={'/medicine'} element={<Medicine/>}/>
            <Route path={'/medicine/:result'} element={<Result/>}/>
            <Route path={'/Login'} element={<Login/>}/>
            
        </Routes>
    </div>
  )
}

export default AllRoutes