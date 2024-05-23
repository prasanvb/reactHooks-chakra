import React, { useEffect, useState } from "react";
import { Button, Input, Text, Container } from "@chakra-ui/react";

const UseeffectDataFetchingOnSubmit = () => {
  const [post, setPost] = useState({});
  const [id, setId] = useState(0);
  const [postId, setPostID] = useState(0);

  useEffect(() => {
    if (postId !== "") {
      if (postId > 0 && postId < 101) {
        fetch(`https://jsonplaceholder.typicode.com/posts/${postId}`)
          .then((res) => res.json())
          .then((data) => setPost(data));
      }
    }
  }, [postId]);

  console.log({postId});

  const onSubmit = () => {
    setPostID(id);
  };

  return (
    <Container p={5} m={5}>
      <Text fontSize={24} textDecoration="underline">
        UseEffect Data Fetching on Input Entry
      </Text>
      <Input value={id} onChange={(e) => setId(e.target.value)} />
      <Button onClick={onSubmit}>submit</Button>
      {<p> Id : {post.id} </p>}
      {<p> Title : {post.title} </p>}
    </Container>
  );
};

export default UseeffectDataFetchingOnSubmit;
