import Section from './Section';
import ContactForm from './ContactForm';
import ContactList from './ContactList';
import Filter from './Filter';
import Notification from './Notification';
import styles from './Filter/Filter.module.css';

export default function App({ items }) {
  // const [contacts, setContacts] = useState(JSON.parse(localStorage.getItem('contacts')) ?? []);
  // const [filter, setFilter] = useState('');

  // useEffect(() => {
  //   localStorage.setItem('contacts', JSON.stringify(contacts));
  // }, [contacts]);

  // const addContact = ({ name, number }) => {
  //   const normalizedName = name.toLowerCase();
  //   const checkContact = contacts.some(contact => contact.name.toLowerCase() === normalizedName);

  //   if (checkContact) {
  //     alert(`${name} is already in contacts`);
  //     return;
  //   }

  //   const contact = {
  //     id: nanoid(),
  //     name: name,
  //     number: number,
  //   };

  //   setContacts(prevContacts => [...prevContacts, contact]);
  // };

  // const getVisibleContacts = () => {
  //   const normalizedFilter = filter.toLowerCase();
  //   return contacts.filter(contact => contact.name.toLowerCase().includes(normalizedFilter));
  // };

  // const changeFilter = evt => {
  //   setFilter(evt.target.value.trim());
  // };

  // const deleteContact = contactId => {
  //   setContacts(prevContacts => prevContacts.filter(contact => contact.id !== contactId));
  // };

  // const visibleContacts = getVisibleContacts();

  return (
    <div
      style={{
        alignItems: 'center',
        justifyContent: 'space-evenly',
      }}
    >
      <Section title="Phonebook">
        <ContactForm />
      </Section>

      <Section title="Contacts">
        {items.length > 0 ? (
          <>
            <div className={styles.filter}>All contacts: {items.length}</div>
            <Filter />
            <ContactList />
          </>
        ) : (
          <Notification message="There are no contacts yet. Let's create a new one!" />
        )}
      </Section>
    </div>
  );
}

//   return (
//     <>
//       <Section title={'Phonebook'}>
//         <ContactForm />
//       </Section>
//       <Section title={'Contacts'}>
//         <Filter />
//         <ContactList />
//       </Section>
//     </>
//   );
// }
