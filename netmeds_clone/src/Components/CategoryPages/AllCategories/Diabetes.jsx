import React from 'react'
import { useState } from 'react';
import AllPages from '../AllPages';

function Diabetes() {

    const [ep,setEp] = useState({id:145}) ; 


  return (
    <div>
        <AllPages ep={ep.id}/>
    </div>
  )
}

export default Diabetes