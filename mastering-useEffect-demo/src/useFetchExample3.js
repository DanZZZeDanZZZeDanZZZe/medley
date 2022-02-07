import { useState, useEffect } from "react";

export const useFetchExample3 = (options) => {
  const [data, setData] = useState(null);

  useEffect(() => {
    console.log("useFetch useEffect ");
    fetch(options.url)
        .then((response) => response.json())
        .then((json) => setData(json));
  // WARNING: The dependency array has an object that updated every render. 98
  // The object has the same shape but a different link in memory. 
  // This results in an endless loop.
  }, [options]);

  return {
    data,
  };
};
