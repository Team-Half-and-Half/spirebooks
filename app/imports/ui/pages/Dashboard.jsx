import React, { useState } from 'react';
import { DropdownButton, Dropdown, Col, Container, Row, Card, CardHeader } from 'react-bootstrap';
import { Meteor } from 'meteor/meteor';
import { useTracker } from 'meteor/react-meteor-data';
import CustomLineChart from '../components/CustomLineChart';
import { PAGE_IDS } from '../utilities/PageIDs';
import { singleChartData } from '../utilities/TemporaryData'; // replace later when using real data

/** Renders graphs that show all the financial data */
const Dashboard = () => {
  const { currentUser } = useTracker(() => ({
    currentUser: Meteor.user(),
  }), []);

  // State to manage number of years for filtering
  const [years, setYears] = useState(singleChartData.length);

  // Handle year selection from dropdown
  const handleYearChange = (yearsSelected) => {
    setYears(yearsSelected);
  };

  // Filter data based on the selected number of years
  const filteredData = singleChartData.slice(0, years);

  return (
    <Container fluid id={PAGE_IDS.DASHBOARD}>
      <Row>
        <Col>
          <div>
            <h1 className="company-title">{currentUser?.profile?.companyName || 'Company Name'}</h1>
          </div>
        </Col>
      </Row>
      <Row>
        <DropdownButton id="dropdown-basic-button" title="Select Number of Years">
          {singleChartData.map((item, index) => (
            <Dropdown.Item
              key={index}
              onClick={() => handleYearChange(index + 1)}
            >
              First {index + 1} Year(s)
            </Dropdown.Item>
          ))}
        </DropdownButton>
      </Row>
      <Row>
        <Col>
          <h1>Equity Metrics</h1>
          <Card>
            <CardHeader>Net Position</CardHeader>
            <CustomLineChart data={filteredData} />
            <CardHeader>Years of Solvency</CardHeader>
            <CustomLineChart data={filteredData} />
            <CardHeader>Demand for Capital</CardHeader>
            <CustomLineChart data={filteredData} />
          </Card>
        </Col>
        <Col>
          <h1>Cash Flow Metrics</h1>
          <Card>
            <CardHeader>Financing</CardHeader>
            <CustomLineChart data={filteredData} />
            <CardHeader>Years of Solvency based on Cash Flow</CardHeader>
            <CustomLineChart data={filteredData} />
            <CardHeader>Budget</CardHeader>
            <CustomLineChart data={filteredData} />
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default Dashboard;
