import './App.css'
import { Route, Routes } from 'react-router-dom'
import AllProducts from './components/All Product'
import MainPage from './components/MainPage/MainPage'
import Categories from './components/Market'
import Markets from './components/marketPlace/idnex'
import MSB from './components/SideBar/MSB'




function App() {

  return (
    <div className="App">



      <Routes>
        <Route path='/' element={<MSB childComponent={<MainPage />} />} />
        <Route path='/Categories' element={<MSB childComponent={<Categories />} />} />
        <Route path='/Markets' element={<MSB childComponent={<Markets />} />} />
        <Route path='/allproducts' element={<MSB childComponent={<AllProducts />} />} />

      </Routes>


    </div>
  )
}

export default App
