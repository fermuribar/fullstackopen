const Person = ({person}) => <div>{person.name} {person.number}</div>

const Persons = ({persons, findName}) => 
  persons
  .filter( person => person.name.toLowerCase().includes(findName.toLowerCase()))
  .map((person) => <Person key ={person.name} person={person}/>)

export default Persons