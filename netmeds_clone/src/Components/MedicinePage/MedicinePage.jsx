import { Box, Text } from '@chakra-ui/react';
import React, { useState } from 'react'
import { useEffect } from 'react';
import { useContext } from 'react';
import { AppContext } from '../../Context/AppContext';


function MedicinePage() {
  const {main} = useContext(AppContext) ; 
  const [med,setMed] = useState([])
  useEffect(()=>{
    setMed(main?.data?.data.products)
  },[main])
  // console.log(main)
  return (
    <Box bg={'white'}>
      {med?.map((item,i)=>{
        return <Text key={i}>{item.name}</Text> 
      })}
    </Box>
  )
}

export default MedicinePage ; 