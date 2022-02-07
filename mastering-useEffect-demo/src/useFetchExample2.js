import { useState, useEffect } from "react";

export const useFetchExample2 = (options) => {
  const [data, setData] = useState(null);

  useEffect(() => {
    console.log("useFetch useEffect ");
    fetch(options.url)
        .then((response) => response.json())
        .then((json) => setData(json));
  // WARNING: The dependencies must be an array. 
  // The useEffectc calls once after a first rendering.
  }, options);

  return {
    data,
  };
};
