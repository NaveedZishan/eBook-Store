import React, { Children, createContext, useContext,useEffect, useState } from 'react'
const UserContext=createContext()
function StatContext({children}) {
const[showbooks,setShowbooks]=useState([])
const[cart,setCart]=useState([])

useEffect(()=>{
fetch("http://localhost:3001/books")
.then((response)=>response.json())
.then((data)=>{
setShowbooks(data)

})

},[])

  return (
    <>
    <h1> This  is State context</h1>    
    <UserContext.Provider value={{
      showbooks,
      setShowbooks,
      cart,
      setCart,
      
      }} >
    {children}
    </UserContext.Provider>

    </>
  )
}
export const useStateContext = () => useContext(UserContext);
export default StatContext