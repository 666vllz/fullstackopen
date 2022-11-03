const PersonForm = (props) => {
  const { submit, nameValue, nameChange, numberValue, numberChange } = props;
  return (
    <form onSubmit={submit}>
      <div>
        name: <input value={nameValue} onChange={nameChange} />
      </div>
      <div>
        number: <input value={numberValue} onChange={numberChange} />
      </div>
      <div>
        <button type="submit">add</button>
      </div>
    </form>
  );
};

export default PersonForm;
