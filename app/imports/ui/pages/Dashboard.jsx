import React, { useState } from 'react';
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

  // State to manage number of years for filtering
  const [years, setYears] = useState(singleChartData.length);

  // Handle year selection from dropdown
  const handleYearChange = (event) => {
    setYears(Number(event.target.value));
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
          <h1>Equity Metrics</h1>
          {/* Dropdown to select the number of years */}
          <div style={{ marginBottom: '10px' }}>
            <label htmlFor="year-select">Select number of years: </label>
            <select id="year-select" value={years} onChange={handleYearChange}>
              {singleChartData.map((item, index) => (
                <option key={index} value={index + 1}>{`First ${index + 1} Year(s)`}</option>
              ))}
            </select>
          </div>

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
          <h1>&nbsp;</h1>
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
