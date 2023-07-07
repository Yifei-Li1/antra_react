import { useEffect, useState } from 'react';
import axios from 'axios';
import { formatUserName } from './utils';
import './App.css';

function App() {
  const [users, setUsers] = useState([]);

  // Load the data from the server
  useEffect(() => {
    let mounted = true;
 
    const getUsers = async () => {
      const response = await axios.get('https://jsonplaceholder.typicode.com/users');
      if (mounted) {
        setUsers(response.data);
        console.log(response.data);
      }
    }
    getUsers();
  },[])
  
  return (
    <div>
     <ul>
       {users.map(item=><li key={item.id}>{item.username}</li>)}
     </ul>
    </div>
  );
}
export default App;