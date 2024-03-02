import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import ShowProducts from './view/Product/ShowProducts';
import CreateProduct from './view/Product/CreateProduct';
import EditProduct from './view/Product/EditProduct';
import MenuUser from './layouts/MenuUser';
import Dashboard from './view/Home/Dashboard';
import Information from './components/Information';
import Login from './view/Auth/Login';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Dashboard />} />
          <Route path='/login' element={<Login />} />
          <Route path='/info' element={<Information />} />
          <Route path='/MenuUser' element={<MenuUser />} />
          <Route path='/show' element={<ShowProducts />} />
          <Route path='/create' element={<CreateProduct />} />
          <Route path='/edit/:id' element={<EditProduct />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
