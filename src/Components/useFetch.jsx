import { useState } from 'react'
import axios from "axios";
import { useEffect } from 'react';
export default function useFetch(url) {

  const [data,setData] = useState([]);
  const [loading,setLoading] = useState(false);
  const [error,setError] = useState(false);

  
  const fetchData=()=>{
      setLoading(true);
     axios.get(url).then((res)=>{
        setLoading(false);
        setData(res.data.items)
     }).catch((err)=>{
        setError(true);
        setLoading(false);
     })
  }
 
  useEffect(()=>{
     fetchData();
  },[url])

  return {loading,error,data};
}
