import React, { useState } from 'react';

function Categories({categoryId,setCategoryId}) {


  const categories = ['Все', 'Мясные', 'Вегетерианская', 'Гриль', 'Острые', 'Закрытые'];
  return (
    <>
      <div className="categories">
        <ul>
          {categories.map((elem, i) => {
            return (
              <li
                onClick={() => setCategoryId(i)} // добавление класса активности для категорий
                className={categoryId === i ? 'active' : ''}
                key={i}>
                {elem}
              </li>
            );
          })}
        </ul>
      </div>
    </>
  );
}

export default Categories;
