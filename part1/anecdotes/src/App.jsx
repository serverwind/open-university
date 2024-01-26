import { useState } from "react";

const Votes = ({points, selected}) => {
  console.log(points, selected)
  for (const key in points) {
    if (key == `a${selected}`) {
      return <span>Votes: {points[key]}</span>
    }
  }
}

const App = () => {
  const anecdotes = ["If it hurts, do it more often.", "Adding manpower to a late software project makes it later!", "The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.", "Any fool can write code that a computer can understand. Good programmers write code that humans can understand.", "Premature optimization is the root of all evil.", "Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.", "Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients.", "The only way to go fast, is to go well."];
  const anecdotesLen = anecdotes.length;

  const [selected, setSelected] = useState(0);
  const [points, setPoints] = useState({ 'a0': 0, 'a1': 0, 'a2': 0, 'a3': 0, 'a4': 0, 'a5': 0, 'a6': 0, 'a7': 0, });

  const handleRandom = () => {
    setSelected(Math.floor(Math.random() * anecdotesLen));
  };

  const handleVote = () => {
    const value = Object.values(points)[selected];
    setPoints( {...points, [`a${selected}`]: value+1 } )
  };

  return (
    <div>
      <p>{anecdotes[selected]}</p>
      <Votes points={points} selected={selected} />
      <button onClick={handleVote}>Vote</button>
      <button onClick={handleRandom}>Random</button>
    </div>
  );
};

export default App;
