import { useState, useEffect } from 'react'
import personsServices from './services/APIpersons'

import Filter from "./components/Filter"
import PersonForm from './components/PersonForm'
import Persons from './components/Persons'


const Notification = ({message, error}) => {
  if (message === null) {
    return null
  }
  const style = {
    color: error ? 'red' : 'green',
    background: 'lightgre',
    fontSize: '20px',
    borderStyle: 'solid',
    borderRadius: '5px',
    padding: '10px',
    marginBottom: '10px'
  }
  return (
    <div style={style}>
      {message}
    </div>
  )
}

const App = () => {
  const [persons, setPersons] = useState([]) 
  const [mensage, setMessage] = useState(null)
  const [error, setError] = useState(false)

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

      <Notification message={mensage} error={error}/>

      <Filter eventChangeInput={eventChangeInput} setFindName={setFindName} findName={findName} />

      <h3>Add a new</h3>

      <PersonForm eventChangeInput = {eventChangeInput} setPersons={setPersons} persons={persons} setMessage={setMessage} setError={setError}/>

      <h3>Numbers</h3>

      <Persons persons={persons} setPersons={setPersons} findName={findName} setMessage={setMessage} setError={setError}/>
    </div>
  )
}

export default App