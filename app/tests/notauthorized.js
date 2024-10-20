import { Selector } from 'testcafe';

class NotAuthorizedPage {
  constructor() {
    this.pageId = '#not-authorized';
    this.pageSelector = Selector(this.pageId);
  }

  /** Checks that this page is currently displayed. */
  async isDisplayed(testController) {
    await testController.expect(this.pageSelector.exists).ok();
  }
}

export const notauthorizedPage = new NotAuthorizedPage();
