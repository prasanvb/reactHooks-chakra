import { Input, Text, Container } from "@chakra-ui/react";
import React, { useState } from "react";

const UsestateObject = () => {
  const detailsObj = {
    firstname: "",
    lastname: "",
  };
  const [userDetails, setUserDetails] = useState(detailsObj);

  const firstnameOnChange = (e) => {
    setUserDetails((old) => {
      return { ...old, firstname: e.target.value };
    });
  };

  return (
    <Container m={5} p={5}>
      <Text fontSize={20} textDecoration="underline">
        useState Object Example - 2
      </Text>
      <form>
        <Input
          type="text"
          value={userDetails.firstname}
          onChange={(e) => {
            firstnameOnChange(e);
          }}
        ></Input>
        <Input
          type="text"
          value={userDetails.lastname}
          onChange={(e) =>
            setUserDetails({ ...userDetails, lastname: e.target.value })
          }
        ></Input>
        {JSON.stringify(userDetails)}
      </form>
    </Container>
  );
};

export default UsestateObject;
