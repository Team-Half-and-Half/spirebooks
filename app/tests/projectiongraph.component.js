import { t } from 'testcafe';
import { COMPONENT_IDS } from '../imports/ui/utilities/ComponentIDs';

class ProjectionGraph {

  async selectChart(chartId) {
    await t.click(`#${COMPONENT_IDS.PROJECTION_GRAPH_SELECT_CHART}`);
    await t.click(`#${COMPONENT_IDS.PROJECTION_GRAPH_DROPDOWN_ITEM}-${chartId}`);
  }
}

export const projectionGraph = new ProjectionGraph();
