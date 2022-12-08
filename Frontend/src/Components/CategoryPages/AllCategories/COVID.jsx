import React from "react";
import { useState } from "react";
import AllPages from "../AllPages";
import APages from "../APages";

function COVID() {
  const [ep, setEp] = useState({ id: 1366 });

  return (
    <div>
      {/* <AllPages ep={ep.q} /> */}
      <APages ep={ep.id} />
    </div>
  );
}

export default COVID;
