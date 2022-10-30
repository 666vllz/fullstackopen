const Statistics = ({ clicks }) => {
  const all = clicks.good + clicks.neutral + clicks.bad;
  const average = (clicks.good - clicks.bad) / all;
  const positive = (clicks.good / all) * 100;

  if (all === 0) {
    return <p>No feedback given</p>;
  } else {
    return (
      <div className="statistics">
        <table>
          <tbody>
            <tr>
              <td>good</td>
              <td>{clicks.good}</td>
            </tr>
            <tr>
              <td>neutral</td>
              <td>{clicks.neutral}</td>
            </tr>
            <tr>
              <td>bad</td>
              <td>{clicks.bad}</td>
            </tr>
            <tr>
              <td>all</td>
              <td>{all}</td>
            </tr>
            <tr>
              <td>average</td>
              <td>{average}</td>
            </tr>
            <tr>
              <td>positive</td>
              <td>{positive} %</td>
            </tr>
          </tbody>
        </table>
      </div>
    );
  }
};

export default Statistics;
