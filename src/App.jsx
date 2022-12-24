import { useState } from 'react'
import './App.css'
import NavBar from './components/NavBar/NavBar'
import PriNavbar from './components/PriNavbar/PriNavbar'


function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">

      <PriNavbar/>
      <NavBar/>

    </div>
  )
}

export default App
