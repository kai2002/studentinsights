import React from 'react';
import JsonLoader from '../util/JsonLoader';


class DistrictProgress extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const {districtKey} = this.props;
    const path = `/districts/${districtKey}/progress.json`;
    return (
      <JsonLoader path={path}>
        {this.renderStudents}
      </JsonLoader>
    );
  }

  renderStudents(json) {
    debugger
    const {students} = json;
    return <div>{JSON.stringify(students, null, 2)}</div>;
  }
}
DistrictProgress.propTypes = {
  districtKey: React.PropTypes.string.isRequired
};

export default DistrictProgress;