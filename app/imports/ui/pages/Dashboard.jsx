import React, { useState } from 'react';
import { DropdownButton, Dropdown, Col, Container, Row, Card, CardHeader, Button } from 'react-bootstrap';
import { Meteor } from 'meteor/meteor';
import { useTracker } from 'meteor/react-meteor-data';
import CustomLineChart from '../components/CustomLineChart';
import { PAGE_IDS } from '../utilities/PageIDs';
import { snapshotData } from '../utilities/TemporaryData'; // replace later when using real data
import DashboardTable from '../components/DashboardTable';

/** Renders graphs that show all the financial data */
const Dashboard = () => {
  const { currentUser } = useTracker(() => ({
    currentUser: Meteor.user(),
  }), []);

  // State to manage number of years for filtering
  const [years, setYears] = useState(snapshotData.length);

  // Handle year selection from dropdown
  const handleYearChange = (yearsSelected) => {
    setYears(yearsSelected);
  };

  // Filter data based on the selected number of years
  const filteredData = snapshotData.slice(0, years);

  // Assign data for specific metrics
  const netPositionData = filteredData.map(year => ({
    assets: year.assets,
    liabilities: year.liabilities,
    year: year.year,
  }));

  const yearsOfSolvencyData = filteredData.map(year => ({
    liquidity: year.liquidity,
    opex: year.opex,
    year: year.year,
  }));

  const demandForCapitalData = filteredData.map(year => ({
    liquidity: year.liquidity,
    year: year.year,
  }));

  const financingData = filteredData.map(year => ({
    Cash_on_hand: year.cash_on_hand,
    Debt: year.debt,
    year: year.year,
  }));

  const yearsOfSolvencyCashData = filteredData.map(year => ({
    Cash_inflow: year.cash_inflow,
    Cash_outflow: year.cash_outflow,
    year: year.year,
  }));

  const budgetData = filteredData.map(year => ({
    budget: year.budget,
    actual_plus_encumbrance: year.actualPlusEncumbrance,
    year: year.year,
  }));

  // states to manage show/hide table view button
  const [showTable, setShowTable] = useState(false);

  const toggleTableView = () => {
    setShowTable(!showTable);
  };

  return (
    <Container fluid id={PAGE_IDS.DASHBOARD}>
      <Row>
        <Col>
          <div className="text-center my-3">
            <h1 className="company-title">
              {currentUser?.profile?.companyName || 'Company Name'}
            </h1>
          </div>
        </Col>
      </Row>
      <Row className="text-center justify-content-center mb-3">
        <Col lg={5}>
          <DropdownButton id="dropdown-basic-button" title="Select Number of Years">
            {snapshotData.map((item, index) => (
              <Dropdown.Item
                key={index}
                onClick={() => handleYearChange(index + 1)}
              >
                {index + 1} Year(s)
              </Dropdown.Item>
            ))}
          </DropdownButton>
        </Col>
      </Row>
      <Row className="py-2">
        <Col>
          <h1 className="text-center">Equity Metrics</h1>
          <Card className="my-2">
            <CardHeader>Net Position</CardHeader>
            <CustomLineChart data={netPositionData} />
          </Card>
          <Card className="my-2">
            <CardHeader>Years of Solvency</CardHeader>
            <CustomLineChart data={yearsOfSolvencyData} />
          </Card>
          <Card className="my-2">
            <CardHeader>Demand for Capital</CardHeader>
            <CustomLineChart data={demandForCapitalData} />
          </Card>
        </Col>
        <Col>
          <h1 className="text-center">Cash Flow Metrics</h1>
          <Card className="my-2">
            <CardHeader>Financing</CardHeader>
            <CustomLineChart data={financingData} />
          </Card>
          <Card className="my-2">
            <CardHeader>Years of Solvency based on Cash Flow</CardHeader>
            <CustomLineChart data={yearsOfSolvencyCashData} />
          </Card>
          <Card className="my-2">
            <CardHeader>Budget</CardHeader>
            <CustomLineChart data={budgetData} />
          </Card>
        </Col>
      </Row>
      <Row>
        <Col className="mx-auto">

          <Card>
            <CardHeader>
              <Button
                onClick={toggleTableView}
                className={`my-2 ${showTable ? 'btn-secondary' : 'btn-primary'}`}
              >
                {showTable ? 'Hide Table View' : 'Show Table View'}
              </Button>
            </CardHeader>
            {showTable && <DashboardTable />}
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default Dashboard;
