// src/main.jsx
import { createRoot } from 'react-dom/client'
import App from './App.jsx' // Import the App component
import './index.css' // import the CSS file for styling

const root = createRoot(document.getElementById('root'))

root.render(<App />)