import { Button, Text } from "@chakra-ui/react";
import { Container } from "@chakra-ui/layout";
import React, { useState } from "react";

const UsestateArray = () => {
  const initial = ["apple", "banana", "orange", "pom"];
  const [fruitsArray] = useState(initial);

  const [itemsArray, setItemsArray] = useState([]);

  const addItemsToArray = () => {
    setItemsArray((old) => {
      return [
        ...old,
        { id: itemsArray.length, value: Math.floor(Math.random() * 10000) },
      ];
    });
  };
  console.log(itemsArray);

  return (
    <Container m={5} p={5}>
      <Text fontSize={20} textDecoration="underline">
        useState Array Example 3
      </Text>
      <Container m={5} p={5} border="1px" borderColor="grey">
        {fruitsArray.map((item, index) => (
          <p key={index}> {item} </p>
        ))}
      </Container>
      <Container m={5} p={5} border="1px" borderColor="grey">
        <Button onClick={addItemsToArray}> Add Item</Button>
        {itemsArray?.map((item) => {
          return <p key={item.id}> {item.value} </p>;
        })}
      </Container>
    </Container>
  );
};

export default UsestateArray;
