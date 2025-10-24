import { useState, useEffect } from 'react'
import personsServices from './services/APIpersons'

import Filter from "./components/Filter"
import PersonForm from './components/PersonForm'
import Persons from './components/Persons'

const AddPersonNotification = ({message}) => {
  if (message === null) {
    return null
  }
  const addPersonStyle = {
    color: 'green',
    background: 'lightgre',
    fontSize: '20px',
    borderStyle: 'solid',
    borderRadius: '5px',
    padding: '10px',
    marginBottom: '10px'
  }
  return (
    <div style={addPersonStyle}>
      {message}
    </div>
  )
}

const App = () => {
  const [persons, setPersons] = useState([]) 
  const [mensage, setMessage] = useState(null)
  useEffect(() => {
    personsServices
      .getAll()
      .then(response => {
        //console.log('promise fulfilled')
        //console.log(response)
        setPersons(response)
      })
      .catch(error => {
        console.error('Error fetching persons:', error)
        alert('Failed to fetch persons from server')
      })
    }, [])

  const [findName, setFindName] = useState('')
  
  const eventChangeInput = (ev, seter) => seter(ev.target.value)

  return (
    <div>
      <h2>Phonebook</h2>

      <AddPersonNotification message={mensage} />

      <Filter eventChangeInput={eventChangeInput} setFindName={setFindName} findName={findName} />

      <h3>Add a new</h3>

      <PersonForm eventChangeInput = {eventChangeInput} setPersons={setPersons} persons={persons} setMessage={setMessage}/>

      <h3>Numbers</h3>

      <Persons persons={persons} setPersons={setPersons} findName={findName} />
    </div>
  )
}

export default App