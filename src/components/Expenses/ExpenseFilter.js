import React from 'react';

import './ExpenseFilter.css';

const ExpensesFilter = props => {
  function handleChange(e) {
    const yearValue = e.target.value;
    props.onChangeFilter(yearValue);
  }

  return (
    <div className="expenses-filter">
      <div className="expenses-filter__control">
        <label>Filter by year</label>
        <select onChange={handleChange} value={props.selectedYear}>
          <option value="2023">2023</option>
          <option value="2022">2022</option>
          <option value="2021">2021</option>
          <option value="2020">2020</option>
          <option value="2019">2019</option>
        </select>
      </div>
    </div>
  );
};

export default ExpensesFilter;