import React from 'react';
import Header from '../Header';
import { useState, createContext } from 'react';

export const SearchContent = createContext();

const MainLayout = ({children}) => {
  const [searchValue, setSearchValue] = useState('');
  return (
    <div className="wrapper">
      <SearchContent.Provider value={{ searchValue, setSearchValue }}>
        <Header />
        </SearchContent.Provider>
        <div className="content">{children}</div>

    </div>
  );
};

export default MainLayout;
