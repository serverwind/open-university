import { useState } from "react";

const Header = ({ text }) => {
  return <h2>{text}</h2>;
};

const Button = ({ onClick, text }) => {
  return <button onClick={onClick}>{text}</button>;
};

const Statistics = ({ clicks }) => {
  if (clicks.all == 0) {
    return <p>No feedback given.</p>;
  } else {
    const calcPercent = (clicks.good / clicks.all) * 100;
    const calcAverage = (clicks.good - clicks.bad) / clicks.all;
    return (
      <>
        <p>Good: {clicks.good}</p>
        <p>Neutral: {clicks.neutral}</p>
        <p>Bad: {clicks.bad}</p>
        <p>All: {clicks.all}</p>
        <p>Average: {calcAverage}</p>
        <p>Percent: {calcPercent}%</p>
      </>
    );
  }
};

const App = () => {
  const [clicks, setClicks] = useState({
    good: 0,
    neutral: 0,
    bad: 0,
    all: 0,
  });

  const handleGood = () => {
    setClicks({ ...clicks, good: clicks.good + 1, all: clicks.all + 1 });
  };

  const handleNeutral = () => {
    setClicks({ ...clicks, neutral: clicks.neutral + 1, all: clicks.all + 1 });
  };

  const handleBad = () => {
    setClicks({ ...clicks, bad: clicks.bad + 1, all: clicks.all + 1 });
  };

  return (
    <>
      <Header text="Give Feedback!" />
      <Button onClick={handleGood} text="Good" />
      <Button onClick={handleNeutral} text="Neutral" />
      <Button onClick={handleBad} text="Bad" />
      <Header text="Statistics" />
      <Statistics clicks={clicks} />
    </>
  );
};

export default App;
