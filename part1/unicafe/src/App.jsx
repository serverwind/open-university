import { useState } from "react";

const Header = ({ text }) => {
  return <h2>{text}</h2>;
};

const Button = ({ onClick, text }) => {
  return <button onClick={onClick}>{text}</button>;
};

const Statistics = ({ text, clicks, percent, average }) => {
  if (percent == true) {
    const calcPercent = (clicks.good / clicks.all) * 100;
    return <p>{text} {calcPercent}%</p>;
  } else if (average == true) {
    const calcAverage = ( clicks.good - clicks.bad ) / clicks.all;
    return <p>{text} {calcAverage}</p>
  }
  return <p>{text}</p>;
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
      <Statistics clicks={clicks} text={"Good: " + clicks.good} />
      <Statistics clicks={clicks} text={"Neutral: " + clicks.neutral} />
      <Statistics clicks={clicks} text={"Bad: " + clicks.bad} />
      <Statistics clicks={clicks} text={"All: " + clicks.all} />
      <Statistics clicks={clicks} average={true} text={"Average: "} />
      <Statistics clicks={clicks} percent={true} text="Percent: " />
    </>
  );
};

export default App;
