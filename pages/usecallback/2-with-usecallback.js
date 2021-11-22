import React, {useState, useCallback} from 'react'
import { Container, Text } from '@chakra-ui/react'
import Title from '../../src/Components/usecallback/Title'
import DataCounter from '../../src/Components/usecallback/DataCounter'
import Action from '../../src/Components/usecallback/Action'


const ExampleWithUseCallback = () => {

  const [age, setAge] = useState(25)
  const [compensation, setCompensation] = useState(100000)

  // NOTE:  useCallback hook will return a memoized version of the callback, 
  // and it’ll only be changed if one of the dependencies has changed.
  const incrementAge = useCallback(() => {
      console.log("incrementAge useCallback function")
      setAge(age => age+1);
    },
    [age]) //"age" : try removing the value in the dependency array
  console.log(incrementAge);

  const incrementCompensation = useCallback(() => {
    console.log("incrementCompensation useCallback function")
    setCompensation(old => old+5000);
  }, []) // "compensation" : try adding the value in the dependency array
  console.log(incrementCompensation);

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

export default ExampleWithUseCallback