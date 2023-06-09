import React, { useContext, useState } from 'react'
import contactContext from '../../contexts/ContactContext/ContactContext'
import ContactCard from '../ContactCard/ContactCard'
import './ContactList.css'
const ContactList = ({ contacts }) => {
  const ctxContact = useContext(contactContext)
  const [search, setSearch] = useState('')
  const filterContact = ctxContact.contacts.filter((item) =>
    item.name.toLowerCase().includes(search.toLowerCase()),
  )
  return (
    <div>
      <h3>Contact List</h3>
      <input
        type="text"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
      Filter Contact
      <div className="contact-list">
        {filterContact.map((item) => (
          <ContactCard key={item.id} card={item}></ContactCard>
        ))}
      </div>
    </div>
  )
}

export default ContactList
