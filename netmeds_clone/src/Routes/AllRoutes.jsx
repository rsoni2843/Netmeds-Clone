import React from 'react'
import {Box} from '@chakra-ui/react' ; 
import {Routes,Route} from 'react-router-dom' ; 
import Home from './Home' ; 
import Login from './Login';
import Checkout from './Checkout';
import Medicine from './Medicine';
import Result from './Result';

function AllRoutes() {
  return (
    <Box>
        <Routes>
            <Route to={'/'} element={<Home/>}/>
            <Route to={'/checkout'} element={<Checkout/>}/>
            <Route to={'/medicine'} element={<Medicine/>}/>
            <Route to={'/medicine/:result'} element={<Result/>}/>
            <Route to={'/Login'} element={<Login/>}/>
            
        </Routes>
    </Box>
  )
}

export default AllRoutes