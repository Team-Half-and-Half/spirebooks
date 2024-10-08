import React, { useState } from 'react';
import { Col, Container, Row, Card, CardHeader, Dropdown } from 'react-bootstrap';
import { ResponsiveContainer } from 'recharts';
import { Meteor } from 'meteor/meteor';
import { useTracker } from 'meteor/react-meteor-data';
import { PAGE_IDS } from '../utilities/PageIDs';
import CustomLineChart from '../components/CustomLineChart';
import { multipleChartData } from '../utilities/TemporaryData'; // replace later when using real data

/** Compare projection graphs using dropdown menus */
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
                    Object.keys(multipleChartData).map((chartKey) => (
                      <Dropdown.Item key={chartKey} onClick={() => handleChartSelect1(chartKey)}>
                        {chartKey.charAt(0).toUpperCase() + chartKey.slice(1)}
                      </Dropdown.Item>
                    ))
                  }
                </Dropdown.Menu>
              </Dropdown>
            </CardHeader>
            <ResponsiveContainer width="100%" height={300}>
              <CustomLineChart data={multipleChartData[selectedChart1]} />
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
                    Object.keys(multipleChartData).map((chartKey) => (
                      <Dropdown.Item key={chartKey} onClick={() => handleChartSelect2(chartKey)}>
                        {chartKey.charAt(0).toUpperCase() + chartKey.slice(1)}
                      </Dropdown.Item>
                    ))
                  }
                </Dropdown.Menu>
              </Dropdown>
            </CardHeader>
            <ResponsiveContainer width="100%" height={300}>
              <CustomLineChart data={multipleChartData[selectedChart2]} />
            </ResponsiveContainer>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default CompareProjections;
