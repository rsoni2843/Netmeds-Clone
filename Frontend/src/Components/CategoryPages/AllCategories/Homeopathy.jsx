import React from 'react'
import { useState } from 'react';
import AllPages from '../AllPages';

function Homeopathy() {

    const [ep,setEp] = useState({id:765}) ; 


  return (
    <div>
        <AllPages ep={ep.id}/>
    </div>
  )
}

export default Homeopathy