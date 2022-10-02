import React from 'react'
import { useState } from 'react';
import AllPages from '../AllPages';

function SexualWellness() {

    const [ep,setEp] = useState({id:575}) ; 


  return (
    <div>
        <AllPages ep={ep.id}/>
    </div>
  )
}

export default SexualWellness