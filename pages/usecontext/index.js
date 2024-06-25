import { Text, Container } from "@chakra-ui/layout";
import React from "react";
import ComponentA from "../../src/Components/usecontext/ComponentA";
import { useEffect, useState } from "react";

export const userName = React.createContext();
export const userAuthDetails = React.createContext();

const Index = () => {
  const [authDetails, setAuthDetails] = useState(null);

  useEffect(() => {
    fetch("/api/authentication")
      .then((res) => res.json())
      .then((data) => setAuthDetails(data));
  }, []);

  console.log(authDetails);

  return (
    <div>
      <userAuthDetails.Provider value={[authDetails, setAuthDetails]}>
        <userName.Provider value={"Prasan Venkat"}>
          <Container p={5} m={5} border="1px solid" borderColor="blue">
            <Text fontSize={24} textDecoration="underline">
              Use Context - Parent Component
            </Text>
            <ComponentA></ComponentA>
          </Container>
        </userName.Provider>
      </userAuthDetails.Provider>
    </div>
  );
};

export default Index;
