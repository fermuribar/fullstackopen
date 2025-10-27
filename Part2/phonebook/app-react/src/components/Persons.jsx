import personsServices from '../services/APIpersons'

const Person = ({person}) => <>{person.name} {person.number} </>

const Persons = ({persons, setPersons, findName}) => {
  const handleDeletePerson = (person) => {
  if(window.confirm(`Delete ${person.name} ?`)) {
    personsServices
      .deletePerson(person.id)
      .catch(error => {
        console.error('Error deleting person:', error)
        alert('Failed to delete person from server')
      }) 
    setPersons(persons.filter( p => p.id !== person.id))
  }
}
  return persons
  .filter( person => person.name.toLowerCase().includes(findName.toLowerCase()))
  .map((person) => <div key ={person.name}>
    <Person  person={person}/>
    <button onClick = {() => handleDeletePerson(person)}>Delete</button>
    </div>
)
}

export default Persons