import React from "react";
import { Box, Flex } from "rebass";

export const Notification = ({ msg }) => (
  <Flex>
    <Box p={3} width={1} color="white" bg="red">
      {msg}
    </Box>
  </Flex>
);
