import React, { useState, useEffect } from "react";

const ErrorThen = () => {
  const [users, setUsers] = useState([]);
  const [error, setError] = useState("");

  const fetchInfo = () => {
    
    fetch("https://jsonplaceholder.typicode.com/404")
      .then((res) => {
        if (res.ok) {
          return res.json();
        } else throw new Error("Sorry something went wrong");
      })

      .then((data) => setUsers(data))
      .catch((error) => {
        setError(error.message);
      });
  };

  useEffect(() => {
    fetchInfo();
  }, []);
  return (
    <div>
      ErrorThen
      {error && <p>{error}</p>}
      {users.length > 0 && (
        <ul>
          {users.map((user) => (
            <li key={user.id}>{user.name}</li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default ErrorThen;
