import React from "react";

import "./frame.css";

const Frame = () => {
  return (
    <div className="frame">
      <button onClick={() => window.electronAPI.close()}>Close</button>
    </div>
  );
};

export default Frame;
