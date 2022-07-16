import React, { createContext, useEffect, useState } from 'react';
import './scss/app.scss';
import Header from './Header';
import Home from './pages/Home';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import NotFound from './pages/NotFound';
import Cart from './pages/Cart';

export const SearchContent = createContext();

function App() {
  const [searchValue, setSearchValue] = useState('');

  return (
    <>
      <div className="wrapper">
        <SearchContent.Provider value={{ searchValue, setSearchValue }}>
          <Header />
          <div className="content">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="*" element={<NotFound />} />
              <Route path="/cart" element={<Cart />} />
            </Routes>
          </div>
        </SearchContent.Provider>
      </div>
    </>
  );
}

export default App;
