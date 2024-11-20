import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import ListGroup from 'react-bootstrap/ListGroup';
import { AutoForm, NumField } from 'uniforms-bootstrap5';
import { PAGE_IDS } from '../utilities/PageIDs';

const InputProjection = () => (
  <Container fluid id={PAGE_IDS.INPUT_PROJECTION} className="py-3">
    <Row className="justify-content-center align-middle">
      <Col lg={6}>
        <h1 className="text-center">Create a New Projection</h1>
      </Col>
    </Row>
    <AutoForm>
      <Row className="justify-content-center align-middle">
        <Col lg={6}>
          <Card>
            <ListGroup variant="flush">
              <ListGroup.Item><h5>Cash and Cash Equivalents</h5></ListGroup.Item>
            </ListGroup>
            <Container className="justify-content-center">
              <NumField name="pettyCash" decimal={null} />
              <NumField name="cash" decimal={null} />
              <NumField name="cashInBank" decimal={null} />
              <NumField name="cashHeldInvestmentManager" decimal={null} />
              <NumField name="restrictedCash" decimal={null} />
            </Container>
          </Card>
        </Col>
      </Row>
    </AutoForm>
  </Container>
);

export default InputProjection;
