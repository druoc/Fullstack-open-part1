import React from 'react';
import {useState} from 'react';

const Statistics = (props) => {
  return (
    <p>{props.name} = {props.value}</p>
  );
};

const App = () => {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);
  const total = good + neutral + bad;
  const average = (good * 1 + bad * -1) / total;
  const positive = good * (100/total);

  //components
  const Button = (props) => {
    return (
      <button onClick={props.buttonFunction}>{props.buttonName}</button>
    );
  };

  //functions
  const goodClick = () => {
    setGood(good + 1);
  };

  const neutralClick = () => {
    setNeutral(neutral + 1);
  };

  const badClick = () => {
    setBad(bad + 1);
  };

  

  return (
    <div>
      <h1>Give Feedback</h1>
      <Button buttonName="Good" buttonFunction={goodClick} />
      <Button buttonName="Neutral" buttonFunction={neutralClick} />
      <Button buttonName="Bad" buttonFunction={badClick} />

      <h1>Statistics</h1>
      <Statistics name="Good" value={good} />
      <Statistics name="Neutral" value={neutral} />
      <Statistics name="Bad" value={bad} />
      <Statistics name="Total" value={total} />
      <Statistics name="Average" value={average} />
      <Statistics name="Positive %" value={positive} />


    </div>
  );

};

export default App;