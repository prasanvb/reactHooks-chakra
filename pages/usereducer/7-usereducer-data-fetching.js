import React,{useEffect, useReducer} from 'react'
import { Container, Text } from '@chakra-ui/react'

const initialState = {
  posts: null,
  loading: true,
  error: ''
}

const dataReducer = (currentState, action) => {
  switch(action.type){
    case 'FETCH SUCCESS':
      return {
        posts: action.payload,
        loading: false,
        error: ''
      }
    case 'FETCH FAILURE':
      return {
        posts: null,
        loading: false,
        error: "Something went wrong"
      }
  }
}

const UsereducerDataFetching = () => {

  const [currentState, dataDispatcher] = useReducer(dataReducer, initialState)

  useEffect(()=>{
    fetch('https://jsonplaceholder.typicode.com/posts/1')
      .then(res => res.json())
      .then(data => {
        dataDispatcher({type: 'FETCH SUCCESS', payload: data})
      })
      .catch(error => {
        console.log(error)
        dataDispatcher({type: 'FETCH FAILURE', payload: error})
      })
  },[])

  return (
    <Container p={5} m={5}>
      <Text fontSize={20} textDecoration="underline">Data Fetching using useReducer and useEffect</Text>
      {(currentState.loading)? 'Loading...' : ((currentState.posts)? `Post Title: ${currentState.posts?.title}` : null)}
      {(currentState.error)? currentState.error : null}
    </Container>
  )
}

export default UsereducerDataFetching
