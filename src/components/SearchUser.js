import React, { useState } from "react"

const SearchUser = () => {
  const [users, setUsers] = useState([])

  const fetchData = e => {
    const query = e.target.value
    fetch(`https://jsonplaceholder.typicode.com/users?q=${query}`)
      .then(response => {
        return response.json()
      })
      .then(data => {
        setUsers(data)
      })
  }

  return (
    <div className="containeronchange">
      <h5>send a request to get data:</h5>
      <input onChange={fetchData} label="Search User" />
      {users.length > 0 && (
        <ul>
          {users.map(user => (
            <li key={user.id}>{user.name}</li>
          ))}
        </ul>
      )}
    </div>
  )
}

export default SearchUser