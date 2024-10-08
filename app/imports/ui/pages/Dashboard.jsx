import React from 'react';
import { Col, Container, Row, Card, CardHeader } from 'react-bootstrap';
import { Meteor } from 'meteor/meteor';
import { useTracker } from 'meteor/react-meteor-data';
import CustomLineChart from '../components/CustomLineChart';
import { PAGE_IDS } from '../utilities/PageIDs';
import { singleChartData } from '../utilities/TemporaryData'; // replace later when using real data

/** Renders graphs that render all the financial data */
const Dashboard = () => {
  const { currentUser } = useTracker(() => ({
    currentUser: Meteor.user(),
  }), []);
  return (
    <Container fluid id={PAGE_IDS.DASHBOARD}>
      <Row>
        <Col>
          <div>
            <h1 className="company-title">{currentUser?.profile?.companyName || 'Company Name'}</h1>
          </div>
          <h1>Equity Metrics</h1>
          <Card>
            <CardHeader>Net Position</CardHeader>
            <CustomLineChart data={singleChartData} />
            <CardHeader>Years of Solvency</CardHeader>
            <CustomLineChart data={singleChartData} />
            <CardHeader>Demand for Capital</CardHeader>
            <CustomLineChart data={singleChartData} />
          </Card>
        </Col>
        <Col>
          <h1>&nbsp;</h1>
          <h1>Cash Flow Metrics</h1>
          <Card>
            <CardHeader>Financing</CardHeader>
            <CustomLineChart data={singleChartData} />
            <CardHeader>Years of Solvency based on Cash Flow</CardHeader>
            <CustomLineChart data={singleChartData} />
            <CardHeader>Budget</CardHeader>
            <CustomLineChart data={singleChartData} />
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default Dashboard;
