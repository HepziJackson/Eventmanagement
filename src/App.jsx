import React from 'react'
import {BrowserRouter,Route,Routes} from 'react-router'
import Login from './Pages/Login'
import Signup from './Pages/Signup'
import Home from './Pages/Home'
import Gallery1 from './Pages/Gallery1'
import Booking from './Pages/Booking'
import Birthday from './Pages/Birthday'
import Wedding from './Pages/Wedding'
import Hom from './Pages/Hom'





export default function App() {
  

  
  return (
    <>
<BrowserRouter>
<Routes>
<Route path='/' element={ <Login/>}/>
<Route path='/signup' element={ <Signup/>}/>
<Route path='/home' element={<Home/>}/>
<Route path='/Gallery1' element={<Gallery1/>}/>
<Route path='/booking' element={<Booking/>}/>
<Route path='/hom' element={<Hom/>}/>
<Route path='/birthday' element={<Birthday/>}/>
<Route path='/wedding' element={<Wedding/>}/>
</Routes>

</BrowserRouter>
    </>
  )
}

