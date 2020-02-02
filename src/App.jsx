import React, { useState, useEffect, useRef } from "react";
import { ThemeProvider } from "emotion-theming";
import theme from "@rebass/preset";
import "./styles.css";
import { fetchItems, fetchItems_withError } from "./api";
import { Item } from "./Item";

// Next steps
// refs / forwarded refs
// fragments
import { ErrorBoundary } from "./ErrorBoundary"; // error boundary (check styles)
import { ItemWithContext } from "./Context/ItemWithContext"; // context
import { NotificationProvider } from "./Context/NotificationContext";
import { ItemWithPortal } from "./Portal/ItemWithPortal"; // portal
import { Async } from "./Async"; // render props
import { withEmoji } from "./WithEmoji"; // HOC
// suspense

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

  const ref = useRef();

  const handleClick = () => {
    ref.current.style.color = "red";
  };

  return (
    <ThemeProvider theme={theme}>
      <div className="App">
        <h1>Hello Folks</h1>
        <h2 ref={ref} onClick={handleClick}>
          Time to code!
        </h2>
      </div>
      {data1.map(el => (
        <Item key={el.id} {...el} />
      ))}
      {data2.map(el => (
        <Item key={el.id} {...el} />
      ))}
    </ThemeProvider>
  );
}
