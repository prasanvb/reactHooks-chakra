import {useEffect} from 'react'

const useDocTitleCountHook = (count) => {
  useEffect(() => {
    document.title = `counter - ${count}`;  
  }, [count])
}

export default useDocTitleCountHook
