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
          IMPORTANT NOTE: When Toggle the HookMouse Component is
          unmounted/mounted. Check inside the `HookMouse` component for the
          cleanup function. If you directly use the `HookMouse` logic with in
          the `UseeffectWithCleanup` then you can`t see the component did
          unmount part, i.e. because both have be in different components.
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
