import React, { useState } from 'react'
import useDebouce from '../Components/useDebouce';
import useFetch from '../Components/useFetch';
import useThrottle from '../Components/useThrottle';
import useThrotelling from '../Components/useThrottle';

const GitHub = () => {
    const [page,setPage] =useState(0);
    const [query,setQuery] = useState("");
    const [x,setX] = useState("");

    const handleInput =(e)=>{
        setQuery(e.target.value)
    }
    // useDebouceing Hook working fine 

    useDebouce(()=>{
        console.log(query)
        setX(query);
    },2000)

    // useThrottle Custom-Hook

      useThrottle(()=>{
      setX(query);
      console.log(query)
      },1000)
      
    const {loading,error,data} = useFetch(`https://api.github.com/search/users?q=${x || "Masai"}&&page=${page}&per_page=5`);
 
    
    const handleChange = value => {
       if(page+value<1){
        return false
       }
       setPage(page+value)
    }

  return (
    <div>
         <h1>useFetch</h1>
        <input type="text" placeholder='Search ' value={query} onChange={handleInput}/>
        <h4>{loading && "...Loading"}</h4>
        <h4>{error && "...error"}</h4>
        <button onClick={()=>handleChange(-1)}>Prev</button>
        <button onClick={()=>handleChange(1)}>Next</button>
        <div>
          { !loading &&
            data.map((items)=>{
              return  <div key={items.id} style={{display:"flex",width:"240px",justifyContent:"space-between",alignItems:"center",marginBottom:"10px"}}>
                <img src={items.avatar_url} width="100px" style={{borderRadius:"50%"}} alt="img" />
                <h3>{(items.login).toUpperCase()}</h3>
              </div>
            })
          }
        </div>
    </div>
  )
}

export default GitHub