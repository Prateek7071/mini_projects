import { useState } from 'react'
import './App.css'
import axios from 'axios';
import { useEffect } from 'react';

function App() {
  
  const [jokes, setJokes] = useState([])

  useEffect(() => {
    axios.get("https://localhost:8008/joke")
      .then((res) => {
        setJokes(res.data)
      })
      .catch((error) => {
        console.log(error)
      })
  }, [])

  return (
    <>
      <h1>Fullstack</h1>
      <p>Jokes: { jokes.length }</p>
      {
        jokes.map((joke) => {
          <div key={joke.id}>
            <h3>
              {joke.title}
            </h3>
            <p>
              {joke.content}
            </p>
          </div>
        })
      }
    </>
  )
}

export default App
