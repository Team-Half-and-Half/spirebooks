import { Mongo } from 'meteor/mongo';
import SimpleSchema from 'simpl-schema';
/**
 * The BudgetPLCollection.
 *
 */
class BudgetPLCollection {
  constructor() {
    // The name of this collection.
    this.name = 'BudgetPLCollection';
    // Define the Mongo collection.
    this.collection = new Mongo.Collection(this.name);
    // Define the structure of each document in the collection.
    const ExpenditurePerAudited = new SimpleSchema({
      management: {
        type: Number,
        optional: true,
      },
      supportServices: {
        type: Number,
        optional: true,
      },
      beneficiaryAdvocacy: {
        type: Number,
        optional: true,
      },
    });
    const FringeBenefits = new SimpleSchema({
      pensionAccumulation: {
        type: Number,
        optional: true,
      },
      retireeHealthInsurance: {
        type: Number,
        optional: true,
      },
      otherBenefits: {
        type: Number,
        optional: true,
      },
      healthFund: {
        type: Number,
        optional: true,
      },
      socialSecurity: {
        type: Number,
        optional: true,
      },
      medicare: {
        type: Number,
        optional: true,
      },
      workersCompensation: {
        type: Number,
        optional: true,
      },
      unemploymentCompensation: {
        type: Number,
        optional: true,
      },
      pensionCompensation: {
        type: Number,
        optional: true,
      },
      fringeBenefitsSum: {
        type: Number,
        optional: true,
      },
    });
    const PersonnelFringe = new SimpleSchema({
      salary: {
        type: Number,
        optional: true,
      },
      FringeBenefits: {
        type: FringeBenefits,
        optional: false,
      },
      personnelFringeSum: {
        type: Number,
        optional: true,
      },
    });
    const Expenses = new SimpleSchema({
      personnel: {
        type: Number,
        optional: true,
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
      },
      program: {
        type: Number,
        optional: true,
      },
      contracts: {
        type: Number,
        optional: true,
      },
      grants: {
        type: Number,
        optional: true,
      },
      travel: {
        type: Number,
        optional: true,
      },
      equipment: {
        type: Number,
        optional: true,
      },
      overhead: {
        type: Number,
        optional: true,
      },
      debutService: {
        type: Number,
        optional: true,
      },
      other: {
        type: Number,
        optional: true,
      },
      totalExpenses: {
        type: Number,
        optional: true,
      },
    });
    const Revenue = new SimpleSchema({
      investmentPortfolio: {
        type: Number,
        optional: true,
      },
      revenues: {
        type: Number,
        optional: true,
      },
      generalFunds: {
        type: Number,
        optional: true,
      },
      coreBudget: {
        type: Number,
        optional: true,
      },
      totalRevenue: {
        type: Number,
        optional: true,
      },
    });
    const ColumnData = new SimpleSchema({
      year: {
        type: Number,
        optional: false,
      },
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
      },
      ExpenditurePerAudited: {
        type: ExpenditurePerAudited,
        optional: false,
      },
    });
    // Main schema for the BudgetPLCollection
    this.schema = new SimpleSchema({
      owner: String,
      ActualYear: {
        type: Array,
        optional: true,
      },
      'ActualYear.$': ColumnData,
      ActualYearGreen: {
        type: Array,
        optional: true,
      },
      'ActualYearGreen.$': ColumnData,
    });
    // Attach the schema to the collection, so all attempts to insert a document are checked against schema.
    this.collection.attachSchema(this.schema);
    // Define names for publications and subscriptions
    this.userPublicationName = `${this.name}.publication.user`;
    this.adminPublicationName = `${this.name}.publication.admin`;
  }
}
export const BudgetPL = new BudgetPLCollection();
