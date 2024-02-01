const Sum = ({course}) => {
  const ex = course.parts.map(
    e => e.exercises
  )

  const total = ex.reduce(
    (accumulator, e) => {
      return accumulator += e;
    }
  )

  return <b>Total of {total} exercises.</b>
}

const Part = ({course}) => {
  return(
    course.parts.map(
      part => <p key={part.id}>{part.name}: {part.exercises}</p>
    )
  )
}

const Content = ({course}) => {
  return (
    <Part course={course} />
  )
}

const Header = ({name}) => {
  return <h1>{name}</h1>
}

const Course = ({course}) => {
  return (
  <>
    <Header name={course.name} />
    <Content course={course} />
    <Sum course={course} />
  </>
  )
} 

const App = () => {
  const course = {
    id: 1,
    name: 'Half Stack application development',
    parts: [
      {
        name: 'Fundamentals of React',
        exercises: 10,
        id: 1
      },
      {
        name: 'Using props to pass data',
        exercises: 7,
        id: 2
      },
      {
        name: 'State of a component',
        exercises: 14,
        id: 3
      }
    ]
  }

  return <Course course={course} />
}

export default App
