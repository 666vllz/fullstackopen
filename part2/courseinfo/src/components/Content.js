import Part from "./Part";

const Content = ({ parts }) => {
  const getTotal = (parts) => {
    const arrExercises = parts.map((part) => part.exercises);
    const sum = arrExercises.reduce((partialSum, a) => partialSum + a, 0);
    return sum;
  };

  return (
    <div className="content">
      <ul>
        {parts.map((part) => (
          <Part content={part.name} exercises={part.exercises} key={part.id} />
        ))}
      </ul>
      <p>total of {getTotal(parts)} exercises</p>
    </div>
  );
};

export default Content;
