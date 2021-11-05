import React, { useState } from "react";

import useDocumentTitle from "./customHooks/useDocumentTitle";

const Counter2 = () => {
  // const array = useState(0);
  // const count = array[0]; // this.state.count
  // const setCount = array[1]; // this.setState()
  const [count, setCount] = useState(0);
  const [name, setName] = useState("");

  /* useEffect:
  componentDidMount()
  componentDidUpdate()
  componentWillUnmount() */

  useDocumentTitle(`${name} has clicked ${count} times!`);

  console.log("render Counter2");
  return (
    <div>
      <input type="text" onChange={e => setName(e.target.value)} />
      <div>
        {name} has clicked {count} times
      </div>
      <button onClick={() => setCount(count + 1)}>Increment</button>
    </div>
  );
};

export default Counter2;
