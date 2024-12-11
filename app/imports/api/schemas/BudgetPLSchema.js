import SimpleSchema from 'simpl-schema';

const ExpenditurePerAudited = new SimpleSchema({
  management: {
    type: Number,
    optional: true,
    autoValue() {
      return Number(parseFloat(this.value || 0).toFixed(2));
    },
  },
  supportServices: {
    type: Number,
    optional: true,
    autoValue() {
      return Number(parseFloat(this.value || 0).toFixed(2));
    },
  },
  beneficiaryAdvocacy: {
    type: Number,
    optional: true,
    autoValue() {
      return Number(parseFloat(this.value || 0).toFixed(2));
    },
  },
});
const FringeBenefits = new SimpleSchema({
  pensionAccumulation: {
    type: Number,
    optional: true,
    autoValue() {
      return Number(parseFloat(this.value || 0).toFixed(2));
    },
  },
  retireeHealthInsurance: {
    type: Number,
    optional: true,
    autoValue() {
      return Number(parseFloat(this.value || 0).toFixed(2));
    },
  },
  otherBenefits: {
    type: Number,
    optional: true,
    autoValue() {
      return Number(parseFloat(this.value || 0).toFixed(2));
    },
  },
  healthFund: {
    type: Number,
    optional: true,
    autoValue() {
      return Number(parseFloat(this.value || 0).toFixed(2));
    },
  },
  socialSecurity: {
    type: Number,
    optional: true,
    autoValue() {
      return Number(parseFloat(this.value || 0).toFixed(2));
    },
  },
  medicare: {
    type: Number,
    optional: true,
    autoValue() {
      return Number(parseFloat(this.value || 0).toFixed(2));
    },
  },
  workersCompensation: {
    type: Number,
    optional: true,
    autoValue() {
      return Number(parseFloat(this.value || 0).toFixed(2));
    },
  },
  unemploymentCompensation: {
    type: Number,
    optional: true,
    autoValue() {
      return Number(parseFloat(this.value || 0).toFixed(2));
    },
  },
  pensionCompensation: {
    type: Number,
    optional: true,
    autoValue() {
      return Number(parseFloat(this.value || 0).toFixed(2));
    },
  },
  fringeBenefitsSum: {
    type: Number,
    optional: true,
    autoValue() {
      return Number(parseFloat(this.value || 0).toFixed(2));
    },
  },
});
const PersonnelFringe = new SimpleSchema({
  salary: {
    type: Number,
    optional: true,
    autoValue() {
      return Number(parseFloat(this.value || 0).toFixed(2));
    },
  },
  FringeBenefits: {
    type: FringeBenefits,
    optional: false,
  },
  personnelFringeSum: {
    type: Number,
    optional: true,
    autoValue() {
      return Number(parseFloat(this.value || 0).toFixed(2));
    },
  },
});
const Expenses = new SimpleSchema({
  personnel: {
    type: Number,
    optional: true,
    autoValue() {
      return Number(parseFloat(this.value || 0).toFixed(2));
    },
  },
  PersonnelFringeAdmin: {
    type: PersonnelFringe,
    optional: false,
  },
  PersonnelFringeAdminStaff: {
    type: PersonnelFringe,
    optional: false,
  },
  FringeAdminManagement: {
    type: PersonnelFringe,
    optional: false,
  },
  personnelFringeSum: {
    type: Number,
    optional: true,
    autoValue() {
      return Number(parseFloat(this.value || 0).toFixed(2));
    },
  },
  program: {
    type: Number,
    optional: true,
    autoValue() {
      return Number(parseFloat(this.value || 0).toFixed(2));
    },
  },
  contracts: {
    type: Number,
    optional: true,
    autoValue() {
      return Number(parseFloat(this.value || 0).toFixed(2));
    },
  },
  grants: {
    type: Number,
    optional: true,
    autoValue() {
      return Number(parseFloat(this.value || 0).toFixed(2));
    },
  },
  travel: {
    type: Number,
    optional: true,
    autoValue() {
      return Number(parseFloat(this.value || 0).toFixed(2));
    },
  },
  equipment: {
    type: Number,
    optional: true,
    autoValue() {
      return Number(parseFloat(this.value || 0).toFixed(2));
    },
  },
  overhead: {
    type: Number,
    optional: true,
    autoValue() {
      return Number(parseFloat(this.value || 0).toFixed(2));
    },
  },
  debutService: {
    type: Number,
    optional: true,
    autoValue() {
      return Number(parseFloat(this.value || 0).toFixed(2));
    },
  },
  other: {
    type: Number,
    optional: true,
    autoValue() {
      return Number(parseFloat(this.value || 0).toFixed(2));
    },
  },
  totalExpenses: {
    type: Number,
    optional: true,
    autoValue() {
      return Number(parseFloat(this.value || 0).toFixed(2));
    },
  },
});
const Revenue = new SimpleSchema({
  investmentPortfolio: {
    type: Number,
    optional: true,
    autoValue() {
      return Number(parseFloat(this.value || 0).toFixed(2));
    },
  },
  revenues: {
    type: Number,
    optional: true,
    autoValue() {
      return Number(parseFloat(this.value || 0).toFixed(2));
    },
  },
  generalFunds: {
    type: Number,
    optional: true,
    autoValue() {
      return Number(parseFloat(this.value || 0).toFixed(2));
    },
  },
  coreBudget: {
    type: Number,
    optional: true,
    autoValue() {
      return Number(parseFloat(this.value || 0).toFixed(2));
    },
  },
  totalRevenue: {
    type: Number,
    optional: true,
    autoValue() {
      return Number(parseFloat(this.value || 0).toFixed(2));
    },
  },
});
// Main schema for the BudgetPLCollection
const BudgetPLSchema = new SimpleSchema({
  year: Number,
  owner: String,
  green: Boolean,
  Revenue: {
    type: Revenue,
    optional: false,
  },
  Expenses: {
    type: Expenses,
    optional: false,
  },
  surplus: {
    type: Number,
    optional: true,
    autoValue() {
      return Number(parseFloat(this.value || 0).toFixed(2));
    },
  },
  ExpenditurePerAudited: {
    type: ExpenditurePerAudited,
    optional: false,
  },
});

export {
  Revenue,
  Expenses,
  ExpenditurePerAudited,
  BudgetPLSchema,
};
