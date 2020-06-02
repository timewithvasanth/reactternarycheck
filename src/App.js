import React from "react";
import "./styles.css";

export default function App() {
  let a = "foo";
  let conditionA = "";

  if (conditionA) {
    a = "bar";
  } else {
    a = "baz";
  }
  console.log(a);
  return (
    <div className="App">
      <h1>Hello CodeSandbox</h1>
      <h2>Start editing to see some magic happen!</h2>
    </div>
  );
}
