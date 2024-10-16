import { Card, CardHeader, Dropdown } from 'react-bootstrap';
import { ResponsiveContainer } from 'recharts';
import React from 'react';
import PropTypes from 'prop-types';
import CustomLineChart from './CustomLineChart';

/** ProjectionGraph component to display a graph to compare projections. */
const ProjectionGraph = ({ data }) => (
  <Card>
    <CardHeader>
      Chart {data.selectedChart.slice(-1)}
      <Dropdown isOpen={data.dropdownOpen} toggle={() => data.setDropdownOpen(prevState => !prevState)} style={{ display: 'inline-block', marginLeft: '10px' }}>
        <Dropdown.Toggle caret>
          Select Chart
        </Dropdown.Toggle>
        <Dropdown.Menu>
          {
            // maps chart data to dropdown menu items
            Object.keys(data.chartData).map((chartKey) => (
              <Dropdown.Item key={chartKey} onClick={() => data.setSelectedChart(chartKey)}>
                {chartKey.charAt(0).toUpperCase() + chartKey.slice(1)}
              </Dropdown.Item>
            ))
          }
        </Dropdown.Menu>
      </Dropdown>
    </CardHeader>
    <ResponsiveContainer width="100%" height={300}>
      <CustomLineChart data={data.chartData[data.selectedChart]} />
    </ResponsiveContainer>
  </Card>
);

// Require data to be passed to this component
ProjectionGraph.propTypes = {
  data: PropTypes.shape({
    selectedChart: PropTypes.string,
    setSelectedChart: PropTypes.func,
    dropdownOpen: PropTypes.bool,
    setDropdownOpen: PropTypes.func,
    chartData: PropTypes.node,
  }).isRequired,
};

export default ProjectionGraph;
