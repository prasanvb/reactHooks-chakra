import { useState } from 'react'

const useCounter = (initialState, resolverValue) => {

  const [counterValue, setCounterValue] = useState(initialState)

  const increment = () => {
    setCounterValue(old => old + resolverValue)
  }

  const decrement = () => {
    setCounterValue(old => old - resolverValue)
  }

  const reset = () => {
    setCounterValue(initialState)
  }

  return [counterValue, increment, decrement, reset]
}

export default useCounter;