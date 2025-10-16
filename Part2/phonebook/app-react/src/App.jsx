import { useState } from 'react'

import Filter from "./components/Filter"
import PersonForm from './components/PersonForm'
import Persons from './components/Persons'

const App = () => {
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas', number: '040-123456',},
    { name: 'Ada Lovelace', number: '39-44-5323523' },
    { name: 'Dan Abramov', number: '12-43-234345' },
    { name: 'Mary Poppendieck', number: '39-23-6423122'}
  ]) 

  const [findName, setFindName] = useState('')
  
  const eventChangeInput = (ev, seter) => seter(ev.target.value)

  return (
    <div>
      <h2>Phonebook</h2>

      <Filter eventChangeInput={eventChangeInput} setFindName={setFindName} findName={findName} />

      <h3>Add a new</h3>

      <PersonForm eventChangeInput = {eventChangeInput} setPersons={setPersons} persons={persons}/>

      <h3>Numbers</h3>

      <Persons persons={persons} findName={findName} />
    </div>
  )
}

export default App