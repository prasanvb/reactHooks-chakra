import React, { useState } from "react";
import { Button, Text, Container } from "@chakra-ui/react";
import HookMouse from "../../src/Components/useeffect/HookMouse";

const UseeffectWithCleanup = () => {
  const [display, setDisplay] = useState(true);

  return (
    <Container m={5} p={5}>
      <div>
        <Text fontSize={24} textDecoration="underline">
          UseEffect With Cleanup
        </Text>
        <Text>
          IMPORTANT NOTE: When you Toggle (i.e. based on the useState condition logic true/false) the HookMouse
          Component is unmounted/mounted. Even on pressing the back button the page component get unmounted which inturn
          unmounts all child Components (i.e. HookMouse Component)
        </Text>
      </div>
      <Text p={5}>Toggle Display Value = {display.toString()}</Text>
      <Button
        p={5}
        onClick={() => {
          setDisplay(!display);
        }}
      >
        Toggle
      </Button>
      <div>{display && <HookMouse></HookMouse>}</div>
    </Container>
  );
};

export default UseeffectWithCleanup;
