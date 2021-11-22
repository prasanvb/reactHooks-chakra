import { Container } from '@chakra-ui/react'
import { useEffect, useState } from 'react';
import { Text } from "@chakra-ui/react";

export default function Home() {
  const [details, setDetails] = useState(null);

  useEffect(()=>{
    fetch('/api')
    .then(res => res.json())
    .then(data => setDetails(data));
  },[])
  console.log(details);
  
  return (
    <Container m={2}>
      <Text fontSize={24}>{details?.name}</Text>
    </Container>
  )
}
