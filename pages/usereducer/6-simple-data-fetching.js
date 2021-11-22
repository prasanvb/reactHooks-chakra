import React, {useEffect, useState} from 'react'
import { Container, Text } from '@chakra-ui/react'

const SimpleDataFetching = () => {

  const [posts, setPosts] = useState();
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState();

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts/1")
      .then(res => res.json())
      .then(data => {
        setLoading(false)
        setPosts(data)
        setError()
      })
      .catch(error => {
        console.log('error = ', error)
        setPosts()
        setLoading(false);
        setError('something went wrong check the console')
      })
  }, [])


  return (
    <Container p={5} m={5}>
      <Text fontSize={20} textDecoration="underline">Simple Data Fetching  using useState and useEffect</Text>
      <p>{loading && 'Loading...'}</p>
      <p>{!!posts && `Post Title = ${posts.title}`}</p>
      <p>{!!error && error}</p>
    </Container>
  )
}

export default SimpleDataFetching;