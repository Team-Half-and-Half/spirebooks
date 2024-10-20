import React, { useState } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { Meteor } from 'meteor/meteor';
import { useTracker } from 'meteor/react-meteor-data';
import { PAGE_IDS } from '../utilities/PageIDs';
import ProjectionGraph from '../components/ProjectionGraph';
import { multipleChartData } from '../utilities/TemporaryData'; // replace later when using real data

/** Compare projection graphs using dropdown menus */
const CompareProjections = () => {
  const { currentUser } = useTracker(() => ({
    currentUser: Meteor.user(),
  }), []);

  // setSelectedChart variables are used to change the charts when an option is selected from the dropdown menu
  const [selectedChart1, setSelectedChart1] = useState('chart1'); // State for first chart
  const [selectedChart2, setSelectedChart2] = useState('chart2'); // State for second chart
  // setDropDownOpen variables are used to change whether the dropdown menu is visible or hidden (open or closed)
  const [dropdownOpen1, setDropdownOpen1] = useState(false); // Dropdown menu 1 is hidden initially
  const [dropdownOpen2, setDropdownOpen2] = useState(false); // Dropdown menu 2 is hidden initially

  // dictionaries to pass into ProjectionGraph.jsx components
  const firstGraphData = {};
  firstGraphData.selectedChart = selectedChart1;
  firstGraphData.setSelectedChart = setSelectedChart1;
  firstGraphData.dropdownOpen = dropdownOpen1;
  firstGraphData.setDropdownOpen = setDropdownOpen1;
  firstGraphData.chartData = multipleChartData;

  const secondGraphData = {};
  secondGraphData.selectedChart = selectedChart2;
  secondGraphData.setSelectedChart = setSelectedChart2;
  secondGraphData.dropdownOpen = dropdownOpen2;
  secondGraphData.setDropdownOpen = setDropdownOpen2;
  secondGraphData.chartData = multipleChartData;

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
          <ProjectionGraph data={firstGraphData} />
        </Col>
        <Col>
          {/* Second Chart */}
          <ProjectionGraph data={secondGraphData} />
        </Col>
      </Row>
    </Container>
  );
};

export default CompareProjections;
