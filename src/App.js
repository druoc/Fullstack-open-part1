import React from 'react';
import {useState} from 'react';

const App = () => {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

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
      <Button buttonName="Good" buttonFunction={goodClick}/>
      <Button buttonName="Neutral" buttonFunction={neutralClick} />
      <Button buttonName="Bad" buttonFunction={badClick} />

      <h1>Statistics</h1>
      <p>Good = {good}</p>
      <p>Neutral = {neutral}</p>
      <p>Bad = {bad}</p>


    </div>
  );

};

export default App;