import './App.css';
import {useState, useEffect} from 'react';
import axios from 'axios';

function App() {
  const [test, setTest] = useState([]);
  useEffect(async () => {
    const response = await axios.get('https://jsonplaceholder.typicode.com/posts');
    // console.log(response);
    setTest(response.data)
  }, [])

  return (
    <div className="App">
      <p>hello</p>
      <ul>
        {test.map(i => <li key={i.id}>{i.title}</li>)}
      </ul>
    </div>
  );
}

export default App;
