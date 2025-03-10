import React, { useEffect, useState } from "react";
import { Input, Text, Container } from "@chakra-ui/react";

const UseeffectDataFetchingOnEnter = () => {
  const [post, setPost] = useState({});
  const [id, setId] = useState(0);

  useEffect(() => {
    if (id !== "") {
      if (id > 0 && id < 101) {
        fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)
          .then((res) => res.json())
          .then((data) => setPost(data));
      }
    }
  }, [id]);

  if (Object.keys(post).length !== 0) {
    console.log({ post });
  }

  return (
    <Container p={5} m={5}>
      <Text fontSize={24} textDecoration="underline">
        UseEffect Data Fetching on Input Entry
      </Text>
      <Text>Enter Value between 1 to 100</Text>
      <Input value={id} onChange={(e) => setId(e.target.value)} />
      {<p> Id : {post.id} </p>}
      {<p> Title : {post.title} </p>}
    </Container>
  );
};

export default UseeffectDataFetchingOnEnter;
