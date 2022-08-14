import React, { useRef, useCallback, useState } from 'react';
import styles from './Search.module.scss';
import debounce from 'lodash.debounce';
import { useDispatch } from 'react-redux';
import { setSearchValueData } from '../redux/slices/filterSlice';

const Search = () => {
  const dispatch = useDispatch()
  const [value, setValue] = useState('');
  const inputRef = useRef();

  const onClickClear = () => {
    dispatch(setSearchValueData(value))
    setValue('')
    inputRef.current.focus();
  };

  const updateSearchValue = useCallback(
    debounce((str) => {
      dispatch(setSearchValueData(str))
    }, 500),
    [],
  );

  const onChangeInput = (event) => {
    setValue(event.target.value);
    updateSearchValue(event.target.value)
  };
  return (
    <div className={styles.root}>
      <svg
        className={styles.icon}
        height="24"
        version="1.1"
        width="24"
        xmlns="http://www.w3.org/2000/svg">
        <g transform="translate(0 -1028.4)">
          <path
            d="m14.938 12.281-2.844 2.813 6.906 6.906 2.844-2.844-6.906-6.875z"
            fill="#95a5a6"
            transform="translate(0 1028.4)"
          />
          <path
            d="m15.562 1041.2c-0.473 1.3-1.472 2.4-2.75 2.9l2.188 2.3c1.16-0.7 2.137-1.7 2.812-2.9l-2.25-2.3z"
            fill="#7f8c8d"
          />
          <path
            d="m18 10a8 8 0 1 1 -16 0 8 8 0 1 1 16 0z"
            fill="#bdc3c7"
            transform="translate(0 1028.4)"
          />
          <path
            d="m15 10a5 5 0 1 1 -10 0 5 5 0 1 1 10 0z"
            fill="#ecf0f1"
            transform="translate(0 1028.4)"
          />
        </g>
      </svg>

      {value && (
        <svg
          className={styles.close}
          onClick={onClickClear}
          height="512px"
          id="Layer_1"
          version="1.1"
          viewBox="0 0 512 512"
          width="512px"
          xmlns="http://www.w3.org/2000/svg">
          <g>
            <path d="M256,33C132.3,33,32,133.3,32,257c0,123.7,100.3,224,224,224c123.7,0,224-100.3,224-224C480,133.3,379.7,33,256,33z    M364.3,332.5c1.5,1.5,2.3,3.5,2.3,5.6c0,2.1-0.8,4.2-2.3,5.6l-21.6,21.7c-1.6,1.6-3.6,2.3-5.6,2.3c-2,0-4.1-0.8-5.6-2.3L256,289.8   l-75.4,75.7c-1.5,1.6-3.6,2.3-5.6,2.3c-2,0-4.1-0.8-5.6-2.3l-21.6-21.7c-1.5-1.5-2.3-3.5-2.3-5.6c0-2.1,0.8-4.2,2.3-5.6l75.7-76   l-75.9-75c-3.1-3.1-3.1-8.2,0-11.3l21.6-21.7c1.5-1.5,3.5-2.3,5.6-2.3c2.1,0,4.1,0.8,5.6,2.3l75.7,74.7l75.7-74.7   c1.5-1.5,3.5-2.3,5.6-2.3c2.1,0,4.1,0.8,5.6,2.3l21.6,21.7c3.1,3.1,3.1,8.2,0,11.3l-75.9,75L364.3,332.5z" />
          </g>
        </svg>
      )}

      <input
        value={value}
        ref={inputRef}
        onChange={onChangeInput}
        className={styles.input}
        type="text"
        placeholder="Поиск пиццы..."
      />
    </div>
  );
};

export default Search;
