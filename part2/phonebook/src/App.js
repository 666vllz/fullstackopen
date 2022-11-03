import { useState } from "react";

import Filter from "./components/Filter";
import PersonForm from "./components/PersonForm";
import Persons from "./components/Persons";

const App = () => {
  const [allPersons, setAllPersons] = useState([
    { name: "Arto Hellas", number: "040-123456", id: 1 },
    { name: "Ada Lovelace", number: "39-44-5323523", id: 2 },
    { name: "Dan Abramov", number: "12-43-234345", id: 3 },
    { name: "Mary Poppendieck", number: "39-23-6423122", id: 4 },
  ]);

  const [newName, setNewName] = useState("");
  const [newNumber, setNewNumber] = useState("");
  const [newFilter, setNewFilter] = useState("");
  const [filterPersons, setFilterPersons] = useState(allPersons);

  const alreadyExist = (personName) => {
    const names = allPersons.map((person) => person.name);
    if (names.includes(personName)) {
      return true;
    } else {
      return false;
    }
  };

  const addPerson = (event) => {
    event.preventDefault();
    const personObject = {
      name: newName,
      number: newNumber,
      id: allPersons.length + 1,
    };

    if (alreadyExist(newName)) {
      alert(`${newName} is already added to phonebook`);
      setNewName("");
      setNewNumber("");
      setNewFilter("");
    } else {
      setAllPersons(allPersons.concat(personObject));
      setFilterPersons(allPersons.concat(personObject));
      setNewName("");
      setNewNumber("");
      setNewFilter("");
    }
  };

  const handlePersonChange = (event) => {
    setNewName(event.target.value);
  };

  const handleNumberChange = (event) => {
    setNewNumber(event.target.value);
  };

  const handleFilter = (event) => {
    setNewFilter(event.target.value);
    const filteredPersons = allPersons.filter((person) =>
      person.name.toLowerCase().includes(event.target.value)
    );
    setFilterPersons(filteredPersons);
  };

  return (
    <div>
      <h2>Phonebook</h2>
      <Filter value={newFilter} onChange={handleFilter} />
      <h2>add a new</h2>
      <PersonForm
        submit={addPerson}
        nameValue={newName}
        nameChange={handlePersonChange}
        numberValue={newNumber}
        numberChange={handleNumberChange}
      />
      <h2>Numbers</h2>
      <Persons filteredPersons={filterPersons} />
    </div>
  );
};

export default App;
