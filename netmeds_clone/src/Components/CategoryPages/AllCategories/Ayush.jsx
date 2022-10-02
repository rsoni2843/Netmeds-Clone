import React from 'react'
import { useState } from 'react';
import AllPages from '../AllPages';

function Ayush() {

    const [ep,setEp] = useState({id:765}) ; 


  return (
    <div>
        <AllPages ep={ep.id}/>
    </div>
  )
}

export default Ayush