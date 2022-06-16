import React from 'react'

const PersonForm = (props) => {
  return (
    <div>
        
      <form onSubmit={props.addName}>
        <div>
          name: <input onChange={props.handleNameChange} />
        </div>
        <div>
          phone: <input onChange={props.handlePhoneChange}/>
        </div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>

    </div>
  )
}

export default PersonForm