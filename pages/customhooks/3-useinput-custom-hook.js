import React, {useRef} from 'react'
import { Container, Text, Input, Button } from "@chakra-ui/react";
import useInput from '../../src/Hooks/useInput'

const UseInputCustomHook = () => {

  const firstInputRef = useRef(null)
  const lastInputRef = useRef(null)

  const [firstname, bindFirstname, resetFirstname] = useInput('');
  const [lastname, bindLastname, resetLastname] = useInput('');

  const onSubmitHandler = () => {
    resetFirstname()
    resetLastname()
    console.log({
      firstname: firstInputRef.current.value,
      lastname: lastInputRef.current.value
    })
  }

  return (
    <Container p={5} m={5}>
      <Text fontSize={20} textDecoration="underline"> useInput Custom Hook Example </Text>
      <form>
        First name: <Input type="text" {...bindFirstname} ref={firstInputRef} name="firstname" id="firstname"/>
        Last name: <Input type="text" {...bindLastname} ref={lastInputRef} name="lastname" id="lastname"/>
        <Button type="submit" onClick={(e)=>onSubmitHandler(e)}>Submit</Button>
      </form>
    </Container>
  )
}

export default UseInputCustomHook;