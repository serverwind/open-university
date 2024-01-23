import { useState } from "react";

const Header = ({ text }) => {
  return <h2>{text}</h2>;
};

const Button = ({onClick, text}) => {
  return <button onClick={onClick}>{text}</button>;
};

const Stats = ({text}) => {
  return <p>{text}</p>
}

const App = () => {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const handleGood = () => {
    setGood(good + 1);
  };

  const handleNeutral = () => {
    setNeutral(neutral + 1);
  };

  const handleBad = () => {
    setBad(bad + 1);
  };

  return (
    <>
      <Header text="Give Feedback!" />
      <Button onClick={handleGood} text='Good' />
      <Button onClick={handleNeutral} text='Neutral' />
      <Button onClick={handleBad} text='Bad' />
      <Header text="Statistics" />
      <Stats text={"Good: " + good} />
      <Stats text={"Neutral: " + neutral} />
      <Stats text={"Bad: " + bad} />
    </>
  );
};

export default App;
