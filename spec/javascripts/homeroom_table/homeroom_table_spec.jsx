import SpecSugar from '../support/spec_sugar.jsx';
import HomeroomTable from '../../../app/assets/javascripts/homeroom_table/homeroom_table.jsx';
import students from '../fixtures/homeroom_students.jsx';

describe('HomeroomTable', function() {
  const ReactDOM = window.ReactDOM;

  const helpers = {
    renderInto: function(el, props) {
      ReactDOM.render(<HomeroomTable {...props} />, el);
    }
  };

  SpecSugar.withTestEl('high-level integration test', function(container) {
    it('renders the table', function() {

      const props = {
        showStar: false,
        showMcas: false,
        rows: students
      };

      const el = container.testEl;
      helpers.renderInto(el, props);

      expect(el.innerHTML).toContain('Minnie Poppins');
      expect($(el).find('tr').length).toEqual(15);
    });
  });

});
