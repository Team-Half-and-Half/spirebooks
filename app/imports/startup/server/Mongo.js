import { Meteor } from 'meteor/meteor';
import { Stuffs } from '../../api/stuff/StuffCollection';
import { AuditedBalance } from '../../api/spreadsheet/AuditedBalanceCollection';
import { BudgetPL } from '../../api/spreadsheet/BudgetPLCollection';
import { AuditedFS } from '../../api/spreadsheet/AudtiedFSCollection';
/* eslint-disable no-console */

// Initialize the database with a default data document.
function addData(data) {
  console.log(`  Adding: ${data.name} (${data.owner})`);
  Stuffs.define(data);
}

// Initialize the StuffsCollection if empty.
if (Stuffs.count() === 0) {
  if (Meteor.settings.defaultData) {
    console.log('Creating default data.');
    Meteor.settings.defaultData.forEach(data => addData(data));
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
function addAFS({ owner, ActualYear, ActualYearGreen }) {
  console.log(`Defining AuditedFS Sheet ${owner}`);
  AuditedFS.collection.insert({ owner, ActualYear, ActualYearGreen });
}

if (AuditedFS.collection.find().count() === 0) {
  if (Meteor.settings.defaultAFS) {
    console.log('Creating the default AFS');
    Meteor.settings.defaultAFS.forEach(afs => addAFS(afs));
  } else {
    console.log('Cannot initialize the AFS!  Please invoke meteor with a settings file.');
  }
}
