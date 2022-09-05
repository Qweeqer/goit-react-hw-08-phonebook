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
// import '../../components/ContactForm/ContactForm.module.css';
import { useDispatch, useSelector } from 'react-redux/es/exports';
import { changeFilterValue } from '../../redux/contactsSlice';

const Filter = () => {
  const filterValue = useSelector(state => state.filterValue.value);
  const dispatch = useDispatch();
  return (
    <label>
      <input
        name="filter"
        value={filterValue}
        placeholder="Find contacts by name or phone"
        onChange={e => {
          dispatch(changeFilterValue(e.currentTarget.value));
        }}
      ></input>
    </label>
  );
};

export default Filter;
