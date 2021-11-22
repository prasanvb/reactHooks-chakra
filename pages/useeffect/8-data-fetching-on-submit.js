import React, { useEffect, useState } from 'react'
import { Button,Input,Text,Container } from "@chakra-ui/react";

const UseeffectDataFetchingOnSubmit = () => {
  const [post, setPost] = useState({});
  const [id, setId] = useState(0);
  const [isButtonClicked, setButtonClicked] = useState(0);

  useEffect(()=> {
  if(isButtonClicked !== ''){
    if((isButtonClicked > 0) && (isButtonClicked < 101)){
      fetch(`https://jsonplaceholder.typicode.com/posts/${isButtonClicked}`)
      .then(res=>res.json())
      .then(data => setPost(data));
    } else {
      setPost('');
    }
  } else {
    setPost('');
  }
  },[isButtonClicked])

  const onSubmit = () => {
    setButtonClicked(id);
  }

  return (
    <Container p={5} m={5}>
    <Text fontSize={24} textDecoration="underline">UseEffect Data Fetching on Input Entry</Text>
    <Input value={id} onChange={(e) => setId(e.target.value)} />
    <Button onClick={onSubmit}>submit</Button>
    {<p> Id : {post.id} </p>}
    {<p> Title : {post.title} </p>}
    </Container>
  )
}

export default UseeffectDataFetchingOnSubmit;