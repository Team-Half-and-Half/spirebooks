import { CartesianGrid, Legend, Line, LineChart, ResponsiveContainer, Tooltip, XAxis, YAxis } from 'recharts';
import React from 'react';
import PropTypes from 'prop-types';

/** CustomLineChart component to display a line chart of data. Currently displays two lines: actual data and edited data */
const CustomLineChart = ({ data }) => (
  <ResponsiveContainer width="100%" height={300}>
    <LineChart className="line-chart" data={data}>
      <CartesianGrid strokeDasharray="3 3" />
      <XAxis dataKey="name" />
      <YAxis />
      <Tooltip />
      <Legend />
      <Line type="monotone" dataKey="actual" stroke="#8884d8" activeDot={{ r: 8 }} />
      <Line type="monotone" dataKey="edited" stroke="#82ca9d" />
    </LineChart>
  </ResponsiveContainer>
);

// Require data to be passed to this component
CustomLineChart.propTypes = {
  data: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string,
      actual: PropTypes.number,
      edited: PropTypes.number,
      amt: PropTypes.number,
    }),
  ).isRequired,
};

export default CustomLineChart;
