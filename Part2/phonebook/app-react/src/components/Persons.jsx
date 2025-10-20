import personsServices from '../services/APIpersons'

const handleDeletePerson = (person, setPersons, persons) => {
  if(window.confirm(`Delete ${person.name} ?`)) {
    personsServices
      .deletePerson(person.id)
      .then(() => console.log(`Person with id ${person.id} deleted successfully`))
      .catch(error => {
        console.error('Error deleting person:', error)
        alert('Failed to delete person from server')
      }) 
    setPersons(persons.filter( p => p.id !== person.id))
  }
}

const Person = ({person}) => <>{person.name} {person.number} </>
  

const Persons = ({persons, setPersons, findName}) => 
  persons
  .filter( person => person.name.toLowerCase().includes(findName.toLowerCase()))
  .map((person) => <div key ={person.name}>
    <Person  person={person}/>
    <button onClick = {() => handleDeletePerson(person, setPersons, persons)}>Delete</button>
    </div>
)

export default Persons