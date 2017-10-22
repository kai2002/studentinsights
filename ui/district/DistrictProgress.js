import React from 'react';
import _ from 'lodash';
import notes from '/Users/krobinson/Desktop/notes.json';
import FlexibleRoster from '../../app/assets/javascripts/components/flexible_roster.jsx';
import Calendar from './Calendar';

class DistrictProgress extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return this.renderNotesCalendar();
  }

  renderNotes() {
    const columns = [
      { label: 'Grade', key: 'grade' },
      { label: 'recorded_at', key: 'recorded_at' }
    ];
    return (
      <div>
        <FlexibleRoster
          rows={notes}
          columns={columns}
          initialSortIndex={0} />
        <pre>{JSON.stringify(notes, null, 2)}</pre>
      </div>
    );
  }

  renderNotesCalendar() {
    const groupedByDate = _.groupBy(notes, note => moment.utc(note.recorded_at).format('YYYYMMDD'));
    const data = Object.keys(groupedByDate).map(dateText => {
      const notes = groupedByDate[dateText];
      return {
        date: dateText,
        total: notes.length,
        details: notes
      };
    });
    return (
      <div>
        <Calendar data={data} />
        <pre>{JSON.stringify(data, null, 2)}</pre>
      </div>
    );
  }
}
DistrictProgress.propTypes = {
  districtKey: React.PropTypes.string.isRequired
};

export default DistrictProgress;