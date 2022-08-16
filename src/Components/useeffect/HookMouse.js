import React, { useEffect, useState } from "react";
import { Container } from "@chakra-ui/react";


const HookMouse = () => {
  const [x, setX] = useState(0);
  const [y, setY] = useState(0);

  const logPosition = (e) => {
    // Note: If you don't cleaned up mouse logPosition is always run on every mouse move
    console.log("Mouse Event will always run as you move the mouse");
    setX(e.clientX);
    setY(e.clientY);
  };

  useEffect(() => {
    console.log(
      "NOTE: If useEffect is not cleaned up mouse logPosition is always run on every mouse move"
    );
    window.addEventListener("mousemove", logPosition);

    return () => {
      console.log(
        "Return inside the useEffect hook will be executed when the component unmounts"
      );
      console.log("component did unmount");
      window.removeEventListener("mousemove", logPosition);
    };
  }, []);

  return (
    <Container m={5} p={5}>
      <p>{`X - ${x}, Y - ${y}`}</p>
    </Container>
  );
};

export default HookMouse;
