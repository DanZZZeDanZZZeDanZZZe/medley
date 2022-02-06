import React, { useState } from "react";
import "./App.css";

import { useFetchExample1 } from "./useFetchExample1";
import { useFetchExample2 } from "./useFetchExample2";
// const useStopwatch = () => {
//   const [count, setCount] = useState(0);

//   useEffect(() => {
//     console.log("useStopwatch useEffect");
//     const interval = setInterval(() => {
//       console.log(`Count = ${count}`);
//       setCount((prev) => prev + 1);
//     }, 1000);
//     return () => clearInterval(interval);
//   }, []);

//   return count;
// };

function Example({useFetch, title, description}) {
  const [url, setUrl] = useState(null);
  const { data } = useFetch({ url, onSuccess: () => console.log("success") });

  // const count = useStopwatch();

  console.log(`{title} rendering`);

  return (
    <div className="App">
      {/* <div>Count: {count}</div> */}
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
    <Example key="Example 1" useFetch={useFetchExample1} title="Example 1" description="Isn't using dependency array. Loop!"/>,
    <Example key="Example 2" useFetch={useFetchExample2} title="Example 2"/>,
  ]
  const [currentExampleIndex, setExampleIndex] = useState(0)


  return (
    <>
      <select value={currentExampleIndex} onChange={(event) => setExampleIndex(event.target.value)}>
      <option value="0">None</option>
        <option value="1">Example 1</option>
        <option value="2">Example 2</option>
        <option value="3">Example 3</option>
      </select>

      {examples[currentExampleIndex]}
    </>
  );
}

export default App;
