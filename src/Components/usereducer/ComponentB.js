import React, { useContext } from 'react'
import { Container, Button } from '@chakra-ui/react';
import ComponentC from '../../Components/usereducer/ComponentC'
import {userCounter} from "../../../pages/usereducer/5-global-state.js"


const ComponentB = () => {

  const globalObj = useContext(userCounter)

  return (
    <Container p={5} m={5} border="1px solid" borderColor="green">
      ComponentB
      <p> Counter = {globalObj.counter.counterInitialValue} </p>
      <Button onClick={()=> globalObj.dispatcher({type: "increment", value: 10})} m={2}>Increment</Button>
      <Button onClick={()=> globalObj.dispatcher({type: "decrement", value: 10})} m={2}>Decrement</Button>
      <Button onClick={()=> globalObj.dispatcher({type: "reset"})} m={2}>Reset</Button>
      <ComponentC></ComponentC>
    </Container>
  )
}

export default ComponentB
