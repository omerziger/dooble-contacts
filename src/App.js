import React, { useEffect, useState } from 'react';

import Navbar from './components/Navbar';
import ContactList from './components/ContactList';
import Footer from './components/Footer';
import getUsers from './services/RandomUserAPI';
import ContactsContext from './context/ContactsContext';
import Theme from './Theme';

export default function App() {
  const [contacts, setContacts] = useState({
    page: 0,
    list: [],
    status: 'idle',
    search: {
      value: '',
      gender: undefined,
    },
  });

  useEffect(() => {
    setContacts((prev) => ({ ...prev, status: 'pending' }));
    getUsers(1).then((results) =>
      setContacts((prev) => ({
        ...prev,
        page: 1,
        list: results,
        status: 'resolved',
      }))
    );
  }, []);

  return (
    <Theme>
      <ContactsContext.Provider value={{ contacts, setContacts }}>
        <Navbar />
        <ContactList />
        <Footer />
      </ContactsContext.Provider>
    </Theme>
  );
}
