import React from 'react'
import { useState } from 'react';
import AllPages from '../AllPages';

function COVID() {

    const [ep,setEp] = useState({id:109}) ; 


  return (
    <div>
        <AllPages ep={ep.id}/>
    </div>
  )
}

export default COVID