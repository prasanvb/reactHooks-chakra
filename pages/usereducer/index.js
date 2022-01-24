import React from "react";
import Link from "next/link";
import { Container, Text } from "@chakra-ui/react";

function UseReducerIndex() {
  return (
    <div>
      <Container>
        <Text fontSize={24}>UseReducer Hook Example</Text>
      </Container>
      <ul>
        <li>
          <Link href="/usereducer/1-simple-counter">
            <a>1-simple-counter</a>
          </Link>
        </li>
        <li>
          <Link href="/usereducer/2-complex-counter">
            <a>2-complex-counter</a>
          </Link>
        </li>
        <li>
          <Link href="/usereducer/3-counter-object">
            <a>3-counter-object</a>
          </Link>
        </li>
        <li>
          <Link href="/usereducer/4-multiple-reducers">
            <a>4-multiple-reducers</a>
          </Link>
        </li>
        <li>
          <Link href="/usereducer/5-global-state">
            <a>5-global-state</a>
          </Link>
        </li>
        <li>
          <Link href="/usereducer/6-simple-data-fetching">
            <a>6-simple-data-fetching</a>
          </Link>
        </li>
        <li>
          <Link href="/usereducer/7-usereducer-data-fetching">
            <a>7-usereducer-data-fetching</a>
          </Link>
        </li>
      </ul>
    </div>
  );
}

export default UseReducerIndex;
