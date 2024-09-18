import React from 'react';
import { Card, Col, Container, Row } from 'react-bootstrap';
import { AutoForm, ErrorsField, SubmitField, TextField } from 'uniforms-bootstrap5';
import swal from 'sweetalert';
import SimpleSchema2Bridge from 'uniforms-bridge-simple-schema-2';
import SimpleSchema from 'simpl-schema';

// Creates schema for user settings
const userSchema = new SimpleSchema({
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

const bridge = new SimpleSchema2Bridge(userSchema);

const UserSettings = () => {
  // On submit, show a success message.
  const submit = (data, formRef) => {
    swal('Account Updated!', 'Your account has been successfully updated.', 'success');
    formRef.reset();
  };

  // Renders the settings form
  let fRef = null;
  return (
    <Container fluid className="py-lg-5 user-settings">
      <Row className="justify-content-center">
        <Col xs={5}>
          <Col className="text-center py-lg-3"><h2>User Settings</h2></Col>
          <AutoForm ref={ref => { fRef = ref; }} schema={bridge} onSubmit={data => submit(data, fRef)}>
            <Card>
              <Card.Body className="gradient-colors">
                <TextField name="companyName" label="Company" placeholder="Enter company name" />
                <TextField name="password" type="password" label="Password" placeholder="Enter new password" />
                <SubmitField value="Save" />
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
