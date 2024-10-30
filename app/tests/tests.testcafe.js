import { t } from 'testcafe';
import { signOutPage, addMoneyPage } from './simple.page';
import { landingPage } from './landing.page';
import { signInPage } from './signin.page';
import { signUpPage } from './signup.page';
import { navBar } from './navbar.component';
import { dashboardPage } from './dashboard.page';
import { termsandconditionsPage } from './termsandconditions.page';
import { importPage } from './import.page';
import { userSettingsPage } from './usersettings';
import { notfoundPage } from './notfound';
import { notauthorizedPage } from './notauthorized';
import { projectionGraph } from './projectiongraph.component';

/* global fixture:false, test:false */

/** Credentials for one of the sample users defined in settings.development.json. */
const adminCredentials = { username: 'accountant@spirebooks.com', password: 'spirebooksadmin' };
const newCredentials = { username: 'newcustomer@spirebooks.com', password: 'spirebooksnewcustomer' };
// TODO: Figure out if having login information above is technically safe, or if it's a vulnerability.

fixture('meteor-application-template-production localhost test with default db')
  .page('http://localhost:3000');

test('Test that landing page shows up and button works', async () => {
  await landingPage.isDisplayed();
  await landingPage.assertButtonWorks();
});

test('Test that sign up and sign out work', async () => {
  await navBar.gotoSignUpPage();
  await signUpPage.isDisplayed();
  await signUpPage.signupUser(newCredentials.username, newCredentials.password);
  await navBar.isLoggedIn(newCredentials.username);
  await navBar.logout();
  await signOutPage.isDisplayed();
});

test('Test that dashboard page shows up', async () => {
  await navBar.gotoSignInPage();
  await signInPage.signin(adminCredentials.username, adminCredentials.password);
  await navBar.isLoggedIn(adminCredentials.username);
  await navBar.gotoDashboardPage();
  await dashboardPage.isDisplayed();
  await navBar.logout();
  await signOutPage.isDisplayed();
});

test('Test that termsandconditions page shows up', async () => {
  await navBar.gotoSignInPage();
  await signInPage.signin(adminCredentials.username, adminCredentials.password);
  await navBar.isLoggedIn(adminCredentials.username);
  await navBar.gotoTermsAndConditionsPage();
  await termsandconditionsPage.isDisplayed();
  await navBar.logout();
  await signOutPage.isDisplayed();
});

test('Test that import page shows up', async () => {
  await navBar.gotoSignInPage();
  await signInPage.signin(adminCredentials.username, adminCredentials.password);
  await navBar.isLoggedIn(adminCredentials.username);
  await navBar.gotoImportPage();
  await importPage.isDisplayed();
  await navBar.logout();
  await signOutPage.isDisplayed();
});

test('Test that the Balance Sheet shows up', async () => {
  await navBar.gotoSignInPage();
  await signInPage.signin(adminCredentials.username, adminCredentials.password);
  await navBar.isLoggedIn(adminCredentials.username);
  await navBar.gotoAddMoneyPage();
  await addMoneyPage.isDisplayed();
  await navBar.logout();
  await signOutPage.isDisplayed();
});

test('Test that User Settings page works', async () => {
  await navBar.gotoSignInPage();
  await signInPage.signin(adminCredentials.username, adminCredentials.password);
  await navBar.isLoggedIn(adminCredentials.username);
  await navBar.gotoUserSettingsPage();
  await userSettingsPage.isDisplayed();
  await userSettingsPage.usersettings('New Company Name', 'new password');
  await signOutPage.isDisplayed();
});

test('Test that Not Found page works for invalid urls', async () => {
  await t.navigateTo('http://localhost:3000/invalid-url');
  await notfoundPage.isDisplayed(t);
});

// TODO: Update Not Authorized tests in future development once roles are implemented
test('Test that Not Authorized page appears', async () => {
  await t.navigateTo('http://localhost:3000/notauthorized');
  await notauthorizedPage.isDisplayed(t);
});

// TODO: Tests past this point have not been tested due to chrome issue with testcafe

test('Test that Projection Graph Component works', async () => {
  await navBar.gotoSignInPage();
  await signInPage.signin(adminCredentials.username, adminCredentials.password);
  await navBar.isLoggedIn(adminCredentials.username);
  await navBar.gotoCompareProjectionsPage();
  await projectionGraph.selectChart();
});
