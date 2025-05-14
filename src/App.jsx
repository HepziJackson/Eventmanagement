import React from 'react'
import {BrowserRouter,Route,Routes} from 'react-router'
import Login from './Pages/Login'
import Signup from './Pages/Signup'
import Home from './Pages/Home'
import HomePage from './Pages/Homepage'
import Gallery1 from './Pages/Gallery1'
import Booking from './Pages/Booking'
import Service from './Pages/Service'





export default function App() {
  

  
  return (
    <>
<BrowserRouter>
<Routes>
<Route path='/' element={ <Login/>}/>
<Route path='/signup' element={ <Signup/>}/>
<Route path='/home' element={<Home/>}/>
<Route path='/Homepage' element={<HomePage/>}/>
<Route path='/Gallery1' element={<Gallery1/>}/>
<Route path='/booking' element={<Booking/>}/>
<Route path='/service' element={<Service/>}/>
</Routes>

</BrowserRouter>
    </>
  )
}

