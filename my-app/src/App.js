import React from 'react';
import './scss/app.scss';
import Header from './Header';
import Categories from './Categories';
import Sort from './Sort';
import PizzaBlock from './PizzaBlock';

function App() {
  return (
    <>
      <div className="wrapper">
        <Header />
        <div className="content">
          <div className="container">
            <div className="content__top">
              <Categories />
              <Sort/>
            </div>
            <h2 className="content__title">Все пиццы</h2>
            <div className="content__items">
             <PizzaBlock title='Маргарита' price={700}/>
             <PizzaBlock title='Деревенская' price={670}/>
             <PizzaBlock title='Чиабатта' price={290}/>
             <PizzaBlock title='С лососем' price={400}/>
             
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;