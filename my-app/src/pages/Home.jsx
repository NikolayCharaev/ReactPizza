import React, { useEffect } from 'react';
import Pagination from '../Pagination';
import Skeleton from '../PizzaBlock/Skeleton';
import PizzaBlock from '../PizzaBlock';
import { Link } from 'react-router-dom';
import Categories from '../Categories';
import Sort from '../Sort';
import { setCategoryId, setCurrentPage } from '../redux/slices/filterSlice';
import { useSelector, useDispatch } from 'react-redux';
import { fetchPizzas } from '../redux/slices/pizzasSlice';
import { selectorCart } from '../redux/slices/pizzasSlice';

const Home = () => {
  const categoryId = useSelector((state) => state.filterSlice.categoryId);
  const sortType = useSelector((state) => state.filterSlice.sortProperty.sort);
  const currentPage = useSelector((state) => state.filterSlice.currentPage);
  const searchValue = useSelector((state) => state.filterSlice.searchValue);

  const { items, status } = useSelector(selectorCart);
  const dispatch = useDispatch();

  function onChangeCategory(id) {
    dispatch(setCategoryId(id));
  }

  const onChangePage = (number) => {
    dispatch(setCurrentPage(number));
  };

  const getPizzas = async () => {
    const sortBy = sortType.replace('-', '');
    const order = sortType.includes('-') ? 'desc' : 'asc';
    const category = categoryId > 0 ? `category=${categoryId}` : '';
    const search = searchValue ? `&search=${searchValue}` : '';

    dispatch(
      fetchPizzas({
        sortBy,
        order,
        category,
        search,
        currentPage,
      }),
    );

    window.scrollTo(0, 0);
  };

  useEffect(() => {
    getPizzas();
  }, [categoryId, sortType, searchValue, currentPage]);

  const skeletons = [...new Array(6)].map((elem, i) => {
    // фейковый массив для рендеринга скелетона
    return <Skeleton key={i} />;
  });
  const pizzas = items.map((elem, i) => {
    return (
      <Link key={i} to={`/pizza/${elem.id}`}>
        <PizzaBlock {...elem} />
      </Link>
    );
  });

  return (
    <>
      <div className="container">
        <div className="content__top">
          <Categories categoryId={categoryId} setCategoryId={(id) => onChangeCategory(id)} />
          <Sort />
        </div>
        <h2 className="content__title">Все пиццы</h2>
        {status === 'error' ? (
          <div className="content__error-info">
            <h2>Произошла ошибка =(</h2>
            <p>повторите попытку позже.</p>
          </div>
        ) : (
          <div className="content__items">{status === 'loading' ? skeletons : pizzas}</div>
        )}
        <Pagination currentPage={currentPage} setPage={onChangePage} />
      </div>
    </>
  );
};

export default Home;
