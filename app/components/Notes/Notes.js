/**
 * Created by alex.kozovski on 10/7/15.
 */
var React = require('react');

var Notes = React.createClass({
    propTypes: {
        username: React.PropTypes.string.isRequired,
        notes: React.PropTypes.array.isRequired
    },
    render:function(){
        return(
            <div>
                NOTE
                Username: {this.props.username} <br />
                Notes: {this.props.notes.map(function (note, index) {
                return <h2 key={index}>{note}</h2>
                })
            }<br />
            </div>

        )
    }
});

module.exports = Notes;

