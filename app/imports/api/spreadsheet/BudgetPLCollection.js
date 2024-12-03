import { Meteor } from 'meteor/meteor';
import { check } from 'meteor/check';
import { Roles } from 'meteor/alanning:roles';
import BaseCollection from '../base/BaseCollection';
import { ROLE } from '../role/Role';
import { BudgetPLSchema } from '../schemas/BudgetPLSchema';
import { calcFringeBenefit, calcFringeBenefitManagement, calcSalary, getYearPercentages, sumExpenses, sumFringe, sumFringeBenefits, sumSurplus, sumTotalRevenue } from './BudgetPLFunctions';

export const budgetPLPublications = {
  budgetPL: 'budgetPL',
  budgetPLAdmin: 'budgetPLAdmin',
};
class BudgetPLCollection extends BaseCollection {
  constructor() {
    super('BudgetPL', BudgetPLSchema);
  }

  calculateValues({ year, Revenue, Expenses, ExpenditurePerAudited }) {
    const yearPercentages = getYearPercentages(year);
    const summedRevenue = sumTotalRevenue(Revenue);
    const summedExpenses = sumExpenses(Expenses);
    const summedSurplus = sumSurplus(summedRevenue, summedExpenses);

    // todo: Rename FringeAdminManagement to PersonnelFringeManagement
    const personnelFringeManagement = Expenses.FringeAdminManagement;
    const personnelFringeStaff = Expenses.PersonnelFringeAdminStaff;
    const personnelFringeAdmin = Expenses.PersonnelFringeAdmin;
    const fringeBenefitsManagement = calcFringeBenefitManagement(year, yearPercentages, personnelFringeManagement.FringeBenefits, personnelFringeManagement.salary);
    const summedFringeBenefitManagement = sumFringeBenefits(fringeBenefitsManagement);
    const summedFringe = sumFringe(summedFringeBenefitManagement, personnelFringeManagement.salary, ExpenditurePerAudited.management, Expenses.personnel);

    const fringeBenefitsStaff = calcFringeBenefit(year, yearPercentages, personnelFringeStaff.FringeBenefits, summedFringe.fringeStaff);
    const fringeBenefitsAdmin = calcFringeBenefit(year, yearPercentages, personnelFringeAdmin.FringeBenefits, summedFringe.fringeAdmin);

    const summedFringeBenefitStaff = sumFringeBenefits(fringeBenefitsStaff);
    const summedFringeBenefitAdmin = sumFringeBenefits(fringeBenefitsAdmin);
    const salaryStaff = calcSalary(yearPercentages.composite_rate, summedFringe.fringeStaff);
    const salaryAdmin = calcSalary(yearPercentages.composite_rate, summedFringe.fringeAdmin);
    const updatedFringeManagement = {
      salary: personnelFringeManagement.salary,
      FringeBenefits: {
        ...fringeBenefitsManagement,
        fringeBenefitsSum: summedFringeBenefitManagement,
      },
      personnelFringeSum: summedFringe.fringeManagement,
    };
    const updatedFringeStaff = {
      salary: salaryStaff,
      FringeBenefits: {
        ...fringeBenefitsStaff,
        fringeBenefitsSum: summedFringeBenefitStaff,
      },
      personnelFringeSum: summedFringe.fringeStaff,
    };
    const updatedFringeAdmin = {
      salary: salaryAdmin,
      FringeBenefits: {
        ...fringeBenefitsAdmin,
        fringeBenefitsSum: summedFringeBenefitAdmin,
      },
      personnelFringeSum: summedFringe.fringeAdmin,
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
    return { updatedRevenue, updatedExpenses, summedSurplus };
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
  update(docID, { year, Revenue, Expenses, surplus, ExpenditurePerAudited }) {
    try {
      if (!docID) {
        throw new Meteor.Error('invalid-argument', 'Missing crucial field for updating BudgetPLCollection');
      }
      const calcData = this.calculateValues({ year, Revenue, Expenses, ExpenditurePerAudited });
      const updateData = { Revenue: calcData.updatedRevenue, Expenses: calcData.updatedExpenses, surplus: calcData.summedSurplus, ExpenditurePerAudited };
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
