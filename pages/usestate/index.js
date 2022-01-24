import React from "react";
import { Container } from "@chakra-ui/react";
import UsestateHook from "../../src/Components/usestate/1.UsestateHook";
import UsestateObject from "../../src/Components/usestate/2.UsestateObject";
import UsestateArray from "../../src/Components/usestate/3.UsestateArray";

const usestate = () => {
  return (
    <Container>
      <UsestateHook></UsestateHook>
      <UsestateObject></UsestateObject>
      <UsestateArray></UsestateArray>
    </Container>
  );
};

export default usestate;
