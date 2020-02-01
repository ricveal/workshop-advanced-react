import React from "react";
import { Box, Card, Image, Heading, Text } from "rebass";
import { Container } from "./Container";

export const Item = ({ id, image, name, job }) => {
  if (!id) {
    throw new Error("An id must be provided");
  }
  return (
    <Container>
      <Card
        sx={{
          p: 1,
          borderRadius: 2,
          boxShadow: "0 0 16px rgba(0, 0, 0, .25)"
        }}
      >
        <Image src={image} />
        <Box px={2}>
          <Heading as="h3">{name}</Heading>
          <Text fontSize={0}>{job}</Text>
        </Box>
      </Card>
    </Container>
  );
};
