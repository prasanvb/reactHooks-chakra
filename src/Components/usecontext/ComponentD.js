import React, { useContext } from "react";
import { Container } from "@chakra-ui/layout";
import { userAuthDetails } from "../../../pages/usecontext/index";
import { Button } from "@chakra-ui/react";

const ComponentD = () => {
  const [authDetails, setAuthDetails] = useContext(userAuthDetails);

  const toggleLogInStatus = () => {
    if (authDetails.isLoggedIn) {
      setAuthDetails((old) => {
        return { ...old, isLoggedIn: false };
      });
    } else {
      setAuthDetails((old) => {
        return { ...old, isLoggedIn: true };
      });
    }
  };
  return (
    <Container p={5} m={5} border="1px solid" borderColor="green">
      ComponentD
      <div>{authDetails?.isLoggedIn && `Parent Component - User ID: ${authDetails?.userId}`}</div>
      <div>{authDetails?.isLoggedIn && `Logged in status: ${authDetails?.isLoggedIn}`}</div>
      <Button onClick={toggleLogInStatus}>Toggle Log In Status</Button>
    </Container>
  );
};

export default ComponentD;
