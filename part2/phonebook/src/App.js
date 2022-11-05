import { useState, useEffect } from "react";
import axios from "axios";

import Filter from "./components/Filter";
import PersonForm from "./components/PersonForm";
import Persons from "./components/Persons";

const App = () => {
  const [allPersons, setAllPersons] = useState([]);
  const [newName, setNewName] = useState("");
  const [newNumber, setNewNumber] = useState("");
  const [newFilter, setNewFilter] = useState("");
  const [filterPersons, setFilterPersons] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:3001/persons").then((response) => {
      setAllPersons(response.data);
      setFilterPersons(response.data);
    });
  }, []);

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
