import { useState } from 'react'

const Title = ({text}) => <h1>{text}</h1>

const Button =({handleClick, text}) => <button onClick={handleClick}>{text}</button> 

const Display = ({text, value}) => {
  if (isNaN(value)) value = 0
  if (text == "positive") return <div>{text} {value} %</div>
  else return <div>{text} {value}</div>
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
      <Display text={"average"} value={(good-bad)/total}/>
      <Display text={"positive"} value={good/total*100}/>
    </div>
  )
}

export default App
