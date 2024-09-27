import { Meteor } from 'meteor/meteor';
import React from 'react';
import { useTracker } from 'meteor/react-meteor-data';
import { Col, Container, Row } from 'react-bootstrap';
import LoadingSpinner from '../components/LoadingSpinner';
import { PAGE_IDS } from '../utilities/PageIDs';
import { AuditedBalance } from '../../api/spreadsheet/AuditedBalanceCollection';
import StuffItemAdmin from '../components/StuffItemAdmin';
import { BudgetPL } from '../../api/spreadsheet/BudgetPLCollection';
import { AuditedFS } from '../../api/spreadsheet/AudtiedFSCollection';

/* Renders a table containing all of the Stuff documents. Use <StuffItemAdmin> to render each row. */
const ListStuffAdmin = () => {
  // useTracker connects Meteor data to React components. https://guide.meteor.com/react.html#using-withTracker
  const { ready, stuff } = useTracker(() => {
    // Get access to Stuff documents.
    // Determine if the subscription is ready
    const owner = Meteor.user()?.username;
    const sub1 = Meteor.subscribe(AuditedBalance.userPublicationName);
    const sub2 = Meteor.subscribe(BudgetPL.userPublicationName);
    const sub3 = Meteor.subscribe(AuditedFS.userPublicationName);
    const yearData = AuditedBalance.collection.findOne({ owner: owner });
    return {
      stuff: yearData,
      ready: sub1 && sub2 && sub3,
    };
  }, []);
  return (ready && stuff ? (
    <Container id={PAGE_IDS.LIST_STUFF_ADMIN} className="py-3">
      <Row className="justify-content-center">
        <Col md={7}>
          <Col className="text-center"><h2>List Stuff (Admin)</h2></Col>
          <StuffItemAdmin stuff={stuff.ActualYear[0]} />
        </Col>
      </Row>
    </Container>
  ) : <LoadingSpinner />);
};

export default ListStuffAdmin;
