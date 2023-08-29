import React, { useEffect, useState } from "react";

const GetData = () => {
  const [users, setUsers] = useState([]);
  const [isLoading, setIsLoading] = useState(false)

  const getData = async () => {
    setIsLoading(true)

    const resp = await fetch("https://jsonplaceholder.typicode.com/users");
    const data = await resp.json();
    setIsLoading(false)

    return setUsers(data);
  };

  useEffect(() => {
    getData();
  }, []);
  return (
    <div className="container">
    {isLoading && <p>Loading...</p>}
      GetData
      {users.map((item) => (
        <ul>
          <li key={item.id}>{item.name}</li>
        </ul>
      ))}
    </div>
  );
};

export default GetData;
