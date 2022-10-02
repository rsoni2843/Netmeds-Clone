import React from 'react'
import { useState } from 'react';
import AllPages from '../AllPages';

function Beauty() {

    const [ep,setEp] = useState({id:8881}) ; 


  return (
    <div>
        <AllPages ep={ep.id}/>
    </div>
  )
}

export default Beauty