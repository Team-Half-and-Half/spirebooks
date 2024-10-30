import React from 'react';
import { Button, Col, Container, Row } from 'react-bootstrap';
import { useTracker } from 'meteor/react-meteor-data';
import { Meteor } from 'meteor/meteor';
import ManageProjectionsTable from '../components/ManageProjectionsTable';

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
          <ManageProjectionsTable />
        </Col>
      </Row>
    </Container>
  );
};

export default ManageProjections;
