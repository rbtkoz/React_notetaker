/**
 * Created by alex.kozovski on 10/7/15.
 */
var React = require('react');

var UserProfiles = React.createClass({
    propTypes: {
        username: React.PropTypes.string.isRequired,
        bio: React.PropTypes.object.isRequired
    },
    render:function(){
        return(
            <div>
                USER PROFILE <br />
                Username: {this.props.username} <br />
                Bio: {this.props.bio}
            </div>
        )
    }
});

module.exports = UserProfiles;

