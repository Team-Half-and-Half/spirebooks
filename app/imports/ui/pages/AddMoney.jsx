import React from 'react';
import { Card, Col, Container, Row } from 'react-bootstrap';
import { AutoForm, ErrorsField, NumField, SubmitField } from 'uniforms-bootstrap5';
import swal from 'sweetalert';
import { Meteor } from 'meteor/meteor';
import SimpleSchema2Bridge from 'uniforms-bridge-simple-schema-2';
import SimpleSchema from 'simpl-schema';
import { Stuffs } from '../../api/stuff/StuffCollection';
import { defineMethod } from '../../api/base/BaseCollection.methods';
import { PAGE_IDS } from '../utilities/PageIDs';

// Create a schema to specify the structure of the data to appear in the form.
const formSchema = new SimpleSchema({
  name: {
    type: String,
    defaultValue: 'bob',
  },
  year: {
    type: Number,
    defaultValue: 1,
    min: 1,
  },
  // Cash and Cash Equivalents
  pettyCash: {
    type: Number,
    defaultValue: 0,
    min: 0,
  },
  cash: {
    type: Number,
    defaultValue: 0,
    min: 0,
  },
  bankCash: {
    type: Number,
    defaultValue: 0,
    min: 0,
  },
  // Other Assets
  accountsReceivable: {
    type: Number,
    defaultValue: 0,
    min: 0,
  },
  dueFromOtherFund: {
    type: Number,
    defaultValue: 0,
    min: 0,
  },
  interestAndDividendsReceivable: {
    type: Number,
    defaultValue: 0,
    min: 0,
  },
  inventory: {
    type: Number,
    defaultValue: 0,
    min: 0,
  },
  notesReceivableDueWithinOneYear: {
    type: Number,
    defaultValue: 0,
    min: 0,
  },
  notesReceivableDueAfterOneYear: {
    type: Number,
    defaultValue: 0,
    min: 0,
  },
  securityDeposits: {
    type: Number,
    defaultValue: 0,
    min: 0,
  },
  cashHeldByInvestmentManager: {
    type: Number,
    defaultValue: 0,
    min: 0,
  },
  // Investments
  mutualFunds: {
    type: Number,
    defaultValue: 0,
    min: 0,
  },
  commingledFunds: {
    type: Number,
    defaultValue: 0,
    min: 0,
  },
  hedgeFunds: {
    type: Number,
    defaultValue: 0,
    min: 0,
  },
  privateEquity: {
    type: Number,
    defaultValue: 0,
    min: 0,
  },
  commonTrustFund: {
    type: Number,
    defaultValue: 0,
    min: 0,
  },
  commonAndPreferredStock: {
    type: Number,
    defaultValue: 0,
    min: 0,
  },
  privateDebt: {
    type: Number,
    defaultValue: 0,
    min: 0,
  },
  other: {
    type: Number,
    defaultValue: 0,
    min: 0,
  },
  treasuries: {
    type: Number,
    defaultValue: 0,
    min: 0,
  },
  agencies: {
    type: Number,
    defaultValue: 0,
    min: 0,
  },
  // Capital Assets (Assets)
  buildings: {
    type: Number,
    defaultValue: 0,
    min: 0,
  },
  leaseholdImprovements: {
    type: Number,
    defaultValue: 0,
    min: 0,
  },
  furnitureFixturesAndEquipment: {
    type: Number,
    defaultValue: 0,
    min: 0,
  },
  lessAccumulatedDepreciation: {
    type: Number,
    defaultValue: 0,
    min: 0,
  },
  // Capital Assets (Land)
  landA: {
    type: Number,
    defaultValue: 0,
    min: 0,
  },
  landB: {
    type: Number,
    defaultValue: 0,
    min: 0,
  },
  constructionInProgress: {
    type: Number,
    defaultValue: 0,
    min: 0,
  },
  condition: {
    type: String,
    allowedValues: ['dawg', 'good', 'fair', 'poor'],
    defaultValue: 'good',
  },
});

const bridge = new SimpleSchema2Bridge(formSchema);

/* Data Input Page for clients money. */
const AddMoney = () => {

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
      <Row className="justify-content-center">
        <Col xs={5}>
          <Col className="text-center"><h2>Custom Balance Sheet</h2></Col>
          <AutoForm ref={ref => { fRef = ref; }} schema={bridge} onSubmit={data => submit(data, fRef)}>
            <Container fluid className="py-3">
              <Row className="justify-content-center">
                <Col xs={5}>
                  <Card>
                    <Card.Body>
                      <NumField name="year" decimal={null} />
                    </Card.Body>
                  </Card>
                </Col>
                <Col xs={5}>
                  <Card>
                    <Card.Body>
                      <NumField name="pettyCash" decimal={null} />
                    </Card.Body>
                  </Card>
                </Col>
              </Row>
            </Container>
          </AutoForm>
        </Col>
      </Row>
    </Container>
  );
};

export default AddMoney;
