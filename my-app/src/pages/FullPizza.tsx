import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router';
import { Link } from 'react-router-dom';
import axios from 'axios';

const FullPizza: React.FC = () => {

  const navigate = useNavigate();
  const [pizza, setPizza] = useState<{
    imageUrl : string,
    title : string,
    price : number
  }>();
  const { id } = useParams();


  useEffect(() => {
    async function fetchPizzas() {
      try {
        const { data } = await axios.get(`https://62b82c77f4cb8d63df59a96c.mockapi.io/items/${id}`);
        setPizza(data);
      } catch {
        navigate('/');
        alert('Такой пиццы нет :(');
      }
    }
    fetchPizzas();
  }, []);

  return (
    <div className="container">
      {pizza ? (
        <div className="pizza__content">
          <img src={pizza.imageUrl} alt="" />
          <h1>{pizza.title}</h1>
          <div className='wrapper__info'>
          <p>{pizza.price} ₽</p>
          <Link to="/" className="button button--black">
            <span>Вернуться назад</span>
          </Link>
          </div>
        </div>
      ) : (
        <h1>Загрузка...</h1>
      )}
    </div>
  );
};


export default FullPizza;




