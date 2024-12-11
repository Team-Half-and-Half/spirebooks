import React, { useState } from 'react';
// import { Meteor } from 'meteor/meteor';
import { Card, Container, Row, Nav } from 'react-bootstrap';
import { useTracker } from 'meteor/react-meteor-data';
// import { AutoForm, ErrorsField, HiddenField, NumField, SelectField, SubmitField } from 'uniforms-bootstrap5';
import Col from 'react-bootstrap/Col';
import { AutoForm, TextField } from 'uniforms-bootstrap5';
import SimpleSchema2Bridge from 'uniforms-bridge-simple-schema-2';
import LoadingSpinner from '../components/LoadingSpinner';
import { PAGE_IDS } from '../utilities/PageIDs';
import { BudgetPL } from '../../api/spreadsheet/BudgetPLCollection';
import TableBPL from '../components/TableBPL';

const bridge = new SimpleSchema2Bridge(BudgetPL._schema);

const InputABS = () => {
  // Get the documentID from the URL field. See imports/ui/layouts/App.jsx for the route containing :_id.
  // useTracker connects Meteor data to React components. https://guide.meteor.com/react.html#using-withTracker
  const { pastYears, futureYears, ready } = useTracker(() => {
    const BPL = BudgetPL.subscribeBudgetPL();
    const BPLAdmin = BudgetPL.subscribeBudgetPLAdmin();
    // Determine if the subscription is ready
    const rdy = BPL.ready();
    const rdy2 = BPLAdmin.ready();
    const past = BudgetPL.find({ green: false }).fetch();
    const future = BudgetPL.find({ green: true }).fetch();
    return {
      pastYears: past,
      futureYears: future,
      ready: rdy && rdy2,
    };
  }, []);
  const [activeTab, setActiveTab] = useState('past');

  return ready ? (
    <Container id={PAGE_IDS.EDIT_STUFF} className="py-5">
      <Card>
        <Card.Header className="gradient-colors text-style">
          <h4 className="text-style ">Budget P&L</h4>
          <Nav variant="tabs" defaultActiveKey="past" onSelect={(selectedKey) => setActiveTab(selectedKey)}>
            <Nav.Item>
              <Nav.Link eventKey="past">2020-2023</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link eventKey="future">2024-2027</Nav.Link>
            </Nav.Item>
          </Nav>
        </Card.Header>
        <Card.Body>
          <Card.Title />
          <Card.Text />
          <Container>
            <Row className="justify-content-center">
              <Col sm={4}>
                <h5 className="text-style fw-bold">Budget Trend</h5>
                <AutoForm schema={bridge}>
                  {/* Revenue */}
                  <h6 className="text-style px-1 fw-medium text-decoration-underline">Revenue</h6>
                  <TextField className="rowName" placeholder="5% of the Investment Portfolio" name="Revenue.investmentPortfolio" label={false} disabled />
                  <TextField className="rowName" placeholder="Revenues" name="Revenue.revenues" label={false} disabled />
                  <TextField className="rowName" placeholder="General Fund" name="Revenue.generalFunds" label={false} disabled />
                  <TextField className="rowName" placeholder="Core Operating Budget NOT Authorized" name="Revenue.coreBudget" label={false} disabled />
                  <TextField className="rowName" placeholder="Total Revenue" name="Revenue.totalRevenue" label={false} disabled />
                  {/* Expenses */}
                  <h6 className="text-style px-1 fw-medium text-decoration-underline">Expenses</h6>
                  <TextField className="rowName" placeholder="Personnel" name="Expenses.personnel" label={false} disabled />
                  {/* Fringe Admin */}
                  <h6 className="text-style px-3 fw-medium text-decoration-underline">Personnel & Fringe (Admin)</h6>
                  <TextField className="rowName px-3" placeholder="Salary" name="Expenses.PersonnelFringeAdmin.salary" label={false} disabled />
                  <TextField className="rowName px-3" placeholder="Pension Accumulation" name="Expenses.PersonnelFringeAdmin.FringeBenefits.pensionAccumulation" label={false} disabled />
                  <TextField className="rowName px-3" placeholder="Retiree Health Insurance" name="Expenses.PersonnelFringeAdmin.FringeBenefits.retireeHealthInsurance" label={false} disabled />
                  <TextField className="rowName px-3" placeholder="Other Post-Employment Benefits" name="Expenses.PersonnelFringeAdmin.FringeBenefits.otherBenefits" label={false} disabled />
                  <TextField className="rowName px-3" placeholder="Employees Health Fund" name="Expenses.PersonnelFringeAdmin.FringeBenefits.healthFund" label={false} disabled />
                  <TextField className="rowName px-3" placeholder="Social Security" name="Expenses.PersonnelFringeAdmin.FringeBenefits.socialSecurity" label={false} disabled />
                  <TextField className="rowName px-3" placeholder="Medicare" name="Expenses.PersonnelFringeAdmin.FringeBenefits.medicare" label={false} disabled />
                  <TextField className="rowName px-3" placeholder="Workers Compensation" name="Expenses.PersonnelFringeAdmin.FringeBenefits.workersCompensation" label={false} disabled />
                  <TextField className="rowName px-3" placeholder="Unemployment Compensation" name="Expenses.PersonnelFringeAdmin.FringeBenefits.unemploymentCompensation" label={false} disabled />
                  <TextField className="rowName px-3" placeholder="Pension Administration" name="Expenses.PersonnelFringeAdmin.FringeBenefits.pensionCompensation" label={false} disabled />
                  <TextField className="rowName px-3" placeholder="Fringe Benefits" name="Expenses.PersonnelFringeAdmin.FringeBenefits.fringeBenefitsSum" label={false} disabled />
                  <TextField className="rowName px-3" placeholder="Personal & Fringe (Admin)" name="Expenses.PersonnelFringeAdmin.personnelFringeSum" label={false} disabled />

                  {/* Fringe Staff */}
                  <h6 className="text-style px-3 fw-medium text-decoration-underline">Personnel & Fringe (Admin Staff)</h6>
                  <TextField className="rowName px-3" placeholder="Salary" name="Expenses.PersonnelFringeAdminStaff.salary" label={false} disabled />
                  <TextField className="rowName px-3" placeholder="Pension Accumulation" name="Expenses.PersonnelFringeAdminStaff.FringeBenefits.pensionAccumulation" label={false} disabled />
                  <TextField className="rowName px-3" placeholder="Retiree Health Insurance" name="Expenses.PersonnelFringeAdminStaff.FringeBenefits.retireeHealthInsurance" label={false} disabled />
                  <TextField className="rowName px-3" placeholder="Other Post-Employment Benefits" name="Expenses.PersonnelFringeAdminStaff.FringeBenefits.otherBenefits" label={false} disabled />
                  <TextField className="rowName px-3" placeholder="Employees Health Fund" name="Expenses.PersonnelFringeAdminStaff.FringeBenefits.healthFund" label={false} disabled />
                  <TextField className="rowName px-3" placeholder="Social Security" name="Expenses.PersonnelFringeAdminStaff.FringeBenefits.socialSecurity" label={false} disabled />
                  <TextField className="rowName px-3" placeholder="Medicare" name="Expenses.PersonnelFringeAdminStaff.FringeBenefits.medicare" label={false} disabled />
                  <TextField className="rowName px-3" placeholder="Workers Compensation" name="Expenses.PersonnelFringeAdminStaff.FringeBenefits.workersCompensation" label={false} disabled />
                  <TextField className="rowName px-3" placeholder="Unemployment Compensation" name="Expenses.PersonnelFringeAdminStaff.FringeBenefits.unemploymentCompensation" label={false} disabled />
                  <TextField className="rowName px-3" placeholder="Pension Administration" name="Expenses.PersonnelFringeAdminStaff.FringeBenefits.pensionCompensation" label={false} disabled />
                  <TextField className="rowName px-3" placeholder="Fringe Benefits" name="Expenses.PersonnelFringeAdminStaff.FringeBenefits.fringeBenefitsSum" label={false} disabled />
                  <TextField className="rowName px-3" placeholder="Personal & Fringe (Management Staff)" name="Expenses.PersonnelFringeAdminStaff.personnelFringeSum" label={false} disabled />

                  {/* Fringe Management */}
                  <h6 className="text-style px-3 fw-medium text-decoration-underline">Personnel & Fringe (Management)</h6>
                  <TextField className="rowName px-3" placeholder="Salary" name="Expenses.FringeAdminManagement.salary" label={false} disabled />
                  <TextField className="rowName px-3" placeholder="Pension Accumulation" name="Expenses.FringeAdminManagement.FringeBenefits.pensionAccumulation" label={false} disabled />
                  <TextField className="rowName px-3" placeholder="Retiree Health Insurance" name="Expenses.FringeAdminManagement.FringeBenefits.retireeHealthInsurance" label={false} disabled />
                  <TextField className="rowName px-3" placeholder="Other Post-Employment Benefits" name="Expenses.FringeAdminManagement.FringeBenefits.otherBenefits" label={false} disabled />
                  <TextField className="rowName px-3" placeholder="Employees Health Fund" name="Expenses.FringeAdminManagement.FringeBenefits.healthFund" label={false} disabled />
                  <TextField className="rowName px-3" placeholder="Social Security" name="Expenses.FringeAdminManagement.FringeBenefits.socialSecurity" label={false} disabled />
                  <TextField className="rowName px-3" placeholder="Medicare" name="Expenses.FringeAdminManagement.FringeBenefits.medicare" label={false} disabled />
                  <TextField className="rowName px-3" placeholder="Workers Compensation" name="Expenses.FringeAdminManagement.FringeBenefits.workersCompensation" label={false} disabled />
                  <TextField className="rowName px-3" placeholder="Unemployment Compensation" name="Expenses.FringeAdminManagement.FringeBenefits.unemploymentCompensation" label={false} disabled />
                  <TextField className="rowName px-3" placeholder="Pension Administration" name="Expenses.FringeAdminManagement.FringeBenefits.pensionCompensation" label={false} disabled />
                  <TextField className="rowName px-3" placeholder="Fringe Benefits" name="Expenses.FringeAdminManagement.FringeBenefits.fringeBenefitsSum" label={false} disabled />
                  <TextField className="rowName px-3" placeholder="Personnel & Fringe (Management)" name="Expenses.FringeAdminManagement.personnelFringeSum" label={false} disabled />

                  <TextField className="rowName" placeholder="Program" name="Expenses.program" label={false} disabled />
                  <TextField className="rowName" placeholder="Contracts" name="Expenses.contracts" label={false} disabled />
                  <TextField className="rowName" placeholder="Grants" name="Expenses.grants" label={false} disabled />
                  <TextField className="rowName" placeholder="Travel" name="Expenses.travel" label={false} disabled />
                  <TextField className="rowName" placeholder="Equipment" name="Expenses.equipment" label={false} disabled />
                  <TextField className="rowName" placeholder="Overhead" name="Expenses.overhead" label={false} disabled />
                  <TextField className="rowName" placeholder="Debt Service" name="Expenses.debutService" label={false} disabled />
                  <TextField className="rowName" placeholder="Other" name="Expenses.other" label={false} disabled />
                  <TextField className="rowName" placeholder="Total Expenses" name="Expenses.totalExpenses" label={false} disabled />

                  <TextField className="rowName" placeholder="Surplus (Deficit)" name="surplus" label={false} disabled />
                  <h6 className="text-style px-1 fw-medium text-decoration-underline">Expenditure line items per audited financials</h6>
                  <TextField className="rowName" placeholder="Management" name="ExpenditurePerAudited.management" label={false} disabled />
                  <TextField className="rowName" placeholder="Support Services" name="ExpenditurePerAudited.supportServices" label={false} disabled />
                  <TextField className="rowName" placeholder="Beneficiary Advocacy" name="ExpenditurePerAudited.beneficiaryAdvocacy" label={false} disabled />
                </AutoForm>
              </Col>
              {(activeTab === 'past' ? pastYears : futureYears).map((data) => (
                <Col key={data._id} lg={2} className="px-1">
                  <TableBPL budgetPL={data} />
                </Col>
              ))}
            </Row>
          </Container>
        </Card.Body>
      </Card>
    </Container>
  ) : <LoadingSpinner />;
};

export default InputABS;
