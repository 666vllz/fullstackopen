const Part = ({ content, exercises, id }) => {
  return (
    <li key={id}>
      {content} {exercises}
    </li>
  );
};

export default Part;
