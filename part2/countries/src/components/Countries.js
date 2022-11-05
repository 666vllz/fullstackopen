import BasicData from "./BasicData";
import ShowNames from "./ShowNames";

const Countries = ({ countries }) => {
  const onlyOneCountry = () => {
    if (countries.length === 1) {
      return true;
    }
    return false;
  };

  return (
    <div className="countries">
      {countries.length > 10 ? (
        <p>Too many matches, specify anoter filter</p>
      ) : onlyOneCountry() ? (
        <BasicData country={countries[0]} />
      ) : (
        <ShowNames countries={countries} />
      )}
    </div>
  );
};

export default Countries;
