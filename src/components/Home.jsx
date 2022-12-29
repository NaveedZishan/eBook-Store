import React, {createContext} from 'react'
import { Routes,Route } from 'react-router-dom'
import Display from './Display'
import Cart from './Cart'
// import { Link } from 'react-router-dom'
// import axios from 'axios'
export const UserContext=createContext()
function Home() {

// console.log(showbooks);

  return (
    <>
    {/* <h1> This is the Home</h1> */}
    
    <Routes>
    <Route path='/' element={<Display/>}/>
    <Route path='/cart' element={<Cart/>}   />
    
        </Routes>

    </>
  )
}

export default Home





