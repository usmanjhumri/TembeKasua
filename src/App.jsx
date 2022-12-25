import { useState } from 'react'
import './App.css'
import NavBar from './components/NavBar/NavBar'

import PriNavbar from './components/PriNavbar/PriNavbar'
import SideBar from './components/SideBar/sidebar'


function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">

      <PriNavbar/>
      <NavBar/>
      <SideBar/>
     

    </div>
  )
}

export default App
