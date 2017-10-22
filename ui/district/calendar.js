import React from 'react';
import calendarHeatmap from './calendarHeatmap.js';


class Calendar extends React.Component {
  componentDidMount() {
    this.update();
  }

  componentDidReceiveProps() {
    this.update();
  }

  update() {
    const {data} = this.props;

    // Set custom color for the calendar heatmap
    const color = '#cd2327';
    // Set overview type (choices are year, month and day)
    const overview = 'year';
    // Handler function
    const print = function (val) {
      console.log(val);
    };
    // Initialize calendar heatmap
    calendarHeatmap.init(this.el, data, color, overview, print);
  }

  render() {
    return (
      <div className="Calendar">
        <div ref={(el) => this.el = el} />
        <script>https://cdnjs.cloudflare.com/ajax/libs/d3/4.10.2/d3.min.js</script>
      </div>
    );
  }
}
Calendar.propTypes = {
  data: React.PropTypes.array.isRequired
};

export default Calendar;