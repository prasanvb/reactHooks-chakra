import React, { useState } from 'react'
import {Button, Text, Container } from '@chakra-ui/react';
import HookMouse from '../../src/Components/useeffect/HookMouse'

const UseeffectWithCleanup = () => {

  const [display, setDisplay] = useState(true);

  // NOTE: Check inside the 'HookMouse' component for the cleanup function
  // If you directly use the 'HookMouse' logic with in the 'UseeffectWithCleanup' then you can't see the 
  // component did unmount part, i.e. because both have be in different components.

  return (
    <Container m={5} p={5}>
      <Text fontSize={24} textDecoration="underline">UseEffect With Cleanup</Text>
      <div>display Value = {display.toString()}</div>
      <Button onClick={()=> {setDisplay(!display)}}>Toggle</Button>
      <div>{display && <HookMouse></HookMouse>}</div>
    </Container>
  )
}

export default UseeffectWithCleanup
