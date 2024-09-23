import React from 'react';
import { Col, Container, Row, Card, CardHeader } from 'react-bootstrap';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import { Meteor } from 'meteor/meteor';
import { useTracker } from 'meteor/react-meteor-data';
import { PAGE_IDS } from '../utilities/PageIDs';
/* Renders graphs that render all the financial data */
const Dashboard = () => {
  const { currentUser } = useTracker(() => ({
    currentUser: Meteor.user(),
  }), []);
  const data = [
    {
      name: 'Year 1',
      actual: 4000,
      edited: 2400,
      amt: 2400,
    },
    {
      name: 'Year 2',
      actual: 3000,
      edited: 1398,
      amt: 2210,
    },
    {
      name: 'Year 3',
      actual: 2000,
      edited: 9800,
      amt: 2290,
    },
    {
      name: 'Year 4',
      actual: 2780,
      edited: 3908,
      amt: 2000,
    },
    {
      name: 'Year 5',
      actual: 1890,
      edited: 4800,
      amt: 2181,
    },
    {
      name: 'Year 6',
      actual: 2390,
      edited: 3800,
      amt: 2500,
    },
    {
      name: 'Year 7',
      actual: 3490,
      edited: 4300,
      amt: 2100,
    },
  ];
  return (
    <Container fluid id={PAGE_IDS.DASHBOARD}>
      <Row>
        <Col>
          <div>
            <h1 className="company-title">{currentUser?.profile?.companyName || 'Company Name'}</h1>
          </div>
          <h1>Equity Metrics</h1>
          <Card>
            <CardHeader>Net Position</CardHeader>
            <ResponsiveContainer width="100%" height={300}>
              <LineChart
                width={500}
                height={300}
                data={data}
                margin={{
                  top: 5, right: 30, left: 20, bottom: 5,
                }}
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
            <CardHeader>Years of Solvency</CardHeader>
            <ResponsiveContainer width="100%" height={300}>
              <LineChart
                width={500}
                height={300}
                data={data}
                margin={{
                  top: 5, right: 30, left: 20, bottom: 5,
                }}
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
            <CardHeader>Demand for Capital</CardHeader>
            <ResponsiveContainer width="100%" height={300}>
              <LineChart
                width={500}
                height={300}
                data={data}
                margin={{
                  top: 5, right: 30, left: 20, bottom: 5,
                }}
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
          <h1>&nbsp;</h1>
          <h1>Cash Flow Metrics</h1>
          <Card>
            <CardHeader>Financing</CardHeader>
            <ResponsiveContainer width="100%" height={300}>
              <LineChart
                width={500}
                height={300}
                data={data}
                margin={{
                  top: 5, right: 30, left: 20, bottom: 5,
                }}
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
            <CardHeader>Years of Solvency based on Cash Flow</CardHeader>
            <ResponsiveContainer width="100%" height={300}>
              <LineChart
                width={500}
                height={300}
                data={data}
                margin={{
                  top: 5, right: 30, left: 20, bottom: 5,
                }}
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
            <CardHeader>Budget</CardHeader>
            <ResponsiveContainer width="100%" height={300}>
              <LineChart
                width={500}
                height={300}
                data={data}
                margin={{
                  top: 5, right: 30, left: 20, bottom: 5,
                }}
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

export default Dashboard;
