import { Selector } from 'testcafe';

class NotFoundPage {
  constructor() {
    this.pageId = '#not-found';
    this.pageSelector = Selector(this.pageId);
  }

  /** Checks that this page is currently displayed. */
  async isDisplayed(testController) {
    await testController.expect(this.pageSelector.exists).ok();
  }
}

export const notfoundPage = new NotFoundPage();
