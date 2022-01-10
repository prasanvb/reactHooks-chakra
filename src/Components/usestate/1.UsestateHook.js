import { Button, Text, Container } from "@chakra-ui/react";
import React, { useState } from "react";

const UsestateHook = () => {
  const initialCount = 0;
  const [counter, setCounter] = useState(initialCount);

  const onIncrement = () => {
    setCounter((oldValue) => oldValue + 1);
  };

  const onDecrement = () => {
    setCounter((oldValue) => oldValue - 1);
  };

  const onReset = () => {
    setCounter(initialCount);
  };

  const onIncrementBy5 = () => {
    setCounter((oldValue) => oldValue + 5);
  };

  return (
    <Container m={5} p={5}>
      <Text fontSize={20} textDecoration="underline">
        useState Hook Example 1
      </Text>
      <p>Counter = {counter}</p>
      <Button onClick={onIncrement} m={2}>
        Increment
      </Button>
      <Button onClick={onDecrement} m={2}>
        Decrement
      </Button>
      <Button onClick={onReset} m={2}>
        Reset
      </Button>
      <Button onClick={onIncrementBy5} m={2}>
        IncrementBy5
      </Button>
    </Container>
  );
};

export default UsestateHook;
