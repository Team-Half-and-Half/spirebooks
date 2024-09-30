import React from 'react';
import { Card, Col, Container, Row } from 'react-bootstrap';
import { AutoForm, ErrorsField, NumField, SubmitField } from 'uniforms-bootstrap5';
import swal from 'sweetalert';
import { Meteor } from 'meteor/meteor';
import { Stuffs } from '../../api/stuff/StuffCollection';
import { defineMethod } from '../../api/base/BaseCollection.methods';
import { PAGE_IDS } from '../utilities/PageIDs';
import { DataInputBridge } from '../components/DataInputBridge';

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
      <Row className="justify-content-center">
        <Col xs={5}>
          <Col className="text-center"><h2>Custom Balance Sheet</h2></Col>
          <AutoForm ref={ref => { fRef = ref; }} schema={DataInputBridge} onSubmit={data => submit(data, fRef)}>
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

export default InputClientInfo;
