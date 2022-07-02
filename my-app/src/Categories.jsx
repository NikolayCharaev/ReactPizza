import React, { useState } from 'react';

function Categories() {
  const [activeIndex, setActiveIndex] = useState(0); // работа с добавлением класса активности

  const categories = ['Все', 'Мясные', 'Вегетерианская', 'Гриль', 'Острые', 'Закрытые'];
  return (
    <>
      <div className="categories">
        <ul>
          {categories.map((elem, i) => {
            return (
              <li
                onClick={() => setActiveIndex(i)} // добавление класса активности для категорий
                className={activeIndex === i ? 'active' : ''}
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
