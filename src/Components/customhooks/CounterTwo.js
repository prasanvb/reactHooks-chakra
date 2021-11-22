import { Button, Text } from '@chakra-ui/react'
import { Container } from '@chakra-ui/layout'
import React, { useState } from 'react'
import useCounter from '../../Hooks/useCounter'

const initialState = 1000; 

const CounterTwo = () => {

  const [counterValue, increment, decrement, reset] = useCounter(initialState, 10)

  return (
    <div>
      <Container>
        <Text fontSize={15}>CounterOne Value = {counterValue}</Text>
        <Button m={2} onClick={() => increment()}>Increment</Button>
        <Button m={2} onClick={() => decrement()}>Decrement</Button>
        <Button m={2} onClick={() => reset()}>Reset</Button>
      </Container>
    </div>
  )
}

export default CounterTwo
