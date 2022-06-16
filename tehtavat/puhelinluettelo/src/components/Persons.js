import React from 'react'
import Person from './Person'

const Persons = (props) => {
  return (
    <div>
        {props.persons.filter(person => person.name.includes(props.filter)).map(person=>
        <div key={person.name}>
          <Person person={person} handleClick={() => props.handleClick(person)}/>
          </div>
      )}
    </div>
  )
}

export default Persons