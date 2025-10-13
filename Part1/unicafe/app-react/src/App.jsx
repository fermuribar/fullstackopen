import { useState } from 'react'

const Title = ({text}) => <h1>{text}</h1>

const Button =({handleClick, text}) => <button onClick={handleClick}>{text}</button> 

const StatisticLine = ({text, value}) => <div>{text} {value}</div>


const Statistics = ({good, neutral, bad}) => {
  let total = good+neutral+bad
  let average = (good-bad)/total
  let positive = (good/total)*100
  if (total == 0) return <div>No feedback given</div>
  else return(
    <div>
      <StatisticLine text={"good"} value={good}/>
      <StatisticLine text={"neutral"} value={neutral}/>
      <StatisticLine text={"bad"} value={bad}/>
      <StatisticLine text={"all"} value={total}/>
      <StatisticLine text={"average"} value={average}/>
      <StatisticLine text={"positive"} value={positive + " %"}/>
    </div>
  )
}

const App = () => {
  // guarda los clics de cada botón en su propio estado
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  const incrementState = (state, setState) => setState(state+1)
  
  return (
    <div>
      <Title text={"give feedback"}/>
      <Button handleClick={() => incrementState(good,setGood)} text={"good"}/>
      <Button handleClick={() => incrementState(neutral,setNeutral)} text={"neutral"}/>
      <Button handleClick={() => incrementState(bad,setBad)} text={"bad"}/>
      <Title text={"statistics"}/>
      <Statistics good={good} neutral={neutral} bad={bad}/>
    </div>
  )
}

export default App
