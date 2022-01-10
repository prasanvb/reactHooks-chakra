import { Button } from "@chakra-ui/button";
import { Input, Text, Container } from "@chakra-ui/react";
import React, { useState, useEffect } from "react";

const UseEffectConditionalRun = () => {
  const [counter, setCounter] = useState(0);
  const [name, setName] = useState("");

  useEffect(() => {
    // the code inside the useEffect hook is run only if the `counter` state changes
    document.title = `counter clicked ${counter} times`;
    // you can see the useEffect runs only when the button is clicked
    console.log(`useEffect is updated - ${counter}`);
  }, [counter]);

  return (
    <Container m={5} p={5}>
      <Text fontSize={24} textDecoration="underline">
        UseEffect Conditional Run
      </Text>
      <Input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <p>Counter = {counter} </p>
      <Button onClick={() => setCounter(counter + 1)}>Increment</Button>
    </Container>
  );
};

export default UseEffectConditionalRun;
