import React, { useEffect, useState } from 'react';
import Navbar from './layout/Navbar';
import ContactList from './components/ContactList';
import Footer from './layout/Footer';
import getUsers from './services/RandomUserAPI';
import Theme from './Theme';
import StoreContext from './context/StoreContext';

export default function App() {
  const [store, setStore] = useState({
    page: 0,
    list: [],
    status: 'idle',
    search: '',
    filter: {
      gender: '',
      age: [0, 100],
    },
  });

  useEffect(() => {
    setStore((prev) => ({ ...prev, status: 'pending' }));
    getUsers(1).then((results) =>
      setStore((prev) => ({
        ...prev,
        page: 1,
        list: results,
        status: 'resolved',
      }))
    );
  }, [setStore]);

  return (
    <Theme>
      <StoreContext.Provider value={{ store, setStore }}>
        <Navbar />
        <ContactList />
        <Footer />
      </StoreContext.Provider>
    </Theme>
  );
}
