import React, { useContext } from 'react'
import { Container } from '@chakra-ui/layout';
import { userAuthDetails } from "../../../pages/usecontext/index";

const ComponentD = () => {

  const authObject = useContext(userAuthDetails);

  return (
    <Container p={5} m={5} border="1px solid" borderColor="green">
      ComponentD
      {`Parent Component - User ID: ${authObject?.userId}`}
    </Container>
  )
}

export default ComponentD;