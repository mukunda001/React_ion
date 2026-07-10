// src/App.jsx
import Header from "./components/Header"
import Entry from "./components/Entry"
import data from "../data.js"

// We export ONE main component that contains all the others
export default function App() {

  const entries = data.map((entry) => 
   {
    return(
     <Entry
    key = {entry.id}
    {...entry}
    />)
  })


return (
  <>
  <Header/>
  <main className = "entries-list">
    {entries}
  </main>
  </>
) 
}
