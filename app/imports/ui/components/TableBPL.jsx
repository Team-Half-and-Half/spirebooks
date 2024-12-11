import PropTypes from 'prop-types';
import React from 'react';
import swal from 'sweetalert';
import SimpleSchema2Bridge from 'uniforms-bridge-simple-schema-2';
import { AutoForm, NumField, SubmitField } from 'uniforms-bootstrap5';
import { updateMethod } from '../../api/base/BaseCollection.methods';
import { BudgetPL } from '../../api/spreadsheet/BudgetPLCollection';

const bridge = new SimpleSchema2Bridge(BudgetPL._schema);
const submit = (data, budgetPL) => {
  const docID = budgetPL._id;
  const { year, Revenue, Expenses, ExpenditurePerAudited } = data;
  const collectionName = BudgetPL.getCollectionName();
  const updateData = { id: docID, year, Revenue, Expenses, ExpenditurePerAudited };
  updateMethod.callPromise({ collectionName, updateData })
    .catch(error => swal('Error', error.message, 'error'))
    .then(() => swal('Success', 'Item updated successfully', 'success'));
};
const TableBPL = ({ budgetPL }) => (
  <div>
    <h5>{budgetPL.year + 2014}</h5>
    <AutoForm schema={bridge} model={budgetPL} onSubmit={data => submit(data, budgetPL)}>
      <h6 className="text-style text-center px-3">---</h6>
      <NumField className="tableField" name="Revenue.investmentPortfolio" label={false} />
      <NumField className="tableField" name="Revenue.revenues" label={false} />
      <NumField className="tableField" name="Revenue.generalFunds" label={false} />
      <NumField className="tableField" name="Revenue.coreBudget" label={false} />
      <NumField className="tableField" name="Revenue.totalRevenue" label={false} disabled />
      <h6 className="text-style text-center px-3">---</h6>

      <NumField className="tableField" name="Expenses.personnel" label={false} />
      <h6 className="text-style text-center px-3">---</h6>
      <NumField className="tableField" name="Expenses.PersonnelFringeAdmin.salary" label={false} disabled />
      <NumField className="tableField" name="Expenses.PersonnelFringeAdmin.FringeBenefits.pensionAccumulation" label={false} disabled />
      <NumField className="tableField" name="Expenses.PersonnelFringeAdmin.FringeBenefits.retireeHealthInsurance" label={false} disabled />
      <NumField className="tableField" name="Expenses.PersonnelFringeAdmin.FringeBenefits.otherBenefits" label={false} disabled />
      <NumField className="tableField" name="Expenses.PersonnelFringeAdmin.FringeBenefits.healthFund" label={false} disabled />
      <NumField className="tableField" name="Expenses.PersonnelFringeAdmin.FringeBenefits.socialSecurity" label={false} disabled />
      <NumField className="tableField" name="Expenses.PersonnelFringeAdmin.FringeBenefits.medicare" label={false} disabled />
      <NumField className="tableField" name="Expenses.PersonnelFringeAdmin.FringeBenefits.workersCompensation" label={false} disabled />
      <NumField className="tableField" name="Expenses.PersonnelFringeAdmin.FringeBenefits.unemploymentCompensation" label={false} disabled />
      <NumField className="tableField" name="Expenses.PersonnelFringeAdmin.FringeBenefits.pensionCompensation" label={false} disabled />
      <NumField className="tableField" name="Expenses.PersonnelFringeAdmin.FringeBenefits.fringeBenefitsSum" label={false} disabled />
      <NumField className="tableField" name="Expenses.PersonnelFringeAdmin.personnelFringeSum" label={false} disabled />
      <h6 className="text-style text-center px-3">---</h6>
      <NumField className="tableField" name="Expenses.PersonnelFringeAdminStaff.salary" label={false} disabled />
      <NumField className="tableField" name="Expenses.PersonnelFringeAdminStaff.FringeBenefits.pensionAccumulation" label={false} disabled />
      <NumField className="tableField" name="Expenses.PersonnelFringeAdminStaff.FringeBenefits.retireeHealthInsurance" label={false} disabled />
      <NumField className="tableField" name="Expenses.PersonnelFringeAdminStaff.FringeBenefits.otherBenefits" label={false} disabled />
      <NumField className="tableField" name="Expenses.PersonnelFringeAdminStaff.FringeBenefits.healthFund" label={false} disabled />
      <NumField className="tableField" name="Expenses.PersonnelFringeAdminStaff.FringeBenefits.socialSecurity" label={false} disabled />
      <NumField className="tableField" name="Expenses.PersonnelFringeAdminStaff.FringeBenefits.medicare" label={false} disabled />
      <NumField className="tableField" name="Expenses.PersonnelFringeAdminStaff.FringeBenefits.workersCompensation" label={false} disabled />
      <NumField className="tableField" name="Expenses.PersonnelFringeAdminStaff.FringeBenefits.unemploymentCompensation" label={false} disabled />
      <NumField className="tableField" name="Expenses.PersonnelFringeAdminStaff.FringeBenefits.pensionCompensation" label={false} disabled />
      <NumField className="tableField" name="Expenses.PersonnelFringeAdminStaff.FringeBenefits.fringeBenefitsSum" label={false} disabled />
      <NumField className="tableField" name="Expenses.PersonnelFringeAdminStaff.personnelFringeSum" label={false} disabled />
      <h6 className="text-style text-center px-3">---</h6>
      <NumField className="tableField" name="Expenses.FringeAdminManagement.salary" label={false} />
      <NumField className="tableField" name="Expenses.FringeAdminManagement.FringeBenefits.pensionAccumulation" label={false} disabled />
      <NumField className="tableField" name="Expenses.FringeAdminManagement.FringeBenefits.retireeHealthInsurance" label={false} disabled />
      <NumField className="tableField" name="Expenses.FringeAdminManagement.FringeBenefits.otherBenefits" label={false} disabled />
      <NumField className="tableField" name="Expenses.FringeAdminManagement.FringeBenefits.healthFund" label={false} disabled />
      <NumField className="tableField" name="Expenses.FringeAdminManagement.FringeBenefits.socialSecurity" label={false} disabled />
      <NumField className="tableField" name="Expenses.FringeAdminManagement.FringeBenefits.medicare" label={false} disabled />
      <NumField className="tableField" name="Expenses.FringeAdminManagement.FringeBenefits.workersCompensation" label={false} disabled />
      <NumField className="tableField" name="Expenses.FringeAdminManagement.FringeBenefits.unemploymentCompensation" label={false} disabled />
      <NumField className="tableField" name="Expenses.FringeAdminManagement.FringeBenefits.pensionCompensation" label={false} disabled />
      <NumField className="tableField" name="Expenses.FringeAdminManagement.FringeBenefits.fringeBenefitsSum" label={false} disabled />
      <NumField className="tableField" name="Expenses.FringeAdminManagement.personnelFringeSum" label={false} disabled />
      <NumField className="tableField" name="Expenses.program" label={false} />
      <NumField className="tableField" name="Expenses.contracts" label={false} />
      <NumField className="tableField" name="Expenses.grants" label={false} />
      <NumField className="tableField" name="Expenses.travel" label={false} />
      <NumField className="tableField" name="Expenses.equipment" label={false} />
      <NumField className="tableField" name="Expenses.overhead" label={false} />
      <NumField className="tableField" name="Expenses.debutService" label={false} />
      <NumField className="tableField" name="Expenses.other" label={false} />
      <NumField className="tableField" name="Expenses.totalExpenses" label={false} disabled />
      <NumField className="tableField" name="surplus" label={false} disabled />
      <h6 className="text-style text-center px-3">---</h6>
      <NumField className="tableField" name="ExpenditurePerAudited.management" label={false} />
      <NumField className="tableField" name="ExpenditurePerAudited.supportServices" label={false} />
      <NumField className="tableField" name="ExpenditurePerAudited.beneficiaryAdvocacy" label={false} />
      <SubmitField value="Submit" />
      {/* {(budgetPL.green === true) ? ( */}
      {/*  <SubmitField value="Submit" /> */}
      {/* ) : (<div />)} */}
    </AutoForm>
  </div>
);

const FringeBenefits = PropTypes.shape({
  pensionAccumulation: PropTypes.number,
  retireeHealthInsurance: PropTypes.number,
  otherBenefits: PropTypes.number,
  healthFund: PropTypes.number,
  socialSecurity: PropTypes.number,
  medicare: PropTypes.number,
  workersCompensation: PropTypes.number,
  unemploymentCompensation: PropTypes.number,
  pensionCompensation: PropTypes.number,
  fringeBenefitsSum: PropTypes.number,
});

const PersonnelFringe = PropTypes.shape({
  salary: PropTypes.number,
  FringeBenefits: FringeBenefits.isRequired,
  personnelFringeSum: PropTypes.number,
});

const Expenses = PropTypes.shape({
  personnel: PropTypes.number,
  PersonnelFringeAdmin: PersonnelFringe.isRequired,
  PersonnelFringeAdminStaff: PersonnelFringe.isRequired,
  FringeAdminManagement: PersonnelFringe.isRequired,
  program: PropTypes.number,
  contracts: PropTypes.number,
  grants: PropTypes.number,
  travel: PropTypes.number,
  equipment: PropTypes.number,
  overhead: PropTypes.number,
  debutService: PropTypes.number,
  other: PropTypes.number,
  totalExpenses: PropTypes.number,
});

const Revenue = PropTypes.shape({
  investmentPortfolio: PropTypes.number,
  revenues: PropTypes.number,
  generalFunds: PropTypes.number,
  coreBudget: PropTypes.number,
  totalRevenue: PropTypes.number,
});

const ExpenditurePerAudited = PropTypes.shape({
  management: PropTypes.number,
  supportServices: PropTypes.number,
  beneficiaryAdvocacy: PropTypes.number,
});

const BPL = PropTypes.shape({
  year: PropTypes.number.isRequired,
  owner: PropTypes.string.isRequired,
  green: PropTypes.bool.isRequired,
  Revenue: Revenue.isRequired,
  Expenses: Expenses.isRequired,
  surplus: PropTypes.number,
  ExpenditurePerAudited: ExpenditurePerAudited.isRequired,
});

TableBPL.propTypes = {
  budgetPL: BPL.isRequired,
};

export default TableBPL;
