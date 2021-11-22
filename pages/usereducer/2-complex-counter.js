import React, {useReducer} from 'react'
import { Container, Text, Button } from "@chakra-ui/react";

const initialState = {
  value: 0
}

const reducer = (currentState, action) => {
  console.log(currentState);
  switch(action.type){
    case 'increment':
      return {value: currentState.value+action.definer}
    case 'decrement':
      return {value: currentState.value-action.definer}
    case 'reset':
      return initialState;
    default: 
      return currentState;
  }
}

const UseReducerComplexCounter = () => {

  const [currentState, dispatch] = useReducer(reducer, initialState)

  return (
    <Container m={5} p={5}>
      <Text fontSize={24} textDecoration="underline">useReducer Complex Counter Example</Text>
      <p>Counter = {currentState.value} </p>
      <Button onClick={()=> dispatch({type: "increment", definer: 1})}>Increment</Button>
      <Button onClick={()=> dispatch({type: "decrement", definer: 1})}>Decrement</Button>
      <Button onClick={()=> dispatch({type: "increment", definer: 5})}>IncrementBy5</Button>
      <Button onClick={()=> dispatch({type: "decrement", definer: 5})}>DecrementBy5</Button>
      <Button onClick={()=> dispatch({type: "reset"})}>Reset</Button>
      <Button onClick={()=> dispatch({type: "dummy"})}>dummy</Button>
    </Container>
  )
}

export default UseReducerComplexCounter;