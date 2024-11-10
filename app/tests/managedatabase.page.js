import { t } from 'testcafe';
import { COMPONENT_IDS } from '../imports/ui/utilities/ComponentIDs';

class ManageDatabasePage {

  async dumpDatabase() {
    await t.click(`#${COMPONENT_IDS.MANAGE_DATABASE_DUMP}`);
  }
}

export const manageDatabasePage = new ManageDatabasePage();
