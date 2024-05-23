import React from "react";
import { Text } from "@chakra-ui/react";

const Title = () => {
  console.log("Title is rendered");
  return (
    <div>
      <Text fontSize={20} textDecoration="underline">
        {" "}
        Example with React.Memo
      </Text>
    </div>
  );
};

export default React.memo(Title);
