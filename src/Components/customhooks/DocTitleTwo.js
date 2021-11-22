import { Button } from '@chakra-ui/button';
import React, {useState, useEffect} from 'react'
import useDocTitleCountHook from '../../Hooks/useDocTitleCountHook'

const DocTitleTwo = () => {

  const [count, setCount] = useState(0);

  useDocTitleCountHook(count);

  return (
    <div>
      <p> counter = {count} </p>    
      <Button onClick={()=>setCount(old => old+1)}>Increment</Button>
    </div>
  )
}


export default DocTitleTwo