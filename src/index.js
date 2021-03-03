import React from "react";
import ReactDOM from "react-dom";

const Header = (props) => {
  return (
    <>
      <h1>{props.course}</h1>
    </>
  );
};
const Part = (props) => {
  
  return (
    <div>
      <p>
        {props.name} {props.exercises}
      </p>
    </div>
  );
};
const Content = (props) => {
  //console.log(props);
  return (
    <>
      {props.parts.map((part) => {
        return <Part key = {part.exercises} name={part.name} exercises={part.exercises} />;
      })}
    </>
  );
};
const Total = (props) => {
  let total = 0;
  props.parts.map( part => {
    total += part.exercises
    return total;
  })
  return (
    <>
      
      <>{total}</>
    </>
  );
};
const App = () => {
  const course = {
    name: 'Half Stack application development',
    parts: [
      {
        name: 'Fundamentals of React',
        exercises: 10
      },
      {
        name: 'Using props to pass data',
        exercises: 7
      },
      {
        name: 'State of a component',
        exercises: 14
      }
    ]
  }

  return (
    <div>
      <Header course={course.name} />
      <Content parts={course.parts} />

      <p>
        The total exercises are <Total parts={course.parts} />
      </p>
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));
