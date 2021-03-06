(function() {
  window.shared || (window.shared = {});

  window.shared.ServiceTypeDropdown = React.createClass({

    propTypes: {
      onUserTypingServiceType: React.PropTypes.func.isRequired,
      onUserSelectServiceType: React.PropTypes.func.isRequired,
      value: React.PropTypes.string.isRequired
    },

    componentDidMount: function() {
      const self = this;

      $(this.refs.ServiceTypeDropdown).autocomplete({
        source: '/service_types/',
        delay: 0,
        minLength: 0,
        autoFocus: true,

        select: function(event, ui) {
          self.props.onUserSelectServiceType(ui.item.value);
        },

      });
    },

    toggleOpenMenu: function () {
      $(this.refs.ServiceTypeDropdown).autocomplete('search', '');
    },

    render: function () {
      return (
        <div>
          <div style={{ marginTop: 20 }}>
            Service Type
          </div>
          <input
            style={{
              fontSize: 14,
              padding: 5,
              width: '50%'
            }}
            ref="ServiceTypeDropdown"
            onChange={this.props.onUserTypingServiceType}
            value={this.props.value} />
          <a
            style={{
              position: 'relative',
              right: 20,
              fontSize: 10,
              color: '#4d4d4d'
            }}
            onClick={this.toggleOpenMenu}>
            {String.fromCharCode('0x25BC')}
          </a>
        </div>
      );
    },

  });

})();

