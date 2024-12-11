import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Container, Table } from 'react-bootstrap';
import { wp4001, wp2005, transpose2005 } from '../utilities/Workpapers';

const ViewWorkpaper = () => {
  const { wpNumber } = useParams(); // Extract wpNumber from URL
  const [data, setData] = useState([]); // State to store workpaper data

  useEffect(() => {
    // only 2 workpapers are implemented in utilities, will need to change in the future to avoid hard coding
    if (wpNumber === '4001') {
      setData(wp4001.data); // Set data for wp4001
    } else if (wpNumber === '2005-2') {
      setData(wp2005.data); // Set data for wp2005
    } else {
      setData([]); // Set empty array for invalid wpNumber
    }
  }, [wpNumber]); // Re-run when wpNumber changes

  if (!data || data.length === 0) {
    return <p>No data found for Workpaper ID: {wpNumber}</p>;
  }
  // render table based on workpaper, tables are structured differently so conditional formatting is used
  return ((wpNumber === '4001') ?
    (
      <Container>
        <h1>{wp4001.name}</h1>
        <p>{wp4001.description}</p>
        <Table className="table-responsive" striped bordered hover>
          <thead>
            <tr>
              <th>Scenario</th>
              {data.map((entry) => (
                <th key={entry.year}>Year {entry.year}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {/* Five-Year Secured */}
            <tr>
              <td colSpan={data.length + 1} style={{ fontWeight: 'bold', textAlign: 'left' }}>
                Five-Year Secured
              </td>
            </tr>
            <tr>
              <td>Interest</td>
              {data.map((entry, index) => (
                <td key={index}>{entry.FiveYearSecured.interest.toLocaleString()}</td>
              ))}
            </tr>
            <tr>
              <td>Principal</td>
              {data.map((entry, index) => (
                <td key={index}>{entry.FiveYearSecured.principal.toLocaleString()}</td>
              ))}
            </tr>
            <tr>
              <td>Total Debt Service</td>
              {data.map((entry, index) => (
                <td key={index}>
                  {entry.FiveYearSecured.totalDebtService.toLocaleString()}
                </td>
              ))}
            </tr>
            <tr>
              <td>% of Core Op Budget</td>
              {data.map((entry, index) => {
                const percent =
                entry.FiveYearSecured.totalDebtService /
                entry.projectedCoreOpBudget;
                return <td key={index}>{(percent * 100).toFixed(2)}%</td>;
              })}
            </tr>
            {/* Seven-Year Secured */}
            <tr>
              <td colSpan={data.length + 1} style={{ fontWeight: 'bold', textAlign: 'left' }}>
                Seven-Year Secured
              </td>
            </tr>
            <tr>
              <td>Interest</td>
              {data.map((entry, index) => (
                <td key={index}>{entry.SevenYearSecured.interest.toLocaleString()}</td>
              ))}
            </tr>
            <tr>
              <td>Principal</td>
              {data.map((entry, index) => (
                <td key={index}>{entry.SevenYearSecured.principal.toLocaleString()}</td>
              ))}
            </tr>
            <tr>
              <td>Total Debt Service</td>
              {data.map((entry, index) => (
                <td key={index}>
                  {entry.SevenYearSecured.totalDebtService.toLocaleString()}
                </td>
              ))}
            </tr>
            <tr>
              <td>% of Core Op Budget</td>
              {data.map((entry, index) => {
                const percent =
                  entry.SevenYearSecured.totalDebtService /
                  entry.projectedCoreOpBudget;
                return <td key={index}>{(percent * 100).toFixed(2)}%</td>;
              })}
            </tr>
            {/* Nine-Year Secured */}
            <tr>
              <td colSpan={data.length + 1} style={{ fontWeight: 'bold', textAlign: 'left' }}>
                Nine-Year Secured
              </td>
            </tr>
            <tr>
              <td>Interest</td>
              {data.map((entry, index) => (
                <td key={index}>{entry.NineYearSecured.interest.toLocaleString()}</td>
              ))}
            </tr>
            <tr>
              <td>Principal</td>
              {data.map((entry, index) => (
                <td key={index}>{entry.NineYearSecured.principal.toLocaleString()}</td>
              ))}
            </tr>
            <tr>
              <td>Total Debt Service</td>
              {data.map((entry, index) => (
                <td key={index}>
                  {entry.NineYearSecured.totalDebtService.toLocaleString()}
                </td>
              ))}
            </tr>
            <tr>
              <td>% of Core Op Budget</td>
              {data.map((entry, index) => {
                const percent =
                  entry.NineYearSecured.totalDebtService /
                  entry.projectedCoreOpBudget;
                return <td key={index}>{(percent * 100).toFixed(2)}%</td>;
              })}
            </tr>
            {/* Projected Core Op Budget */}
            <tr>
              <td colSpan={data.length + 1} style={{ fontWeight: 'bold', textAlign: 'left' }}>
                Projected Core Operation Budget
              </td>
            </tr>
            <tr>
              <td>Budget</td>
              {data.map((entry, index) => (
                <td key={index}>
                  {entry.projectedCoreOpBudget.toLocaleString()}
                </td>
              ))}
            </tr>
          </tbody>
        </Table>
      </Container>
    ) :
    (
      <Container>
        <h1>{wp4001.name}</h1>
        <p>{wp4001.description}</p>
        <Table className="table-responsive" striped bordered hover>
          <thead>
            <tr>
              <th>Asset Category</th>
              {data.map((entry) => (
                <th key={entry.year}>Year {entry.year}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {Object.entries(transpose2005(data)).map(([asset, values]) => ( // use transposed data to get asset categories easily
              <tr key={asset}>
                <td>{asset}</td>
                {Object.keys(values).map((year) => (
                  <td key={year}>{values[year].toLocaleString()}</td>
                ))}
              </tr>
            ))}
          </tbody>
        </Table>
      </Container>
    ));
};

export default ViewWorkpaper;
