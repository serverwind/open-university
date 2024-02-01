const Sum = ({ parts }) => {
  const num = parts.map((part) => part.exercises);
  const total = num.reduce((accumulator, n) => {
    return (accumulator += n);
  });

  return <b>Total of {total} exercises.</b>;
};

export default Sum;
