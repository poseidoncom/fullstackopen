import React from 'react'

const Person = ({person, handleClick}) => {
  return (
    <div>{person.name} {person.phone} <button onClick={handleClick}>delete</button></div>
  )
}

export default Person