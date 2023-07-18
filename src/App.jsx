import React from 'react'
import './App.css'
import {Routes,Route} from 'react-router-dom'
import Home from './Pages/Home'
import AboutUs from './Pages/AboutUs'
import Contact from './Pages/Contact'
import Fasilities from './Pages/Fasilities'
import Featured from './Pages/Featured'
import FindDoctor from './Pages/FindDoctor'

export default function App() {
  return (
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/about' element={<AboutUs/>}/>
      <Route path='/contact' element={<Contact/>}/>
      <Route path='/fasilities' element={<Fasilities/>}/>
      <Route path='/featured' element={<Featured/>}/>
      <Route path='/finddoctor' element={<FindDoctor/>}/>
    </Routes>
  )
}
