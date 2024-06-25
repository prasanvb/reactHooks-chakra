import React, { useContext } from "react";
import { userAuthDetails } from "../../../pages/usecontext/index";
import { Container } from "@chakra-ui/layout";
import ComponentB from "../../Components/usecontext/ComponentB";

const ComponentA = () => {
  const [authDetails] = useContext(userAuthDetails);
  return (
    <Container p={5} m={5} border="1px solid" borderColor="red">
      ComponentA
      <div>{`Logged in status: ${authDetails?.isLoggedIn}`}</div>
      <ComponentB></ComponentB>
    </Container>
  );
};

export default ComponentA;
