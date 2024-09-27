// import PropTypes from 'prop-types';
import { Selector, t } from 'testcafe';
import { PAGE_IDS } from '../imports/ui/utilities/PageIDs';
// import { navBar } from './navbar.component';
// import { signInPage } from './signin.page';
// import { importPage } from './import.page';
// import { signoutPage } from './signout.page';

/** Create an instance of a SimplePage when all you need to do is verify that the page was displayed. */
class SimplePage {

  constructor(id) {
    this.pageId = `#${id}`;
    this.pageSelector = Selector(this.pageId);
  }

  /** Asserts that this page is currently displayed. */
  async isDisplayed() {
    // From https://testcafe.io/documentation/402803/recipes/best-practices/create-helpers
    // Note that this file imports t (the test controller) from the testcafe module. You don’t need to pass t to helper functions because TestCafe can resolve the current test context and provide the correct test controller instance.
    await t.expect(this.pageSelector.exists).ok();
  }

}

export const addStuffPage = new SimplePage(PAGE_IDS.ADD_STUFF);
export const editStuffPage = new SimplePage(PAGE_IDS.EDIT_STUFF);
export const listStuffPage = new SimplePage(PAGE_IDS.LIST_STUFF);
export const listStuffAdminPage = new SimplePage(PAGE_IDS.LIST_STUFF_ADMIN);
export const manageDatabasePage = new SimplePage(PAGE_IDS.MANAGE_DATABASE);
export const verificationTablePage = new SimplePage(PAGE_IDS.VERIFICATION_TABLE);
export const signOutPage = new SimplePage(PAGE_IDS.SIGN_OUT);
export const addMoneyPage = new SimplePage(PAGE_IDS.ADD_MONEY);
