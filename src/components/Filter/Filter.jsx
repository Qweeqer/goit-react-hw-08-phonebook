// import { useSelector, useDispatch } from 'react-redux';

// import { filteredContacts, getFilter } from '../../redux/filterSlice';

// import './Filter.module.css';

// export const Filter = () => {
//   const filter = useSelector(getFilter);
//   const dispatch = useDispatch();
//   return (
//     <label>
//       <input
//         type="text"
//         name="filter"
//         value={filter}
//         onChange={e => dispatch(filteredContacts(e.target.value))}
//         placeholder="Find contacts by name or phone"
//       />
//     </label>
//   );
// };
import React from 'react';
import './Filter.module.css';
import s from './Filter.module.css';
import { useDispatch, useSelector } from 'react-redux/es/exports';
import { changeFilterValue } from '../../redux/contactsSlice';

const Filter = () => {
  const filterValue = useSelector(state => state.filterValue.value);
  const dispatch = useDispatch();
  return (
    <div className={s.filterContainer}>
      <p>Find contacts by name</p>
      <input
        className={s.filterInput}
        name="filter"
        value={filterValue}
        onChange={e => {
          dispatch(changeFilterValue(e.currentTarget.value));
        }}
      ></input>
    </div>
  );
};

export default Filter;
