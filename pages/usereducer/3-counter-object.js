import React, {useReducer} from 'react'
import { Container, Text, Button } from "@chakra-ui/react";

const initialState = {
  firstValue: 0,
  secondValue: 10000
}

const reducer = (currentState, action) => {
  console.log(currentState);
  switch(action.type){
    case 'incrementFirstValue':
      return {...currentState, firstValue: currentState.firstValue + action.definer}
    case 'decrementFirstValue':
      return {...currentState, firstValue: currentState.firstValue - action.definer}
    case 'incrementSecondValue':
      return {...currentState, secondValue: currentState.secondValue + action.definer}
      case 'decrementSecondValue':
        return {...currentState, secondValue: currentState.secondValue - action.definer}
    case 'reset':
      return initialState;
    default: 
      return currentState;
  }
}

const UseReducerCounterObject = () => {

  const [currentState, dispatch] = useReducer(reducer, initialState)

  return (
    <Container m={5} p={5}>
      <Text fontSize={24} textDecoration="underline">useReducer Counter Object Example</Text>
      <Container m={5} p={5}>
        <p>First Counter Value = {currentState.firstValue} </p>
        <Button onClick={()=> dispatch({type: "incrementFirstValue", definer: 1})}>Increment</Button>
        <Button onClick={()=> dispatch({type: "decrementFirstValue", definer: 1})}>Decrement</Button>
        <Button onClick={()=> dispatch({type: "incrementFirstValue", definer: 5})}>IncrementBy5</Button>
        <Button onClick={()=> dispatch({type: "decrementFirstValue", definer: 5})}>DecrementBy5</Button>
      </Container>
      <Container m={5} p={5} >
        <p>Second Counter Value = {currentState.secondValue} </p>
        <Button onClick={()=> dispatch({type: "incrementSecondValue", definer: 1})}>Increment</Button>
        <Button onClick={()=> dispatch({type: "decrementSecondValue", definer: 1})}>Decrement</Button>
        <Button onClick={()=> dispatch({type: "incrementSecondValue", definer: 5})}>IncrementBy5</Button>
        <Button onClick={()=> dispatch({type: "decrementSecondValue", definer: 5})}>DecrementBy5</Button>
      </Container>
      <Button onClick={()=> dispatch({type: "reset"})}>Reset All</Button>
      <Button onClick={()=> dispatch({type: "dummy"})}>Dummy</Button>
    </Container>
  )
}

export default UseReducerCounterObject;