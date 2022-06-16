import { useState } from 'react'
import Button from './components/Button'
import Statistics from './components/Statistics'

const App = () => {
  // tallenna napit omaan tilaansa
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  return (
    <div>
      <h1>Give feedback</h1>
      <Button text={'Good'} handleClick={()=>setGood(good+1)}/>
      <Button text={'Neutral'} handleClick={()=>setNeutral(neutral+1)}/>
      <Button text={'Bad'} handleClick={()=>setBad(bad+1)}/>
      <h2>Statistics</h2>
      <Statistics goods={good} neutrals={neutral} bads={bad}/>
    </div>
  )
}

export default App