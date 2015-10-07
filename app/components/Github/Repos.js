/**
 * Created by alex.kozovski on 10/7/15.
 */
var React = require('react');

var Repos = React.createClass({
    propTypes: {
        username: React.PropTypes.string.isRequired,
        repos: React.PropTypes.array.isRequired
    },
    render:function(){
        return(
            <div>
                REPOS <br />
                Username: {this.props.username} <br />
                Repos: {this.props.repos.map(function(repo, index){
                    return <h2 key={index}>{repo}</h2>
                })
            } <br />
            </div>
        )
    }
});

module.exports = Repos;

