import React, { useEffect, useState } from "react";
import Loader from "react-spinners/HashLoader";

export const Async = ({ fetchFn, render }) => {
  const [data, setData] = useState([]);
  const [isLoading, setLoading] = useState(true);

  useEffect(() => {
    const fetch = async () => {
      const items = await fetchFn();
      setData(items);
      setLoading(false);
    };
    fetch();
  }, [fetchFn]);

  return (
    <>
      {isLoading && <Loader size={150} color={"#123abc"} loading={true} />}
      {!isLoading && render(data)}
    </>
  );
};
