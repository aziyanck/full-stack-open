import phoneService from './services/phonebook'
import { useState, useEffect } from 'react'

import './App.css'
import Filter from './components/Filter'
import PersonForm from './components/PersonForm'
import Persons from './components/Persons'


const App = () => {
  const [persons, setPersons] = useState([])

  const [filter, setFilter] = useState('')

  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')

  const filtered = persons.filter(person => person.name.toLowerCase().includes(filter.toLowerCase()))

  useEffect(() => {
    console.log('effect')
    phoneService
    .getAll()
    .then(persons => setPersons(persons))
  }, [])

  return (
    <div>
      <h1>Phonebook App</h1>
      < Filter setFilter={setFilter} />

      <h2>Add a new</h2>
      <PersonForm persons={persons} setPersons={setPersons} newName={newName} setNewName={setNewName} newNumber={newNumber} setNewNumber={setNewNumber} />

      <h2>Numbers</h2>
      <Persons filtered={filtered} />


    </div>
  )
}

export default App