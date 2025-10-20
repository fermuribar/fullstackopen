import { useState } from "react"
import personsServices from '../services/APIpersons'

const PersonForm = ({eventChangeInput , setPersons, persons}) => {
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')
  const eventAddPerson = (ev) => {
    ev.preventDefault()
    const newPerson = { 
      name: newName,
      number: newNumber
    }
    if (persons.some( person => person.name === newPerson.name)){ 
      if(window.confirm(`${newName} is already added to phonebook, replace the old number with a new one?`)){ 
        const personNewNumber = {
          ...persons.find(p => p.name === newName),
          number: newNumber
        }
        personsServices
        .changePerson(personNewNumber.id, personNewNumber)
        .then(returnedPerson => setPersons(persons.map( p => p.id !== personNewNumber.id ? p : returnedPerson)))
        .catch(error => {
          console.error('Error updating person:', error)
          alert(`Failed to update ${newName}'s number on server`)
        })
      }
    }else {
      personsServices
      .addPerson(newPerson)
      .then(returnedPerson => {
        //console.log(returnedPerson)
        setPersons(persons.concat(returnedPerson))
      })
      .catch(error => {
        console.error('Error adding person:', error)
        alert('Failed to add person to server')
      })
    }
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