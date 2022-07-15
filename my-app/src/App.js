import React, { useEffect, useState } from 'react';
import './scss/app.scss';
import Header from './Header';
import Home from './pages/Home';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import NotFound from './pages/NotFound';
import Cart from './pages/Cart';

function App() {
  const [searchValue,setSearchValue] = useState('')
 
  return (
    <>
      <div className="wrapper">
        <Header searchValue={searchValue} setSearchValue={setSearchValue}/>
        <div className="content">
          {/* <div className="container"> */}
            <Routes>
              <Route path="/" element={<Home  searchValue={searchValue}/>} />
              <Route path="*" element={<NotFound />} />
              <Route path="/cart" element={<Cart />} />
            </Routes>
          {/* </div> */}
        </div>
      </div>
    </>
  );
}

export default App;
