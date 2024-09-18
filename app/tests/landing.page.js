import { Selector, t } from 'testcafe';
import { PAGE_IDS } from '../imports/ui/utilities/PageIDs';

class LandingPage {
  constructor() {
    this.pageId = `#${PAGE_IDS.LANDING}`;
    this.pageSelector = Selector(this.pageId);
    this.buttonSelector = Selector('#get-started-btn');
  }

  /* Asserts that this page is currently displayed. */
  async isDisplayed() {
    // From https://testcafe.io/documentation/402803/recipes/best-practices/create-helpers
    // Note that this file imports t (the test controller) from the testcafe module. You don’t need to pass t to helper functions because TestCafe can resolve the current test context and provide the correct test controller instance.
    await t.expect(this.pageSelector.exists).ok();
  }

  async assertButtonWorks() {
    await t.click(this.buttonSelector);
    // Verify button redirects to signup page
    await t.expect(t.eval(() => document.location.href)).contains('/signup', 'Navigation to sign-up page failed');
  }
}

export const landingPage = new LandingPage();
