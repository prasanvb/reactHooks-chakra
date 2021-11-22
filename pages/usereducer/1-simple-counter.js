import React, {useReducer} from 'react'
import { Container, Text, Button } from "@chakra-ui/react";

const initialState = 0;

const reducer = (currentState, action) => {
  console.log(currentState);
  switch(action){
    case 'increment':
      return currentState+1;
    case 'decrement':
      return currentState-1;
    case 'reset':
      return initialState;
    default: 
      return currentState;
  }
}

const UseReducerSimpleCounter = () => {

  const [currentState, dispatch] = useReducer(reducer, initialState)

  return (
    <Container m={5} p={5}>
      <Text fontSize={24} textDecoration="underline">useReducer Simple Counter Example</Text>
      <p>Counter = {currentState} </p>
      <Button onClick={()=> dispatch("increment")}>Increment</Button>
      <Button onClick={()=> dispatch("decrement")}>Decrement</Button>
      <Button onClick={()=> dispatch("reset")}>Reset</Button>
      <Button onClick={()=> dispatch("dummy")}>dummy</Button>
    </Container>
  )
}

export default UseReducerSimpleCounter
