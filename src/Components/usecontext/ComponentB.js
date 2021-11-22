import React, { useContext } from 'react'
import { Container } from '@chakra-ui/layout';
import ComponentC from '../../Components/usecontext/ComponentC'
import { userAuthDetails } from "../../../pages/usecontext/index";

const ComponentB = () => {
  return (
    <Container p={5} m={5} border="1px solid" borderColor="green">
      ComponentB
      <ComponentC></ComponentC>
    </Container>
  )
}

export default ComponentB
