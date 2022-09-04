// import { useSelector } from 'react-redux';

// import { getFilter } from '../../redux/filterSlice';
// import {
//   useFetchContactsQuery,
//   useDeleteContactMutation,
// } from '../../services/contactsAPI';

// import css from './ContactList.module.css';

// export const ContactList = () => {
//   const { data: contacts } = useFetchContactsQuery();
//   const filter = useSelector(getFilter);
//   const [deleteContact] = useDeleteContactMutation();

//   const filterContacts = contacts?.filter(
//     contact =>
//       contact.name.toLowerCase().includes(filter.toLowerCase()) ||
//       contact.phone.includes(filter)
//   );
//   return (
//     <ul>
//       {contacts &&
//         filterContacts.map(({ id, name, phone }) => (
//           <li key={id}>
//             <p>
//               {name}: {phone}
//             </p>
//             <button
//               className={css.listDeleteButton}
//               type="button"
//               onClick={() => deleteContact(id)}
//             >
//               Delete
//             </button>
//           </li>
//         ))}
//     </ul>
//   );
// };
import * as React from 'react';
import { useSelector } from 'react-redux/es/exports';
import {
  useGetContactsQuery,
  useDeleteContactMutation,
} from 'services/contactsAPI';

function ContactList() {
  const { data } = useGetContactsQuery();
  const [deleteContact, { isFetching }] = useDeleteContactMutation();

  const filterValue = useSelector(state => state.filterValue.value);

  const getFilteredContacts = () => {
    if (!data) return;
    const filteredContactsArray = [...data].filter(
      contact =>
        contact.name.toLowerCase().includes(filterValue.toLowerCase()) ||
        contact.number.includes(filterValue)
    );
    return filteredContactsArray;
  };

  return (
    <ul className="contacts">
      {data &&
        getFilteredContacts().map(({ name, number, id }) => {
          return (
            <li key={id} className="contacts__item">
              <p>
                {name} : {number}
              </p>
              <button
                type="button"
                onClick={() => deleteContact(id)}
                disabled={isFetching}
              >
                Delete
              </button>
            </li>
          );
        })}
    </ul>
  );
}

export default ContactList;
