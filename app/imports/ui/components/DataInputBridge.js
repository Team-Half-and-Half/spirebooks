import SimpleSchema from 'simpl-schema';
import SimpleSchema2Bridge from 'uniforms-bridge-simple-schema-2';

// Data Input Schema/Bridge to be used for InputClientInfo.jsx
const DataInputSchema = new SimpleSchema({
  companyName: {
    type: String,
  },
  year: {
    type: Number,
    defaultValue: 1,
    min: 1,
  },
  // Cash and Cash Equivalents
  pettyCash: {
    type: Number,
    defaultValue: 0,
    min: 0,
  },
  cash: {
    type: Number,
    defaultValue: 0,
    min: 0,
  },
  cashInBank: {
    type: Number,
    defaultValue: 0,
    min: 0,
  },
  cashHeldInvestmentManager: {
    type: Number,
    defaultValue: 0,
    min: 0,
  },
  restrictedCash: {
    type: Number,
    defaultValue: 0,
    min: 0,
  },
  // Other Assets
  accountsReceivable: {
    type: Number,
    defaultValue: 0,
    min: 0,
  },
  dueFromOtherFund: {
    type: Number,
    defaultValue: 0,
    min: 0,
  },
  interestDividendsReceivable: {
    type: Number,
    defaultValue: 0,
    min: 0,
  },
  inventoryPrepaidOtherAssets: {
    type: Number,
    defaultValue: 0,
    min: 0,
  },
  notesWithinOneYear: {
    type: Number,
    defaultValue: 0,
    min: 0,
  },
  notesAfterOneYear: {
    type: Number,
    defaultValue: 0,
    min: 0,
  },
  securityDeposits: {
    type: Number,
    defaultValue: 0,
    min: 0,
  },
  investments: {
    type: Number,
    defaultValue: 0,
    min: 0,
  },
  capitalAssetNet: {
    type: Number,
    defaultValue: 0,
    min: 0,
  },
  deferredOutflows: {
    type: Number,
    defaultValue: 0,
    min: 0,
  },
  // Liabilities
  accountPayableAccrued: {
    type: Number,
    defaultValue: 0,
    min: 0,
  },
  dueToFund: {
    type: Number,
    defaultValue: 0,
    min: 0,
  },
  dueToOtherFund: {
    type: Number,
    defaultValue: 0,
    min: 0,
  },
  longTermWithinOneYear: {
    type: Number,
    defaultValue: 0,
    min: 0,
  },
  longTermAfterOneYear: {
    type: Number,
    defaultValue: 0,
    min: 0,
  },
  deferredInflowsResources: {
    type: Number,
    defaultValue: 0,
    min: 0,
  },
  deferredInflowsOPEB: {
    type: Number,
    defaultValue: 0,
    min: 0,
  },
  // Net Assets
  investedCapitalAssets: {
    type: Number,
    defaultValue: 0,
    min: 0,
  },
  restrictedFederalFunds: {
    type: Number,
    defaultValue: 0,
    min: 0,
  },
  unrestricted: {
    type: Number,
    defaultValue: 0,
    min: 0,
  },

});

export const DataInputBridge = new SimpleSchema2Bridge(DataInputSchema);
