import './App.css';
import {useState} from 'react';
import axios from 'axios';

function App() {
  const [test, setTest] = useState("");
  async function getUser() {
    try {
      const response = await axios.get('http://localhost:3000/api/users');
      console.log(response);
      setTest(response.data.user)
    } catch (error) {
      console.error(error);
    }
  }
  getUser();
  return (
    <div className="App">
      <p>{test}</p>
      
    </div>
  );
}

export default App;
