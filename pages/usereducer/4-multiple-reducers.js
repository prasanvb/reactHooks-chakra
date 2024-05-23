import React, { useReducer } from "react";
import { Container, Text, Button } from "@chakra-ui/react";

const initialState = 0;

const reducer = (currentState, action) => {
  console.log(currentState);
  switch (action) {
    case "increment":
      return currentState + 1;
    case "decrement":
      return currentState - 1;
    case "reset":
      return initialState;
    default:
      return currentState;
  }
};

const MultipleUseReducers = () => {
  // Both use same reducers functions
  const [currentStateOne, dispatchOne] = useReducer(reducer, initialState);
  const [currentStateTwo, dispatchTwo] = useReducer(reducer, 500);

  return (
    <Container m={5} p={5}>
      <Text fontSize={24} textDecoration="underline">
        useReducer Counter Object
      </Text>
      <Container m={5} p={5}>
        <p>Counter One = {currentStateOne} </p>
        <Button onClick={() => dispatchOne("increment")}>Increment</Button>
        <Button onClick={() => dispatchOne("decrement")}>Decrement</Button>
        <Button onClick={() => dispatchOne("reset")}>Reset</Button>
        <Button onClick={() => dispatchOne("dummy")}>dummy</Button>
      </Container>
      <Container m={5} p={5}>
        <p>Counter Two = {currentStateTwo} </p>
        <Button onClick={() => dispatchTwo("increment")}>Increment</Button>
        <Button onClick={() => dispatchTwo("decrement")}>Decrement</Button>
        <Button onClick={() => dispatchTwo("reset")}>Reset</Button>
        <Button onClick={() => dispatchTwo("dummy")}>dummy</Button>
      </Container>
    </Container>
  );
};

export default MultipleUseReducers;
