import React from "react";

const Scroll = (props) => {
  return (
    <div
      style={{
        overflowY: "scroll",
        height: "90vh",
      }}
      className="bt bw1 b--white-10"
    >
      {props.children}
    </div>
  );
};

export default Scroll;
