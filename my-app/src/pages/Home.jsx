import React, { useState, useEffect } from 'react';
import Pagination from '../Pagination';

import Skeleton from '../PizzaBlock/Skeleton';

import PizzaBlock from '../PizzaBlock';
import Categories from '../Categories';
import Sort from '../Sort';

const Home = ({ searchValue }) => {
  const [pizza, allPizzess] = useState([]);
  const [isLoading, setIsLoading] = useState([true]); //флаг для скелетона
  const [categoryId, setCategoryId] = useState(0); // работа с добавлением класса активности
  const [sortType, setSortType] = useState({
    name: 'популярности',
    sort: 'rating',
  }); // state для отображения выбранного метода сортировки
  const[page,setPage] = useState(1)
  // console.log(categoryId, sortType);

  useEffect(() => {
    const sortBy = sortType.sort.replace('-', '');
    const order = sortType.sort.includes('-') ? 'desc' : 'asc';
    const category = categoryId > 0 ? `category=${categoryId}` : '';
    const search = searchValue ? `&search=${searchValue}` : '';


    setIsLoading(true);
    fetch(
      `https://62b82c77f4cb8d63df59a96c.mockapi.io/items?&page=${page}&limit=4${category}&sortBy=${sortBy}&order=${
        order 
      }${search}`,
    )
      .then((data) => data.json())
      .then((item, i) => {
        allPizzess(item);
        setIsLoading(false);
      });
    window.scrollTo(0, 0);
  }, [categoryId, sortType, searchValue,page]);

  const skeletons = [...new Array(6)].map((elem, i) => {
    // фейковый массив для рендеринга скелетона
    return <Skeleton key={i} />;
  });
  const pizzas = pizza.map((elem, i) => {
    return <PizzaBlock key={i} {...elem} />;
  });

  return (
    <>
      <div className="container">
        <div className="content__top">
          <Categories categoryId={categoryId} setCategoryId={(id) => setCategoryId(id)} />
          <Sort sortType={sortType} setSortType={(id) => setSortType(id)} />
        </div>
        <h2 className="content__title">Все пиццы</h2>
        <div className="content__items">{isLoading ? skeletons : pizzas}</div>
        <Pagination setPage={(num) => setPage(num)}/>
      </div>
    </>
  );
};

export default Home;
