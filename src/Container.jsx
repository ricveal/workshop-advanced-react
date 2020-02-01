import React from "react";
import { Box } from "rebass";

export const Container = props => {
  return (
    <Box width={256} margin={24}>
      {props.children}
    </Box>
  );
};
