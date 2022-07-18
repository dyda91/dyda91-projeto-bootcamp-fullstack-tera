import React, { useEffect, useState, useContext} from 'react'
import { AuthContext } from '../../context/auth'

import { getUsers } from '../../services/api';

export default function UserPage() {
  const { logout } = useContext(AuthContext);
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    (async () => {
      const response = await getUsers();
      setUsers(response.data);
      setLoading(false);
    }
    )();
  }, []);

  const handleLogout = () => {
    logout();
  }

  if(loading) {
    return <div className="loading">Carregando dados...</div>;
  }
  return (
    <div>
      <h1>Home Page</h1>
      <button onClick={handleLogout}>Logout</button>
      <ul>
       {
       users.map((user) => (
          <li key={user._id}>
            {users._id} - {users._email}
          </li>))
        }
      </ul>
    </div>    
  )
}
