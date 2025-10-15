import { useState } from 'react'

const App = () => {
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas', number: '040-123456',},
    { name: 'Ada Lovelace', number: '39-44-5323523' },
    { name: 'Dan Abramov', number: '12-43-234345' },
    { name: 'Mary Poppendieck', number: '39-23-6423122'}
  ]) 

  const [findName, setFindName] = useState('')
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')

  const eventChangeInput = (e, f) => f(e.target.value)
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
    <div >
      <h2>Phonebook</h2>
      <div>filter shown with <input value = {findName} onChange={(e) => eventChangeInput(e, setFindName)}/></div>
      <h2>add a new</h2>
      <form onSubmit={eventAddPerson}>
        <div>
          name: <input value = {newName} onChange={(e) => eventChangeInput(e, setNewName)}/>
        </div>
        <div>
          number: <input value = {newNumber} onChange={(e) => eventChangeInput(e, setNewNumber)}/>
        </div>
        <div>
          <button type="submit">add</button>
          {/* <div>debug: {newName}</div> */}
        </div>
      </form>
      <h2>Numbers</h2>
      {
      persons
      .filter( person => person.name.toLowerCase().includes(findName.toLowerCase()))
      .map((person, idx) => <div key ={person.name}>{person.name} {person.number}</div>)
      }
    </div>
  )
}

export default App