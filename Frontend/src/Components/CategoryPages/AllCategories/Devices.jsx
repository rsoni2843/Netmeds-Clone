import React from 'react'
import { useState } from 'react';
import AllPages from '../AllPages';

function Devices() {

    const [ep,setEp] = useState({id:717}) ; 


  return (
    <div>
        <AllPages ep={ep.id}/>
    </div>
  )
}

export default Devices