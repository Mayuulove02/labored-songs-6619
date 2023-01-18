import {Routes,Route} from "react-router-dom";
import React from 'react'
import Home from "../Pages/Home";
import Login from "../Pages/Login";
import Products from "../Pages/Products";
import SingleProductsPage from "../Pages/SingleProductsPage";

const AllRoutes = () => {
  return (
    <div>
        <Routes>
            <Route path='/' element={<Home/>}></Route>
            <Route path='/login' element={<Login/>}></Route>
            <Route path='/products' element={<Products/>}></Route>
            <Route path='/products/:product_id' element={<SingleProductsPage/>}></Route>
        </Routes>
    </div>
  )
}

export default AllRoutes


