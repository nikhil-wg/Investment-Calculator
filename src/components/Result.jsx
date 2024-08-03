import { calculateInvestmentResults, formatter } from "../util/investment.js";

export default function Reuslt({ input }) {
  const resultData = calculateInvestmentResults(input);
  console.log(resultData);
  const intialInvestment =
    resultData[0].valueEndOfYear -
    resultData[0].interest -
    resultData[0].annualInvestment;
  return (
    <table id="result">
      <thead>
        <tr>
          <th>Year</th>
          <th>Investment Value</th>
          <th>Interest (Year)</th>
          <th>Total Interest</th>
          <th>Invested Capital</th>
        </tr>
      </thead>
      <tbody>
        {resultData.map((yeardata) => {
          const totalInvestment =
            yeardata.valueEndOfYear - yeardata.annualInvestment * yeardata.year-intialInvestment;
            const totalAmoountInvested=yeardata.valueEndOfYear-totalInvestment;
          return (
            <tr key={yeardata.year}>
              <td>{yeardata.year}</td>
              <td>{formatter.format(yeardata.valueEndOfYear)}</td>
              <td>{formatter.format(yeardata.interest)}</td>
              <td>{formatter.format(totalInvestment)}</td>
              <td>{formatter.format(totalAmoountInvested)}</td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
}
