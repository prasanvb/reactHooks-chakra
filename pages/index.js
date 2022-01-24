import Link from "next/link";
import { Container } from "@chakra-ui/react";
import { Text } from "@chakra-ui/react";

export default function Home() {
  return (
    <Container m={4}>
      <div>
        <Link href="/usestate" passHref>
          <Text fontSize={18} textDecoration="underline">
            <a>UseState Hook</a>
          </Text>
        </Link>
        <Link href="/usestate" passHref>
          <li>
            <a>useState Examples</a>
          </li>
        </Link>
      </div>
      <div>
        <Link href="/useeffect" passHref>
          <Text fontSize={18} textDecoration="underline">
            <a>useEffect Hook</a>
          </Text>
        </Link>
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
      </div>
      <div>
        <Link href="/useref" passHref>
          <Text fontSize={18} textDecoration="underline">
            <a>useRef Hook</a>
          </Text>
        </Link>
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
      </div>
      <div>
        <Link href="/usecontext" passHref>
          <Text fontSize={18} textDecoration="underline">
            <a>useContext Hook</a>
          </Text>
        </Link>
        <li>
          <Link href="/usecontext">
            <a>useContext Example</a>
          </Link>
        </li>
      </div>
      <div>
        <Link href="/usereducer" passHref>
          <Text fontSize={18} textDecoration="underline">
            <a>useReducer Hook</a>
          </Text>
        </Link>
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
      </div>
      <div>
        <Link href="/usememo" passHref>
          <Text fontSize={18} textDecoration="underline">
            <a>useMemo Hook</a>
          </Text>
        </Link>
        <li>
          <Link href="/usememo">
            <a>useMemo Example</a>
          </Link>
        </li>
      </div>
      <div>
        <Link href="/usecallback" passHref>
          <Text fontSize={18} textDecoration="underline">
            <a>useCallback Hook</a>
          </Text>
        </Link>
        <li>
          <Link href="/usecallback/1-with-react.memo">
            <a>1-with-react.memo</a>
          </Link>
        </li>
        <li>
          <Link href="/usecallback/2-with-usecallback">
            <a>2-with-usecallback</a>
          </Link>
        </li>
      </div>
      <div>
        <Text fontSize={18} textDecoration="underline">
          Custom Hooks
        </Text>
        <li>
          <Link href="/customhooks/1-doc-title-custom-hook">
            <a>1-doc-title-custom-hook</a>
          </Link>
        </li>
        <li>
          <Link href="/customhooks/2-counter-custom-hook">
            <a>2-counter-custom-hook</a>
          </Link>
        </li>
        <li>
          <Link href="/customhooks/3-useinput-custom-hook">
            <a>3-useinput-custom-hook</a>
          </Link>
        </li>
      </div>
    </Container>
  );
}
