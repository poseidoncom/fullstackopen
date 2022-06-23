import { useEffect, useState } from 'react'
import PersonForm from './components/PersonForm'
import Persons from './components/Persons'
import personService from './services/person'
import Alert from './components/Alert'

const App = () => {
  const [persons, setPersons] = useState([]) 
  const [newName, setNewName] = useState('')
  const [newPhone, setNewPhone] = useState('')
  const [filter, setFilter] = useState('')
  const [message, setMessage] = useState(null)



  useEffect(()=>{
    personService
      .getAll()
      .then(initialPersons => {
        setPersons(initialPersons)
      })
  }, [])



  const handleNameChange = (event) =>{
    setNewName(event.target.value)
  }
  
  const handlePhoneChange = (event) =>{
    setNewPhone(event.target.value)
  }

  const handleFilterChange = (event) =>{
    setFilter(event.target.value)
  }

  

  const addName= (event) =>{
    event.preventDefault()
    
    if(persons.some(e => e.name === newName)){
      alert(`${newName} is already added to phonebook`)
    }

    else{
      const nameObject = {
        name: newName,
        number: newPhone,
      }
      
      personService
        .create(nameObject)
        .then(returnedPerson =>{
          setPersons(persons.concat(returnedPerson))
          setMessage(
            `${returnedPerson.name} added to Phonebook`
          )
          setTimeout(()=>{
            setMessage(null)
          }, 5000)
        })   
    }
    setNewName('')  
  }

  const deletePerson = (person) =>{
    window.confirm(`Delete ${person.name} ?`)
    console.log('poistetaan heniklö '+ person.id)
    personService
      .remove(person.id)
      .then(()=>{
        //poistetaan poistettu henkilö listalta
        setPersons(persons.filter(p => p.id !==person.id))
        console.log('poistettu!')
        setMessage(
          `${person.name} removed from Phonebook`
        )
        setTimeout(()=>{
          setMessage(null)
        }, 5000)
      })
  }

  return (
    <div>
      <Alert message={message}/>
      <h1>Phonebook</h1>
      <div>
        filter shown with <input onChange={handleFilterChange}/>
      </div>
      <h2>Add a new person</h2>
      <PersonForm addName={addName} handleNameChange={handleNameChange} handlePhoneChange={handlePhoneChange}/>
      <h2>Numbers</h2>
      <Persons persons={persons} filter={filter} handleClick={deletePerson}/>
    </div>
  )

}

export default App
