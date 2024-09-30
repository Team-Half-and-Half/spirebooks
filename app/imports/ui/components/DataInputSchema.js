import SimpleSchema from 'simpl-schema';

class DataInputSchema {
  constructor() {
    const DataInputSchema = new SimpleSchema({
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
      bankCash: {
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
      interestAndDividendsReceivable: {
        type: Number,
        defaultValue: 0,
        min: 0,
      },
      inventory: {
        type: Number,
        defaultValue: 0,
        min: 0,
      },
      notesReceivableDueWithinOneYear: {
        type: Number,
        defaultValue: 0,
        min: 0,
      },
      notesReceivableDueAfterOneYear: {
        type: Number,
        defaultValue: 0,
        min: 0,
      },
      securityDeposits: {
        type: Number,
        defaultValue: 0,
        min: 0,
      },
      cashHeldByInvestmentManager: {
        type: Number,
        defaultValue: 0,
        min: 0,
      },
      // Investments
      mutualFunds: {
        type: Number,
        defaultValue: 0,
        min: 0,
      },
      commingledFunds: {
        type: Number,
        defaultValue: 0,
        min: 0,
      },
      hedgeFunds: {
        type: Number,
        defaultValue: 0,
        min: 0,
      },
      privateEquity: {
        type: Number,
        defaultValue: 0,
        min: 0,
      },
      commonTrustFund: {
        type: Number,
        defaultValue: 0,
        min: 0,
      },
      commonAndPreferredStock: {
        type: Number,
        defaultValue: 0,
        min: 0,
      },
      privateDebt: {
        type: Number,
        defaultValue: 0,
        min: 0,
      },
      other: {
        type: Number,
        defaultValue: 0,
        min: 0,
      },
      treasuries: {
        type: Number,
        defaultValue: 0,
        min: 0,
      },
      agencies: {
        type: Number,
        defaultValue: 0,
        min: 0,
      },
      // Capital Assets (Assets)
      buildings: {
        type: Number,
        defaultValue: 0,
        min: 0,
      },
      leaseholdImprovements: {
        type: Number,
        defaultValue: 0,
        min: 0,
      },
      furnitureFixturesAndEquipment: {
        type: Number,
        defaultValue: 0,
        min: 0,
      },
      lessAccumulatedDepreciation: {
        type: Number,
        defaultValue: 0,
        min: 0,
      },
      // Capital Assets (Land)
      landA: {
        type: Number,
        defaultValue: 0,
        min: 0,
      },
      landB: {
        type: Number,
        defaultValue: 0,
        min: 0,
      },
      constructionInProgress: {
        type: Number,
        defaultValue: 0,
        min: 0,
      },
      condition: {
        type: String,
        allowedValues: ['dawg', 'good', 'fair', 'poor'],
        defaultValue: 'good',
      },
    });
  }
}
export const dataSchema = new DataInputSchema();
