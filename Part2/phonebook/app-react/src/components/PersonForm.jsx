import { useState } from "react"
import personsServices from '../services/APIpersons'

const PersonForm = ({eventChangeInput , setPersons, persons, setMessage, setError}) => {
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')
  const eventAddPerson = (ev) => {
    ev.preventDefault()
    const newPerson = { 
      name: newName,
      number: newNumber
    }
    if (persons.some( person => person.name === newPerson.name)){ // Name already exists
      if(window.confirm(`${newName} is already added to phonebook, replace the old number with a new one?`)){ 
        const personNewNumber = {
          ...persons.find(p => p.name === newName),
          number: newNumber
        }
        personsServices
        .changePerson(personNewNumber.id, personNewNumber)
        .then(returnedPerson => {
          setPersons(persons.map( p => p.id !== personNewNumber.id ? p : returnedPerson))
          setMessage(`Changed ${newName}'s number`)
          setTimeout(() => {
            setMessage(null)
          }, 5000)
        })
        .catch(error => {
          setError(true)
          setMessage(`Information of ${newName} has already been removed from server`)
          setTimeout(() => {
            setError(false)
            setMessage(null)
          }, 5000)
          setPersons(persons.filter( p => p.id !== person.id))
        })
      }
    }else { // New Name
      personsServices
      .addPerson(newPerson)
      .then(returnedPerson => {
        setPersons(persons.concat(returnedPerson))
        setMessage(`Added ${newName}`)
        setTimeout(() => {
          setMessage(null)
        }, 5000)
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