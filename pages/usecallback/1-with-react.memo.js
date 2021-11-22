import React, {useState} from 'react'
import { Container, Text } from '@chakra-ui/react'
import Title from '../../src/Components/usecallback/Title'
import DataCounter from '../../src/Components/usecallback/DataCounter'
import Action from '../../src/Components/usecallback/Action'


const ExampleWithReactMemo = () => {

  const [age, setAge] = useState(25)
  const [compensation, setCompensation] = useState(100000)

  const incrementAge = () => {
    setAge(old => old+1);
  }

  const incrementCompensation = () => {
    setCompensation(old => old+5000);
  }

  return (
    <Container p={5} m={5}>
      <Title></Title>
      <DataCounter info="Age" value={age}></DataCounter>
      <Action actionFunction={incrementAge} actionName="Age Incrementor"></Action>
      <DataCounter info="Compensation" value={compensation}></DataCounter>
      <Action actionFunction={incrementCompensation} actionName="Compensation Incrementor"></Action>
    </Container>
  )
}

export default ExampleWithReactMemo
