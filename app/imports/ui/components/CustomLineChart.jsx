import { CartesianGrid, Legend, Line, LineChart, ResponsiveContainer, Tooltip, XAxis, YAxis } from 'recharts';
import React from 'react';
import PropTypes from 'prop-types';

/** CustomLineChart component to display a line chart with dual Y-axes */
const CustomLineChart = ({ data }) => {
  // Dynamically extract the keys from the first object in the data array, excluding 'year'
  const dataKeys = Object.keys(data[0] || {}).filter(key => key !== 'year');

  return (
    <ResponsiveContainer className="px-3" width="100%" height={300}>
      <LineChart className="line-chart" data={data}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="year" />

        {/* Left Y-Axis with vertical label */}
        <YAxis
          yAxisId="left"
          stroke="#0073e6"
          label={{ value: 'Millions', angle: -90, position: 'insideLeft', offset: 10 }} // Adjust offset as needed
        />
        {/* Right Y-Axis with vertical label */}
        <YAxis
          yAxisId="right"
          orientation="right"
          stroke="#8b0000"
          label={{ value: 'Millions', angle: -90, position: 'insideRight', offset: 10 }} // Adjust offset as needed
        />

        <Tooltip />
        <Legend formatter={(value) => value.charAt(0).toUpperCase() + value.slice(1)} />

        {/* Assign the first dataKey to the left axis and the second to the right axis */}
        {dataKeys.map((key, index) => (
          <Line
            key={key}
            type="linear"
            dataKey={key}
            stroke={index === 0 ? '#0073e6' : '#8b0000'}
            yAxisId={index === 0 ? 'left' : 'right'} // Use 'left' for first and 'right' for second key
            activeDot={{ r: 8 }}
          />
        ))}
      </LineChart>
    </ResponsiveContainer>
  );
};

// Require data to be passed to this component
CustomLineChart.propTypes = {
  data: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      actual: PropTypes.number,
      edited: PropTypes.number,
      amt: PropTypes.number,
      year: PropTypes.number.isRequired, // Ensure year is included for proper type checking
    }),
  ).isRequired,
};

export default CustomLineChart;
