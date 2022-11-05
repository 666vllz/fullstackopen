import { useState, useEffect } from "react";
import axios from "axios";
import Countries from "./components/Countries";

const App = () => {
  const [allCountries, setAllCountries] = useState([]);
  const [newCountry, setNewCountry] = useState("");

  useEffect(() => {
    axios.get("https://restcountries.com/v3.1/all").then((response) => {
      setAllCountries(response.data);
    });
  }, []);

  const handleCountryChange = (event) => {
    setNewCountry(event.target.value);
  };

  const getMatchedCountries = () => {
    const matchedCountries = [];
    allCountries.forEach((country) => {
      const name = country.name.common.toLowerCase();
      if (name.includes(newCountry)) {
        matchedCountries.push(country);
      }
    });
    return matchedCountries
  };

  return (
    <div className="app">
      find countries <input value={newCountry} onChange={handleCountryChange} />
      <Countries countries={getMatchedCountries()} />
    </div>
  );
};

export default App;
