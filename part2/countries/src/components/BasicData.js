const BasicData = ({ country }) => {
  const name = country.name.common
  const capital = country.capital
  const languages = Object.values(country.languages)
  const imgSrc = country.flags.png
  const imgAlt = `${name} flag`
  return (
    <div>
      <h1>{name}</h1>
      <div>capital {capital}</div>
      <div>area {country.area}</div>
      <h2>languages</h2>
      <ul>
        {languages.map((language) => (
          <li key={language}>{language}</li>
        ))}
      </ul>
      <img src={imgSrc} alt={imgAlt} width="200"></img>
    </div>
  );
};

export default BasicData;
