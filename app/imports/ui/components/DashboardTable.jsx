import React from 'react';
import { Table } from 'react-bootstrap';
import { snapshotData } from '../utilities/TemporaryData'; // replace later when using real data

/** Renders snapshot info in a table view */
const DashboardTable = () => {
  // Extract categories (keys) excluding the 'year' and years for table structure
  const categories = Object.keys(snapshotData[0]).filter(key => key !== 'year');
  const years = snapshotData.map(data => data.year);

  return (
    <Table bordered hover responsive>
      <thead>
        <tr>
          <th>Category</th>
          {years.map((year, index) => (
            <th key={index}>{year}</th>
          ))}
        </tr>
      </thead>
      <tbody>
        {categories.map((category, index) => (
          <tr key={index}>
            <td>{category.replace(/_/g, ' ').toUpperCase()}</td>
            {snapshotData.map((data, dataIndex) => (
              <td key={dataIndex}>
                {typeof data[category] === 'number'
                  ? data[category].toLocaleString(undefined, { maximumFractionDigits: 2 })
                  : data[category]}
              </td>
            ))}
          </tr>
        ))}
      </tbody>
    </Table>
  );
};

export default DashboardTable;
