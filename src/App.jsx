import { useState } from 'react'
import { Route, Routes } from 'react-router-dom'
import './App.css'
import MainPage from './components/MainPage/MainPage'

import SideBar from './components/SideBar/Sidebar'


function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">

      
      {/* <SideBar/> */}
      
      <Routes>
        <Route path='/' element={<SideBar childComponent={<MainPage/>}/>}/>
        <Route path='/aboutUs' element={<SideBar childComponent={"aboutus"}/>}/>
      </Routes>
     

    </div>
  )
}

export default App
