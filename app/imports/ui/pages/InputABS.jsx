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
import { AuditedBalance } from '../../api/spreadsheet/AuditedBalanceCollection';
import TableABS from '../components/TableABS';

/* Renders the EditStuff page for editing a single document. */
const bridge = new SimpleSchema2Bridge(AuditedBalance._schema);

const InputABS = () => {
  // Get the documentID from the URL field. See imports/ui/layouts/App.jsx for the route containing :_id.
  // useTracker connects Meteor data to React components. https://guide.meteor.com/react.html#using-withTracker
  const { pastYears, futureYears, ready } = useTracker(() => {
    // Get access to Stuff documents.
    // const AFS = AuditedFS.subscribeAuditedFS();
    // const BPL = BudgetPL.subscribeBudgetPL();
    // const AFSAdmin = AuditedFS.subscribeAuditedFSAdmin();
    // const BPLAdmin = BudgetPL.subscribeBudgetPLAdmin();
    const ABSAdmin = AuditedBalance.subscribeAuditedBalance();
    // Determine if the subscription is ready
    const rdy = ABSAdmin.ready();
    const past = AuditedBalance.find({ green: false }).fetch();
    const future = AuditedBalance.find({ green: true }).fetch();

    // Get the document
    // const document = AuditedBalance.find({ year: 6 });
    return {
      pastYears: past,
      futureYears: future,
      ready: rdy,
    };
  }, []);
  const [activeTab, setActiveTab] = useState('past'); // Track active tab ('past' or 'future')

  return ready ? (
    <Container id={PAGE_IDS.EDIT_STUFF} className="py-5">
      <Card>
        <Card.Header className="gradient-colors text-style">
          <h4 className="text-style ">Audited Balance</h4>
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
                <h5 className="text-style ">Custom Balance Sheet</h5>
                <AutoForm schema={bridge}>
                  <TextField className="rowName" placeholder="Petty cash" name="CashAndCashEquivalents.pettyCash" label={false} disabled />
                  <TextField className="rowName" placeholder="Cash" name="CashAndCashEquivalents.cash" label={false} disabled />
                  <TextField className="rowName" placeholder="Cash in banks/Draw on Line of Credit" name="CashAndCashEquivalents.cashInBank" label={false} disabled />
                  <TextField className="rowName" placeholder="Total Cash and Cash Equivalents" name="totalCashAndCashEquivalents" label={false} disabled />

                  <TextField className="rowName" placeholder="Accounts receivable" name="OtherAssets.accountsReceivable" label={false} disabled />
                  <TextField className="rowName" placeholder="Due from other fund" name="OtherAssets.dueFromOtherFund" label={false} disabled />
                  <TextField className="rowName" placeholder="Interest and dividends receivable" name="OtherAssets.interestDividendsReceivable" label={false} disabled />
                  <TextField className="rowName" placeholder="Inventory, prepaid items and other assets" name="OtherAssets.inventoryPrepaidOtherAssets" label={false} disabled />
                  <TextField className="rowName" placeholder="Notes receivable - due within one year" name="OtherAssets.notesWithinOneYear" label={false} disabled />
                  <TextField className="rowName" placeholder="Notes receivable - due after one year" name="OtherAssets.notesAfterOneYear" label={false} disabled />
                  <TextField className="rowName" placeholder="Security Deposits" name="OtherAssets.securityDeposits" label={false} disabled />
                  <TextField className="rowName" placeholder="Cash held by investment manager" name="OtherAssets.cashHeldInvestmentManager" label={false} disabled />
                  <TextField className="rowName" placeholder="Mutual Funds" name="OtherAssets.Investments.mutualFunds" label={false} disabled />
                  <TextField className="rowName" placeholder="Commingled funds" name="OtherAssets.Investments.commingledFunds" label={false} disabled />
                  <TextField className="rowName" placeholder="Hedge funds" name="OtherAssets.Investments.hedgeFunds" label={false} disabled />
                  <TextField className="rowName" placeholder="Private equity" name="OtherAssets.Investments.privateEquity" label={false} disabled />
                  <TextField className="rowName" placeholder="Common trust fund" name="OtherAssets.Investments.commonTrustFund" label={false} disabled />
                  <TextField className="rowName" placeholder="Common & preferred stock" name="OtherAssets.Investments.commonPreferredStock" label={false} disabled />
                  <TextField className="rowName" placeholder="Private debt" name="OtherAssets.Investments.privateDebt" label={false} disabled />
                  <TextField className="rowName" placeholder="Other" name="OtherAssets.Investments.other" label={false} disabled />
                  <TextField className="rowName" placeholder="Subtotal - Investment" name="subTotalInvestments" label={false} disabled />
                  <TextField className="rowName" placeholder="U.S. treasuries" name="OtherAssets.Investments.treasuriesUS" label={false} disabled />
                  <TextField className="rowName" placeholder="U.S. agencies" name="OtherAssets.Investments.agenciesUS" label={false} disabled />
                  <TextField className="rowName" placeholder="Subtotal - Loan Fund" name="subtotalLoanFund" label={false} disabled />
                  <TextField className="rowName" placeholder="Investments" name="investmentSum" label={false} disabled />

                  {/* Assets */}
                  <TextField className="rowName" placeholder="Buildings (Assets)" name="OtherAssets.CapitalAssetsNet.Assets.buildings" label={false} disabled />
                  <TextField className="rowName" placeholder="Leasehold improvements (Assets)" name="OtherAssets.CapitalAssetsNet.Assets.leaseholdImprovements" label={false} disabled />
                  <TextField className="rowName" placeholder="Furniture, fixtures and equipment (Assets)" name="OtherAssets.CapitalAssetsNet.Assets.furnitureFixturesEquipment" label={false} disabled />
                  <TextField className="rowName" placeholder="Less accumulated depreciation (Assets)" name="OtherAssets.CapitalAssetsNet.Assets.lessAccumulatedDepreciation" label={false} disabled />
                  <TextField className="rowName" placeholder="Net (Assets)" name="netAssets" label={false} disabled />
                  <TextField className="rowName" placeholder="Land A (Assets)" name="OtherAssets.CapitalAssetsNet.Assets.landA" label={false} disabled />
                  <TextField className="rowName" placeholder="Land B (Assets)" name="OtherAssets.CapitalAssetsNet.Assets.landB" label={false} disabled />
                  <TextField className="rowName" placeholder="Construction in Progress (Assets)" name="OtherAssets.CapitalAssetsNet.Assets.constructionInProgress" label={false} disabled />
                  <TextField className="rowName" placeholder="Subtotal - Capital Assets, net" name="subTotalCapitalAssetNet" label={false} disabled />
                  {/* BAssets */}
                  <TextField className="rowName" placeholder="Buildings (B Assets)" name="OtherAssets.CapitalAssetsNet.LiabilityBAsset.buildings" label={false} disabled />
                  <TextField className="rowName" placeholder="Leasehold improvements (B Assets)" name="OtherAssets.CapitalAssetsNet.LiabilityBAsset.leaseholdImprovements" label={false} disabled />
                  <TextField className="rowName" placeholder="Furniture, fixtures and equipment (B Assets)" name="OtherAssets.CapitalAssetsNet.LiabilityBAsset.furnitureFixturesEquipment" label={false} disabled />
                  <TextField className="rowName" placeholder="Vehicles (B Assets)" name="OtherAssets.CapitalAssetsNet.LiabilityBAsset.vehicles" label={false} disabled />
                  <TextField className="rowName" placeholder="Less accumulated depreciation (B Assets)" name="OtherAssets.CapitalAssetsNet.LiabilityBAsset.lessAccumulatedDepreciation" label={false} disabled />
                  <TextField className="rowName" placeholder="Net (B Assets)" name="netCompanyBAsset" label={false} disabled />
                  <TextField className="rowName" placeholder="Land (B Assets)" name="OtherAssets.CapitalAssetsNet.LiabilityBAsset.land" label={false} disabled />
                  <TextField className="rowName" placeholder="Subtotal - Limited Liability Company B's assets, net" name="subTotalCompanyBAssets" label={false} disabled />

                  <TextField className="rowName" placeholder="Capital Assets, net" name="capitalAssetsNetSum" label={false} disabled />
                  <TextField className="rowName" placeholder="Restricted cash" name="OtherAssets.restrictedCash" label={false} disabled />
                  <TextField className="rowName" placeholder="Total Other Assets" name="totalOtherAssets" label={false} disabled />
                  <TextField className="rowName" placeholder="Deferred outflows of resources related to pensions" name="OtherAssets.deferredPensions" label={false} disabled />
                  <TextField className="rowName" placeholder="Deferred outflows of resources related to OPEB" name="OtherAssets.deferredOPEB" label={false} disabled />
                  <TextField className="rowName" placeholder="Total assets and deferred outflows of resources" name="totalAssetsDeferred" label={false} disabled />

                  <TextField className="rowName" placeholder="Accounts payable and accrued liabilities" name="Liabilities.accountPayableAccrued" label={false} disabled />
                  <TextField className="rowName" placeholder="Due to fund" name="Liabilities.dueToFund" label={false} disabled />
                  <TextField className="rowName" placeholder="Due to other fund" name="Liabilities.dueToOther" label={false} disabled />

                  {/* DueWithin */}
                  <TextField className="rowName" placeholder="Accrued vacation (Within)" name="Liabilities.LongTermWithin.accruedVacation" label={false} disabled />
                  <TextField className="rowName" placeholder="Workers' compensation (Within)" name="Liabilities.LongTermWithin.workersCompensation" label={false} disabled />
                  <TextField className="rowName" placeholder="Accrued management retirement plan (Within)" name="Liabilities.LongTermWithin.accruedRetirement" label={false} disabled />
                  <TextField className="rowName" placeholder="Accrued lease guaranty obligation (Within)" name="Liabilities.LongTermWithin.accruedLease" label={false} disabled />
                  <TextField className="rowName" placeholder="Capital lease obligation (Within)" name="Liabilities.LongTermWithin.capitalLease" label={false} disabled />
                  <TextField className="rowName" placeholder="Notes payable - Building A acquisition (Within)" name="Liabilities.LongTermWithin.notesPayableA" label={false} disabled />
                  <TextField className="rowName" placeholder="Net Pension Liability (Within)" name="Liabilities.LongTermWithin.netPensionLiability" label={false} disabled />
                  <TextField className="rowName" placeholder="Net OPEB Liability (Within)" name="Liabilities.LongTermWithin.netOPEDLiability" label={false} disabled />
                  <TextField className="rowName" placeholder="Line of Credit - Building A (Within)" name="Liabilities.LongTermWithin.lineOfCreditA" label={false} disabled />
                  <TextField className="rowName" placeholder="Line of Credit - Building B (Within)" name="Liabilities.LongTermWithin.lineOfCreditB" label={false} disabled />
                  <TextField className="rowName" placeholder="Debt service (Within)" name="Liabilities.LongTermWithin.debtService" label={false} disabled />
                  <TextField className="rowName" placeholder="Long-term liabilities - due wihtin one year (Within)" name="dueWithinOneYearSum" label={false} disabled />

                  {/* Due after */}
                  <TextField className="rowName" placeholder="Accrued vacation (After)" name="Liabilities.LongTermAfter.accruedVacation" label={false} disabled />
                  <TextField className="rowName" placeholder="Workers' compensation (After)" name="Liabilities.LongTermAfter.workersCompensation" label={false} disabled />
                  <TextField className="rowName" placeholder="Accrued management retirement plan (After)" name="Liabilities.LongTermAfter.accruedRetirement" label={false} disabled />
                  <TextField className="rowName" placeholder="Accrued lease guaranty obligation (After)" name="Liabilities.LongTermAfter.accruedLease" label={false} disabled />
                  <TextField className="rowName" placeholder="Capital lease obligation (After)" name="Liabilities.LongTermAfter.capitalLease" label={false} disabled />
                  <TextField className="rowName" placeholder="Notes payable - Building A acquisition (After)" name="Liabilities.LongTermAfter.notesPayableA" label={false} disabled />
                  <TextField className="rowName" placeholder="Net Pension Liability (After)" name="Liabilities.LongTermAfter.netPensionLiability" label={false} disabled />
                  <TextField className="rowName" placeholder="Net OPEB Liability (After)" name="Liabilities.LongTermAfter.netOPEDLiability" label={false} disabled />
                  <TextField className="rowName" placeholder="Line of Credit - Building A (After)" name="Liabilities.LongTermAfter.lineOfCreditA" label={false} disabled />
                  <TextField className="rowName" placeholder="Line of Credit - Building B (After)" name="Liabilities.LongTermAfter.lineOfCreditB" label={false} disabled />
                  <TextField className="rowName" placeholder="Debt service (After)" name="Liabilities.LongTermAfter.debtService" label={false} disabled />
                  <TextField className="rowName" placeholder="Long-term liabilities - due after one year" name="dueAfterOneYearSum" label={false} disabled />

                  <TextField className="rowName" placeholder="Total Liabilities" name="totalLiabilities" label={false} disabled />

                  <TextField className="rowName" placeholder="Deferred inflows of resources related to pensions" name="Liabilities.deferredInflowsPension" label={false} disabled />
                  <TextField className="rowName" placeholder="Deferred inflows of resources related to OPEB" name="Liabilities.deferredInflowsOPED" label={false} disabled />
                  <TextField className="rowName" placeholder="Total liabilities and deferred inflows of resources" name="totalLiabilitiesDeferredInflows" label={false} disabled />

                  <TextField className="rowName" placeholder="Invested in capital assets, net of related debt" name="NetPosition.netOfRelatedDebt" label={false} disabled />
                  <TextField className="rowName" placeholder="Restricted - federal funds" name="NetPosition.restrictedFederal" label={false} disabled />
                  <TextField className="rowName" placeholder="Unrestricted" name="NetPosition.unrestricted" label={false} disabled />
                  <TextField className="rowName" placeholder="Total net position" name="totalNetPosition" label={false} disabled />
                  <TextField className="rowName" placeholder="Total Liabilities/Deferred Inflows/Net Position" name="totalLiabilitiesInflowsNetPosition" label={false} disabled />

                </AutoForm>

              </Col>
              {(activeTab === 'past' ? pastYears : futureYears).map((data) => (
                <Col key={data._id} lg={2} className="px-1">
                  <TableABS auditedBalance={data} />
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
