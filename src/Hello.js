import React from "react";
import "./Hello.css";

const Hello = (props) => {
  return (
    // tachyon docs: https://tachyons.io/docs/typography/text-align/
    <div className="tc f1">
      <h1>Hello World</h1>
      <p>{props.greeting}</p>
    </div>
  );
};

export default Hello;
