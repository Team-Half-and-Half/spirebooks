import { Meteor } from 'meteor/meteor';
import { check } from 'meteor/check';
import { Roles } from 'meteor/alanning:roles';
import BaseCollection from '../base/BaseCollection';
import { ROLE } from '../role/Role';
import { BudgetPLSchema } from '../schemas/BudgetPLSchema';
import { calcFringeBenefit, calcFringeBenefitManagement, calcSalary, sumExpenses, sumFringe, sumFringeBenefits, sumSurplus, sumTotalRevenue } from './BudgetPlFunctions';

const percentages = [
  {
    year: 2,
    percentages: {
      pension_accumulation: 15.00,
      retiree_health_insurance: 7.96,
      other_post_employment_benefits: 0.00,
      employees_health_fund: 7.02,
      social_security: 6.20,
      medicare: 1.45,
      workers_compensation: 1.22,
      unemployment_compensation: 0.91,
      pension_administration: 0.00,
      composite_rate: 39.76,
    },
  },
  {
    year: 3,
    percentages: {
      pension_accumulation: 15.50,
      retiree_health_insurance: 10.35,
      other_post_employment_benefits: 0.00,
      employees_health_fund: 6.84,
      social_security: 6.20,
      medicare: 1.45,
      workers_compensation: 0.88,
      unemployment_compensation: 0.31,
      pension_administration: 0.01,
      composite_rate: 41.54,
    },
  },
  {
    year: 4,
    percentages: {
      pension_accumulation: 16.00,
      retiree_health_insurance: 10.12,
      other_post_employment_benefits: 0.00,
      employees_health_fund: 6.81,
      social_security: 6.20,
      medicare: 1.45,
      workers_compensation: 1.16,
      unemployment_compensation: 0.25,
      pension_administration: 0.00,
      composite_rate: 41.99,
    },
  },
  {
    year: 5,
    percentages: {
      pension_accumulation: 16.50,
      retiree_health_insurance: 10.12,
      other_post_employment_benefits: 0.00,
      employees_health_fund: 6.81,
      social_security: 6.20,
      medicare: 1.45,
      workers_compensation: 1.16,
      unemployment_compensation: 0.25,
      pension_administration: 0.00,
      composite_rate: 42.49,
    },
  },
  {
    year: 6,
    percentages: {
      pension_accumulation: 17.00,
      retiree_health_insurance: 8.07,
      other_post_employment_benefits: 7.78,
      employees_health_fund: 7.62,
      social_security: 6.20,
      medicare: 1.45,
      workers_compensation: 1.27,
      unemployment_compensation: 0.15,
      pension_administration: 0.00,
      composite_rate: 49.54,
    },
  },
  {
    year: 7,
    percentages: {
      pension_accumulation: 17.00,
      retiree_health_insurance: 9.39,
      other_post_employment_benefits: 12.69,
      employees_health_fund: 7.60,
      social_security: 6.20,
      medicare: 1.45,
      workers_compensation: 1.06,
      unemployment_compensation: 0.09,
      pension_administration: 0.01,
      composite_rate: 55.48,
    },
  },
  {
    year: 8,
    percentages: {
      pension_accumulation: 18.00,
      retiree_health_insurance: 10.14,
      other_post_employment_benefits: 14.33,
      employees_health_fund: 7.69,
      social_security: 6.20,
      medicare: 1.45,
      workers_compensation: 1.24,
      unemployment_compensation: 0.02,
      pension_administration: 0.01,
      composite_rate: 59.08,
    },
  },
  {
    year: 9,
    percentages: {
      pension_accumulation: 19.00,
      retiree_health_insurance: 10.14,
      other_post_employment_benefits: 14.33,
      employees_health_fund: 7.69,
      social_security: 6.20,
      medicare: 1.45,
      workers_compensation: 1.24,
      unemployment_compensation: 0.02,
      pension_administration: 0.01,
      composite_rate: 60.08,
    },
  },
  {
    year: 10,
    percentages: {
      pension_accumulation: 22.00,
      retiree_health_insurance: 10.14,
      other_post_employment_benefits: 14.33,
      employees_health_fund: 7.69,
      social_security: 6.20,
      medicare: 1.45,
      workers_compensation: 1.24,
      unemployment_compensation: 0.02,
      pension_administration: 0.01,
      composite_rate: 63.08,
    },
  },
];
export const budgetPLPublications = {
  budgetPL: 'budgetPL',
  budgetPLAdmin: 'budgetPLAdmin',
};
class BudgetPLCollection extends BaseCollection {
  constructor() {
    super('BudgetPL', BudgetPLSchema);
  }

  calculateValues({ year, Revenue, Expenses, ExpenditurePerAudited }) {
    const yearPercentages = percentages.find((entry) => entry.year === year);
    const summedRevenue = sumTotalRevenue(Revenue);
    const summedExpenses = sumExpenses(summedRevenue, Expenses);
    const summedSurplus = sumSurplus(summedRevenue, summedExpenses);

    // todo: Rename FringeAdminManagement to PersonnelFringeManagement
    const personnelFringeManagement = Expenses.FringeAdminManagement;
    const personnelFringeStaff = Expenses.PersonnelFringeStaff;
    const personnelFringeAdmin = Expenses.PersonnelFringeAdmin;

    const fringeBenefitsManagement = calcFringeBenefitManagement(year, yearPercentages, personnelFringeManagement.FringeBenefits, personnelFringeManagement.salary);

    const summedFringeBenefitManagement = sumFringeBenefits(fringeBenefitsManagement);

    const { summedFringeManagement, summedFringeStaff, summedFringeAdmin } = sumFringe(summedFringeBenefitManagement, personnelFringeManagement.salary, ExpenditurePerAudited.management);

    const fringeBenefitsStaff = calcFringeBenefit(year, yearPercentages, personnelFringeStaff.FringeBenefits, summedFringeStaff);
    const fringeBenefitsAdmin = calcFringeBenefit(year, yearPercentages, personnelFringeAdmin.FringeBenefits, summedFringeAdmin);

    const summedFringeBenefitStaff = sumFringeBenefits(fringeBenefitsStaff);
    const summedFringeBenefitAdmin = sumFringeBenefits(fringeBenefitsAdmin);

    const salaryStaff = calcSalary(yearPercentages.composite_rate, summedFringeStaff);
    const salaryAdmin = calcSalary(yearPercentages.composite_rate, summedFringeAdmin);

    const updatedFringeManagement = {
      FringeBenefits: {
        ...fringeBenefitsManagement,
        fringeBenefitsSum: summedFringeBenefitManagement,
      },
      personnelFringeSum: summedFringeManagement,
    };
    const updatedFringeStaff = {
      salary: salaryStaff,
      FringeBenefits: {
        ...fringeBenefitsStaff,
        fringeBenefitsSum: summedFringeBenefitStaff,
      },
      personnelFringeSum: summedFringeStaff,
    };
    const updatedFringeAdmin = {
      salary: salaryAdmin,
      FringeBenefits: {
        ...fringeBenefitsAdmin,
        fringeBenefitsSum: summedFringeBenefitAdmin,
      },
      personnelFringeSum: summedFringeAdmin,
    };
    const updatedRevenue = {
      ...Revenue,
      totalRevenue: summedRevenue,
    };
    const updatedExpenses = {
      ...Expenses,
      PersonnelFringeAdmin: updatedFringeAdmin,
      PersonnelFringeAdminStaff: updatedFringeStaff,
      FringeAdminManagement: updatedFringeManagement,
      totalExpenses: summedExpenses,
    };
    return { updatedRevenue, updatedExpenses, summedSurplus, ExpenditurePerAudited };
  }

  /**
   * Defines a new BudgetPL item.
   * @param year Actual year value of column.
   * @param owner The email tied to the owner of the document.
   * @param green Boolean indicating if column is a green input year.
   * @param Revenue Sub document for revenue values.
   * @param Expenses Sub document for other expenses values.
   * @param surplus Value for surplus(deficit).
   * @param ExpenditurePerAudited Sub document for expenditure line items per audited financials values.
   * @return {String} the docID of the new document.
   */
  define({ year, owner, green, Revenue, Expenses, surplus, ExpenditurePerAudited }) {
    try {
      if (!year || !owner) {
        throw new Meteor.Error('invalid-arguments', 'Missing crucial fields for defining BudgetPLCollection.');
      }
      return this._collection.insert({
        year, owner, green,
        Revenue, Expenses, surplus, ExpenditurePerAudited,
      });
    } catch (e) {
      throw new Meteor.Error('BudgetPLCollection.define', e.message || 'Define BudgetPLCollection failed.');
    }
  }

  /**
   * Updates the given document.
   * @param docID the id of the document to update.
   * @param Revenue Sub document for revenue values.
   * @param Expenses Sub document for other expenses values.
   * @param surplus Value for surplus(deficit).
   * @param ExpenditurePerAudited Sub document for expenditure line items per audited financials values.
   * @return {String} the docID of the new document.
   */
  update(docID, { year, Revenue, Expenses, ExpenditurePerAudited }) {
    const beforeCalc = { year, Revenue, Expenses, ExpenditurePerAudited };
    try {
      if (!docID) {
        throw new Meteor.Error('invalid-argument', 'Missing crucial field for updating BudgetPLCollection');
      }
      const updateData = this.calculateValues(beforeCalc);

      this._collection.update(docID, { $set: updateData });
    } catch (e) {
      throw new Meteor.Error('BudgetPLCollection.update', e.message || 'Update BudgetPLCollection failed.');
    }
  }

  /**
   * A stricter form of remove that throws an error if the document or docID could not be found in this collection.
   * @param { String | Object } name A document or docID in this collection.
   * @returns true
   */
  removeIt(name) {
    try {
      const doc = this.findDoc(name);
      check(doc, Object);
      this._collection.remove(doc._id);
      return true;
    } catch (e) {
      throw new Meteor.Error('BudgetPLCollection.removeIt', e.message || 'removeIt BudgetPLCollection failed.');
    }
  }

  /**
   * Default publication method for entities.
   * It publishes the entire collection for admin and just the BudgetPL associated to an owner.
   */
  publish() {
    if (Meteor.isServer) {
      // get the BudgetPLCollection instance.
      const instance = this;
      /** This subscription publishes only the documents associated with the logged in user */
      Meteor.publish(budgetPLPublications.budgetPL, function publish() {
        if (this.userId) {
          const username = Meteor.users.findOne(this.userId).username;
          return instance._collection.find({ owner: username });
        }
        return this.ready();
      });

      /** This subscription publishes all documents regardless of user, but only if the logged in user is the Admin. */
      Meteor.publish(budgetPLPublications.budgetPLAdmin, function publish() {
        if (this.userId && Roles.userIsInRole(this.userId, ROLE.ADMIN)) {
          return instance._collection.find();
        }
        return this.ready();
      });
    }
  }

  /**
   * Subscription method for BudgetPL owned by the current user.
   */
  subscribeBudgetPL() {
    if (Meteor.isClient) {
      return Meteor.subscribe(budgetPLPublications.budgetPL);
    }
    return null;
  }

  /**
   * Subscription method for admin users.
   * It subscribes to the entire collection.
   */
  subscribeBudgetPLAdmin() {
    if (Meteor.isClient) {
      return Meteor.subscribe(budgetPLPublications.budgetPLAdmin);
    }
    return null;
  }

  /**
   * Default implementation of assertValidRoleForMethod. Asserts that userId is logged in as an Admin or User.
   * This is used in the define, update, and removeIt Meteor methods associated with each class.
   * @param userId The userId of the logged in user. Can be null or undefined
   * @throws { Meteor.Error } If there is no logged in user, or the user is not an Admin or User.
   */
  assertValidRoleForMethod(userId) {
    this.assertRole(userId, [ROLE.ADMIN, ROLE.USER]);
  }

  /**
   * Returns an object representing the definition of docID in a format appropriate to the restoreOne or define function.
   * @param Revenue Sub document for revenue values.
   * @param Expenses Sub document for other expenses values.
   * @param surplus Value for surplus(deficit).
   * @param ExpenditurePerAudited Sub document for expenditure line items per audited financials values.
   * @param docID
   * @return {{
   *   year: number, owner: string, green: boolean,
   *   Revenue: Object, Expenses: Object, surplus: number, ExpenditurePerAudited: Object,
   * }}
   */
  dumpOne(docID) {
    const {
      year, owner, green,
      Revenue, Expenses, surplus, ExpenditurePerAudited,
    } = this.findDoc(docID);
    return { year, owner, green, Revenue, Expenses, surplus, ExpenditurePerAudited };
  }
}

/**
 * Provides the singleton instance of this class to all other entities.
 */
export const BudgetPL = new BudgetPLCollection();
