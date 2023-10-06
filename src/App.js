import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';
import User from './user/User';
import axios from 'axios';


function App() {
  const BASE_URL = "https://reqres.in/api/users";

  const [name, setName] = useState("");
  const [users, setUsers] = useState([]);
  const [isLoading, setLoading] = useState(false)
  
  useEffect(() => {
    axios.get(BASE_URL).then(res => {
      setUsers(res.data.data)
      setLoading(true)
    })
  }, [])

  const nameHandl = (e) => {
    setName(e.target.value);
    setLoading(false)
    setLoading(true)
    
  }

  return (
    <div className="App">
      <input onChange={e => nameHandl(e)} value={name} type="text" class="user-name" placeholder='Enter name'></input>
      {isLoading && (
        users.map(obj => {
          if((obj.first_name + obj.last_name).toLowerCase().includes(name.toLowerCase())){
            return(
              <User avatar={obj.avatar} fn={obj.first_name} ln={obj.last_name} em={obj.email}/>
            )
          }
        })
      )}
      
    </div>
  );
}

export default App;
