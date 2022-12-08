import React from "react";
import { useState } from "react";
import AllPages from "../AllPages";
import APages from "./../APages";

function Surgical() {
  const [ep, setEp] = useState({ id: 1135 });

  return (
    <div>
      <APages ep={ep.id} />
      {/* <AllPages ep={ep.id}/> */}
    </div>
  );
}

export default Surgical;
