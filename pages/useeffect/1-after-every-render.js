import { Button } from "@chakra-ui/button";
import { Container, Input, Text } from "@chakra-ui/react";
import React, { useState, useEffect } from "react";

const UseEffectAfterEveryRender = () => {
  const [counter, setCounter] = useState(0);
  const [name, setName] = useState();

  // In React, the `document` object is only accessible inside the UseEffect Hook.
  // comment out the useEffect hook and try removing the comment below and do a page refresh
  // document.title=`counter clicked ${counter} times`;

  useEffect(() => {
    // the code inside the useEffect hook is run after every time the component is rendered successfully
    document.title = `counter clicked ${counter} times`;
    // you can see the useEffect is runs even of the Input field changes, which is problem.

    console.log(`useEffect is updated - ${name}`);
    console.log(`useEffect is updated - ${counter}`);

    document.cookie = `name=${name}`;
    console.log(document.cookie);
  });

  return (
    <Container m={5} p={5}>
      <Text fontSize={24} textDecoration="underline">
        UseEffect runs After Every Render
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

export default UseEffectAfterEveryRender;
