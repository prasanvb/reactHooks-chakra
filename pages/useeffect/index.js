import React from "react";
import { Container, Text } from "@chakra-ui/react";
import Link from "next/link";

const index = () => {
  return (
    <>
      <Container m={5} p={5}>
        <Text fontSize={24}>Use Effect Hook</Text>
        <Text fontSize={18} textDecoration="underline">
          Important Notes
        </Text>
        <Text>
          - In React, the `document` object is accessible only inside the
          UseEffect Hook. (i.e) you cannot access it outside the Hook{" "}
        </Text>
        <Text>
          - In React, the `window` object is accessible only inside the
          UseEffect Hook. (i.e) you cannot access it outside the Hook{" "}
        </Text>
        <Text>
          - Event Listener can be added to window object through the useEffect
          Hook
        </Text>
      </Container>
      <Container m={5} p={5}>
        <ul>
          <li>
            <Link href="/useeffect/1-after-every-render">
              <a>1-after-every-render</a>
            </Link>
          </li>
          <li>
            <Link href="/useeffect/2-conditional-run">
              <a>2-conditional-run</a>
            </Link>
          </li>
          <li>
            <Link href="/useeffect/3-run-only-once">
              <a>3-run-only-once</a>
            </Link>
          </li>
          <li>
            <Link href="/useeffect/4-with-cleanup">
              <a>4-with-cleanup</a>
            </Link>
          </li>
          <li>
            <Link href="/useeffect/5-dependency-array">
              <a>5-dependency-array</a>
            </Link>
          </li>
          <li>
            <Link href="/useeffect/6-data-fetching">
              <a>6-data-fetching</a>
            </Link>
          </li>
          <li>
            <Link href="/useeffect/7-data-fetching-on-enter">
              <a>7-data-fetching-on-enter</a>
            </Link>
          </li>
          <li>
            <Link href="/useeffect/8-data-fetching-on-submit">
              <a>8-data-fetching-on-submit</a>
            </Link>
          </li>
        </ul>
      </Container>
    </>
  );
};

export default index;
