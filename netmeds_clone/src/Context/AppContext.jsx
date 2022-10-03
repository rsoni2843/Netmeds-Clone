
import { Box } from '@chakra-ui/react'
import { debounce } from 'lodash';
import React, { createContext } from 'react'
import { useState } from 'react';
// import { useNavigate } from 'react-router-dom';
import { getMedicine, getMedicineApollo } from '../API/api';
// import MedicinePage from '../Components/MedicinePage/MedicinePage';

export const AppContext = createContext() ; 


function AppContextProvider({children}) {
  const [main,setMain] = useState([]) ; 
  const handleChange = debounce((value)=>{
    getMedicineApollo(value)
    .then(res=>setMain(res))
  },2000)
  // React.useEffect(()=>{
  //   getMedicineApollo()
  //   .then(res=>{
  //     console.log(res)
  //   })
  // },[])
  return (
    <AppContext.Provider value={{handleChange,main}}>
      {children}
    </AppContext.Provider>
  )
}

export default AppContextProvider