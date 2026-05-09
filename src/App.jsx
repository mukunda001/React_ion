// src/App.jsx
import Header from "./components/Header"
import Entry from "./components/Entry"

// We export ONE main component that contains all the others
export default function App() {
  return (
    <>
      <Header/>
      <Entry/>
      <Entry/>
      <Entry/>
    </>
  )
} 