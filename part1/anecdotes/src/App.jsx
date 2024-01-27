import { useState, useEffect } from "react";

const Header = ({ text }) => {
  return <h2>{text}</h2>;
};

const Votes = ({ points, selected }) => {
  for (const key in points) {
    if (key == selected) {
      return <span>Votes: {points[key]}</span>;
    }
  }
};

const MostVoted = ({ text, points }) => {
  return (
    <>
      <p>{text}</p>
      <p>Has {points} votes.</p>
    </>
  );
};

const Button = ({ onClick, text }) => {
  return <button onClick={onClick}>{text}</button>;
};

const App = () => {
  const anecdotes = ["If it hurts, do it more often.", "Adding manpower to a late software project makes it later!", "The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.", "Any fool can write code that a computer can understand. Good programmers write code that humans can understand.", "Premature optimization is the root of all evil.", "Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.", "Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients.", "The only way to go fast, is to go well."];
  const anecdotesLen = anecdotes.length;

  const [selected, setSelected] = useState(0);
  const [points, setPoints] = useState({ 0: 0, 1: 0, 2: 0, 3: 0, 4: 0, 5: 0, 6: 0, 7: 0 });
  const [mostVoted, setMostVoted] = useState({
    id: 0,
    text: "",
    points: 0,
  });

  const handleRandom = () => {
    setSelected(Math.floor(Math.random() * anecdotesLen));
  };

  const handleMostVoted = () => {
    let clone = { ...mostVoted };
    for (const key in points) {
      if (points[key] > mostVoted.points) {
        clone.id = key;
        clone.text = anecdotes[key];
        clone.points = points[key];
      }
    }
    setMostVoted(clone);
  };

  const handleVote = () => {
    const value = Object.values(points)[selected];
    setPoints({ ...points, [selected]: value + 1 });
  };

  useEffect(() => {
    handleMostVoted();
  }, [points]);

  return (
    <div>
      <Header text="Anecdote of the Day" />
      <p>{anecdotes[selected]}</p>
      <Votes points={points} selected={selected} />
      <Button onClick={handleVote} text="Vote" />
      <Button onClick={handleRandom} text="Random" />
      <Header text="Anecdote with most Votes" />
      <MostVoted points={mostVoted.points} text={mostVoted.text} />
    </div>
  );
};

export default App;
