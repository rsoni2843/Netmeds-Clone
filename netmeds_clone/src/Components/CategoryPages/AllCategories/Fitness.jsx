import React from 'react'
import { useState } from 'react';
import AllPages from '../AllPages';

function Fitness() {

    const [ep,setEp] = useState({id:623}) ; 


  return (
    <div>
        <AllPages ep={ep.id}/>
    </div>
  )
}

export default Fitness