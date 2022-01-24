import { Text } from "@chakra-ui/react";
import Link from "next/link";
import React from "react";

function UseCallbackIndex() {
  return (
    <div>
      <Text fontSize={18} textDecoration="underline">
        useCallback Hook
      </Text>
      <div>
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
    </div>
  );
}

export default UseCallbackIndex;
