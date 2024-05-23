import React, { useReducer } from "react";
import { Container, Text, Button } from "@chakra-ui/react";

const initialState = {
  firstValue: 0,
  secondValue: 10000,
};

const reducer = (currentState, action) => {
  const { type, payload } = action;
  const { firstValue, secondValue } = currentState;

  switch (type) {
    case "incrementFirstValue":
      return { ...currentState, firstValue: firstValue + payload };
    case "decrementFirstValue":
      return { ...currentState, firstValue: firstValue - payload };
    case "incrementSecondValue":
      return { ...currentState, secondValue: secondValue + payload };
    case "decrementSecondValue":
      return { ...currentState, secondValue: secondValue - payload };
    case "reset":
      return initialState;
    default:
      return currentState;
  }
};

const UseReducerCounterObject = () => {
  const [currentState, dispatch] = useReducer(reducer, initialState);

  return (
    <Container m={5} p={5}>
      <Text fontSize={24} textDecoration="underline">
        useReducer Counter Object Example
      </Text>
      <Container m={5} p={5}>
        <p>First Counter Value = {currentState.firstValue} </p>
        <Button
          onClick={() => dispatch({ type: "incrementFirstValue", payload: 1 })}
        >
          Increment
        </Button>
        <Button
          onClick={() => dispatch({ type: "decrementFirstValue", payload: 1 })}
        >
          Decrement
        </Button>
        <Button
          onClick={() => dispatch({ type: "incrementFirstValue", payload: 5 })}
        >
          IncrementBy5
        </Button>
        <Button
          onClick={() => dispatch({ type: "decrementFirstValue", payload: 5 })}
        >
          DecrementBy5
        </Button>
      </Container>
      <Container m={5} p={5}>
        <p>Second Counter Value = {currentState.secondValue} </p>
        <Button
          onClick={() => dispatch({ type: "incrementSecondValue", payload: 1 })}
        >
          Increment
        </Button>
        <Button
          onClick={() => dispatch({ type: "decrementSecondValue", payload: 1 })}
        >
          Decrement
        </Button>
        <Button
          onClick={() =>
            dispatch({ type: "incrementSecondValue", payload: 100 })
          }
        >
          IncrementBy100
        </Button>
        <Button
          onClick={() =>
            dispatch({ type: "decrementSecondValue", payload: 100 })
          }
        >
          DecrementBy100
        </Button>
      </Container>
      <Button onClick={() => dispatch({ type: "reset" })}>Reset All</Button>
      <Button onClick={() => dispatch({ type: "dummy" })}>Dummy</Button>
    </Container>
  );
};

export default UseReducerCounterObject;
