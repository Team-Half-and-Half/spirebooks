import { Meteor } from 'meteor/meteor';
import { AuditedBalance } from '../../api/spreadsheet/AuditedBalanceCollection';
import { BudgetPL } from '../../api/spreadsheet/BudgetPLCollection';
import { AuditedFS } from '../../api/spreadsheet/AuditedFSCollection';
import { DatabaseConfiguration } from '../../api/dbconfig/DatabaseConfigurationCollection';
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

function addDBConfig(data) {
  console.log(`  Adding Database Configuration Settings: ${data.databaseFileDateFormat}`);
  DatabaseConfiguration.collection.insert(data);
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

// Initialize the DatabaseConfigurationCollection if empty.
if (DatabaseConfiguration.collection.find().count() === 0) {
  if (Meteor.settings.databaseConfigurationSettings) {
    console.log('Inserting DatabaseConfiguration data from databaseConfigurationSettings.');
    Meteor.settings.databaseConfigurationSettings.forEach(data => addDBConfig(data));
  }
}
