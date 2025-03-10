import React from "react";
import { Text } from "@chakra-ui/react";

const Title = () => {
  console.log("Title is rendered");
  return (
    <div>
      Title - Example with React.Memo
      <Text fontSize={20} textDecoration="underline"></Text>
    </div>
  );
};

export default Title;
