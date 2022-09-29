import { useState,useEffect  } from 'react'

export default function useTimeout(delay) {
    const [ready,setReady] =useState(false);

    useEffect(() => {
      let timer = setTimeout(()=>{
        setReady(true)
      },delay)
    
      return () => {
       clearTimeout(timer);
      }
    }, [])
  
  return ready;
}
