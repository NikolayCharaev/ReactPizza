import React, { useEffect, useState } from 'react';
import './scss/app.scss';
import Header from './Header';
import Categories from './Categories';
import Sort from './Sort';
import PizzaBlock from './PizzaBlock';

// import AllPizzes from './assets/pizza.json'; // все пиццы

function App() {
  const [pizza, allPizzess] = useState([]);

  useEffect(() => {
    fetch('https://62b82c77f4cb8d63df59a96c.mockapi.io/items')
      .then((data) => data.json())
      .then((item, i) => allPizzess(item));
  }, []);

  return (
    <>
      <div className="wrapper">
        <Header />
        <div className="content">
          <div className="container">
            <div className="content__top">
              <Categories />
              <Sort />
            </div>
            <h2 className="content__title">Все пиццы</h2>
            <div className="content__items">
              {
                // рендер карточек с пиццами
                pizza.map((elem, i) => {
                  return (
                    <PizzaBlock key={i} {...elem} /> // укорачиваю пропсы с помощью Spread оператора
                  );
                })
              }
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
