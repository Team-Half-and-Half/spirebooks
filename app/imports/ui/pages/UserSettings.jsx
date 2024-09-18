import React from 'react';
import { Card, Col, Container, Row } from 'react-bootstrap';
import { AutoForm, ErrorsField, SubmitField, TextField } from 'uniforms-bootstrap5';
import swal from 'sweetalert';
import SimpleSchema2Bridge from 'uniforms-bridge-simple-schema-2';
import SimpleSchema from 'simpl-schema';

// Creates schema for user settings
const formSchema = new SimpleSchema({
  companyName: {
    type: String,
    defaultValue: '',
  },
  password: {
    type: String,
    min: 6,
    defaultValue: '',
  },
});

const bridge = new SimpleSchema2Bridge(formSchema);

const UserSettings = () => {
  // On submit, show a success message.
  const submit = (data, formRef) => {
    swal('Success', 'Settings updated successfully', 'success');
    formRef.reset();
  };

  // Renders the settings form
  let fRef = null;
  return (
    <Container fluid className="py-3">
      <Row className="justify-content-center">
        <Col xs={5}>
          <Col className="text-center"><h2>User Settings</h2></Col>
          <AutoForm ref={ref => { fRef = ref; }} schema={bridge} onSubmit={data => submit(data, fRef)}>
            <Card>
              <Card.Body>
                <TextField name="companyName" label="Company Name" />
                <TextField name="password" type="password" label="Password" />
                <SubmitField value="Save Settings" />
                <ErrorsField />
              </Card.Body>
            </Card>
          </AutoForm>
        </Col>
      </Row>
    </Container>
  );
};

export default UserSettings;
