import { useState } from "react";

const Header = ({ text }) => {
  return <h2>{text}</h2>;
};

const Button = ({onClick, text}) => {
  return <button onClick={onClick}>{text}</button>;
};

const Review = ({text}) => {
  return <p>{text}</p>
}

const Stat = ({all}) => {
  return <p>{all}</p>
}

const App = () => {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);
  const [all, setAll] = useState(0);
  const [average, setAverage] = useState(0);

  const handleGood = () => {
    setGood(good + 1);
    setAll(all+1);
    setAverage(4/all);
  };

  const handleNeutral = () => {
    setNeutral(neutral + 1);
    setAll(all+1)
    setAverage(4/all);
  };

  const handleBad = () => {
    setBad(bad + 1);
    setAll(all+1)
    setAverage(4/all);
  };

  return (
    <>
      <Header text="Give Feedback!" />
      <Button onClick={handleGood} text='Good' />
      <Button onClick={handleNeutral} text='Neutral' />
      <Button onClick={handleBad} text='Bad' />
      <Header text="Statistics" />
      <Review text={"Good: " + good} />
      <Review text={"Neutral: " + neutral} />
      <Review text={"Bad: " + bad} />
      <Stat all={"All: " + all} />
      <Stat all={"Average: " + average} />
    </>
  );
};

export default App;
