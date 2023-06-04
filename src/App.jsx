import React from 'react'
import ContactList from "./components/ContactList.jsx"
import { useState } from 'react'

export default function App() {
  const [selectedContactId, setSelectedContactId] = useState(null)

  return (
    <>
      {
        <ContactList setSelectedContactId={setSelectedContactId} selectedContactId={selectedContactId} />
      }
    </>
  );
}