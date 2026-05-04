
 export default function Headerfile() {
  return (
    <header className = "header">
      <img src="/react_logo.png" className="logo" alt = "React Logo"/>
      <nav >
        <ul className="nav-list">
          <li className= "nav-list-item" >Pricing</li>
          <li className= "nav-list-item" >About</li>
          <li className= "nav-list-item" >Contact</li>
        </ul>
      </nav>
    </header>
  )
}