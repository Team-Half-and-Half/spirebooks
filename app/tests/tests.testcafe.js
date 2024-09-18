// import { Selector, t } from 'testcafe';
import { /* addStuffPage, listStuffAdminPage, listStuffPage, editStuffPage, /* manageDatabasePage, */ signOutPage } from './simple.page';
import { Selector, t } from 'testcafe';
import { landingPage } from './landing.page';
import { signInPage } from './signin.page';
// import { signUpPage } from './signup.page';
import { navBar } from './navbar.component';
// import { COMPONENT_IDS } from '../imports/ui/utilities/ComponentIDs';
import { dashboardPage } from './dashboard.page';

/* global fixture:false, test:false */

/** Credentials for one of the sample users defined in settings.development.json. */
const adminCredentials = { username: 'accountant@spirebooks.com', password: 'spirebooksadmin' };
const credentials = { username: 'customer@spirebooks.com', password: 'spirebookscustomer' };
const newCredentials = { username: 'newcustomer@spirebooks.com', password: 'spirebooksnewcustomer' };

fixture('meteor-application-template-production localhost test with default db')
  .page('http://localhost:3000');

test('Test that landing page shows up and button works', async () => {
  await landingPage.isDisplayed();
  await landingPage.assertButtonWorks();
});

test('Test that signin and signout work', async () => {
  await navBar.gotoSignInPage();
  await signInPage.signin(credentials.username, credentials.password);
  await navBar.isLoggedIn(credentials.username);
  await navBar.logout();
  await signOutPage.isDisplayed();
});

// test('Test that user pages show up', async () => {
//   await navBar.gotoSignInPage();
//   await signInPage.signin(credentials.username, credentials.password);
//   await navBar.isLoggedIn(credentials.username);
//   await navBar.gotoAddStuffPage();
//   await addStuffPage.isDisplayed();
//   await navBar.gotoListStuffPage();
//   await listStuffPage.isDisplayed();
//   // want to see if we can get to the editStuffPage
//   const editLinks = await Selector(`.${COMPONENT_IDS.LIST_STUFF_EDIT}`);
//   await t.click(editLinks.nth(0));
//   await editStuffPage.isDisplayed();
//   await navBar.logout();
//   await signOutPage.isDisplayed();
// });

// test('Test that sign up and sign out work', async () => {
//   await navBar.gotoSignUpPage();
//   await signUpPage.isDisplayed();
//   await signUpPage.signupUser(newCredentials.username, newCredentials.password);
//   await navBar.isLoggedIn(newCredentials.username);
//   await navBar.logout();
//   await signOutPage.isDisplayed();
// });

test('Test that admin pages show up', async () => {
//   await navBar.gotoSignInPage();
//   await signInPage.signin(adminCredentials.username, adminCredentials.password);
//   await navBar.isLoggedIn(adminCredentials.username);
//   await navBar.gotoAddStuffPage();
//   await addStuffPage.isDisplayed();
//   await navBar.gotoListStuffPage();
//   await listStuffPage.isDisplayed();
//   // want to see if we can get to the editStuffPage
//   const editLinks = await Selector(`.${COMPONENT_IDS.LIST_STUFF_EDIT}`);
//   await t.click(editLinks.nth(0));
//   await editStuffPage.isDisplayed();
//   await navBar.gotoListStuffAdminPage();
//   await listStuffAdminPage.isDisplayed();
//   // await navBar.gotoManageDatabasePage();
//   // await manageDatabasePage.isDisplayed();
// });
  // Admin Login/Logout
  await navBar.gotoSignInPage();
  await signInPage.signin(adminCredentials.username, adminCredentials.password);
  await navBar.isLoggedIn(adminCredentials.username);
  await navBar.logout();
  await signOutPage.isDisplayed();
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
});
