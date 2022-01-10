import React, { useEffect, useRef } from "react";
import { Button, Container, Text, Input } from "@chakra-ui/react";

const AccessDOMNodesWithUseRef = () => {
  const firstnameInputRef = useRef(null);
  const emailInputRef = useRef();

  // useRef is like a “box” that can hold a mutable value in its .current property.
  // NOTE: Check the console to see what useRef returns initially before the component is initially rendered
  // (i.e. before the return of the component is executed)
  console.log("Before Initial Render:");
  console.log({ firstnameInputRef, emailInputRef });

  useEffect(() => {
    // NOTE: Check the console to see what useRef returns after the component is initially rendered
    // (i.e. after the return of the component is executed)
    console.log("After Initial Render:");
    console.log({ firstnameInputRef, emailInputRef });
    firstnameInputRef.current.focus();
  });

  const emailFocus = () => {
    emailInputRef.current.focus();
  };

  return (
    <Container m={5} p={5}>
      <Text fontSize={20} textDecoration="underline">
        Imperatively Access DOM Nodes With useRef Hook
      </Text>
      <Text fontSize={15}>
        useRef is like a “box” that can hold a mutable value in its ”.current”
        property.
      </Text>
      <Input
        id="firstname"
        ref={firstnameInputRef}
        name="firstname"
        placeholder="Enter you First Name"
      ></Input>
      <Input
        id="lastname"
        name="lastname"
        placeholder="Enter you Last Name"
      ></Input>
      <Input
        id="email"
        ref={emailInputRef}
        name="email"
        placeholder="Enter you Email"
      ></Input>
      <Button onClick={() => emailFocus()}>Focus on Email Input</Button>
    </Container>
  );
};

export default AccessDOMNodesWithUseRef;
