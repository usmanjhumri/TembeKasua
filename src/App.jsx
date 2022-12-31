import { useState } from 'react'
import { Route, Routes } from 'react-router-dom'
import './App.css'
import Categories from './components/Categories/Categories'
import MainPage from './components/MainPage/MainPage'
// import Market from './components/Market/Market'

import SideBar from './components/SideBar/Sidebar'


function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">

      
      {/* <SideBar/> */}
      
      <Routes>
        <Route path='/' element={<SideBar childComponent={<MainPage/>}/>}/>
        <Route path='/Categories' element={<SideBar childComponent={<Categories/>}/>}/>
        {/* <Route path='/Markets' element={<SideBar childComponent={<Market/>}/>}/> */}
      </Routes>
     

    </div>
  )
}

export default App
