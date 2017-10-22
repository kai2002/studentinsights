import React from 'react';
import DistrictProgress from './district/DistrictProgress';
import {miniRouter} from './util/miniRouter';


// [{key, route}]
const miniRoutes = [
  { key: 'districts_index', route: { path: '/districts', exact: true, strict: true } },
  { key: 'district_progress', route: { path: '/districts/:districtKey/progress', exact: true, strict: true } }
];


// This is the top-level component, handling routing, authenticaiton,
// analytics.
class App extends React.Component {
  render() {
    const branch = miniRouter(window.location, miniRoutes);
    const routeKey = (branch) ? branch.routeKey : null;
    return this.renderRoute(routeKey, branch);
  }

  renderRoute(routeKey, branch) {
    if (routeKey === 'districts_index') return this.renderDistricts(branch);
    if (routeKey === 'district_progress') return this.renderProgress(branch);
    return this.renderNotFound();
  }

  renderNotFound() {
    return null;
  }

  // TODO(kr) example of still using full page reloads everywhere.
  renderDistricts() {
    return <div><a href="/districts/somerville/progress">Somerville!</a></div>;
  }

  renderProgress(branch) {
    const {routeParams} = branch;
    return <DistrictProgress districtKey={routeParams.districtKey} />;
  }
}

export default App;