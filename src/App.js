import React from 'react';
import ContactList from './components/ContactList/ContactList';
import Filter from './components/Filter/Filter';
import Section from "./components/Section/Section";
import ContactForm from "./components/ContactForm/ContactForm";


// class App extends Component {

//   state = {
//     contacts: [
//       { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
//       { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
//       { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
//       { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
//     ],
//     filter: '',
//   };
  
//   addContact = (name, number) => {
//     const newContact = {
//       id: shortid.generate(),
//       name,
//       number,
//     };
//     const { contacts } = this.state;
//     const includesContact = contacts.find(
//       (contact) => contact.name === newContact.name
//     );

//     includesContact
//       ? alert(`${includesContact.name} is already in contacts`)
//       : this.setState(({ contacts }) => ({
//           contacts: [...contacts,newContact],
//         }));
//   };

//   changeFilter = (e) => {
//     this.setState({ filter: e.currentTarget.value });
//   };

//    visibleContacts = () => {
//     const { filter, contacts } = this.state;
//     const normalizedFilter = filter.toLowerCase();

//     return contacts.filter((contact) =>
//       contact.name.toLowerCase().includes(normalizedFilter)
//     );
//    };
  
//   deleteContact = (contactId) => {
//        this.setState(({ contacts }) => ({
//       contacts: contacts.filter((contact) => contact.id !== contactId),
//     }));
//   };

//   componentDidMount() {
//     const parsedContacts = JSON.parse(localStorage.getItem('contacts'));

//     if (parsedContacts) {
//       this.setState({ contacts: parsedContacts });
//     }
//   }

//   componentDidUpdate(prevProps, prevState) {
//     // console.log('componentDidUpdate');
//     if (this.state.contacts !== prevState.contacts) {
//       // console.log('Update field contacts');
//       localStorage.setItem('contacts', JSON.stringify(this.state.contacts));
//     }
//   }

//   render() {
//     const { filter } = this.state;

const App = () => {
  return (
    <div>
      <Section title="Phonebook">
        <ContactForm />
      </Section>
      <Section title="Contacts">
        <Filter />
        <ContactList />
      </Section>
    </div>
  );
};


export default App;
