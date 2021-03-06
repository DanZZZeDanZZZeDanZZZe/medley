import { useState, useEffect } from "react";

export const useFetchExample1 = (options) => {
  const [data, setData] = useState(null);

  useEffect(() => {
    console.log("useFetch useEffect ");
    fetch(options.url)
        .then((response) => response.json())
        .then((json) => setData(json));
    // WARNING: Isn't using a dependency array. Is the infinite loop!
  });

  return {
    data,
  };
};
