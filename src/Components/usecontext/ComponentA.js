import React from "react";
import { Container } from "@chakra-ui/layout";
import ComponentB from "../../Components/usecontext/ComponentB";

const ComponentA = () => {
  return (
    <Container p={5} m={5} border="1px solid" borderColor="red">
      ComponentA
      <ComponentB></ComponentB>
    </Container>
  );
};

export default ComponentA;
