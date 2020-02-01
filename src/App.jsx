import React, { useState, useEffect } from "react";
import { ThemeProvider } from "emotion-theming";
import theme from "@rebass/preset";
import "./styles.css";
import { fetchItems, fetchItems_withError } from "./api";
import { Item } from "./Item";
import { ItemWithContext } from "./Context/ItemWithContext";
import { ItemWithPortal } from "./Portal/ItemWithPortal";
import { ErrorBoundary } from "./ErrorBoundary";
import { NotificationProvider } from "./Context/NotificationContext";
import { Async } from "./Async";

const useData = (withError = false) => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchFn = withError ? fetchItems_withError : fetchItems;
    const fetch = async () => {
      const items = await fetchFn();
      setData(items);
    };
    fetch();
  }, [withError]);
  return data;
};

export default function App() {
  const data1 = useData();
  const data2 = useData();
  return (
    <ThemeProvider theme={theme}>
      <div className="App">
        <h1>Hello Folks</h1>
        <h2>Time to code!</h2>
      </div>
      {data1.map(el => (
        <Item key={el.id} {...el} />
      ))}
      {data2.map(el => (
        <Item key={el.id} {...el} />
      ))}
      {/*
      <Async
        fetchFn={fetchItems}
        render={data => {
          return data.map(el => <Item key={el.id} {...el} />);
        }}
      />
      */}
    </ThemeProvider>
  );
}
