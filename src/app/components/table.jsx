let React = require('react');

module.exports = React.createClass({

    getInitialState: function () {

        return {

            fixedHeader: true,
            fixedFooter: true,
            stripedRows: false,
            showRowHover: false,
            selectable: true,
            multiSelectable: false,
            enableSelectAll: false,
            deSelectOnClickaway: true,
            height: '300px'

        };
    },

    render: function () {
        return (
            <div>

            </div>
        )
    }
});
