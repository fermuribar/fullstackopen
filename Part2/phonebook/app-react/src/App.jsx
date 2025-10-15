import { useState } from 'react'

const App = () => {
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas',
      number: '040-1234567'
    }
  ]) 
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')

  const eventChangeName = (e) => setNewName(e.target.value)
  const eventChangeNumber = (e) => setNewNumber(e.target.value)
  const eventAddPerson = (e) => {
    e.preventDefault()
    const newPerson = { 
      name: newName,
      number: newNumber
    }
    if (persons.some( person => person.name === newPerson.name)) alert(`${newName} is already added to phonebook`)
    else setPersons(persons.concat(newPerson))
    setNewName("")
    setNewNumber("")
  }

  return (
    <div onSubmit={eventAddPerson}>
      <h2>Phonebook</h2>
      <form>
        <div>
          name: <input value = {newName} onChange={eventChangeName}/>
        </div>
        <div>
          number: <input value = {newNumber} onChange={eventChangeNumber}/>
        </div>
        <div>
          <button type="submit">add</button>
          {/* <div>debug: {newName}</div> */}
        </div>
      </form>
      <h2>Numbers</h2>
      {persons.map((person, idx) => <div key ={person.name}>{person.name} {person.number}</div>)}
    </div>
  )
}

export default App