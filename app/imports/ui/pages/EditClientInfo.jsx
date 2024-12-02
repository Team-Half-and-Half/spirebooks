import React, { useState } from 'react';
import swal from 'sweetalert';
import { Meteor } from 'meteor/meteor';
import { Card, Col, Container, Row } from 'react-bootstrap';
import { AutoForm, ErrorsField, HiddenField, NumField, SelectField, SubmitField } from 'uniforms-bootstrap5';
import { useTracker } from 'meteor/react-meteor-data';
import SimpleSchema2Bridge from 'uniforms-bridge-simple-schema-2';
import { updateMethod } from '../../api/base/BaseCollection.methods';
import LoadingSpinner from '../components/LoadingSpinner';
import { PAGE_IDS } from '../utilities/PageIDs';
import { BudgetPL } from '../../api/spreadsheet/BudgetPLCollection';

const bridge = new SimpleSchema2Bridge(BudgetPL._schema);

/* Renders the EditStuff page for editing a single document. */
const EditStuff = () => {
  // Get the documentID from the URL field. See imports/ui/layouts/App.jsx for the route containing :_id.
  // useTracker connects Meteor data to React components. https://guide.meteor.com/react.html#using-withTracker
  const owner = Meteor.user()?.username;
  const { doc, ready } = useTracker(() => {
    // Get access to Stuff documents.
    // const AFS = AuditedFS.subscribeAuditedFS();
    // const BPL = BudgetPL.subscribeBudgetPL();
    // const AFSAdmin = AuditedFS.subscribeAuditedFSAdmin();
    // const BPLAdmin = BudgetPL.subscribeBudgetPLAdmin();
    const ABSAdmin = BudgetPL.subscribeBudgetPL();
    // Determine if the subscription is ready
    const rdy = ABSAdmin.ready();
    const document = BudgetPL.find({ owner: owner }).fetch();
    // Get the document
    // const document = AuditedBalance.find({ year: 6 });
    return {
      doc: document,
      ready: rdy,
    };
  }, []);

  const [selectedYear, setSelectedYear] = useState(null);
  const years = [...doc.map(d => ({ label: `${d.year.toString()} ${d.owner}`, value: d.year }))];
  const selectedDocument = doc.find(d => d.year === selectedYear) || {};

  const changeYear = (year) => {
    setSelectedYear(parseInt(year, 10));
  };
  // On successful submit, insert the data.
  const submit = (data) => {
    const { year, Revenue, Expenses, ExpenditurePerAudited } = data;
    const collectionName = BudgetPL.getCollectionName();
    const updateData = { id: selectedDocument._id, year, Revenue, Expenses, ExpenditurePerAudited };
    updateMethod.callPromise({ collectionName, updateData })
      .catch(error => swal('Error', error.message, 'error'))
      .then(() => swal('Success', 'Item updated successfully', 'success'));
  };

  return ready ? (
    <Container id={PAGE_IDS.EDIT_STUFF} className="py-3">
      <Row className="justify-content-center">
        <Col xs={5}>
          <Col className="text-center"><h2>Edit Stuff</h2></Col>
          <AutoForm schema={bridge} onSubmit={data => submit(data)} model={selectedDocument}>
            <SelectField
              name="year"
              options={years}
              label="Select Year"
              placeholder="Select Year"
              onChange={(value) => changeYear(value)}
            />
            <Card>
              <Card.Body>
                <NumField name="Revenue.investmentPortfolio" decimal={null} label="Investment Portfolio" />
                <NumField name="Revenue.revenues" decimal={null} label="Revenues" />
                <NumField name="Revenue.generalFunds" decimal={null} label="General Funds" />
                <NumField name="Revenue.coreBudget" decimal={null} label="Core Budget" />
                <NumField name="Revenue.totalRevenue" decimal={null} label="Total Revenue" disabled />

                <NumField name="Expenses.personnel" decimal={null} label="Personnel" />

                <NumField
                  name="Expenses.PersonnelFringeAdmin.salary"
                  decimal={null}
                  disabled
                  label="Admin Salary"
                />
                <NumField
                  name="Expenses.PersonnelFringeAdmin.FringeBenefits.pensionAccumulation"
                  decimal={null}
                  disabled
                  label="Pension Accumulation"
                />
                <NumField
                  name="Expenses.PersonnelFringeAdmin.FringeBenefits.retireeHealthInsurance"
                  decimal={null}
                  disabled
                  label="Retiree Health Insurance"
                />
                <NumField
                  name="Expenses.PersonnelFringeAdmin.FringeBenefits.otherBenefits"
                  decimal={null}
                  disabled
                  label="Other Benefits"
                />
                <NumField
                  name="Expenses.PersonnelFringeAdmin.FringeBenefits.healthFund"
                  decimal={null}
                  disabled
                  label="Health Fund"
                />
                <NumField
                  name="Expenses.PersonnelFringeAdmin.FringeBenefits.socialSecurity"
                  decimal={null}
                  disabled
                  label="Social Security"
                />
                <NumField
                  name="Expenses.PersonnelFringeAdmin.FringeBenefits.medicare"
                  decimal={null}
                  disabled
                  label="Medicare"
                />
                <NumField
                  name="Expenses.PersonnelFringeAdmin.FringeBenefits.workersCompensation"
                  decimal={null}
                  disabled
                  label="Workers Compensation"
                />
                <NumField
                  name="Expenses.PersonnelFringeAdmin.FringeBenefits.unemploymentCompensation"
                  decimal={null}
                  disabled
                  label="Unemployment Compensation"
                />
                <NumField
                  name="Expenses.PersonnelFringeAdmin.FringeBenefits.pensionCompensation"
                  decimal={null}
                  disabled
                  label="Pension Compensation"
                />
                <NumField
                  name="Expenses.PersonnelFringeAdmin.FringeBenefits.fringeBenefitsSum"
                  decimal={null}
                  disabled
                  label="Fringe Benefits Sum"
                />
                <NumField
                  name="Expenses.PersonnelFringeAdmin.personnelFringeSum"
                  decimal={null}
                  disabled
                  label="Personnel Fringe Sum"
                />

                <NumField
                  name="Expenses.PersonnelFringeAdminStaff.salary"
                  decimal={null}
                  disabled
                  label="Admin Staff Salary"
                />
                <NumField
                  name="Expenses.PersonnelFringeAdminStaff.FringeBenefits.pensionAccumulation"
                  decimal={null}
                  disabled
                  label="Pension Accumulation"
                />
                <NumField
                  name="Expenses.PersonnelFringeAdminStaff.FringeBenefits.retireeHealthInsurance"
                  decimal={null}
                  disabled
                  label="Retiree Health Insurance"
                />
                <NumField
                  name="Expenses.PersonnelFringeAdminStaff.FringeBenefits.otherBenefits"
                  decimal={null}
                  disabled
                  label="Other Benefits"
                />
                <NumField
                  name="Expenses.PersonnelFringeAdminStaff.FringeBenefits.healthFund"
                  decimal={null}
                  disabled
                  label="Health Fund"
                />
                <NumField
                  name="Expenses.PersonnelFringeAdminStaff.FringeBenefits.socialSecurity"
                  decimal={null}
                  disabled
                  label="Social Security"
                />
                <NumField
                  name="Expenses.PersonnelFringeAdminStaff.FringeBenefits.medicare"
                  decimal={null}
                  disabled
                  label="Medicare"
                />
                <NumField
                  name="Expenses.PersonnelFringeAdminStaff.FringeBenefits.workersCompensation"
                  decimal={null}
                  disabled
                  label="Workers Compensation"
                />
                <NumField
                  name="Expenses.PersonnelFringeAdminStaff.FringeBenefits.unemploymentCompensation"
                  decimal={null}
                  disabled
                  label="Unemployment Compensation"
                />
                <NumField
                  name="Expenses.PersonnelFringeAdminStaff.FringeBenefits.pensionCompensation"
                  decimal={null}
                  disabled
                  label="Pension Compensation"
                />
                <NumField
                  name="Expenses.PersonnelFringeAdminStaff.FringeBenefits.fringeBenefitsSum"
                  decimal={null}
                  disabled
                  label="Fringe Benefits Sum"
                />
                <NumField
                  name="Expenses.PersonnelFringeAdminStaff.personnelFringeSum"
                  decimal={null}
                  disabled
                  label="Personnel Fringe Sum"
                />

                <NumField
                  name="Expenses.FringeAdminManagement.salary"
                  decimal={null}
                  label="Management Salary"
                />

                <NumField
                  name="Expenses.FringeAdminManagement.FringeBenefits.pensionAccumulation"
                  decimal={null}
                  disabled
                  label="Pension Accumulation"
                />
                <NumField
                  name="Expenses.FringeAdminManagement.FringeBenefits.retireeHealthInsurance"
                  decimal={null}
                  disabled
                  label="Retiree Health Insurance"
                />
                <NumField
                  name="Expenses.FringeAdminManagement.FringeBenefits.otherBenefits"
                  decimal={null}
                  disabled
                  label="Other Benefits"
                />
                <NumField
                  name="Expenses.FringeAdminManagement.FringeBenefits.healthFund"
                  decimal={null}
                  disabled
                  label="Health Fund"
                />
                <NumField
                  name="Expenses.FringeAdminManagement.FringeBenefits.socialSecurity"
                  decimal={null}
                  disabled
                  label="Social Security"
                />
                <NumField
                  name="Expenses.FringeAdminManagement.FringeBenefits.medicare"
                  decimal={null}
                  disabled
                  label="Medicare"
                />
                <NumField
                  name="Expenses.FringeAdminManagement.FringeBenefits.workersCompensation"
                  decimal={null}
                  disabled
                  label="Workers Compensation"
                />
                <NumField
                  name="Expenses.FringeAdminManagement.FringeBenefits.unemploymentCompensation"
                  decimal={null}
                  disabled
                  label="Unemployment Compensation"
                />
                <NumField
                  name="Expenses.FringeAdminManagement.FringeBenefits.pensionCompensation"
                  decimal={null}
                  disabled
                  label="Pension Compensation"
                />
                <NumField
                  name="Expenses.FringeAdminManagement.FringeBenefits.fringeBenefitsSum"
                  decimal={null}
                  disabled
                  label="Fringe Benefits Sum"
                />
                <NumField
                  name="Expenses.FringeAdminManagement.personnelFringeSum"
                  decimal={null}
                  disabled
                  label="Personnel Fringe Sum"
                />

                <NumField
                  name="Expenses.program"
                  decimal={null}
                  label="Program"
                />
                <NumField
                  name="Expenses.contracts"
                  decimal={null}
                  label="Contracts"
                />
                <NumField
                  name="Expenses.grants"
                  decimal={null}
                  label="Grants"
                />
                <NumField
                  name="Expenses.travel"
                  decimal={null}
                  label="Travel"
                />
                <NumField
                  name="Expenses.equipment"
                  decimal={null}
                  label="Equipment"
                />
                <NumField
                  name="Expenses.overhead"
                  decimal={null}
                  label="Overhead"
                />
                <NumField
                  name="Expenses.debutService"
                  decimal={null}
                  label="Debut Service"
                />
                <NumField
                  name="Expenses.other"
                  decimal={null}
                  label="Other"
                />

                <NumField
                  name="Expenses.totalExpenses"
                  decimal={null}
                  disabled
                  label="Total Expenses"
                />

                <NumField
                  name="surplus"
                  decimal={null}
                  disabled
                  label="Surplus"
                />
                <NumField
                  name="ExpenditurePerAudited.management"
                  decimal={null}
                  label="Management"
                />
                <NumField
                  name="ExpenditurePerAudited.supportServices"
                  decimal={null}
                  label="Support Services"
                />
                <NumField
                  name="ExpenditurePerAudited.beneficiaryAdvocacy"
                  decimal={null}
                  label="Beneficiary Advocacy"
                />

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
