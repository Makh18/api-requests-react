import React, { useState, useEffect } from "react";

const ReadData = () => {
  const [user, setUser] = useState([]);
  const id=1;
  //function to fetch data from api
  const fetchData = async () => {
    const res = await fetch(`https://jsonplaceholder.typicode.com/users?id=${id}`);
    const data = await res.json();
    return setUser(data[0].name);
  };
 useEffect(()=>{
  fetchData();
 },[])

  return (
    <div>

        Name: {user}
    </div>
     
  );

};

export default ReadData;
