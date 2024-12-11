import PropTypes from 'prop-types';
import React from 'react';
import swal from 'sweetalert';
import SimpleSchema2Bridge from 'uniforms-bridge-simple-schema-2';
import { AutoForm, NumField, SubmitField } from 'uniforms-bootstrap5';
import { AuditedBalance } from '../../api/spreadsheet/AuditedBalanceCollection';
import { updateMethod } from '../../api/base/BaseCollection.methods';

const bridge = new SimpleSchema2Bridge(AuditedBalance._schema);
const submit = (data, auditedBalance) => {
  const docID = auditedBalance._id;
  const { CashAndCashEquivalents,
    OtherAssets,
    Liabilities,
    NetPosition } = data;
  const collectionName = AuditedBalance.getCollectionName();
  const updateData = { id: docID, CashAndCashEquivalents,
    OtherAssets,
    Liabilities,
    NetPosition };
  updateMethod.callPromise({ collectionName, updateData })
    .catch(error => swal('Error', error.message, 'error'))
    .then(() => swal('Success', 'Item updated successfully', 'success'));
};
const TableAbS = ({ auditedBalance }) => (
  <div>
    <h5>{auditedBalance.year + 2014}</h5>
    <AutoForm schema={bridge} model={auditedBalance} onSubmit={data => submit(data, auditedBalance)}>
      <h6 className="text-style text-center px-3">---</h6>
      <NumField className="tableField" name="CashAndCashEquivalents.pettyCash" label={false} />
      <NumField className="tableField" name="CashAndCashEquivalents.cash" label={false} />
      <NumField className="tableField" name="CashAndCashEquivalents.cashInBank" label={false} />
      <NumField className="tableField" name="totalCashAndCashEquivalents" label={false} disabled />
      <h6 className="text-style text-center px-3">---</h6>
      <NumField className="tableField" name="OtherAssets.accountsReceivable" label={false} />
      <NumField className="tableField" name="OtherAssets.dueFromOtherFund" label={false} />
      <NumField className="tableField" name="OtherAssets.interestDividendsReceivable" label={false} />
      <NumField className="tableField" name="OtherAssets.inventoryPrepaidOtherAssets" label={false} />
      <NumField className="tableField" name="OtherAssets.notesWithinOneYear" label={false} />
      <NumField className="tableField" name="OtherAssets.notesAfterOneYear" label={false} />
      <NumField className="tableField" name="OtherAssets.securityDeposits" label={false} />
      <NumField className="tableField" name="OtherAssets.cashHeldInvestmentManager" label={false} />
      <h6 className="text-style text-center px-3">---</h6>
      <NumField className="tableField" name="OtherAssets.Investments.mutualFunds" label={false} />
      <NumField className="tableField" name="OtherAssets.Investments.commingledFunds" label={false} />
      <NumField className="tableField" name="OtherAssets.Investments.hedgeFunds" label={false} />
      <NumField className="tableField" name="OtherAssets.Investments.privateEquity" label={false} />
      <NumField className="tableField" name="OtherAssets.Investments.commonTrustFund" label={false} />
      <NumField className="tableField" name="OtherAssets.Investments.commonPreferredStock" label={false} />
      <NumField className="tableField" name="OtherAssets.Investments.privateDebt" label={false} />
      <NumField className="tableField" name="OtherAssets.Investments.other" label={false} />
      <NumField className="tableField" name="subTotalInvestments" label={false} disabled />
      <NumField className="tableField" name="OtherAssets.Investments.treasuriesUS" label={false} />
      <NumField className="tableField" name="OtherAssets.Investments.agenciesUS" label={false} />
      <NumField className="tableField" name="subtotalLoanFund" label={false} disabled />
      <NumField className="tableField" name="investmentSum" label={false} disabled />
      <h6 className="text-style text-center px-3">---</h6>
      <NumField className="tableField" name="OtherAssets.CapitalAssetsNet.Assets.buildings" label={false} />
      <NumField className="tableField" name="OtherAssets.CapitalAssetsNet.Assets.leaseholdImprovements" label={false} />
      <NumField className="tableField" name="OtherAssets.CapitalAssetsNet.Assets.furnitureFixturesEquipment" label={false} />
      <NumField className="tableField" name="OtherAssets.CapitalAssetsNet.Assets.lessAccumulatedDepreciation" label={false} />
      <NumField className="tableField" name="netAssets" label={false} disabled />
      <NumField className="tableField" name="OtherAssets.CapitalAssetsNet.Assets.landA" label={false} />
      <NumField className="tableField" name="OtherAssets.CapitalAssetsNet.Assets.landB" label={false} />
      <NumField className="tableField" name="OtherAssets.CapitalAssetsNet.Assets.constructionInProgress" label={false} />
      <NumField className="tableField" name="subTotalCapitalAssetNet" label={false} disabled />
      <h6 className="text-style text-center px-3">---</h6>
      <NumField className="tableField" name="OtherAssets.CapitalAssetsNet.LiabilityBAsset.buildings" label={false} />
      <NumField className="tableField" name="OtherAssets.CapitalAssetsNet.LiabilityBAsset.leaseholdImprovements" label={false} />
      <NumField className="tableField" name="OtherAssets.CapitalAssetsNet.LiabilityBAsset.furnitureFixturesEquipment" label={false} />
      <NumField className="tableField" name="OtherAssets.CapitalAssetsNet.LiabilityBAsset.vehicles" label={false} />
      <NumField className="tableField" name="OtherAssets.CapitalAssetsNet.LiabilityBAsset.lessAccumulatedDepreciation" label={false} />
      <NumField className="tableField" name="netCompanyBAsset" label={false} disabled />
      <NumField className="tableField" name="OtherAssets.CapitalAssetsNet.LiabilityBAsset.land" label={false} />
      <NumField className="tableField" name="subTotalCompanyBAssets" label={false} disabled />
      <NumField className="tableField" name="capitalAssetsNetSum" label={false} disabled />
      <NumField className="tableField" name="OtherAssets.restrictedCash" label={false} />
      <NumField className="tableField" name="totalOtherAssets" label={false} disabled />
      <NumField className="tableField" name="OtherAssets.deferredPensions" label={false} />
      <NumField className="tableField" name="OtherAssets.deferredOPEB" label={false} />
      <NumField className="tableField" name="totalAssetsDeferred" label={false} disabled />
      <h6 className="text-style text-center px-3">---</h6>
      <NumField className="tableField" name="Liabilities.accountPayableAccrued" label={false} />
      <NumField className="tableField" name="Liabilities.dueToFund" label={false} />
      <NumField className="tableField" name="Liabilities.dueToOther" label={false} />
      <h6 className="text-style text-center px-3">---</h6>
      <NumField className="tableField" name="Liabilities.LongTermWithin.accruedVacation" label={false} />
      <NumField className="tableField" name="Liabilities.LongTermWithin.workersCompensation" label={false} />
      <NumField className="tableField" name="Liabilities.LongTermWithin.accruedRetirement" label={false} />
      <NumField className="tableField" name="Liabilities.LongTermWithin.accruedLease" label={false} />
      <NumField className="tableField" name="Liabilities.LongTermWithin.capitalLease" label={false} />
      <NumField className="tableField" name="Liabilities.LongTermWithin.notesPayableA" label={false} />
      <NumField className="tableField" name="Liabilities.LongTermWithin.netPensionLiability" label={false} />
      <NumField className="tableField" name="Liabilities.LongTermWithin.netOPEDLiability" label={false} />
      <NumField className="tableField" name="Liabilities.LongTermWithin.lineOfCreditA" label={false} />
      <NumField className="tableField" name="Liabilities.LongTermWithin.lineOfCreditB" label={false} />
      <NumField className="tableField" name="Liabilities.LongTermWithin.debtService" label={false} />
      <NumField className="tableField" name="dueWithinOneYearSum" label={false} disabled />
      <h6 className="text-style text-center px-3">---</h6>
      <NumField className="tableField" name="Liabilities.LongTermAfter.accruedVacation" label={false} />
      <NumField className="tableField" name="Liabilities.LongTermAfter.workersCompensation" label={false} />
      <NumField className="tableField" name="Liabilities.LongTermAfter.accruedRetirement" label={false} />
      <NumField className="tableField" name="Liabilities.LongTermAfter.accruedLease" label={false} />
      <NumField className="tableField" name="Liabilities.LongTermAfter.capitalLease" label={false} />
      <NumField className="tableField" name="Liabilities.LongTermAfter.notesPayableA" label={false} />
      <NumField className="tableField" name="Liabilities.LongTermAfter.netPensionLiability" label={false} />
      <NumField className="tableField" name="Liabilities.LongTermAfter.netOPEDLiability" label={false} />
      <NumField className="tableField" name="Liabilities.LongTermAfter.lineOfCreditA" label={false} />
      <NumField className="tableField" name="Liabilities.LongTermAfter.lineOfCreditB" label={false} />
      <NumField className="tableField" name="Liabilities.LongTermAfter.debtService" label={false} />
      <NumField className="tableField" name="dueAfterOneYearSum" label={false} disabled />

      <NumField className="tableField" name="totalLiabilities" label={false} disabled />
      <NumField className="tableField" name="Liabilities.deferredInflowsPension" label={false} />
      <NumField className="tableField" name="Liabilities.deferredInflowsOPED" label={false} />
      <NumField className="tableField" name="totalLiabilitiesDeferredInflows" label={false} disabled />
      <h6 className="text-style text-center px-3">---</h6>
      <NumField className="tableField" name="NetPosition.netOfRelatedDebt" label={false} />
      <NumField className="tableField" name="NetPosition.restrictedFederal" label={false} />
      <NumField className="tableField" name="NetPosition.unrestricted" label={false} />
      <NumField className="tableField" name="totalNetPosition" label={false} disabled />
      <NumField className="tableField" name="totalLiabilitiesInflowsNetPosition" label={false} disabled />
      <SubmitField value="Submit" />
      {/* {(auditedBalance.green === true) ? ( */}
      {/*  <SubmitField value="Submit" /> */}
      {/* ) : (<div />)} */}
    </AutoForm>
  </div>
);

const CashAndCashEquivalents = PropTypes.shape({
  pettyCash: PropTypes.number,
  cash: PropTypes.number,
  cashInBank: PropTypes.number,
});

const Investments = PropTypes.shape({
  mutualFunds: PropTypes.number,
  commingledFunds: PropTypes.number,
  hedgeFunds: PropTypes.number,
  privateEquity: PropTypes.number,
  commonTrustFund: PropTypes.number,
  commonPreferredStock: PropTypes.number,
  privateDebt: PropTypes.number,
  other: PropTypes.number,
  treasuriesUS: PropTypes.number,
  agenciesUS: PropTypes.number,
});

const Assets = PropTypes.shape({
  buildings: PropTypes.number,
  leaseholdImprovements: PropTypes.number,
  furnitureFixturesEquipment: PropTypes.number,
  lessAccumulatedDepreciation: PropTypes.number,
  landA: PropTypes.number,
  landB: PropTypes.number,
  constructionInProgress: PropTypes.number,
});

const LiabilityBAsset = PropTypes.shape({
  buildings: PropTypes.number,
  leaseholdImprovements: PropTypes.number,
  furnitureFixturesEquipment: PropTypes.number,
  vehicles: PropTypes.number,
  lessAccumulatedDepreciation: PropTypes.number,
  land: PropTypes.number,
});

const CapitalAssetsNet = PropTypes.shape({
  Assets: Assets.isRequired,
  LiabilityBAsset: LiabilityBAsset.isRequired,
});

const OtherAssets = PropTypes.shape({
  accountsReceivable: PropTypes.number,
  dueFromOtherFund: PropTypes.number,
  interestDividendsReceivable: PropTypes.number,
  inventoryPrepaidOtherAssets: PropTypes.number,
  notesWithinOneYear: PropTypes.number,
  notesAfterOneYear: PropTypes.number,
  securityDeposits: PropTypes.number,
  cashHeldInvestmentManager: PropTypes.number,
  Investments: Investments.isRequired,
  CapitalAssetsNet: CapitalAssetsNet.isRequired,
  restrictedCash: PropTypes.number,
  deferredPensions: PropTypes.number,
  deferredOPEB: PropTypes.number,
});

const LongTermLiabilities = PropTypes.shape({
  accruedVacation: PropTypes.number,
  workersCompensation: PropTypes.number,
  accruedRetirement: PropTypes.number,
  accruedLease: PropTypes.number,
  capitalLease: PropTypes.number,
  notesPayableA: PropTypes.number,
  netPensionLiability: PropTypes.number,
  netOPEDLiability: PropTypes.number,
  lineOfCreditA: PropTypes.number,
  lineOfCreditB: PropTypes.number,
  debtService: PropTypes.number,
});

const Liabilities = PropTypes.shape({
  accountPayableAccrued: PropTypes.number,
  dueToFund: PropTypes.number,
  dueToOther: PropTypes.number,
  LongTermWithin: LongTermLiabilities.isRequired,
  LongTermAfter: LongTermLiabilities.isRequired,
  deferredInflowsPension: PropTypes.number,
  deferredInflowsOPED: PropTypes.number,
});

const NetPosition = PropTypes.shape({
  netOfRelatedDebt: PropTypes.number,
  restrictedFederal: PropTypes.number,
  unrestricted: PropTypes.number,
});

const ABS = PropTypes.shape({
  year: PropTypes.number.isRequired,
  owner: PropTypes.string.isRequired,
  green: PropTypes.bool.isRequired,
  CashAndCashEquivalents: CashAndCashEquivalents.isRequired,
  OtherAssets: OtherAssets.isRequired,
  Liabilities: Liabilities.isRequired,
  NetPosition: NetPosition.isRequired,
  totalCashAndCashEquivalents: PropTypes.number.isRequired,
  subTotalInvestments: PropTypes.number.isRequired,
  subtotalLoanFund: PropTypes.number.isRequired,
  investmentSum: PropTypes.number.isRequired,
  netAssets: PropTypes.number.isRequired,
  subTotalCapitalAssetNet: PropTypes.number.isRequired,
  netCompanyBAsset: PropTypes.number.isRequired,
  subTotalCompanyBAssets: PropTypes.number.isRequired,
  capitalAssetsNetSum: PropTypes.number.isRequired,
  totalOtherAssets: PropTypes.number.isRequired,
  totalAssetsDeferred: PropTypes.number.isRequired,
  dueWithinOneYearSum: PropTypes.number.isRequired,
  dueAfterOneYearSum: PropTypes.number.isRequired,
  totalLiabilities: PropTypes.number.isRequired,
  totalLiabilitiesDeferredInflows: PropTypes.number.isRequired,
  totalNetPosition: PropTypes.number.isRequired,
  totalLiabilitiesInflowsNetPosition: PropTypes.number.isRequired,
});
TableAbS.propTypes = {
  auditedBalance: ABS.isRequired,
};

export default TableAbS;
