import './App.css';

import { useEffect, useState } from 'react';

//'https://jsonplaceholder.typicode.com/users'

export default function App() {

  const [users, setUsers] = useState([])

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then((response) => response.json())
      .then((data) => setUsers(data))
    }, [])    

  return (
    <ul style={{ padding: '30px' }}>
      {users.map((user) => (
        <li key={user.id}>{user.name}</li>
      ))}
    </ul>
  );
}

