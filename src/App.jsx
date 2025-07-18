import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import "./App.css"
import Layout from './page/layout/Layout'
import Product from './page/product/Product'
import User from './page/user/User'
import Detil from './page/detil/Detil'
import Userinfo from './page/userinformation/Userinfo'

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Layout/>}>
          <Route path='/product' element={<Product />}></Route>
          <Route path='/user' element={<User />}></Route> 
          <Route path='/product/:id' element={<Detil />}></Route> 
          <Route path='/user/:id' element={<Userinfo />}></Route> 
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App