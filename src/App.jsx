// src/App.jsx
import Navbar from "./components/Navbar"
import Main from"./components/Main"

// We export ONE main component that contains all the others
export default function App() {
  return (
    <>
      <Navbar/>
      <Main/>
    </>
  )
}