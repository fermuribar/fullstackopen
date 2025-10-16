import { useState } from "react"

const PersonForm = ({eventChangeInput , setPersons, persons}) => {
    const [newName, setNewName] = useState('')
    const [newNumber, setNewNumber] = useState('')

    const eventAddPerson = (ev) => {
        ev.preventDefault()
        const newPerson = { 
        name: newName,
        number: newNumber
        }
        if (persons.some( person => person.name === newPerson.name)) alert(`${newName} is already added to phonebook`)
        else setPersons(persons.concat(newPerson))
        setNewName("")
        setNewNumber("")
    }
  return(
    <form onSubmit={eventAddPerson}>
        <div>
        name: <input value = {newName} onChange={(e) => eventChangeInput(e, setNewName)}/>
        </div>
        <div>
        number: <input value = {newNumber} onChange={(e) => eventChangeInput(e, setNewNumber)}/>
        </div>
        <div>
        <button type="submit">add</button>
        </div>
    </form>
  )
}

export default PersonForm