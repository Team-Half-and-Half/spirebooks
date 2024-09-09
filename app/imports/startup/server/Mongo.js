import { Meteor } from 'meteor/meteor';
import { Stuffs } from '../../api/stuff/StuffCollection';
import { AuditedBalance } from '../../api/spreadsheet/AuditedBalanceCollection';
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
    addABS(Meteor.settings.defaultABS);
  } else {
    console.log('Cannot initialize the database!  Please invoke meteor with a settings file.');
  }
}
