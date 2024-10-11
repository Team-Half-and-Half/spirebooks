import { Meteor } from 'meteor/meteor';
import { AuditedBalance } from '../../api/spreadsheet/AuditedBalanceCollection';
import { BudgetPL } from '../../api/spreadsheet/BudgetPLCollection';
import { AuditedFS } from '../../api/spreadsheet/AudtiedFSCollection';
/* eslint-disable no-console */

// Initialize the database with a default data document.
function addData(data) {
  console.log(`  Adding year: ${data.year} (${data.owner})`);
  AuditedFS.define(data);
}

// Initialize the StuffsCollection if empty.
if (AuditedFS.count() === 0) {
  if (Meteor.settings.defaultAFS) {
    console.log('Creating default AFS.');
    Meteor.settings.defaultAFS.forEach(data => addData(data));
  }
}
function addABS({ owner, ActualYear, ActualYearGreen }) {
  console.log(`Defining Audited Balance Sheet ${owner}`);
  AuditedBalance.collection.insert({ owner, ActualYear, ActualYearGreen });
}

if (AuditedBalance.collection.find().count() === 0) {
  if (Meteor.settings.defaultABS) {
    console.log('Creating the default ABS');
    Meteor.settings.defaultABS.map(abs => addABS(abs));
  } else {
    console.log('Cannot initialize the ABS!  Please invoke meteor with a settings file.');
  }
}

function addBPL({ owner, ActualYear, ActualYearGreen }) {
  console.log(`Defining BudgetP&L Sheet ${owner}`);
  BudgetPL.collection.insert({ owner, ActualYear, ActualYearGreen });
}

if (BudgetPL.collection.find().count() === 0) {
  if (Meteor.settings.defaultBPL) {
    console.log('Creating the default BPL');
    Meteor.settings.defaultBPL.forEach(bpl => addBPL(bpl));
  } else {
    console.log('Cannot initialize the BPL!  Please invoke meteor with a settings file.');
  }
}
