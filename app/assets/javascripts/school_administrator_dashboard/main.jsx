import DashboardPageContainer from  './dashboard_page_container.jsx';
import MixpanelUtils from '../helpers/mixpanel_utils.jsx';

$(function() {
  if ($('body').hasClass('school_administrator_dashboard') && $('body').hasClass('show')) {

    const serializedData = $('#serialized-data').data();
    MixpanelUtils.registerUser(serializedData.currentEducator);
    MixpanelUtils.track('PAGE_VISIT', { page_key: 'SCHOOL_OVERVIEW_DASHBOARD' });
    window.ReactDOM.render(<DashboardPageContainer
      attendanceData={serializedData} />, document.getElementById('main'));
  }
});