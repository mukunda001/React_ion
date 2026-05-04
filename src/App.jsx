// src/App.jsx
import Headerfile from "./Header"
import Footer from "./Footer"

function MainContent() {
  return (
    <main>
      <h1>Fun Facts about React</h1>
      <ul className="facts">
        <li>Was first released in 2013</li>
        <li>Was originally created by Jordan Walke</li>
        <li>Has well over 100K stars on GitHub</li>
        <li>Is maintained by Meta</li>
        <li>Powers thousands of enterprise apps, including mobile apps</li>
      </ul>
    </main>
  )
}



// We export ONE main component that contains all the others
export default function App() {
  return (
    <>
      <Headerfile />
      <MainContent />
      <Footer />
    </>
  )
}