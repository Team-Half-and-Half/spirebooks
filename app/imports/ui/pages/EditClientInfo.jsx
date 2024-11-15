import React from 'react';
import swal from 'sweetalert';
import { Card, Col, Container, Row } from 'react-bootstrap';
import { AutoForm, ErrorsField, HiddenField, NumField, SubmitField } from 'uniforms-bootstrap5';
import { useTracker } from 'meteor/react-meteor-data';
import SimpleSchema2Bridge from 'uniforms-bridge-simple-schema-2';
import { updateMethod } from '../../api/base/BaseCollection.methods';
import LoadingSpinner from '../components/LoadingSpinner';
import { PAGE_IDS } from '../utilities/PageIDs';
import { AuditedBalance } from '../../api/spreadsheet/AuditedBalanceCollection';

const bridge = new SimpleSchema2Bridge(AuditedBalance._schema);

/* Renders the EditStuff page for editing a single document. */
const EditStuff = () => {
  // Get the documentID from the URL field. See imports/ui/layouts/App.jsx for the route containing :_id.
  // useTracker connects Meteor data to React components. https://guide.meteor.com/react.html#using-withTracker
  const { doc, ready } = useTracker(() => {
    // Get access to Stuff documents.
    // const AFS = AuditedFS.subscribeAuditedFS();
    // const BPL = BudgetPL.subscribeBudgetPL();
    // const AFSAdmin = AuditedFS.subscribeAuditedFSAdmin();
    // const BPLAdmin = BudgetPL.subscribeBudgetPLAdmin();
    const ABSAdmin = AuditedBalance.subscribeAuditedBalanceAdmin();
    // Determine if the subscription is ready
    const rdy2 = ABSAdmin.ready();
    // Get the document
    const document = AuditedBalance.findOne({ year: 6 });

    return {
      doc: document,
      ready: rdy2,
    };
  }, []);

  // On successful submit, insert the data.
  const submit = (data) => {
    const { CashAndCashEquivalents,
      OtherAssets,
      Liabilities,
      NetPosition } = data;
    const collectionName = AuditedBalance.getCollectionName();
    const updateData = { id: doc._id, CashAndCashEquivalents,
      OtherAssets,
      Liabilities,
      NetPosition };
    updateMethod.callPromise({ collectionName, updateData })
      .catch(error => swal('Error', error.message, 'error'))
      .then(() => swal('Success', 'Item updated successfully', 'success'));
    console.log(CashAndCashEquivalents);
  };

  return ready ? (
    <Container id={PAGE_IDS.EDIT_STUFF} className="py-3">
      <Row className="justify-content-center">
        <Col xs={5}>
          <Col className="text-center"><h2>Edit Stuff</h2></Col>
          <AutoForm schema={bridge} onSubmit={data => submit(data)} model={doc}>
            <Card>
              <Card.Body>
                <NumField name="CashAndCashEquivalents.pettyCash" decimal={null} />
                <NumField name="CashAndCashEquivalents.cash" decimal={null} />
                <NumField name="CashAndCashEquivalents.cashInBank" decimal={null} />
                <NumField name="CashAndCashEquivalents.totalCashAndCashEquivalents" decimal={null} />
                <SubmitField value="Submit" />
                <ErrorsField />
                <HiddenField name="owner" />
              </Card.Body>
            </Card>
          </AutoForm>
        </Col>
      </Row>
    </Container>
  ) : <LoadingSpinner />;
};

export default EditStuff;
