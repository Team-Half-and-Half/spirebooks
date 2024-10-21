import { Card, CardHeader, Dropdown } from 'react-bootstrap';
import { ResponsiveContainer } from 'recharts';
import React from 'react';
import PropTypes from 'prop-types';
import CustomLineChart from './CustomLineChart';

/** ProjectionGraph component to display a graph to compare projections. */
const ProjectionGraph = ({ selectedChart, setSelectedChart, dropdownOpen, setDropdownOpen, dropdownData }) => (
  <Card>
    <CardHeader>
      {selectedChart.name} {/* Display the name of the selected chart */}
      <Dropdown isOpen={dropdownOpen} toggle={() => setDropdownOpen(prevState => !prevState)} style={{ display: 'inline-block', marginLeft: '10px' }}>
        <Dropdown.Toggle caret>
          Select Chart
        </Dropdown.Toggle>
        <Dropdown.Menu>
          {
            // Use the passed dropdownData for the dropdown menu items
            dropdownData.map((item) => (
              <Dropdown.Item key={item.id} onClick={() => setSelectedChart(item)}>
                {item.name}
              </Dropdown.Item>
            ))
          }
        </Dropdown.Menu>
      </Dropdown>
    </CardHeader>
    <ResponsiveContainer width="100%" height={300}>
      <CustomLineChart data={selectedChart.data} /> {/* Use selectedChart.data instead of chart.data */}
    </ResponsiveContainer>
  </Card>
);

// Require data to be passed to this component
ProjectionGraph.propTypes = {
  selectedChart: PropTypes.shape({
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    data: PropTypes.arrayOf(PropTypes.shape({
      name: PropTypes.string,
      actual: PropTypes.number,
      edited: PropTypes.number,
      amt: PropTypes.number,
    })).isRequired,
  }).isRequired,
  setSelectedChart: PropTypes.func.isRequired,
  dropdownOpen: PropTypes.bool.isRequired,
  setDropdownOpen: PropTypes.func.isRequired,
  dropdownData: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    data: PropTypes.arrayOf(PropTypes.shape({
      name: PropTypes.string,
      actual: PropTypes.number,
      edited: PropTypes.number,
      amt: PropTypes.number,
    })).isRequired,
  })).isRequired,
};

export default ProjectionGraph;
