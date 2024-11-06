import { t } from 'testcafe';
import { COMPONENT_IDS } from '../imports/ui/utilities/ComponentIDs';

class ProjectionGraph {

  async selectChart() {
    await t.click(`#${COMPONENT_IDS.PROJECTION_GRAPH_SELECT_CHART}`);
    await t.click(`#${COMPONENT_IDS.PROJECTION_GRAPH_DROPDOWN_ITEM}`);
  }
}

export const projectionGraph = new ProjectionGraph();
