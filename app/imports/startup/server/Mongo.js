import { Meteor } from 'meteor/meteor';
import { AuditedBalance } from '../../api/spreadsheet/AuditedBalanceCollection';
import { BudgetPL } from '../../api/spreadsheet/BudgetPLCollection';
import { AuditedFS } from '../../api/spreadsheet/AuditedFSCollection';
/* eslint-disable no-console */

// Initialize the database with a default data document.
function addABSData(data) {
  console.log(`  Adding year: ${data.year} (${data.owner})`);
  AuditedBalance.define(data);
}
function addBPLData(data) {
  console.log(`  Adding year: ${data.year} (${data.owner})`);
  BudgetPL.define(data);
}
function addAFSData(data) {
  console.log(`  Adding year: ${data.year} (${data.owner})`);
  AuditedFS.define(data);
}

if (AuditedBalance.count() === 0) {
  if (Meteor.settings.defaultABS) {
    console.log('Creating default ABS.');
    Meteor.settings.defaultABS.forEach(data => addABSData(data));
  }
}
if (BudgetPL.count() === 0) {
  if (Meteor.settings.defaultBPL) {
    console.log('Creating default BPL.');
    Meteor.settings.defaultBPL.forEach(data => addBPLData(data));
  }
}
if (AuditedFS.count() === 0) {
  if (Meteor.settings.defaultAFS) {
    console.log('Creating default AFS.');
    Meteor.settings.defaultAFS.forEach(data => addAFSData(data));
  }
}
