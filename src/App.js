import React from 'react';

const App = () => {
  const course = 'Half Stack application development';
  const part1 = 'Fundamentals of React';
  const exercises1 = 10;
  const part2 = 'Using props to pass data';
  const exercises2 = 7;
  const part3 = 'State of a component';
  const exercises3 = 14;

  const Header = (props) => {
    return (
      <h1>{props.course}</h1>
    );
  };

  const Part = (props) => {
    return (
        <p>
          {props.section} {props.exercises}
        </p>
    );
  };

  const Content = () => {
    return (
      <>
        <Part section={part1} exercises={exercises1} />
        <Part section={part2} exercises={exercises2} />
        <Part section={part3} exercises={exercises3} />
      </>
    );
  };

  const Total = () => {
    return (
      <p>Number of exercises {exercises1 + exercises2 + exercises3}</p>
    );
  };

  return (
    <div>
      <Header course={course} />
      <Content />
      <Total />
    </div>
  );

};

export default App;
