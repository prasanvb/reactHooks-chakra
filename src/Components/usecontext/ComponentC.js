import React, { useContext } from 'react'
import { Container } from '@chakra-ui/layout';
import { userName } from '../../../pages/usecontext/index'
import ComponentD from '../../Components/usecontext/ComponentD'

const ComponentC = () => {

  const name = useContext(userName);

  return (
    <Container p={5} m={5} border="1px solid" borderColor="lightgrey">
      ComponentC
      <p> userName value from Parent Component = {name} </p>
      <ComponentD></ComponentD>
    </Container>
  )
}

export default ComponentC;