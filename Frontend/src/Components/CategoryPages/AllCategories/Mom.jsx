import React from 'react'
import { useState } from 'react';
import AllPages from '../AllPages';

function Mom() {

    const [ep,setEp] = useState({id:838}) ; 


  return (
    <div>
        <AllPages ep={ep.id}/>
    </div>
  )
}

export default Mom