import {Routes,Route} from "react-router-dom";
import React from 'react'
import Home from "../Pages/Home";
import Login from "../Pages/Login";
import Products from "../Pages/Products";
import SingleProductsPage from "../Pages/SingleProductsPage";
import Cart from "../Pages/Cart";
// import PrivateRoute from "./PrivateRoute";
import Payment from "./Payment";
import OrderConfirm from "./OrderConfirm";

const AllRoutes = () => {
  return (
    <div>
        <Routes>
            <Route path='/' element={<Home/>}></Route>
            <Route path='/login' element={<Login/>}></Route>
            <Route path='/products' element={<Products/>}></Route>
            <Route path='/cart/:id' element={<Cart />}/>
            <Route path='/products/:id' element={<SingleProductsPage/>}></Route>
            <Route path="/payments" element={<Payment />}/>
            <Route path="/checkout" element={< OrderConfirm/>}/>
        </Routes>
    </div>
  )
}

export default AllRoutes


