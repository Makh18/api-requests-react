import React,{useState,useEffect} from 'react'


const ErrorAsyncAwait = () => {
const[users, setUsers]=useState([]);
const[error, setError]=useState("");
 
const fetchUserInfo=async()=>{
    setError("")
    try{
        const res=await fetch("https://jsonplaceholder.typicode.com/404");
        if (!res.ok){
            throw new Error("somthening went wrong");
        }
        const data=await res.json();
        setUsers(data)
    }catch(error){
        setError(error.message)
    }
}
useEffect(()=>{
    fetchUserInfo();
},[]);


  return (
    <div>
        ErrorAsyncAwait
        {error && <p>{error}</p>}
        
        {users.map((item) => (
        <div key={item.id}>
          <p>{item.name}</p>
          <p>{item.username}</p>
          <p>{item.email}</p>
        </div>
      ))}
    </div>
  )
}

export default ErrorAsyncAwait