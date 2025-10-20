import { useState, useEffect } from 'react'
import axios from 'axios'

import Filter from "./components/Filter"
import PersonForm from './components/PersonForm'
import Persons from './components/Persons'

const App = () => {
  const [persons, setPersons] = useState([]) 
  useEffect(() => {
    console.log('effect')
    axios
      .get('http://localhost:3001/persons')
      .then(response => {
        console.log('promise fulfilled')
        console.log(response)
        setPersons(response.data)
      })
    }, [])

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