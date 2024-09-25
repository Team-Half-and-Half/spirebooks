import React, { useState } from 'react';
import { Col, Container, Row, Card, CardHeader, Dropdown } from 'react-bootstrap';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import { Meteor } from 'meteor/meteor';
import { useTracker } from 'meteor/react-meteor-data';
import { PAGE_IDS } from '../utilities/PageIDs';

/* Compare projection graphs using dropdown menus */
// sample data to test that the dropdown menu changes the charts, replace later with real projections
const sampleProjections = {
  chart1: [
    { name: 'Year 1', actual: 10, edited: 25, amt: 15 },
    { name: 'Year 2', actual: 30, edited: 18, amt: 22 },
    { name: 'Year 3', actual: 22, edited: 45, amt: 33 },
    { name: 'Year 4', actual: 17, edited: 40, amt: 28 },
    { name: 'Year 5', actual: 12, edited: 55, amt: 35 },
    { name: 'Year 6', actual: 27, edited: 20, amt: 23 },
    { name: 'Year 7', actual: 35, edited: 32, amt: 27 },
  ],
  chart2: [
    { name: 'Year 1', actual: 15, edited: 30, amt: 20 },
    { name: 'Year 2', actual: 20, edited: 22, amt: 18 },
    { name: 'Year 3', actual: 12, edited: 50, amt: 40 },
    { name: 'Year 4', actual: 25, edited: 38, amt: 32 },
    { name: 'Year 5', actual: 28, edited: 55, amt: 37 },
    { name: 'Year 6', actual: 18, edited: 25, amt: 30 },
    { name: 'Year 7', actual: 30, edited: 40, amt: 28 },
  ],
  chart3: [
    { name: 'Year 1', actual: 20, edited: 35, amt: 25 },
    { name: 'Year 2', actual: 12, edited: 28, amt: 20 },
    { name: 'Year 3', actual: 18, edited: 48, amt: 35 },
    { name: 'Year 4', actual: 30, edited: 40, amt: 33 },
    { name: 'Year 5', actual: 24, edited: 52, amt: 39 },
    { name: 'Year 6', actual: 15, edited: 30, amt: 32 },
    { name: 'Year 7', actual: 33, edited: 45, amt: 29 },
  ],
};

const CompareProjections = () => {
  const { currentUser } = useTracker(() => ({
    currentUser: Meteor.user(),
  }), []);

  // set up react states
  const [selectedChart1, setSelectedChart1] = useState('chart1'); // State for first chart
  const [selectedChart2, setSelectedChart2] = useState('chart2'); // State for second chart
  const [dropdownOpen1, setDropdownOpen1] = useState(false); // Dropdown menu 1 is hidden initially
  const [dropdownOpen2, setDropdownOpen2] = useState(false); // Dropdown menu 2 is hidden initially

  // used to change whether the dropdown menu is visible or hidden (open or closed)
  const toggleDropdown1 = () => setDropdownOpen1(prevState => !prevState);
  const toggleDropdown2 = () => setDropdownOpen2(prevState => !prevState);

  // used to change the charts when an option is selected from the dropdown menu
  const handleChartSelect1 = (chart) => {
    setSelectedChart1(chart); // Set selected data for first chart
  };
  const handleChartSelect2 = (chart) => {
    setSelectedChart2(chart); // Set selected data for second chart
  };

  return (
    <Container fluid id={PAGE_IDS.COMPARE_PROJECTIONS}>
      <Row>
        <div>
          <h1 className="company-title">{currentUser?.profile?.companyName || 'Company Name'}</h1>
        </div>
      </Row>
      <Row>
        <Col>
          {/* First Chart */}
          <Card>
            <CardHeader>
              Chart {selectedChart1.slice(-1)}
              <Dropdown isOpen={dropdownOpen1} toggle={toggleDropdown1} style={{ display: 'inline-block', marginLeft: '10px' }}>
                <Dropdown.Toggle caret>
                  Select Chart
                </Dropdown.Toggle>
                <Dropdown.Menu>
                  {
                    // maps chart data to dropdown menu items
                    Object.keys(sampleProjections).map((chartKey) => (
                      <Dropdown.Item key={chartKey} onClick={() => handleChartSelect1(chartKey)}>
                        {chartKey.charAt(0).toUpperCase() + chartKey.slice(1)}
                      </Dropdown.Item>
                    ))
                  }
                </Dropdown.Menu>
              </Dropdown>
            </CardHeader>
            <ResponsiveContainer width="100%" height={300}>
              {/* Replace later with CustomLineChart */}
              <LineChart
                width={500}
                height={300}
                data={sampleProjections[selectedChart1]}
                margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
              >
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Line type="monotone" dataKey="actual" stroke="#8884d8" activeDot={{ r: 8 }} />
                <Line type="monotone" dataKey="edited" stroke="#82ca9d" />
              </LineChart>
            </ResponsiveContainer>
          </Card>
        </Col>
        <Col>
          {/* Second Chart */}
          <Card>
            <CardHeader>
              Chart {selectedChart2.slice(-1)}
              <Dropdown isOpen={dropdownOpen2} toggle={toggleDropdown2} style={{ display: 'inline-block', marginLeft: '10px' }}>
                <Dropdown.Toggle caret>
                  Select Chart
                </Dropdown.Toggle>
                <Dropdown.Menu>
                  { // maps chart data to dropdown menu items
                    Object.keys(sampleProjections).map((chartKey) => (
                      <Dropdown.Item key={chartKey} onClick={() => handleChartSelect2(chartKey)}>
                        {chartKey.charAt(0).toUpperCase() + chartKey.slice(1)}
                      </Dropdown.Item>
                    ))
                  }
                </Dropdown.Menu>
              </Dropdown>
            </CardHeader>
            <ResponsiveContainer width="100%" height={300}>
              {/* Replace later with CustomLineChart */}
              <LineChart
                width={500}
                height={300}
                data={sampleProjections[selectedChart2]}
                margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
              >
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Line type="monotone" dataKey="actual" stroke="#8884d8" activeDot={{ r: 8 }} />
                <Line type="monotone" dataKey="edited" stroke="#82ca9d" />
              </LineChart>
            </ResponsiveContainer>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default CompareProjections;
