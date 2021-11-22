import React, { useEffect, useState } from 'react'
import { Text, Container } from '@chakra-ui/react';

const UseeffectRunOnlyOnce = () => {

  const [x, setX] = useState(0);
  const [y, setY] = useState(0);

  const logPosition = (e) => {
    console.log("Mouse Event will always run as you move the mouse");
    setX(e.clientX);
    setY(e.clientY);
  }

  useEffect(()=> {
    console.log("useEffect IS RUN ONLY ONCE");
    window.addEventListener('mousemove', logPosition)
  },[])

  return (
    <Container m={5} p={5}>
      <Text fontSize={24} textDecoration="underline">UseEffect Conditional Run</Text>
      X - {x}, Y - {y}
    </Container>
  )
}

export default UseeffectRunOnlyOnce;
