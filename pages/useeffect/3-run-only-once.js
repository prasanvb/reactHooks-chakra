import React, { useEffect, useState } from "react";
import { Text, Container } from "@chakra-ui/react";

const UseeffectRunOnlyOnce = () => {
  const [x, setX] = useState(0);
  const [y, setY] = useState(0);

  const logPosition = (e) => {
    console.log(`Mouse Event executed on moving the mouse ${e.clientX} - ${e.clientY}`);
    setX(e.clientX);
    setY(e.clientY);
  };

  // In React, the `window` object is only accessible inside the UseEffect Hook.
  // console.log(window.location.pathname);

  useEffect(() => {
    console.log("useEffect IS RUN ONLY ONCE");
    console.log("pathname = " + window.location.pathname);
    window.addEventListener("mousemove", logPosition);

    // NOTE: Uncomment after you read the below text
    // Return inside the useEffect hook will be executed when the component unmounts
    // and you will not see the co-ordinates being logged
    return () => {
      console.log("component did unmount");
      window.removeEventListener("mousemove", logPosition);
    };
  }, []);

  return (
    <Container m={5} p={5}>
      <Text fontSize={24} textDecoration="underline">
        UseEffect Conditional Run
      </Text>
      X - {x}, Y - {y}
      <Text>
        Notes: - Event Listener is added to window object through the useEffect hook - Check the console for
        co-ordinates - Now try clicking back button in the browser - Despite the changing the page you can still see the
        co-ordinates being logged.
      </Text>
    </Container>
  );
};

export default UseeffectRunOnlyOnce;
