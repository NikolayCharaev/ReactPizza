import React, { useState, useEffect } from 'react';

import Skeleton from '../PizzaBlock/Skeleton';

import PizzaBlock from '../PizzaBlock';
import Categories from '../Categories';
import Sort from '../Sort';

const Home = () => {
  const [pizza, allPizzess] = useState([]);
  const [isLoading, setIsLoading] = useState([true]); //флаг для скелетона
  useEffect(() => {
    fetch('https://62b82c77f4cb8d63df59a96c.mockapi.io/items')
      .then((data) => data.json())
      .then((item, i) => {
        allPizzess(item);
        setIsLoading(false);
      });
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      <div className="container">
        <div className="content__top">
          <Categories />
          <Sort />
        </div>
        <h2 className="content__title">Все пиццы</h2>
        <div className="content__items">
          {isLoading
            ? [...new Array(6)].map((elem, i) => {
                // фейковый массив для рендеринга скелетона
                return <Skeleton key={i} />;
              })
            : pizza.map((elem, i) => {
                return <PizzaBlock key={i} {...elem} />;
              })}
        </div>
      </div>
    </>
  );
};

export default Home;
