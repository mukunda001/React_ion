
import { createRoot } from 'react-dom/client'
const root = createRoot(document.getElementById('root'))


function Firstname() {
  return(
      <div>
    <img src ="assets/react.svg" className="logo" width = "40px" alt = "React logo" />
    <h1>Fun Facts about React</h1>
    <ul className="facts">
      <li>Was first released in 2013</li>
      <li>Was originally created by Jordan Walke</li>
      <li>Has well over 100K stars on GitHub</li>
      <li>Is maintained by Facebook</li>
      <li>Powers thousands of enterprise apps, including mobile apps</li>
    </ul>

    <footer>
      <p>0 2026 React Facts. All rights reserved.</p>

    </footer>
  </div>
  )
}

root.render( < Firstname />)