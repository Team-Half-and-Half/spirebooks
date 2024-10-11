import { Meteor } from 'meteor/meteor';
import React from 'react';
import swal from 'sweetalert';
import { useTracker } from 'meteor/react-meteor-data';
import { Col, Container, Row, Table, Button } from 'react-bootstrap';
import LoadingSpinner from '../components/LoadingSpinner';
import { PAGE_IDS } from '../utilities/PageIDs';
import { UserVerification } from '../../api/user/UserVerificationCollection';

/* Renders a table containing all the VerificationTable documents. */
const VerificationTable = () => {
  const { verificationStatuses, ready } = useTracker(() => {
    const sub = Meteor.subscribe(UserVerification.userPublicationName);
    const rdy = sub.ready();
    const UserVerificationInformation = UserVerification.collection.find({}).fetch();
    return {
      verificationStatuses: UserVerificationInformation,
      ready: rdy && sub,
    };
  }, []);

  function verifyButton(user) {
    Meteor.call('UserVerification.updateVerification', { user: user }, (err, res) => {
      if (err) {
        alert(err);
      } else {
        // success
      }
    });
  }

  return (ready ? (
    <Container id={PAGE_IDS.VERIFICATION_TABLE} className="py-3">
      <Row className="justify-content-center">
        <Col md={8}>
          <Col className="text-center"><h2>Verification Statuses</h2></Col>
          <Table striped bordered hover>
            <thead>
              <tr>
                <th>UserID</th>
                <th>Username</th>
                <th>Verification Status</th>
                <th>Verify</th>
              </tr>
            </thead>
            <tbody>
              {verificationStatuses.map((user) => (
                <tr key={user.userID}>
                  <td>{user.userID}</td>
                  <td>{user.username}</td>
                  <td>{user.verification.toString()}</td>
                  <td>
                    <Button
                      variant={user.verification ? 'success' : 'danger'}
                      onClick={() => verifyButton(user)}
                    >
                      Verify
                    </Button>
                  </td>
                </tr>
              ))}
            </tbody>
          </Table>
        </Col>
      </Row>
    </Container>
  ) : (<LoadingSpinner />));
};

export default VerificationTable;
