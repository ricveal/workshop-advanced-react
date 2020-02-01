import React, { useState } from "react";
import { Notification } from "../Notification";

export const NotificationContext = React.createContext({
  addNotification: msg => undefined
});

export const NotificationProvider = props => {
  const [notification, setNotification] = useState(null);

  if (notification) {
    setTimeout(() => {
      setNotification(null);
    }, 5000);
  }

  return (
    <NotificationContext.Provider
      value={{
        addNotification: msg => {
          setNotification(msg);
        }
      }}
    >
      {!!notification && <Notification msg={notification} />}
      {props.children}
    </NotificationContext.Provider>
  );
};
