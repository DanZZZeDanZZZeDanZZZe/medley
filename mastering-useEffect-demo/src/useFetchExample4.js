import { useState, useEffect, useLayoutEffect } from "react";

export const useFetchExample4 = (options) => {
  const [data, setData] = useState(null);
  // WARN: useState causes an infinite loop
  const [onSuccess, setOnSuccess] = useState(options.onSuccess);
  // INFO: useLayoutEffect is rendered right after layout 
  useLayoutEffect(() => {
    setOnSuccess(() => options.onSuccess)
  }, [options.onSuccess])

  useEffect(() => {
    console.log("useFetch useEffect ");
    if (options.url) {
      let isCancelled = false;
      fetch(options.url)
        .then((response) => response.json())
        .then((json) => {
          if (!isCancelled) {
            onSuccess?.(json);
            setData(json);
          }
        });
      return () => {
        isCancelled = true;
      };
    }
  }, [options.url]);

  return {
    data,
  };
};
