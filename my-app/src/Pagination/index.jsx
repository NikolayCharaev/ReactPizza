import React, { useState } from 'react';
import ReactPaginate from 'react-paginate';
import styles from './pagination.module.scss';

const Pagination = ({ currentPage,setPage}) => {
  return (
    <div>
      <ReactPaginate
        className={styles.root}
        breakLabel="..."
        nextLabel=">"
        onPageChange={(elem) => setPage(elem.selected + 1)}
        pageRangeDisplayed={4}
        pageCount={3}
        previousLabel="<"
        forcePage={currentPage - 1}
        renderOnZeroPageCount={null}
      />
    </div>
  );
};

export default Pagination;
