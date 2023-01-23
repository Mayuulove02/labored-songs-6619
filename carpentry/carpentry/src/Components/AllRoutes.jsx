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
import Admin from "../Pages/Admin/Admin";
import PrivateRoute from "./PrivateRoute";
import PageNotFound from "../Pages/PageNotFound";

const AllRoutes = () => {
  return (
    <div>
        <Routes>
            <Route path='/' element={<Home/>}></Route>
            <Route path='/login' element={<Login/>}></Route>
            <Route path='/products' element={<PrivateRoute><Products/></PrivateRoute>}></Route>
            <Route path='/cart/:id' element={<PrivateRoute><Cart /></PrivateRoute>}/>
            <Route path='/products/:id' element={<PrivateRoute><SingleProductsPage/></PrivateRoute>}></Route>
            <Route path="/payments" element={<PrivateRoute><Payment /></PrivateRoute>}/>
            <Route path="/checkout" element={<PrivateRoute>< OrderConfirm/></PrivateRoute>}/>
            <Route path="/admin" element={<Admin />}/>
            <Route path='*' element={<PageNotFound/>}></Route>
        </Routes>
    </div>
  )
}

export default AllRoutes


