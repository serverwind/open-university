const Header = (props) => {
  return <h1>{props.course.name}</h1>;
};

const Part = (props) => {
  return (
    <p>
      {props.part} {props.exercises}
    </p>
  );
};

const Content = (props) => {
  return (
    <>
      <Part part={props.course.part1} exercises={props.course.exercises1} />
      <Part part={props.course.part2} exercises={props.course.exercises2} />
      <Part part={props.course.part3} exercises={props.course.exercises3} />
    </>
  );
};

const Total = (props) => {
  return <p>{props.total}</p>;
};

const App = () => {
  const course = {
    name: "Half Stack application development",
    part1: "Fundamentals of React",
    exercises1: 10,
    part2: "Using props to pass data",
    exercises2: 7,
    part3: "State of a component",
    exercises3: 14,
  };
  let total = course.exercises1 + course.exercises2 + course.exercises3;

  return (
    <div>
      <Header course={course} />
      <Content course={course} />
      <Total total={"Number of exercises " + total} />
    </div>
  );
};

export default App;
