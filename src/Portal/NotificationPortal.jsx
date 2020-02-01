import ReactDOM from "react-dom";

export const NotificationPortal = props => {
  const domNode = document.getElementById("portal");
  return ReactDOM.createPortal(props.children, domNode);
};
