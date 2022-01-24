import React from "react";
import Link from "next/link";
import { Container, Text } from "@chakra-ui/react";

const UseRefHook = () => {
  return (
    <div>
      <Container>
        <Text fontSize={24}>useRef Hook Example</Text>
      </Container>
      <ul>
        <li>
          <Link href="useref/1-access-dom-nodes">
            <a>1-access-dom-nodes</a>
          </Link>
        </li>
        <li>
          <Link href="useref/2-access-mutable-object">
            <a>2-access-mutable-object</a>
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default UseRefHook;
