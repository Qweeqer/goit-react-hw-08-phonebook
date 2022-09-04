// import { useState } from 'react';

// import {
//   useFetchContactsQuery,
//   useAddContactMutation,
// } from '../../services/contactsAPI';

// import './ContactForm.module.css';

// export const ContactForm = () => {
//   const [formFields, setFormFields] = useState({
//     name: '',
//     phone: '',
//   });
//   const { data } = useFetchContactsQuery();

//   const [addContact] = useAddContactMutation();

//   const handleChange = event => {
//     const { name, value } = event.currentTarget;
//     setFormFields(prevState => ({ ...prevState, [name]: value }));
//   };

//   const reset = () => {
//     setFormFields({
//       name: '',
//       phone: '',
//     });
//   };

//   const handleSubmit = e => {
//     e.preventDefault();
//     const oldСontact = data.some(contact => contact.phone === formFields.phone);
//     if (oldСontact) {
//       return alert(`This phone ${formFields.phone} is already in contacts`);
//     }

//     addContact(formFields);
//     reset();
//   };

//   return (
//     <form onSubmit={handleSubmit}>
//       <input
//         type="text"
//         name="name"
//         value={formFields.name}
//         onChange={handleChange}
//         placeholder="Name"
//         pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
//         title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
//         required
//       />
//       <input
//         type="tel"
//         name="phone"
//         value={formFields.phone}
//         onChange={handleChange}
//         placeholder="Phone"
//         pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
//         title="Phone phone must be digits and can contain spaces, dashes, parentheses and can start with +. For example +380670000000"
//         required
//       />
//       <button className="button" type="submit">
//         Add contact
//       </button>
//     </form>
//   );
// };
import { useState } from 'react';
import '../App.module.css';
import './ContactForm.module.css';
import {
  useAddContactMutation,
  useGetContactsQuery,
} from 'services/contactsAPI';

const ContactForm = () => {
  const { data } = useGetContactsQuery();
  const [formFields, setFormFields] = useState({
    name: '',
    number: '',
  });

  const [addContact] = useAddContactMutation();

  const handleChange = event => {
    const { name, value } = event.currentTarget;
    setFormFields(prevState => ({ ...prevState, [name]: value }));
  };

  const reset = () => {
    setFormFields({
      name: '',
      number: '',
    });
  };

  const handleSubmit = e => {
    e.preventDefault();
    if (data.some(contact => contact.number === formFields.number)) {
      alert(`This phone ${formFields.number} is already in contacts`);
      return;
    }
    addContact(formFields);

    reset();
  };

  return (
    <form className="contacts-form" onSubmit={handleSubmit}>
      <input
        type="text"
        name="name"
        placeholder="Name"
        value={formFields.name}
        onChange={handleChange}
        pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
        title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
        required
      />
      <input
        type="tel"
        name="number"
        placeholder="Phone"
        value={formFields.number}
        onChange={handleChange}
        pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
        title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
        required
      />

      <button className="button" type="submit">
        Add contact
      </button>
    </form>
  );
};

export default ContactForm;
