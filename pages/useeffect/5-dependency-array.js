import React, { useEffect, useState } from 'react'
import { Text, Container } from '@chakra-ui/react';

const UseeffectDependencyArray = () => {
  const [count, setCount] = useState(0)

  // Method 1 uses "previous" value that is passed through "setCount" function, 
  // so there is not need to declare dependency array
  useEffect(() => {
    const interval = setInterval(() => {
      setCount(old => old+1)
    }, 1000)
  }, [])

  // Method 2 we are directly trying to edit the "count" value through the setCount function, 
  // so if we don't declare "count" dependency array, then the automatic counter wouldn't work
  // useEffect(() => {
  //   const interval = setInterval(() => {
  //     setCount(count+1)
  //   }, 1000)
  // }, [count])

  return (
    <Container p={5} m={5}>
    <Text fontSize={24} textDecoration="underline">UseEffect With/Without Dependency Array</Text>
      count = {count}
    </Container>
  )
}

export default UseeffectDependencyArray;
