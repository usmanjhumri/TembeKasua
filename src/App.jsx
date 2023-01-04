import { useState } from 'react'
import { Route, Routes } from 'react-router-dom'
import './App.css'
import AllProducts from './components/All Product'
import MainPage from './components/MainPage/MainPage'
import Categories from './components/Market'
import Markets from './components/marketPlace/idnex'
import MSB from './components/SideBar/MSB'


// import SideBar from './components/SideBar/Sidebar'


function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">

      
      {/* <SideBar/> */}
      
      <Routes>
        <Route path='/' element={<MSB childComponent={<MainPage/>}/>}/>
        <Route path='/Categories' element={<MSB childComponent={<Categories/>}/>}/>
        <Route path='/Markets' element={<MSB childComponent={<Markets/>}/>}/>
        <Route path='/allproducts' element={<MSB childComponent={<AllProducts/>}/>}/>

      </Routes>
     

    </div>
  )
}

export default App
