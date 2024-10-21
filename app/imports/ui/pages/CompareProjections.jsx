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
  const [selectedChart1, setSelectedChart1] = useState(multipleChartData[0]); // State for first chart
  const [selectedChart2, setSelectedChart2] = useState(multipleChartData[1]); // State for second chart
  // setDropDownOpen variables are used to change whether the dropdown menu is visible or hidden (open or closed)
  const [dropdownOpen1, setDropdownOpen1] = useState(false); // Dropdown menu 1 is hidden initially
  const [dropdownOpen2, setDropdownOpen2] = useState(false); // Dropdown menu 2 is hidden initially

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
          <ProjectionGraph
            selectedChart={selectedChart1}
            setSelectedChart={setSelectedChart1}
            dropdownOpen={dropdownOpen1}
            setDropdownOpen={setDropdownOpen1}
            dropdownData={multipleChartData} // Assuming this is your full chart data array
          />
        </Col>
        <Col>
          {/* Second Chart */}
          <ProjectionGraph
            selectedChart={selectedChart2}
            setSelectedChart={setSelectedChart2}
            dropdownOpen={dropdownOpen2}
            setDropdownOpen={setDropdownOpen2}
            dropdownData={multipleChartData} // Assuming this is your full chart data array
          />
        </Col>
      </Row>
    </Container>
  );
};

export default CompareProjections;
