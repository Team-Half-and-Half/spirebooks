import { Selector } from 'testcafe';
import { COMPONENT_IDS } from '../imports/ui/utilities/ComponentIDs';

export const footerComponent = {
  balanceSheet: Selector(`#${COMPONENT_IDS.FOOTER_BALANCE_SHEET}`),
  services: Selector(`#${COMPONENT_IDS.FOOTER_SERVICES}`),
  upload: Selector(`#${COMPONENT_IDS.FOOTER_UPLOAD}`),
  verificationTable: Selector(`#${COMPONENT_IDS.FOOTER_VERIFICATION_TABLE}`),
  manageDatabase: Selector(`#${COMPONENT_IDS.FOOTER_MANAGE_DATABASE}`),
  dashboard: Selector(`#${COMPONENT_IDS.FOOTER_DASHBOARD}`),
  compareProjections: Selector(`#${COMPONENT_IDS.FOOTER_COMPARE_PROJECTIONS}`),
  manageProjections: Selector(`#${COMPONENT_IDS.FOOTER_MANAGE_PROJECTIONS}`),
  address: Selector(`#${COMPONENT_IDS.FOOTER_ADDRESS}`),
  phone: Selector(`#${COMPONENT_IDS.FOOTER_PHONE}`),
  email: Selector(`#${COMPONENT_IDS.FOOTER_EMAIL}`),
};
