import React, { useEffect, useState } from 'react'
import { getMedicine } from '../API/api'
import MedicinePage from '../Components/MedicinePage/MedicinePage'

function Medicine({data}) {
  
  // console.log(data)
  // const [med,setMed]  = useState([]) ;
  // const prop
  // console.log(data)
  // useEffect(()=>{
  //   setMed(data)
  // },[data])
  // console.log(med)
  // const [data,setData] = useState([]) ; 

  // useEffect(()=>{
  //   getMedicine()
  //   .then(res=>{
  //     setData(res.data.data.products)
  //   })
  // },[])
  // console.log(data)
  return (
    <div>
      <MedicinePage/>
    </div>
  )
}

export default Medicine