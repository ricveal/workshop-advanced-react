import React from "react";

// HOC -> (component) => enhancedComponent

export const withEmoji = component => {
  const Component = component;
  return props => {
    const name = `🧙‍♂️${props.name}`;
    return <Component {...props} name={name} />;
  };
};
