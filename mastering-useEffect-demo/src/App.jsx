import React, { useState } from "react";
import "./App.css";

import { useFetchExample1 } from "./useFetchExample1";
import { useFetchExample2 } from "./useFetchExample2";
import { useFetchExample3 } from "./useFetchExample3";
import { useFetchExample4 } from "./useFetchExample4";
import { useFetchExample5 } from "./useFetchExample5";

function Example({useFetch, title, description}) {
  const [url, setUrl] = useState(null);
  const { data } = useFetch({ url, onSuccess: () => console.log("success") });

  console.log(`${title} rendering`);

  return (
    <div className="Examples">
      <h3>{title}</h3>
      {description ?? <p>{description}</p>}
      <div>{JSON.stringify(data)}</div>
      <div>
        <button onClick={() => setUrl("/artyom.json")}>Artyom</button>
        <button onClick={() => setUrl("/jon.json")}>Jon</button>
      </div>
    </div>
  )
}

function App() {
  const examples = [
    null,
    <Example key="Example 1" useFetch={useFetchExample1} title="Example 1" description={`
      Isn't using a dependency array. Is the infinite loop!
    `}/>,
    <Example key="Example 2" useFetch={useFetchExample2} title="Example 2" description={`
      The dependencies must be an array. 
      The useEffectc calls once after a first rendering.
    `}/>,
    <Example key="Example 3" useFetch={useFetchExample3} title="Example 3" description={`
      The dependency array has an object that updated every render. 
      The object has the same shape but a different link in memory. 
      This results in an endless loop.
    `}/>,
    <Example key="Example 4" useFetch={useFetchExample4} title="Example 4"/>,
    <Example key="Example 5" useFetch={useFetchExample5} title="Example 5"/>,
  ]
  const [currentExampleIndex, setExampleIndex] = useState(0)


  return (
    <div className="App">
      <select value={currentExampleIndex} onChange={(event) => setExampleIndex(event.target.value)}>
      <option value="0">None</option>
        <option value="1">Example 1</option>
        <option value="2">Example 2</option>
        <option value="3">Example 3</option>
        <option value="4">Example 4</option>
        <option value="5">Example 5</option>
      </select>
      
      {examples[currentExampleIndex]}
    </div>
  );
}

export default App;
