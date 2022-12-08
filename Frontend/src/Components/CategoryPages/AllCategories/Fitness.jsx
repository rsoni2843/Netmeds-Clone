import React from "react";
import { useState } from "react";
import AllPages from "../AllPages";
import APages from "./../APages";

function Fitness() {
  const [ep, setEp] = useState({ id: 1381 });

  return (
    <div>
      {/* <AllPages ep={ep.id}/> */}
      <APages ep={ep.id} />
    </div>
  );
}

export default Fitness;
