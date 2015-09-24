
let React = require('react'),
    { AppBar, Styles, IconButton } = require('material-ui'),
    ThemeManager = Styles.ThemeManager();

module.exports = React.createClass({

    childContextTypes: {
        muiTheme: React.PropTypes.object
    },

    getChildContext: function () {
        return {
          muiTheme: ThemeManager.getCurrentTheme()
        };
    },

    render: function () {

        return (
            <div>
                <AppBar
                    title="Title"
                    iconClassNameRight="muidocs-icon-navigation-expand-more" />

                <AppBar
                    title="Title"
                    iconElementLeft={<IconButton><NavigationClose /></IconButton>}
                    iconElementRight={<FlatButton label="Save" />} />
            </div>

        );
    }
});
