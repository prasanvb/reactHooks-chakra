import React from "react";
import { Container, Text } from "@chakra-ui/react";
import CounterOne from "../../src/Components/customhooks/CounterOne";
import CounterTwo from "../../src/Components/customhooks/CounterTwo";

const CounterCustomHook = () => {
  return (
    <div>
      <Container m={5} p={5}>
        <Text fontSize={20}>Counter Custom Hook Example</Text>
        <CounterOne></CounterOne>
        <CounterTwo></CounterTwo>
      </Container>
    </div>
  );
};

export default CounterCustomHook;
