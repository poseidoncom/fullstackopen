import { useState } from "react"
import Button from "./Button"

const Display = props => <div>{props.value}</div>

const App = () => {
  const [value, setValue] = useState(10)
  
  const setToValue = newValue =>{
    console.log('value now ', newValue)
    setValue(newValue)
  }


  return (
    <div>
      <div>
        <Display value={value}/>
        <Button handleClick={()=>setToValue(100)} text='hundred'/>
        <Button handleClick={()=>setToValue(1000)} text='thousand'/>
      
      </div>
    </div>
  )
}

export default App