import { CartesianGrid, Legend, Line, LineChart, ResponsiveContainer, Tooltip, XAxis, YAxis } from 'recharts';
import React from 'react';
import PropTypes from 'prop-types';

/** CustomLineChart component to display a line chart of data. Automatically switches line labels based on the keys in the data */
const CustomLineChart = ({ data }) => {
  // Dynamically extract the keys from the first object in the data array
  const dataKeys = Object.keys(data[0] || {}).filter(key => key !== 'name' && key !== 'amt');

  return (
    <ResponsiveContainer width="100%" height={300}>
      <LineChart className="line-chart" data={data}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip />
        <Legend formatter={(value) => value.charAt(0).toUpperCase() + value.slice(1)} />
        {dataKeys.map((key, index) => (
          <Line
            key={key}
            type="monotone"
            dataKey={key}
            stroke={index === 0 ? '#8884d8' : '#82ca9d'}
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
    }),
  ).isRequired,
};

export default CustomLineChart;
