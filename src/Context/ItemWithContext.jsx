import React, { useContext } from "react";
import { NotificationContext } from "./NotificationContext";
import { Item } from "../Item";

export const ItemWithContext = props => {
  const { id } = props;
  const ctx = useContext(NotificationContext);
  if (!id) {
    const error = "ups - Error";
    ctx.addNotification(error);
  }
  return <Item {...props} />;
};
