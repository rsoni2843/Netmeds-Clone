import React from "react";
import { useState } from "react";
import AllPages from "../AllPages";
import APages from "./../APages";

function Devices() {
  const [ep, setEp] = useState({ id: 1134 });

  return (
    <div>
      <APages ep={ep.id} />
    </div>
  );
}

export default Devices;
