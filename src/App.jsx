// src/App.jsx
import Joke from "./components/joke.jsx"
import jokesData from "./jokesdata.js"

// We export ONE main component that contains all the others
export default function App() {

  const jokeElements = jokesData.map((joke) =>  <Joke setup = {joke.setup} punchline = {joke.punchline}/>)
  
  return (
  <main>

   {jokeElements}

  </main>
  )
}  