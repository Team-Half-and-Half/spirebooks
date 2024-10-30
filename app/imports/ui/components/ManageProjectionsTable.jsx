import React from 'react';
import { Table, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { PencilSquare, Trash } from 'react-bootstrap-icons';
import { multipleChartData } from '../utilities/TemporaryData';

const ManageProjectionsTable = () => (
  <Table className="table-responsive" striped bordered hover>
    <thead>
      <tr>
        <th>Name/Description</th>
        <th>Edit</th>
        <th>Delete</th>
      </tr>
    </thead>
    <tbody>
      {/* multipleChartData contains sample data to populate the charts */}
      {/* the following section of code maps over each set of chart data in multipleChartData */}
      {/* and creates a row that allows a user to edit and delete each chart */}
      {multipleChartData.map((item) => (
        <tr key={item.id}>
          {/* item.id is the primary key for each chart */}
          {/* item.name is the specific name for a chart associated with item.id */}
          <td>{item.name}</td>
          <td className="text-center">
            {/* Generates a link to edit each set of chart data for a specific chart specified by item.id */}
            <Link to={`/edit/${item.id}`} className="btn btn-primary">
              <PencilSquare />
            </Link>
          </td>
          <td className="text-center">
            <Button variant="danger">
              <Trash />
            </Button>
          </td>
        </tr>
      ))}
    </tbody>
  </Table>
);

export default ManageProjectionsTable;
