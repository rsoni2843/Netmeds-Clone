import React from 'react'
import { useState } from 'react';
import AllPages from '../AllPages';

function Surgical() {

    const [ep,setEp] = useState({id:788}) ; 


  return (
    <div>
        <AllPages ep={ep.id}/>
    </div>
  )
}

export default Surgical