import { useState } from 'react'



const Button = ({ onClick, vari, text }) => {

  return (
    <button onClick={() => onClick(vari + 1)}>
      {text}
    </button>
  )
}

const StatisticsLine = ({ text, value }) => {
  return (
    <tr>
      <td>{text}</td> <td>{value}</td>
    </tr>
  )

}

const Statistis = ({ good, neutral, bad }) => {
  const total = good + neutral + bad
  const average = ((good * 1) + (neutral * 0) + (bad * (-1))) / total
  const positive = (good / total) * 100
  {
    if (total === 0) {
      return <p>No feedback</p>
    }
  }
  return (
    <div>
      <table border="1" width={"250px"} cellPadding="8" >
        <StatisticsLine text="good" value={good} />
        <StatisticsLine text="neutral" value={neutral} />
        <StatisticsLine text="bad" value={bad} />
        <StatisticsLine text="all" value={total} />
        <StatisticsLine text="average" value={average} />
        <StatisticsLine text="positive" value={positive} />
      </table>
    </div>
  )
}

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  console.log(good, neutral, bad)

  return (
    <div>
      <h1>give feedback</h1>
      <Button onClick={setGood} vari={good} text={"good"} />
      <Button onClick={setNeutral} vari={neutral} text={"neutral"} />
      <Button onClick={setBad} vari={bad} text={"bad"} />

      <h1>statistics</h1>
      <Statistis good={good} neutral={neutral} bad={bad} />

    </div>
  )
}

export default App