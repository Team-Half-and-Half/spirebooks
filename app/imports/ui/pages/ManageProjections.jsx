import React from 'react';
import { Button, Col, Container, Row, Table } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { PencilSquare, Trash } from 'react-bootstrap-icons';
import { useTracker } from 'meteor/react-meteor-data';
import { Meteor } from 'meteor/meteor';
import { multipleChartData } from '../utilities/TemporaryData';

/* Renders a table containing all the ProjectionGraphs documents. */
const ManageProjections = () => {

  const { currentUser } = useTracker(() => ({
    currentUser: Meteor.user(),
  }), []);

  return (
    <Container className="py-3">
      <Row>
        <Col className="d-flex flex-column">
          {/* Company Title is either a default "Company Name" or the currentUser's profile's companyName variable value */}
          <h1 className="company-title">{currentUser?.profile?.companyName || 'Company Name'}</h1>
          <h3>Create New Projection</h3>
          <Col sm={2} className="d-flex flex-column mx-4">
            <Button className="mb-2">Upload .CSV File</Button>
            <Button>Manual Input Form</Button>
          </Col>
        </Col>
      </Row>
      <Row className="justify-content-center pt-4">
        <Col md={10}>
          <Col><h2>Manage Projections</h2></Col>
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
        </Col>
      </Row>
    </Container>
  );
};

export default ManageProjections;
