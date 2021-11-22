import React, { useEffect, useState } from 'react'
import { Text,Container } from "@chakra-ui/react";

const UseeffectDataFetching = () => {

  const [posts, setPosts] = useState([]);

  useEffect(()=> {
    fetch('https://jsonplaceholder.typicode.com/posts')
      .then(res=>res.json())
      .then(data => setPosts(data));
  },[])

  return (
    <Container p={5} m={5}>
    <Text fontSize={24} textDecoration="underline">UseEffect Data Fetching</Text>
      {posts.map(post => (<p key={post.id}> - {post.title}</p>))}
    </Container>
  )
}

export default UseeffectDataFetching
