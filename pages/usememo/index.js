import { Button } from '@chakra-ui/button';
import { Container, Text } from '@chakra-ui/layout';
import React, {useState, useMemo} from 'react'

const Index = () => {

  const [counterOne, setCounterOne] = useState(0);
  const [counterTwo, setCounterTwo] = useState(100);

  const counterOneResolver = () => {
    setCounterOne(old => old+1)
  }

  const counterTwoResolver = () => {
    setCounterTwo(old => old+1)
  }


  // NOTE:  useMemo hook will return a memoized version of the return value, 
  // and it’ll only be changed if one of the dependencies has changed.

  const isEven = useMemo(() => {
    for (let i = 0; i < 2000000000; i++) {}
    return counterOne % 2 == 0;
  },[counterOne]);
  
  // NOTE: Click on both the counter few times to see the variation and check console log
  // whe you click on the IncrementCounterOne function inside the "isEven" memo is executed every time
  // but as you can notice only the "isEven" cache value is retrieved when you click on IncrementCounterTwo
  console.log(isEven);

  return (
    <Container m={5} p={5}>
      <Text fontSize={20} textDecoration="underline">useMemo Example</Text>
      <Text> Counter One = {counterOne} </Text>
      <Text> Counter one is {isEven ? 'even' : 'odd'} </Text>
      <Button onClick={()=> counterOneResolver()}>IncrementCounterOne</Button>
      <Text> Counter Two = {counterTwo} </Text>
      <Button onClick={()=> counterTwoResolver()}>IncrementCounterTwo</Button>
    </Container>
  )
}

export default Index;