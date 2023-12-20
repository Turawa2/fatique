import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
import Contact from "../pages/Contact";
import Table from "../admin/Table";
import History from "../admin/History";
import Admin from "../admin/Admin";
import Login from "../admin/Login";
import Form from '../admin/Form';
import AddProduct from "../admin/AddProduct";
import ProductList from "../admin/ProductList";


function RoutePage() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/table" element={<Table />} />
          <Route path="/history" element={<History />} />
          <Route path="/admin" element={<Admin />} />
          <Route path="/login" element={<Login />} />
          <Route path="/form" element={<Form />} />
          <Route path="/addProduct" element={<AddProduct />} />
          <Route path="/productList" element={<ProductList />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default RoutePage;
