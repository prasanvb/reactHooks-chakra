import React from 'react'
import DocTitleOne from '../../src/Components/customhooks/DocTitleOne';
import DocTitleTwo from '../../src/Components/customhooks/DocTitleTwo'
import { Container } from "@chakra-ui/react";


const DocTitleCustomHook = () => {
  return (
    <div>
      <Container m={5} p={5}>
        <DocTitleOne></DocTitleOne>
        <DocTitleTwo></DocTitleTwo>
      </Container>
    </div>
  )
}

export default DocTitleCustomHook
