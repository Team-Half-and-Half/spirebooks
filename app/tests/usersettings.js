import { Selector, t } from 'testcafe';
import { navBar } from './navbar.component';
import { PAGE_IDS } from '../imports/ui/utilities/PageIDs';
import { COMPONENT_IDS } from '../imports/ui/utilities/ComponentIDs';

class UserSettingsPage {
  constructor() {
    this.pageId = `#${PAGE_IDS.USER_SETTINGS}`;
    this.pageSelector = Selector(this.pageId);
  }

  async isDisplayed() {
    await t.expect(this.pageSelector.exists).ok();
  }

  async usersettings(companyName, password) {
    await this.isDisplayed();
    await t.typeText(`#${COMPONENT_IDS.USER_SETTINGS_COMPANY_NAME}`, companyName);
    await t.typeText(`#${COMPONENT_IDS.USER_SETTINGS_PASSWORD}`, password);
    await t.click(`#${COMPONENT_IDS.USER_SETTINGS_SUBMIT}`);
    await navBar.logout(companyName);
  }
}

export const userSettingsPage = new UserSettingsPage();
