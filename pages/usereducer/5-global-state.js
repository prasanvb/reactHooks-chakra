import { Container, Text, Button } from "@chakra-ui/react";
import React, { useReducer } from "react";
import ComponentA from "../../src/Components/usereducer/ComponentA";

const initialState = {
  counterInitialValue: 0,
};

const countResolver = (currentState, action) => {
  switch (action.type) {
    case "increment":
      return {
        ...currentState,
        counterInitialValue: currentState.counterInitialValue + action.value,
      };
    case "decrement":
      return {
        ...currentState,
        counterInitialValue: currentState.counterInitialValue - action.value,
      };
    case "reset":
      return initialState;
  }
};

export const userCounter = React.createContext();

const UseReducerGlobalStateManagement = () => {
  const [count, dispatch] = useReducer(countResolver, initialState);

  return (
    <userCounter.Provider value={{ counter: count, dispatcher: dispatch }}>
      <Container m={5} p={5}>
        <Text fontSize={20} textDecoration="underline">
          {" "}
          Global State Management using useReducer and useContext{" "}
        </Text>
        <p>Counter = {count.counterInitialValue} </p>
        <Button onClick={() => dispatch({ type: "increment", value: 1 })} m={2}>
          Increment
        </Button>
        <Button onClick={() => dispatch({ type: "decrement", value: 1 })} m={2}>
          Decrement
        </Button>
        <Button onClick={() => dispatch({ type: "reset" })} m={2}>
          Reset
        </Button>
        <ComponentA></ComponentA>
      </Container>
    </userCounter.Provider>
  );
};

export default UseReducerGlobalStateManagement;
