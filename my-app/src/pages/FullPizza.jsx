import React, { useState } from 'react';
import { useParams } from 'react-router';
import axios from 'axios';

const FullPizza = () => {
  const [pizza, setPizza] = useState();
  const { id } = useParams();

  React.useEffect(() => {
    async function fetchPizza() {
      try {
        const { data } = await axios.get('https://62b82c77f4cb8d63df59a96c.mockapi.io/items/' + id);
        setPizza(data);
      } catch {
        console.log('Произошла ошибка... Повторите попытку позже');
      }
    }
    fetchPizza();
  }, []);

  if (pizza) {
    return (
        <div className="container">
          <img src={pizza.imageUrl} />
          <h2>{pizza.title}</h2>
          <h4>{pizza.price} P</h4>
        </div>
      );
  }else{
      return( 
          <div className="container">
              <h1>Загрузка...</h1>
          </div>
       )
  }

};

export default FullPizza;
