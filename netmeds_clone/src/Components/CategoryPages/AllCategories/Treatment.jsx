import React from 'react'
import { useState } from 'react';
import AllPages from '../AllPages';

function Treatment() {

    const [ep,setEp] = useState({id:750}) ; 


  return (
    <div>
        <AllPages ep={ep.id}/>
    </div>
  )
}

export default Treatment