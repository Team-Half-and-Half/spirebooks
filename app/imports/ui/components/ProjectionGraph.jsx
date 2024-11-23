import { Card, CardHeader, Dropdown } from 'react-bootstrap';
import React from 'react';
import PropTypes from 'prop-types';
import CustomLineChart from './CustomLineChart';
import { COMPONENT_IDS } from '../utilities/ComponentIDs';

/** ProjectionGraph component to display a graph to compare projections. */
const ProjectionGraph = ({ selectedChart, setSelectedChart, dropdownOpen, setDropdownOpen, dropdownData }) => (
  <Card>
    <CardHeader>
      {selectedChart.name} {/* Display the name of the selected chart */}
      <Dropdown isOpen={dropdownOpen} toggle={() => setDropdownOpen(prevState => !prevState)} style={{ display: 'inline-block', marginLeft: '10px' }}>
        <Dropdown.Toggle id={COMPONENT_IDS.PROJECTION_GRAPH_SELECT_CHART} caret>
          Select Chart
        </Dropdown.Toggle>
        <Dropdown.Menu>
          {
            // Use the passed dropdownData for the dropdown menu items
            dropdownData.map((item) => (
              <Dropdown.Item key={item.id} onClick={() => setSelectedChart(item)} id={`${COMPONENT_IDS.PROJECTION_GRAPH_DROPDOWN_ITEM}-${item.id}`}>
                {item.name}
              </Dropdown.Item>
            ))
          }
        </Dropdown.Menu>
      </Dropdown>
    </CardHeader>
    <Card.Body>
      <CustomLineChart data={selectedChart.data} /> {/* render selected chart */}
    </Card.Body>
  </Card>
);

const chartDataPropType = PropTypes.shape({
  name: PropTypes.string,
  actual: PropTypes.number,
  edited: PropTypes.number,
  amt: PropTypes.number,
});

const chartPropType = PropTypes.shape({
  id: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
  data: PropTypes.arrayOf(chartDataPropType).isRequired,
});

// Require data to be passed to this component
ProjectionGraph.propTypes = {
  selectedChart: chartPropType.isRequired,
  setSelectedChart: PropTypes.func.isRequired,
  dropdownOpen: PropTypes.bool.isRequired,
  setDropdownOpen: PropTypes.func.isRequired,
  dropdownData: PropTypes.arrayOf(chartPropType).isRequired,
};

export default ProjectionGraph;
