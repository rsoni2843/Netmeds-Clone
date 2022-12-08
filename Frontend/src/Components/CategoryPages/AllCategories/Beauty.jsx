import React from "react";
import { useState } from "react";
import AllPages from "../AllPages";
import APages from "./../APages";

function Beauty() {
  const [ep, setEp] = useState({ id: 1106 });

  return (
    <div>
      {/* <AllPages ep={ep.id} /> */}
      <APages ep={ep.id} />
    </div>
  );
}

export default Beauty;
