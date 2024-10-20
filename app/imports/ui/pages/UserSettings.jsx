import React from 'react';
import { Card, Col, Container, Row } from 'react-bootstrap';
import { AutoForm, ErrorsField, SubmitField, TextField } from 'uniforms-bootstrap5';
import { Buildings, Key } from 'react-bootstrap-icons';
import swal from 'sweetalert';
import { Meteor } from 'meteor/meteor';
import SimpleSchema2Bridge from 'uniforms-bridge-simple-schema-2';
import SimpleSchema from 'simpl-schema';
import { PAGE_IDS } from '../utilities/PageIDs';
import { COMPONENT_IDS } from '../utilities/ComponentIDs';

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
  // On submit, show success message
  const submit = (data, formRef) => {
    const { companyName, password } = data;

    // methods to update company name and password
    Meteor.call('UserProfiles.UpdateCompanyName', { companyName }, (error) => {
      if (error) {
        swal('Error!', error.reason, 'error');
      } else {
        Meteor.call('UserProfiles.UpdatePassword', { password }, (error1) => {
          if (error1) {
            swal('Error!', error1.reason, 'error');
          } else {
            swal({
              title: 'Success!',
              text: 'Your account has been updated.',
              icon: 'success',
              buttons: true,
            }).then(() => {
              // redirect to home after update
              window.location.href = '/home';
            });
          }
        });
      }
    });

    formRef.reset();
  };

  // Renders the settings form
  let fRef = null;
  return (
    <Container fluid id={PAGE_IDS.USER_SETTINGS} className="py-lg-5 user-settings">
      <Row className="justify-content-center">
        <Col xs={5}>
          <Col className="text-center py-lg-3"><h2>User Settings</h2></Col>
          <AutoForm ref={ref => { fRef = ref; }} schema={bridge} onSubmit={data => submit(data, fRef)}>
            <Card>
              <Card.Body className="gradient-colors">
                <TextField id={COMPONENT_IDS.USER_SETTINGS_COMPANY_NAME} name="companyName" label={<span>Company <Buildings /></span>} placeholder="Enter company name" />
                <TextField id={COMPONENT_IDS.USER_SETTINGS_PASSWORD} name="password" type="password" label={<span>Password <Key /></span>} placeholder="Enter new password" />
                <div className="mb-2 text-center form-text"><small>(WARNING: Updating settings may log users out. Please keep track of new passwords.)</small></div>
                <SubmitField id={COMPONENT_IDS.USER_SETTINGS_SUBMIT} value="Save" />
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
