import React from "react";
import { NotificationPortal } from "./NotificationPortal";
import { Notification } from "../Notification";
import { Item } from "../Item";

export const ItemWithPortal = props => {
  const { id } = props;
  if (!id) {
    const error = "ups - Error";
    return (
      <NotificationPortal>
        <Notification msg={error} />
      </NotificationPortal>
    );
  }
  return <Item {...props} />;
};
