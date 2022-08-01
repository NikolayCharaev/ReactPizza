import React, { useState, useEffect } from 'react';
import Pagination from '../Pagination';
import Skeleton from '../PizzaBlock/Skeleton';
import PizzaBlock from '../PizzaBlock';
import Categories from '../Categories';
import Sort from '../Sort';
import { SearchContent } from '../App';
import { useContext } from 'react';
import { setCategoryId, setCurrentPage} from '../redux/slices/filterSlice';
import { useSelector, useDispatch } from 'react-redux';
import { store } from '../redux/store';
import axios from 'axios'


const Home = () => {
  const categoryId = useSelector((state) => state.filterSlice.categoryId);
  const sortType = useSelector((state) => state.filterSlice.sortProperty.sort);
  const currentPage = useSelector ((state) => state.filterSlice.currentPage)
  const dispatch = useDispatch()

  function onChangeCategory (id) {
    dispatch(setCategoryId(id))
  }

  const onChangePage = (number) => {
      dispatch (setCurrentPage(number))
  }
  

  const { searchValue } = useContext(SearchContent);
  const [pizza, allPizzess] = useState([]);
  const [isLoading, setIsLoading] = useState([true]); //флаг для скелетона
  // const [categoryId, setCategoryId] = useState(0); // работа с добавлением класса активности
  // const [sortType, setSortType] = useState({
  //   name: 'популярности',
  //   sort: 'rating',
  // }); // state для отображения выбранного метода сортировки
  // console.log(categoryId, sortType);

  useEffect(() => {
    const sortBy = sortType.replace('-', '');
    const order = sortType.includes('-') ? 'desc' : 'asc';
    const category = categoryId > 0 ? `category=${categoryId}` : '';
    const search = searchValue ? `&search=${searchValue}` : '';

    setIsLoading(true);
    axios.get(
      `https://62b82c77f4cb8d63df59a96c.mockapi.io/items?&page=${currentPage}&limit=4&${category}&sortBy=${sortBy}&order=${order}${search}`,
    )
      .then((data) => data.data)
      .then((item, i) => {
        allPizzess(item);
        setIsLoading(false);
      });
    window.scrollTo(0, 0);
  }, [categoryId, sortType, searchValue, currentPage]);

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
          <Categories categoryId={categoryId} setCategoryId={(id) => onChangeCategory(id)} />
          <Sort  />
        </div>
        <h2 className="content__title">Все пиццы</h2>
        <div className="content__items">{isLoading ? skeletons : pizzas}</div>
        <Pagination currentPage={currentPage} setPage={onChangePage} />
      </div>
    </>
  );
};

export default Home;
