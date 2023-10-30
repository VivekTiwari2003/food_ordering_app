import React from 'react'
import Navbar from '../Components/Navbar'
import Categorymenu from '../Components/Categorymenu'
import Fooditem from '../Components/Fooditem'
import Cart from '../Components/Cart'

function Home() {
  return (
         <>
         <Navbar/>
         <Categorymenu/>
         <Fooditem/>
         <Cart/>
         </>
  )
}

export default Home