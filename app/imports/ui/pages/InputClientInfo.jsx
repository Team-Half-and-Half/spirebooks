import React from 'react';
import { Card, CardBody, Col, Container, Row } from 'react-bootstrap';
import { AutoForm, ErrorsField, NumField, SubmitField, TextField } from 'uniforms-bootstrap5';
import swal from 'sweetalert';
import { Meteor } from 'meteor/meteor';
import ListGroup from 'react-bootstrap/ListGroup';
import CardGroup from 'react-bootstrap/CardGroup';
import { Stuffs } from '../../api/stuff/StuffCollection';
import { defineMethod } from '../../api/base/BaseCollection.methods';
import { PAGE_IDS } from '../utilities/PageIDs';
import { DataInputBridge } from '../components/DataInputBridge';
import { List } from 'react-bootstrap-icons';


const InputClientInfo = () => {
  // On submit, insert the data.
  const submit = (data, formRef) => {
    const { name, quantity, condition } = data;
    const owner = Meteor.user().username;
    const collectionName = Stuffs.getCollectionName();
    const definitionData = { name, quantity, condition, owner };
    defineMethod.callPromise({ collectionName, definitionData })
      .catch(error => swal('Error', error.message, 'error'))
      .then(() => {
        swal('Success', 'Item added successfully', 'success');
        formRef.reset();
      });
  };
  // Render the form. Use Uniforms: https://github.com/vazco/uniforms
  let fRef = null;
  return (
    <Container fluid id={PAGE_IDS.ADD_MONEY} className="py-3">
      <AutoForm ref={ref => { fRef = ref; }} schema={DataInputBridge} onSubmit={data => submit(data, fRef)}>
        <Container className="justify-content-center">
          <h5 className="text-center">Company Information</h5>
          <NumField name="year" decimal={null} />
          <TextField name="companyName" />
        </Container>
        <Container className="justify-content-center">
          <CardGroup>
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
            <Card>
              <ListGroup variant="flush">
                <ListGroup.Item><h5>Other Assets</h5></ListGroup.Item>
              </ListGroup>
              <Container className="justify-content-center">
                <Row>
                  <Col>
                    <NumField name="accountsReceivable" decimal={null} />
                    <NumField name="notesWithinOneYear" decimal={null} />
                    <NumField name="interestDividendsReceivable" decimal={null} />
                    <NumField name="securityDeposits" decimal={null} />
                    <NumField name="capitalAssetNet" decimal={null} />
                  </Col>
                  <Col>
                    <NumField name="dueFromOtherFund" decimal={null} />
                    <NumField name="notesAfterOneYear" decimal={null} />
                    <NumField name="inventoryPrepaidOtherAssets" decimal={null} />
                    <NumField name="investments" decimal={null} />
                    <NumField name="deferredOutflows" decimal={null} />
                  </Col>
                </Row>
              </Container>
            </Card>
          </CardGroup>
          <CardGroup>
            <Card>
              <ListGroup variant="flush">
                <ListGroup.Item><h5>Liabilities</h5></ListGroup.Item>
              </ListGroup>
              <Container className="justify-content-center">
                <Row>
                  <NumField name="accountPayableAccrued" decimal={null} />
                  <Col>
                    <NumField name="dueToFund" decimal={null} />
                    <NumField name="longTermWithinOneYear" decimal={null} />
                    <NumField name="deferredInflowsResources" decimal={null} />
                  </Col>
                  <Col>
                    <NumField name="dueToOtherFund" decimal={null} />
                    <NumField name="longTermAfterOneYear" decimal={null} />
                    <NumField name="deferredInflowsOPEB" decimal={null} />
                  </Col>
                </Row>
              </Container>
            </Card>
            <Card>
              <ListGroup variant="flush">
                <ListGroup.Item><h5>Net Assets</h5></ListGroup.Item>
              </ListGroup>
              <Container className="justify-content-center">
                <NumField name="investedCapitalAssets" decimal={null} />
                <NumField name="restrictedFederalFunds" decimal={null} />
                <NumField name="unrestricted" decimal={null} />
              </Container>
            </Card>
          </CardGroup>
        </Container>
      </AutoForm>
    </Container>
  );
};

export default InputClientInfo;
