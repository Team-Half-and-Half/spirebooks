import { signOutPage } from './simple.page';
import { landingPage } from './landing.page';
import { signInPage } from './signin.page';
import { signUpPage } from './signup.page';
import { navBar } from './navbar.component';
import { dashboardPage } from './dashboard.page';
import { importPage } from './import.page';

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
