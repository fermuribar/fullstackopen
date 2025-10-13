import { useState } from 'react'

const Title = ({text}) => <h1>{text}</h1>

const Button =({handleClick, text}) => <button onClick={handleClick}>{text}</button> 

const Display = ({text, value}) => <div>{text} {value}</div>

const Statistics = ({good, neutral, bad}) => {
  let total = good+neutral+bad
  if (total == 0) return (
    <div>
      <div>average {0}</div>
      <div>positive {0} %</div>
    </div>
  )
  else return(
    <div>
      <div>average {(good-bad)/total}</div>
      <div>positive {good/total*100} %</div>
    </div>
  )
}

const App = () => {
  // guarda los clics de cada botón en su propio estado
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  const incrementState = (state, setState) => {
    console.log('Now ', state, ' and increment to ', state+1)
    setState(state+1)
  }
  let total = good+neutral+bad

  return (
    <div>
      <Title text={"give feedback"}/>
      <Button handleClick={() => incrementState(good,setGood)} text={"good"}/>
      <Button handleClick={() => incrementState(neutral,setNeutral)} text={"neutral"}/>
      <Button handleClick={() => incrementState(bad,setBad)} text={"bad"}/>
      <Title text={"statistics"}/>
      <Display text={"good"} value={good}/>
      <Display text={"neutral"} value={neutral}/>
      <Display text={"bad"} value={bad}/>
      <Display text={"all"} value={total}/>
      <Statistics good={good} neutral={neutral} bad={bad}/>
    </div>
  )
}

export default App
