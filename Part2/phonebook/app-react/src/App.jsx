import { useState } from 'react'

const App = () => {
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas' }
  ]) 
  const [newName, setNewName] = useState('')

  const eventChangeInput = (e) => setNewName(e.target.value)
  const eventAddPerson = (e) => {
    e.preventDefault()
    const newPerson = { name: newName}
    setPersons(persons.concat(newPerson))
    setNewName("")
  }

  return (
    <div onSubmit={eventAddPerson}>
      <h2>Phonebook</h2>
      <form>
        <div>
          name: <input value = {newName} onChange={eventChangeInput}/>
        </div>
        <div>
          <button type="submit">add</button>
          {/* <div>debug: {newName}</div> */}
        </div>
      </form>
      <h2>Numbers</h2>
      {persons.map((person, idx) => <div key ={person.name}>{person.name}</div>)}
    </div>
  )
}

export default App