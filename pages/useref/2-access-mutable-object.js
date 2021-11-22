import React, { useEffect, useRef, useState } from 'react'
import {Button,Container,Text, Input} from '@chakra-ui/react';

const AccessMutableObjectWithUseRef = () => {

  const [countTimer, setCountTimer] = useState(0);
  const countTimerRef = useRef(null);

  useEffect(()=>{
    countTimerRef.current = setInterval(() => {
      setCountTimer(old => old+1);
    }, 1000)

    return () => {
      clearInterval(countTimerRef.current);
    }
  },[])

  

  return (
    <Container m={5} p={5}>
      <Text fontSize={20} textDecoration="underline"> Access Mutable Objects With useRef Hook</Text>
      <Text fontSize={15}>useRef is like a “box” that can hold a mutable value in its .current property.</Text>
      <p> countTimer = {countTimer} </p>
      <Button onClick={()=> clearInterval(countTimerRef.current)}>Clear Timer</Button>
    </Container>
  )
}

export default AccessMutableObjectWithUseRef
